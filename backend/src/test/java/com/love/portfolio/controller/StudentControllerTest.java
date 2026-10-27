package com.love.portfolio.controller;

import com.love.portfolio.model.Student;
import com.love.portfolio.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class StudentControllerTest {
    private final StudentRepository repository = mock(StudentRepository.class);
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private final StudentController controller = new StudentController(repository, encoder);

    @Test
    void registrationHashesPassword() {
        Student request = student("manh", "password123");
        when(repository.findByUsername("manh")).thenReturn(Optional.empty());
        when(repository.save(any(Student.class))).thenAnswer(invocation -> invocation.getArgument(0));

        assertEquals(HttpStatus.OK, controller.register(request).getStatusCode());
        assertTrue(encoder.matches("password123", request.getPassword()));
    }

    @Test
    void loginSucceedsWithBcryptPassword() {
        Student stored = student("manh", encoder.encode("password123"));
        when(repository.findByUsername("manh")).thenReturn(Optional.of(stored));
        MockHttpSession session = new MockHttpSession();

        assertEquals(HttpStatus.OK, controller.login(student("manh", "password123"), session).getStatusCode());
        assertEquals("manh", session.getAttribute("studentUsername"));
    }

    @Test
    void loginRejectsNonBcryptLegacyPassword() {
        // Mật khẩu plaintext (legacy) không còn được chấp nhận — phải đăng ký lại qua bcrypt.
        Student stored = student("manh", "legacy-pass");
        when(repository.findByUsername("manh")).thenReturn(Optional.of(stored));
        MockHttpSession session = new MockHttpSession();

        assertEquals(HttpStatus.UNAUTHORIZED, controller.login(student("manh", "legacy-pass"), session).getStatusCode());
    }

    @Test
    void profileRequiresMatchingStudentSession() {
        MockHttpSession session = new MockHttpSession();
        assertEquals(HttpStatus.UNAUTHORIZED, controller.getProfile("manh", session).getStatusCode());
    }

    @Test
    void saveQuizUpdatesCountAvgAndQuizHistories() {
        Student stored = student("manh", encoder.encode("password123"));
        stored.setQuizCount(1);
        stored.setAvgScore(8.0);
        when(repository.findByUsername("manh")).thenReturn(Optional.of(stored));
        when(repository.save(any(Student.class))).thenAnswer(invocation -> invocation.getArgument(0));

        MockHttpSession session = new MockHttpSession();
        session.setAttribute("studentUsername", "manh");

        StudentController.QuizResultRequest req = new StudentController.QuizResultRequest();
        req.setUsername("manh");
        req.setExamTitle("Đề thi Toán 10");
        req.setScore(10.0);

        var res = controller.saveQuiz(req, session);
        assertEquals(HttpStatus.OK, res.getStatusCode());
        Student updated = (Student) res.getBody();
        assertNotNull(updated);
        assertEquals(2, updated.getQuizCount());
        assertEquals(9.0, updated.getAvgScore());
        assertEquals(1, updated.getQuizHistories().size());
        assertEquals("Đề thi Toán 10", updated.getQuizHistories().get(0).getExamTitle());
        assertEquals(10.0, updated.getQuizHistories().get(0).getScore());
    }

    private Student student(String username, String password) {
        Student student = new Student();
        student.setUsername(username);
        student.setPassword(password);
        return student;
    }
}
