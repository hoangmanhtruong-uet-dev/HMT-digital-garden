# Kế hoạch Đánh giá & Phát triển Trang "Cá Nhân" (about.html)

## 1. Đánh giá Hiện trạng (Review)

### 1.1. Giao diện (UI) & Trải nghiệm (UI/UX)
- **Điểm mạnh**: Layout sử dụng CSS Grid (Bento style) rất hiện đại và bắt mắt. Có hiệu ứng reveal khi cuộn trang (`IntersectionObserver`). Nút "Lưu hồ sơ PDF" tận dụng `window.print()` khá tiện lợi.
- **Hạn chế UX**: Phần Blog (Góc chia sẻ) hiện tại khá tĩnh. Khi bấm "Lưu hồ sơ PDF", giao diện in (print stylesheet) có thể chưa được tối ưu khiến bản PDF lưu ra không đẹp như ý.

### 1.2. Logic & Tính năng
- **Vấn đề Logic (JS)**: File `share-page.js` đang sử dụng mảng dữ liệu `posts` hardcode tĩnh. Hàm `renderPosts` dùng nối chuỗi `innerHTML` để render HTML. Mặc dù đã có hàm `escapeHtml` cơ bản, nhưng việc nối chuỗi HTML dài dòng gây khó bảo trì và đi ngược lại hướng refactor (dùng thẻ `<template>`) mà dự án đang áp dụng ở các module khác (như `edu-admin.js`).
- **Thiếu tương tác**: Trang cá nhân là nơi để kết nối, nhưng hiện tại thiếu lời kêu gọi hành động (Call to Action - CTA) mạnh mẽ hoặc một form/nút "Liên hệ với tôi" (Contact) trực quan.

### 1.3. Nội dung trang
- Nội dung ổn, phân chia rõ ràng (Hành trình, Kỹ năng, Blog). Tuy nhiên, nếu "Góc chia sẻ" được lấy từ API (Backend) thay vì hardcode ở JS thì sẽ dễ dàng cho Admin (chủ website) viết bài mới mà không cần sửa code.

---

## 2. Open Questions (Cần User Xác Nhận)

> [!IMPORTANT]
> 1. Bạn có muốn chuyển dữ liệu của mảng `posts` trong JS thành một API backend thực thụ (ví dụ `/api/posts`) để có thể quản lý bài viết từ trang Admin không? Hay tạm thời vẫn giữ mảng cứng trong JS nhưng refactor code cho sạch?
> 2. Có nên thêm một form "Gửi tin nhắn / Liên hệ" hoặc nút CTA dẫn thẳng tới trang Chat/Contact ở cuối trang không?
> 3. Nút "Lưu hồ sơ PDF" đang dùng `window.print()`, bạn có muốn tối ưu lại file CSS riêng cho giao diện in (print) để file PDF xuất ra đẹp hơn không?

---

## 3. Kế hoạch Implement (Proposed Changes)

Dựa trên đánh giá, dưới đây là kế hoạch Fix & Feat:

### Cập nhật HTML
#### [MODIFY] `backend/src/main/resources/static/pages/about.html`
- Bổ sung thẻ `<template id="tmpl-blog-card">` vào cuối trang để định nghĩa cấu trúc thẻ bài viết.
- (Tùy chọn) Thêm một section CTA "Liên hệ" nhỏ ở gần cuối trang.

```html
<!-- Thêm vào cuối body -->
<template id="tmpl-blog-card">
    <article class="blog-card" data-category="">
        <div class="blog-card-img">
            <img src="" alt="" loading="lazy">
            <span class="blog-badge"></span>
        </div>
        <div class="blog-card-content">
            <div class="blog-meta">
                <span class="meta-date"><i class="fa-solid fa-calendar-days"></i> </span>
                <span class="meta-read"><i class="fa-solid fa-clock"></i> </span>
            </div>
            <h3 class="blog-title"></h3>
            <p class="blog-desc"></p>
            <a href="#" class="read-more">Đọc thêm <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    </article>
</template>
```

### Refactor JavaScript
#### [MODIFY] `backend/src/main/resources/static/assets/js/share-page.js`
- Thay thế hoàn toàn vòng lặp nối chuỗi `innerHTML` bằng logic `cloneNode` từ template.
- Tích hợp logic fetch API (hoặc mô phỏng fetch API) để lấy danh sách `posts` thay vì dùng hằng số.

```javascript
// Logic refactor hàm renderPosts:
function renderPosts(filter = 'all') {
    const grid = document.getElementById('blog-grid');
    const template = document.getElementById('tmpl-blog-card');
    if (!grid || !template) return;
    
    grid.innerHTML = ''; // Clear cũ
    const filtered = filter === 'all' ? posts : posts.filter(post => post.category === filter);
    
    filtered.forEach(post => {
        const clone = template.content.cloneNode(true);
        // Map data vào clone (img src, textContent...)
        grid.appendChild(clone);
    });
}
```

### CSS Tối Ưu (Feat)
#### [MODIFY] `backend/src/main/resources/static/assets/css/share-page.css`
- Thêm media query `@media print` để ẩn đi navbar, footer và các nút filter khi user bấm "Lưu hồ sơ PDF", giúp bản in PDF gọn gàng, giống CV thực thụ.

---

## 4. Verification Plan

### Manual Verification
1. Mở trang `about.html`, kiểm tra các tab filter (Công nghệ, Gia sư...) xem có lọc đúng bài viết bằng code mới không.
2. Bấm nút "Lưu hồ sơ PDF" và kiểm tra hộp thoại Print Preview xem layout có bị lỗi không, các phần không cần thiết (navbar, nút bấm) đã bị ẩn chưa.
3. Inspect code phần blog-grid để đảm bảo DOM được sinh ra từ `<template>` an toàn, không có chuỗi HTML nào bị parse thủ công.
