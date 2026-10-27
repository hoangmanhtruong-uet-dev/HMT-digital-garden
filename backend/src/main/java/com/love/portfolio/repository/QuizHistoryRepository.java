package com.love.portfolio.repository;

import com.love.portfolio.model.QuizHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuizHistoryRepository extends JpaRepository<QuizHistory, Long> {
}
