# Báo cáo Audit & Code Review: Website Cá Nhân

**Ngày đánh giá:** 2026-10-06
**Dự án:** Website Cá Nhân & Gia sư (Spring Boot 3.2 + Vanilla JS)

Dưới đây là các vấn đề (Technical Debt) được phát hiện trong quá trình Audit mã nguồn, kèm theo giải pháp đề xuất.

---

## 1. Backend & Architecture (Spring Boot)

### 1.1. Lưu trữ dữ liệu dạng JSON String thô (Anti-pattern)
- **Vấn đề:** Trong entity `Student.java`, trường `quizHistory` đang được lưu dưới dạng một chuỗi JSON thô (`@Column(columnDefinition = "TEXT") private String quizHistory;`). Ở file `StudentController.java`, việc thêm lịch sử mới đang được thực hiện bằng cách nối chuỗi String thuần túy: `currentHistory.substring(...) + "," + historyJson + "]"`.
- **Hậu quả:** 
  - Rất dễ sinh lỗi cú pháp JSON.
  - Không thể query DB để lấy ra các quiz cụ thể, không thể join bảng.
- **Đề xuất sửa chữa:** Tạo thêm một Entity `QuizHistory` và thiết lập quan hệ `@OneToMany(mappedBy = "student")` thay vì lưu chuỗi text.

### 1.2. Hardcode Routing Authorization
- **Vấn đề:** Trong `AdminAuthInterceptor.java`, logic kiểm tra quyền đang dùng cách so sánh String cứng: `path.startsWith("/api/exams") || path.startsWith("/api/settings")`.
- **Hậu quả:** Khi dự án lớn lên, thêm nhiều API, file này sẽ phình to ra và rất dễ cấu hình nhầm dẫn đến rò rỉ API.
- **Đề xuất sửa chữa:** Sử dụng `HandlerInterceptor` kết hợp với Custom Annotation (ví dụ `@PublicEndpoint`) đánh dấu trực tiếp trên Controller để dễ quản lý hơn.

### 1.3. Kiểu dữ liệu Entity
- **Vấn đề:** Trong `TutorClass.java`, các trường như `status` (active/pending/done) và `payment` (monthly/per-session/full) đang được khai báo là kiểu `String`.
- **Đề xuất sửa chữa:** Nên dùng kiểu `Enum` kết hợp với `@Enumerated(EnumType.STRING)` để database và Java code đồng nhất, tránh các lỗi type-mismatch (ví dụ gõ nhầm 'avtice' thay vì 'active').

---

## 2. Security (Bảo mật)

### 2.1. WebSocket Không Xác Thực
- **Vấn đề:** File `WebSocketConfig.java` đang cấu hình `setAllowedOriginPatterns("*")` và không có cơ chế bảo vệ nào khi người dùng kết nối qua endpoint `/ws-location`.
- **Hậu quả:** Bất kỳ ai biết endpoint đều có thể dùng tool (như Postman/wscat) kết nối và theo dõi luồng data Location hoặc SPAM tin nhắn lên server, làm sập server (DDoS).
- **Đề xuất sửa chữa:** Implement `ChannelInterceptor` để bắt buộc truyền token/session id khi kết nối WebSocket (trong phần `CONNECT` frame của STOMP).

### 2.2. Xử lý Hash Mật Khẩu Khá Rườm Rà
- **Vấn đề:** Trong `StudentController.java`, hàm login đang có logic hỗ trợ mật khẩu cũ (không bắt đầu bằng `$2`). Mặc dù code có tự động migrate mật khẩu qua Bcrypt, nhưng việc trộn logic Digest MD5/SHA vào chung controller làm giảm tính clean của code.

---

## 3. Frontend (Vanilla JS & CSS)

### 3.1. Code bị "Nén" và Khó Bảo Trì
- **Vấn đề:** File `edu-admin.js` đang gộp toàn bộ logic API, render HTML (dùng `innerHTML` với string template rất dài) và trạng thái ứng dụng trên một dòng hoặc thành các hàm chain liên tục. 
- **Hậu quả:** Code khó debug. Khi cần sửa giao diện HTML của phần tử "Lớp học" sẽ phải tìm trong mớ string lộn xộn.
- **Đề xuất sửa chữa:**
  - Nếu không muốn dùng framework (React/Vue), hãy tách UI thành các `<template>` HTML tĩnh trong file `index.html` hoặc `pages/*.html`. 
  - Trong JS, clone các template đó bằng `document.getElementById('id').content.cloneNode(true)`, thay vì nối chuỗi `innerHTML`. Việc này còn giúp tăng tính an toàn (chống XSS).

### 3.2. Quản lý State Local Storage
- **Vấn đề:** `edu-admin.js` sử dụng `localStorage.setItem("myClasses", JSON.stringify(classes))` làm fallback khi rớt mạng. Cách làm này tốt cho PWA (Offline first), tuy nhiên thiếu cơ chế **Sync** lên lại server khi có mạng.
- **Đề xuất:** Cần viết thêm một hàm `syncOfflineData()` gọi khi `window.addEventListener('online', ...)` để đảm bảo tính toàn vẹn dữ liệu.

---

## 4. Tổng Kết & Khuyến Nghị Tiếp Theo

Dự án có thiết kế nhỏ gọn, kiến trúc "đủ xài" cho nhu cầu cá nhân. Tuy nhiên để dự án ổn định lâu dài, tôi đề xuất bạn duyệt và thực hiện các bước sau:

1. **[Nghiêm trọng]** Refactor lại bảng `Student` và bỏ cách lưu chuỗi JSON tay.
2. **[Quan trọng]** Bổ sung bảo mật cho `WebSocketConfig.java`.
3. **[Nâng cấp]** Chuyển đổi cách sinh HTML bằng chuỗi (String concatenation) ở Frontend sang dùng `<template>`.
