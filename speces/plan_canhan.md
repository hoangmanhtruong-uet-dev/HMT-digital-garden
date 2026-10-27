# Bản Kế Hoạch Redesign Trang Cá Nhân (about.html)
**Vai trò:** Lead UI/UX Designer & Front-end Engineer
**Dự án:** Portfolio Hoàng Mạnh Trường (Mtruong _dev)

---

## 1. Phân Tích Hiện Trạng & Vấn Đề
Trang Cá Nhân hiện tại đã có nội dung tốt (truyền tải được 2 vai trò: Backend Engineer và Tech Educator), tuy nhiên cấu trúc UI và UX đang gặp một số vấn đề khiến nó chưa đạt đến mức độ "Premium":
- **Thiếu điểm nhấn rõ ràng:** Các section dàn trải tuần tự từ trên xuống dưới (Hero -> Stats -> Timeline -> Skills), người xem phải cuộn rất dài để nắm được toàn cảnh.
- **Trải nghiệm thị giác (Visual Flow):** Dù dùng Dark Mode nhưng các mảng màu, gradient và font chữ chưa thực sự thống nhất. Animation hiện ra (reveal) khá đơn điệu.
- **Sự phân tách 2 vai trò:** Backend và Giảng dạy đang bị trộn lẫn hoặc nằm ở các section rời rạc, chưa làm nổi bật được "bản sắc kép" độc đáo của bạn.

## 2. Mục Tiêu Redesign
1. **Ấn tượng 3 giây đầu (WOW Effect):** Đập vào mắt là một giao diện mang hơi hướng "Apple-like" hoặc "Linear.app": tối giản, sang trọng, typographic mạnh mẽ và tương tác mượt mà.
2. **Cân bằng 2 vai trò:** Thể hiện rõ sự giao thoa: "Tư duy hệ thống của Backend" hỗ trợ cho "Khả năng truyền đạt của Educator" và ngược lại.
3. **Điều hướng thông minh:** Tích hợp Scroll-spy hoặc Sticky Navigation nội bộ để người dùng dễ dàng chuyển đổi giữa các phần (Kỹ năng, Kinh nghiệm, Dự án).
4. **Hiệu năng & Khả năng truy cập:** Giữ nguyên tiêu chí No-Framework (chỉ HTML/CSS/JS thuần), đảm bảo Lighthouse score > 95.

---

## 3. Định Hướng Thiết Kế (Design Direction)
- **Phong cách:** **"Cinematic Developer"** kết hợp **"Bento Grid tinh tế"** (Không lạm dụng bento làm rối mắt, chỉ dùng ở phần Kỹ năng/Thống kê để tối ưu không gian).
- **Màu sắc chủ đạo:** 
  - Nền tối sâu: `#090A0F` (Midnight Void).
  - Surface (Thẻ/Khối): `#12141C` với viền kính mờ `rgba(255,255,255,0.05)`.
  - Gradient nhấn: Xanh Neon `#3b82f6` sang Tím Điện `#8b5cf6` (cho Backend) và Cam Vàng `#f59e0b` (cho Educator) để phân biệt rạch ròi 2 mảng.
- **Typography:** 
  - Heading: `Space Grotesk` (hiện đại, kỹ thuật).
  - Body: `Inter` (dễ đọc, thanh lịch).
  - Số liệu/Code: `JetBrains Mono`.
- **Hiệu ứng (Motion):** Micro-interactions khi hover, Parallax cuộn nhẹ ở Hero, và lưới nền mờ (mesh gradient background).

---

## 4. Kiến Trúc Layout Mới (New Layout Architecture)

### 4.1. Hero Section (Mở màn điện ảnh)
- **Bố cục:** Bất đối xứng hoặc Trung tâm (Center-aligned) với Text cực lớn.
- **Nội dung:** 
  - Eyebrow (Nhãn nhỏ): `>_ SOFTWARE ENGINEER & TECH EDUCATOR` (Có hiệu ứng gõ chữ terminal).
  - H1: "Xây dựng hệ thống. Truyền cảm hứng công nghệ." (Text to, gradient nổi bật).
  - Avatar: Đưa vào một khung Squircle (bo góc Apple) với ánh sáng viền chạy xung quanh. Thẻ code snippet lơ lửng có hiệu ứng 3D tilt khi di chuột.
  - CTA: Nút "Xem dự án" (hiệu ứng đa lớp vừa thêm) và "Tải CV".

### 4.2. Khối Thống Kê (Bento-lite)
Thay vì xếp hàng ngang nhàm chán, sử dụng lưới bento 3 cột bất đối xứng ngay dưới Hero để khoe thành tích:
- Ô lớn (chiếm 2 cột): "27.75đ & Giải Nhì QG" kết hợp hình ảnh/icon huy chương.
- Ô dọc: "2+ Năm giảng dạy"
- Ô ngang: "Java Backend Focus".

### 4.3. Phân Nhánh Năng Lực (Dual Track)
Thiết kế một section đặc biệt sử dụng CSS Sticky Tab hoặc Split Screen (Màn hình chia đôi) khi cuộn:
- **Trái (Backend):** Các công nghệ Java, Spring Boot, PostgreSQL, Docker... Hiển thị dưới dạng thẻ Code-block.
- **Phải (Educator):** Triết lý giảng dạy, số học viên, lộ trình... Hiển thị dưới dạng thẻ Mindmap hoặc Note.

### 4.4. Trục Thời Gian (Journey / Timeline)
- Chuyển từ danh sách dọc sang một đường kẻ dọc ở giữa màn hình (Central Timeline). 
- Khi cuộn đến đâu, các điểm mốc (dots) sẽ sáng lên đến đó. 
- Mỗi mốc (UET, Gia sư, Project) sẽ trượt từ hai bên vào (Slide in).

### 4.5. Dự Án Nổi Bật (Showcase)
- Không dùng thẻ (card) nhỏ xíu nữa. Mỗi dự án nổi bật sẽ chiếm **100% chiều rộng** của container, xen kẽ Trái - Phải.
- Ảnh dự án có hiệu ứng Parallax (cuộn ảnh chậm hơn nền) tạo cảm giác chiều sâu.

---

## 5. Kế Hoạch Triển Khai (Phát triển theo từng chặng)

### Phase 1: Nền tảng & Layout chuẩn (Mất khoảng 1 session)
- Thiết lập hệ thống biến CSS (Design Tokens) mới tại `about-redesign.css`.
- Xây dựng lại khung HTML của trang (Main, Sections, Containers) theo cấu trúc Semantic.
- Xóa bỏ các CSS rác từ bản cũ, đảm bảo trang không bị vỡ trên Mobile.

### Phase 2: Lắp ráp Component (Mất khoảng 1-2 session)
- Code Hero Section mới (Gradient, Typography, Terminal effect).
- Code lưới Bento cho phần Thống kê.
- Xây dựng Split-screen hoặc Sticky Tabs cho phần Năng lực.
- Xây dựng Central Timeline.

### Phase 3: Hoàn thiện & Hiệu ứng (Mất khoảng 1 session)
- Thêm IntersectionObserver JS để làm hiệu ứng Reveal (hiện ra khi cuộn).
- Thêm hiệu ứng 3D Tilt cho Avatar và thẻ dự án.
- Tối ưu hóa hiệu năng, kiểm tra Responsive (Tablet, Mobile) và độ tương phản (Accessibility).

---

## Phản hồi từ bạn (User Review Required)
Trước khi mình bắt tay vào viết code, bạn hãy xem xét các điểm sau:
1. **Phong cách:** Bạn có thích hướng "Cinematic + Bento-lite" này không? 
2. **Cấu trúc:** Việc chia đôi màn hình (Split screen) cho 2 vai trò Backend/Educator có đúng ý bạn muốn nhấn mạnh không?
3. **Màu sắc:** Nhấn thêm Cam Vàng cho phần Educator để tách biệt với Xanh/Tím của Backend, bạn thấy ổn chứ?

Nếu bạn đồng ý với kế hoạch này, hãy gõ **"Duyệt"** (hoặc chỉ ra điểm muốn đổi), mình sẽ bắt đầu code ngay Phase 1!
