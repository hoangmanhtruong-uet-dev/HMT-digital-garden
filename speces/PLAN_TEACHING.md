# Kế hoạch Đánh giá & Phát triển Trang "Giảng Dạy" (teaching.html)

## 1. Đánh giá Hiện trạng (Review)

### 1.1. Giao diện (UI) & Trải nghiệm (UI/UX)
- **Điểm mạnh**: Bố cục tổng thể (layout) phân chia rõ ràng các section như Hero, Thống kê, Lộ trình học, Học phí, Góc học tập và Form liên hệ. Các animation cuộn trang (`data-reveal`) giúp trang sống động.
- **Hạn chế UX**:
  - Trang có nút toggle theme (Dark/Light mode) trên thanh điều hướng (navbar), tuy nhiên CSS hiện tại (`teaching-system.css`) chưa có các biến và style hoàn chỉnh cho chế độ Dark Mode.
  - Phối màu ở một số khu vực khá truyền thống, có thể nâng cấp theo hướng UI hiện đại, tinh giản và sang trọng hơn (premium feel) nhằm thể hiện chất lượng giảng dạy cao cấp.
  - Form liên hệ ở cuối trang khi submit sẽ kích hoạt `mailto:` mở ứng dụng email của thiết bị. Điều này gây gián đoạn luồng trải nghiệm của người dùng, đôi khi người dùng không cài app email mặc định sẽ không gửi được.

### 1.2. Logic & Tính năng
- **Xử lý Form**: Việc dùng `mailto:` đã lỗi thời đối với các web app hiện đại. Đáng ra nên có một API nhận dữ liệu từ form và gửi thông báo trực tiếp trên giao diện (Toast/Modal) rằng "Đăng ký thành công".
- **Góc học tập**: Bộ lọc tài liệu (Toán, Vật lý, Luyện thi) đang dùng thao tác ẩn/hiện element tĩnh. Mặc dù nhẹ, nhưng nếu tài liệu nhiều sẽ không khả thi, cần hướng tới kết nối API.

### 1.3. Bố cục (Layout)
- Section Hero đang dùng ảnh nền (background overlay). Để hiện đại hơn, có thể chuyển sang bố cục chia đôi (Split layout: 50% Text - 50% Hình ảnh thực tế) hoặc bố cục bất đối xứng để tạo chiều sâu.

---

## 2. Open Questions (Cần User Xác Nhận)

> [!IMPORTANT]
> 1. **Tính năng Form Liên hệ**: Bạn có muốn chuyển form đăng ký từ việc dùng `mailto:` sang gọi API backend (VD: `/api/enrollments`) để lưu thông tin vào DB và thông báo trực tiếp trên màn hình không?
> 2. **Giao diện Dark Mode**: Bạn có muốn mình bổ sung hoàn chỉnh bộ màu CSS biến thiên (`data-theme="dark"`) để tương thích với nút công tắc sáng/tối trên thanh điều hướng không?
> 3. **Thẩm mỹ (Aesthetics)**: Bạn muốn giữ phong cách thiết kế an toàn hiện tại, hay muốn "đập đi xây lại" (overhaul) một chút để giao diện trông tinh tế, sắc nét mang hơi hướng "premium/modern" hơn (ví dụ: dùng ảnh nền sáng, glassmorphism, và font chữ trau chuốt hơn)?

---

## 3. Kế hoạch Implement (Proposed Changes)

Dựa trên sự thống nhất với các câu hỏi trên, đây là dự thảo lộ trình thay đổi:

### 3.1. Cập nhật HTML (Bố cục)
#### [MODIFY] `backend/src/main/resources/static/pages/teaching.html`
- **Hero Section**: Refactor lại bố cục để text và ảnh tách biệt hơn, tránh overlay làm chữ khó đọc. Căn chỉnh lại phân cấp font chữ.
- **Contact Form**: Thay đổi các thẻ thông báo (Status) để chuẩn bị cho việc hiển thị kết quả gọi API thay vì mở ứng dụng email.
- **Theme Toggle**: Đồng bộ hóa nút switch với script kiểm tra `localStorage` để nhớ trạng thái Dark Mode của người dùng.

### 3.2. Cải thiện Logic JavaScript
#### [MODIFY] `backend/src/main/resources/static/assets/js/teaching-system.js`
- Bỏ logic parse `mailto:` trong hàm xử lý submit form.
- Thêm hàm `fetch()` để POST dữ liệu form JSON tới Backend. Xử lý trạng thái loading và hiển thị thông báo thành công / thất bại mượt mà.
- Bổ sung logic lắng nghe sự kiện của nút Dark/Light toggle và lưu vào `localStorage`, đồng bộ thêm thuộc tính `data-theme` cho thẻ `<body>` hoặc `<html>`.

### 3.3. Nâng cấp CSS & UI/UX
#### [MODIFY] `backend/src/main/resources/static/assets/css/teaching-system.css`
- **Dark Mode**: Bổ sung `@media (prefers-color-scheme: dark)` hoặc biến CSS theo class `.dark-theme` cho toàn bộ các phần tử (màu nền, màu chữ, viền thẻ, shadow).
- **Design Taste**: Tinh chỉnh lại các góc bo (border-radius), khoảng trắng (padding/margin), và độ đậm nhạt của chữ (font-weight). 
- Bổ sung hiệu ứng tương tác (hover physics) vi tế cho các thẻ lộ trình (Program Cards) và Tài liệu (Resources Cards).

---

## 4. Verification Plan

### Automated Tests
- Đảm bảo các test case liên quan tới Controller nhận API form (nếu có) không bị lỗi (`mvn test`).

### Manual Verification
1. Mở trang `teaching.html` và thử chuyển đổi chế độ Sáng/Tối. Tải lại trang để kiểm tra xem trạng thái màu có được lưu giữ không.
2. Thử điền form liên hệ với dữ liệu hợp lệ và bấm gửi. Đảm bảo form hiển thị trạng thái loading, sau đó là thông báo thành công ngay trên trang thay vì bị nhảy qua ứng dụng Mail.
3. Kiểm tra responsive trên các kích thước màn hình (Mobile, Tablet) để chắc chắn bố cục Hero và các thẻ chương trình học không bị vỡ.
