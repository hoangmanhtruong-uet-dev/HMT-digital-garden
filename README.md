# Hoàng Mạnh Trường · Portfolio & Web Ecosystem

[![Java](https://img.shields.io/badge/Java-17%2B-ED8B00?logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.2-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/Database-MySQL%20(Aiven)-4479A1?logo=mysql&logoColor=white)](https://aiven.io/)
[![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-3448C5?logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![License](https://img.shields.io/badge/License-Private-lightgrey.svg)]()

Website đa phân hệ của **Hoàng Mạnh Trường** (Sinh viên CNTT - ĐH Công nghệ, ĐHQGHN - UET): kết hợp **Portfolio cá nhân**, **Hệ thống quản lý & hỗ trợ gia sư**, **Cổng học sinh & Thi thử online**, **Lab Hóa học tương tác** và không gian kỷ niệm **Love Corner**.

Toàn bộ ứng dụng được đóng gói nguyên khối (Monolith tối ưu): Spring Boot 3.2 phục vụ trực tiếp các trang giao diện tĩnh (HTML5 / Vanilla CSS / Modern JS), cung cấp hệ thống REST API, WebSocket thời gian thực và tích hợp Gemini AI.

---

## 📑 Mục lục

1. [Kiến trúc & Phân hệ tính năng](#-kiến-trúc--phân-hệ-tính-năng)
2. [Ngăn xếp công nghệ (Tech Stack)](#-ngăn-xếp-công-nghệ-tech-stack)
3. [Yêu cầu môi trường](#-yêu-cầu-môi-trường)
4. [Cấu hình biến môi trường (.env)](#-cấu-hình-biến-môi-trường-env)
5. [Khởi chạy Local Development](#-khởi-chạy-local-development)
6. [Build & Kiểm thử tự động](#-build--kiểm-thử-tự-động)
7. [Hướng dẫn Deploy Go-Live (Production)](#-hướng-dẫn-deploy-go-live-production)
   - [Cách 1: Deploy lên Render / Railway (PaaS)](#cách-1-deploy-lên-render--railway-paas)
   - [Cách 2: Deploy bằng Docker Container](#cách-2-deploy-bằng-docker-container)
   - [Cách 3: Deploy trên VPS Linux (Systemd Service)](#cách-3-deploy-trên-vps-linux-systemd-service)
8. [Danh mục REST API & WebSocket](#-danh-mục-rest-api--websocket)
9. [Cấu trúc mã nguồn](#-cấu-trúc-mã-nguồn)
10. [Checklist an toàn trước khi Go-Live](#-checklist-an-toàn-trước-khi-go-live)

---

## 🏛 Kiến trúc & Phân hệ tính năng

Hệ sinh thái gồm 5 phân hệ chính:

| Phân hệ | Đường dẫn | Chức năng nổi bật |
| --- | --- | --- |
| **Portfolio & Profile** | `/index.html`<br>`/pages/about.html`<br>`/pages/projects.html` | Giới thiệu năng lực, Interactive Hacker CLI (`mtruong_cli`), Command Palette (`Ctrl+K`), Dynamic CV preview/download, Case Study C4 Architecture, timeline học vấn UET. |
| **Mục tiêu & Lộ trình** | `/pages/muctieu.html` | Theo dõi mục tiêu cá nhân, tiến độ học tập, chứng chỉ và hoạt động rèn luyện được sync từ backend. |
| **Giảng dạy & Gia sư** | `/pages/teaching.html`<br>`/pages/manage.html` | Giới thiệu chương trình gia sư Toán - Lý, form đăng ký tư vấn trực tiếp lưu DB, dashboard quản lý lớp học (điểm danh, thống kê học phí, cảnh báo lớp sắp hết buổi). |
| **Cổng học sinh & Thi thử** | `/pages/login.html`<br>`/pages/student_portal.html`<br>`/pages/quiz.html` | Đăng ký/đăng nhập (mật khẩu Bcrypt), làm bài thi trắc nghiệm bấm giờ, lưu lịch sử điểm số (`QuizHistory`), biểu đồ tiến độ năng lực Chart.js, bảng xếp hạng. |
| **Love Corner & Lab** | `/pages/love.html`<br>`/pages/chemlab.html`<br>`/pages/timeline.html` | Dòng thời gian kỷ niệm, bản đồ Leaflet, chia sẻ vị trí qua WebSocket `/ws-location`, mô phỏng phản ứng và trợ lý AI Hóa học. |

---

## 🛠 Ngăn xếp công nghệ (Tech Stack)

### Backend
- **Ngôn ngữ & Framework:** Java 17 (tương thích Java 21 LTS), Spring Boot 3.2.2.
- **Web & API:** Spring MVC (RESTful API), Jakarta Validation, HTTP Session Authentication.
- **Dữ liệu & ORM:** Spring Data JPA, Hibernate ORM, MySQL Connector/J.
- **Bảo mật:** Spring Security Crypto (BCryptPasswordEncoder), Custom `AdminAuthInterceptor`, Custom `@PublicEndpoint`, `WebSocketAuthInterceptor`.
- **Real-time:** Spring WebSocket, STOMP Messaging Protocol, SockJS fallback.
- **Kiểm thử:** JUnit 5, Mockito, Spring Boot Starter Test, H2 In-Memory Database (Test Scope).

### Frontend
- **Công nghệ cốt lõi:** HTML5 Semantic, Modern Vanilla JavaScript (ES6+), Vanilla CSS (Flexbox, Grid, Glassmorphism, CSS Custom Properties).
- **Thư viện UI / Data Viz:** Font Awesome 6, Chart.js, Leaflet.js, Canvas Confetti.
- **Asset Serving:** Static content được phục vụ trực tiếp qua Spring Boot Resource Handler với relative API base URL linh hoạt (`localhost:8080` ở dev, `""` cùng origin ở prod).

### Dịch vụ đám mây (Cloud Integrations)
- **Cơ sở dữ liệu:** Aiven Cloud MySQL (yêu cầu SSL/TLS).
- **Lưu trữ đa phương tiện:** Cloudinary API (lưu ảnh chứng chỉ, ảnh kỷ niệm, hero avatar).
- **Trí tuệ nhân tạo:** Google Gemini API (phục vụ trợ lý ảo và giải đáp chuyên môn Hóa học).

---

## 📋 Yêu cầu môi trường

Để phát triển hoặc triển khai ứng dụng, máy chủ cần:
- **JDK:** Phiên bản **17** hoặc **21** (Eclipse Temurin, Oracle JDK, hoặc Amazon Corretto).
- **Maven:** Phiên bản **3.9+** (đã tích hợp cấu hình reactor trong file gốc).
- **Cơ sở dữ liệu:** MySQL 8.0+ (Local hoặc Cloud instance như Aiven / PlanetScale).
- **Tài khoản bên thứ ba:**
  - Google AI Studio (lấy `GEMINI_API_KEY`).
  - Cloudinary (lấy Cloud Name, API Key, API Secret).

---

## 🔐 Cấu hình biến môi trường (.env)

Hệ thống nạp toàn bộ cấu hình nhạy cảm qua biến môi trường. Trước khi chạy, copy file mẫu:

```powershell
Copy-Item .env.example .env
```

Bảng biến môi trường cần thiết lập:

| Biến môi trường | Bắt buộc | Mặc định | Mô tả |
| --- | :---: | :---: | --- |
| `DB_URL` | **Có** | - | JDBC URL (VD: `jdbc:mysql://HOST:PORT/DB?sslMode=REQUIRED&serverTimezone=UTC`) |
| `DB_USER` | **Có** | - | Tài khoản truy cập MySQL |
| `DB_PASS` | **Có** | - | Mật khẩu truy cập MySQL |
| `ADMIN_PIN` | **Có** | - | Mã PIN quản trị đăng nhập trang admin/quản lý |
| `PORT` | Không | `8080` | Cổng HTTP lắng nghe (PaaS như Render/Railway tự gán) |
| `SPRING_PROFILES_ACTIVE` | Không | `default` | Đặt `prod` khi lên môi trường thật để khoá `ddl-auto=validate` |
| `ALLOWED_ORIGINS` | Không | `*` | Danh sách domain CORS/WebSocket (VD: `https://hoangmanhtruong.dev`) |
| `WS_PASSCODE` | Không | *(trống)* | Mật mã bảo vệ kết nối WebSocket (nếu cần xác thực CONNECT frame) |
| `CLOUDINARY_CLOUD_NAME` | Có* | - | Cloud Name trên Cloudinary (*nếu dùng tính năng upload) |
| `CLOUDINARY_API_KEY` | Có* | - | API Key Cloudinary |
| `CLOUDINARY_API_SECRET` | Có* | - | API Secret Cloudinary |
| `GEMINI_API_KEY` | Có* | - | Khóa API Gemini từ Google AI Studio (*nếu bật AI) |

---

## 🚀 Khởi chạy Local Development

### Cách 1: Chạy tự động bằng PowerShell (Windows)

Script đã tích hợp tự động đọc file `.env` ở thư mục gốc và khởi chạy Spring Boot:

```powershell
.\run-backend.ps1
```

### Cách 2: Chạy thủ công qua Maven CLI

```powershell
# Di chuyển vào thư mục backend
Set-Location backend

# Khởi chạy ứng dụng
mvn spring-boot:run
```

Sau khi ứng dụng khởi động thành công (`Tomcat started on port 8080`), mở trình duyệt truy cập:
👉 **http://localhost:8080**

---

## 🧪 Build & Kiểm thử tự động

Dự án áp dụng kiểm thử tự động với Mockito và JUnit 5 (sử dụng H2 in-memory test DB, không phụ thuộc kết nối MySQL bên ngoài):

```powershell
# Chạy toàn bộ test suite
mvn test

# Đóng gói file JAR thực thi (bỏ qua test khi cần đóng gói nhanh)
mvn clean package -DskipTests
```

File JAR sau khi build thành công nằm tại:
```text
backend/target/portfolio-0.0.1-SNAPSHOT.jar
```

Chạy thử nghiệm file JAR đã đóng gói:
```powershell
java -jar backend/target/portfolio-0.0.1-SNAPSHOT.jar
```

---

## 🌐 Hướng dẫn Deploy Go-Live (Production)

### Cách 1: Deploy lên Render / Railway (PaaS) - Khuyến nghị

1. **Tạo Web Service** trên Render/Railway kết nối với GitHub repository này.
2. **Cấu hình môi trường build:**
   - **Environment:** Java / Docker
   - **Root Directory:** Để trống hoặc chọn thư mục gốc
   - **Build Command:** `mvn clean package -DskipTests`
   - **Start Command:** `java -XX:+UseSerialGC -Xss256k -XX:MaxRAMPercentage=70.0 -jar backend/target/portfolio-0.0.1-SNAPSHOT.jar`
3. **Khai báo Environment Variables** trên dashboard dịch vụ:
   - `SPRING_PROFILES_ACTIVE` = `prod`
   - `DB_URL` = `jdbc:mysql://...`
   - `DB_USER` = `...`
   - `DB_PASS` = `...`
   - `ADMIN_PIN` = `...` *(đặt chuỗi bảo mật cao)*
   - `ALLOWED_ORIGINS` = `https://your-domain.onrender.com,https://yourdomain.com`
   - `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
   - `GEMINI_API_KEY`
4. Dịch vụ sẽ tự động build, expose port qua biến `$PORT` và phát hành HTTPS.

### Cách 2: Deploy bằng Docker Container

Dự án đã có sẵn [backend/Dockerfile](backend/Dockerfile) tối ưu multi-stage build (Temurin 21 Alpine):

```bash
# 1. Build image từ thư mục backend
cd backend
docker build -t mtruong-portfolio:latest .

# 2. Khởi chạy container với file môi trường .env
docker run -d \
  --name mtruong-web \
  --restart always \
  -p 8080:8080 \
  --env-file ../.env \
  -e SPRING_PROFILES_ACTIVE=prod \
  mtruong-portfolio:latest
```

### Cách 3: Deploy trên VPS Linux (Systemd Service)

1. Build file JAR trên máy phát triển hoặc CI/CD:
   ```bash
   mvn clean package -DskipTests
   ```
2. Tải `backend/target/portfolio-0.0.1-SNAPSHOT.jar` lên thư mục `/opt/portfolio/app.jar` trên VPS.
3. Tạo file cấu hình môi trường `/opt/portfolio/.env`.
4. Tạo systemd service `/etc/systemd/system/portfolio.service`:
   ```ini
   [Unit]
   Description=Hoang Manh Truong Portfolio Service
   After=network.target

   [Service]
   User=www-data
   WorkingDirectory=/opt/portfolio
   EnvironmentFile=/opt/portfolio/.env
   ExecStart=/usr/bin/java -Xms128m -Xmx384m -jar /opt/portfolio/app.jar
   Restart=always
   RestartSec=10

   [Install]
   WantedBy=multi-user.target
   ```
5. Kích hoạt và khởi động:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable --now portfolio
   ```

---

## 🔌 Danh mục REST API & WebSocket

### 1. Phân hệ Quản trị & Xác thực
- `POST /api/auth/admin/login`: Đăng nhập admin qua mã PIN bí mật.
- `GET /api/auth/admin/me`: Kiểm tra trạng thái phiên admin hiện tại.
- `POST /api/auth/admin/logout`: Hủy session admin.

### 2. Phân hệ Học sinh & Thi thử
- `POST /api/students/register`: Đăng ký tài khoản học sinh (mật khẩu tự băm BCrypt).
- `POST /api/students/login`: Đăng nhập học sinh và khởi tạo session.
- `GET /api/students/profile/{username}`: Lấy thông tin cá nhân (chỉ xem được khi đã đăng nhập đúng tài khoản).
- `POST /api/students/save-quiz`: Lưu điểm bài kiểm tra vào thực thể `QuizHistory` và tự tính trung bình cộng.
- `GET /api/students/leaderboard`: Bảng xếp hạng học sinh có điểm trung bình cao nhất.
- `GET /api/exams`: Lấy danh sách đề thi trắc nghiệm (công khai).
- `GET /api/exams/{id}`: Xem chi tiết câu hỏi một đề thi (công khai).
- `POST /api/exams`, `PUT /api/exams/{id}`, `DELETE /api/exams/{id}`: Soạn và sửa đề thi (yêu cầu quyền Admin).

### 3. Phân hệ Quản lý Lớp học Gia sư
- `GET /api/classes`: Lấy danh sách lớp học (yêu cầu quyền Admin).
- `POST /api/classes`, `PUT /api/classes/{id}`: Thêm và cập nhật thông tin lớp (Enum `ClassStatus`, `PaymentType`).
- `PATCH /api/classes/{id}/attend`: Điểm danh tăng 1 buổi dạy.
- `DELETE /api/classes/{id}`: Xóa thông tin lớp học.
- `POST /api/contact/enroll`: Tiếp nhận thông tin học sinh đăng ký tư vấn gia sư từ form công khai.

### 4. Phân hệ Mục tiêu & Cài đặt hệ thống
- `GET /api/goals`: Lấy danh sách tiến độ mục tiêu cá nhân (công khai).
- `PUT /api/goals/{goalId}`, `PUT /api/goals/batch`: Cập nhật tiến độ mục tiêu (yêu cầu quyền Admin).
- `GET /api/certificates`: Lấy danh sách chứng chỉ và bằng cấp (công khai).
- `POST /api/certificates`: Upload chứng chỉ lên Cloudinary (yêu cầu quyền Admin).
- `GET /api/settings/{key}`: Lấy cấu hình tuỳ chỉnh giao diện (công khai).
- `POST /api/settings/{key}`: Cập nhật giá trị cấu hình (yêu cầu quyền Admin).

### 5. WebSocket Real-time
- **Endpoint kết nối:** `/ws-location` (kèm SockJS fallback).
- **Destination gửi:** `/app/location.update` (truyền thông tin tọa độ `role`, `lat`, `lng`, `timestamp`).
- **Topic nhận:** `/topic/location` (broadcast dữ liệu định vị thời gian thực).
- **Cơ chế xác thực:** Được kiểm soát nguồn gốc bằng `ALLOWED_ORIGINS` và kiểm tra header `passcode` (qua `WS_PASSCODE` nếu bật).

---

## 📂 Cấu trúc mã nguồn

```text
Website_canhan/
├── .env.example                               # File mẫu cấu hình biến môi trường
├── .gitignore                                 # Khai báo loại bỏ file build và file nhạy cảm
├── pom.xml                                    # Maven root reactor
├── run-backend.ps1                            # Script tiện ích chạy nhanh trên Windows
├── review.md                                  # Báo cáo kỹ thuật & technical debt
│
└── backend/
    ├── Dockerfile                             # Cấu hình containerization cho production
    ├── pom.xml                                # Cấu hình Maven backend (Spring Boot 3.2, Java 17)
    ├── src/
    │   ├── main/
    │   │   ├── java/com/love/portfolio/
    │   │   │   ├── config/                    # Security, WebConfig, WebSocket, Interceptors
    │   │   │   ├── controller/                # 19 REST Controllers xử lý nghiệp vụ
    │   │   │   ├── model/                     # JPA Entities (Student, QuizHistory, TutorClass...)
    │   │   │   ├── repository/                # Spring Data JPA Repositories
    │   │   │   └── service/                   # AI Service, Cloudinary, Location Service
    │   │   └── resources/
    │   │       ├── application.properties     # Cấu hình base
    │   │       ├── application-prod.properties# Profile prod (ddl-auto=validate, no lazy-init)
    │   │       └── static/                    # Frontend nguyên khối
    │   │           ├── index.html             # Trang chủ chính
    │   │           ├── assets/                # CSS, JS, hình ảnh, icon
    │   │           └── pages/                 # 34 giao diện phân hệ (about, teaching, love...)
    │   └── test/                              # Bộ kiểm thử tự động (JUnit 5 + Mockito)
    └── target/                                # Thư mục chứa artifact .jar sau khi đóng gói
```

---

## 🛡 Checklist an toàn trước khi Go-Live

Trước khi công bố đường link chính thức đến người dùng hoặc học sinh:

- [x] **Mật mã Admin:** Đổi `ADMIN_PIN` thành mã PIN dài, phức tạp trong cấu hình server hosting (không dùng mã mặc định).
- [x] **Chế độ JPA Schema:** Đảm bảo `SPRING_PROFILES_ACTIVE=prod` để Hibernate chạy ở chế độ `validate`, tránh việc vô tình drop/alter bảng trên cơ sở dữ liệu thật.
- [x] **Giới hạn CORS:** Thiết lập `ALLOWED_ORIGINS` trỏ chính xác về domain của bạn (ví dụ `https://hoangmanhtruong.dev`) thay vì `*`.
- [x] **Thu hồi & cấp lại khóa API cũ:** Nếu khóa API (Gemini, Cloudinary, MySQL password) từng được commit vào lịch sử Git trước đây, hãy bấm **Regenerate / Revoke** trên bảng điều khiển của nhà cung cấp.
- [x] **Bảo vệ file nhạy cảm:** Kiểm tra file `.env` và thư mục `uploads/` đã nằm trong `.gitignore` và không bao giờ xuất hiện trên GitHub repository công khai.
- [x] **Kiểm tra Asset & Liên kết:** Đảm bảo không còn bất kỳ đường dẫn CSS/JS nào bị lỗi 404 (đã gỡ bỏ sạch sẽ các liên kết rác như `music.js` cũ).
- [x] **Chứng chỉ SSL/HTTPS:** Chạy toàn bộ hệ thống thông qua giao thức HTTPS để đảm bảo tính năng Web Location, Microphone và lưu trữ Session Cookie hoạt động an toàn.

---

## 👨‍💻 Tác giả & Bản quyền

- **Tác giả:** Hoàng Mạnh Trường (UET - ĐHQGHN)
- **Email:** truongcri0101@gmail.com
- **Facebook:** [Mtruongdayyy](https://www.facebook.com/Mtruongdayyy)
- **GitHub:** [Mtruong2004](https://github.com/Mtruong2004)
- **Copyright:** © 2026 Hoàng Mạnh Trường. All rights reserved.
