const fs = require('fs');
const path = require('path');

const basePath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static';
const htmlPath = path.join(basePath, 'pages/muctieu.html');
const cssPath = path.join(basePath, 'assets/css/goals-page.css');
const jsPath = path.join(basePath, 'assets/js/goals-page.js');
const dataJsPath = path.join(basePath, 'assets/js/goals-data.js');

// 1. DATA FILE
const dataJsContent = `// Dữ liệu toàn bộ trang Mục Tiêu
const GITHUB_REPO_CREATION_YEAR = 2024; // [CẦN ĐIỀN: Năm bắt đầu lộ trình]
const LAST_UPDATED = "15/10/2026"; // [CẦN ĐIỀN: Ngày cập nhật]

const SA_DATA = {
    overview: {
        lastUpdated: LAST_UPDATED
    },
    goals: [
        {
            id: 'g1',
            title: 'Hoàn thiện Microservices với Spring Cloud',
            category: 'hoc-tap',
            deadline: '2026-11-30',
            progress: 65,
            status: 'dang-thuc-hien', // hoan-thanh, dang-thuc-hien, ke-hoach, qua-han
            description: 'Tách API monolith hiện tại thành 3 services, thiết lập API Gateway và Service Discovery.',
            steps: ['Tách Service', 'Cấu hình Eureka', 'Tích hợp Gateway']
        },
        {
            id: 'g2',
            title: 'Đạt chứng chỉ AWS Solutions Architect Associate',
            category: 'su-nghiep',
            deadline: '2026-08-15',
            progress: 80,
            status: 'qua-han', 
            description: 'Hoàn thành 3 practice tests với điểm trên 85% và đăng ký thi chính thức.',
            steps: ['Học khóa CloudQuest', 'Practice Exam 1', 'Practice Exam 2']
        },
        {
            id: 'g3',
            title: 'Viết 5 Tech Blog về System Design',
            category: 'ky-nang',
            deadline: '2026-12-31',
            progress: 40,
            status: 'dang-thuc-hien',
            description: 'Tài liệu hóa kiến thức về C4 Model, Caching strategy, và Event-driven.',
            steps: ['Bài 1: C4 Model', 'Bài 2: Redis Caching']
        },
        {
            id: 'g4',
            title: 'Xây dựng CICD Pipeline chuẩn Production',
            category: 'ky-nang',
            deadline: '2026-10-01',
            progress: 100,
            status: 'hoan-thanh',
            description: 'Tự động hóa toàn bộ quá trình test, build image và deploy lên server.',
            steps: ['Cấu hình GitHub Actions', 'Viết Dockerfile', 'Deploy script']
        },
        {
            id: 'g5',
            title: 'Duy trì chạy bộ 15km/tuần',
            category: 'cuoc-song',
            deadline: '2026-12-31',
            progress: 15,
            status: 'dang-thuc-hien',
            description: 'Nâng cao thể lực để đáp ứng cường độ làm việc cao.',
            steps: ['Chạy bộ sáng', 'Tham gia giải chạy']
        }
    ],
    roadmap: [
        {
            id: 'r1',
            year: '2022 — 2023',
            title: 'Nền tảng lập trình',
            description: 'Java, OOP, cấu trúc dữ liệu và giải thuật; xây nền tư duy giải quyết vấn đề.',
            status: 'hoan-thanh'
        },
        {
            id: 'r2',
            year: '2023 — 2024',
            title: 'UET & sản phẩm đầu tiên',
            description: 'Spring Boot, MySQL và portfolio; chuyển kiến thức thành sản phẩm có thể vận hành.',
            status: 'hoan-thanh'
        },
        {
            id: 'r3',
            year: '2024 — 2026',
            title: 'Full-stack & Cloud foundation',
            description: 'Microservices, Docker, CI/CD, dạy học và tích hợp AI vào bài toán thực tế.',
            status: 'dang-thuc-hien'
        },
        {
            id: 'r4',
            year: '2026 — 2027',
            title: 'Thực chiến hệ thống',
            description: 'Thực tập Java Backend, đóng góp open source và thiết kế workload trên cloud.',
            status: 'ke-hoach'
        },
        {
            id: 'r5',
            year: '2027+',
            title: 'Solutions Architect track',
            description: 'Tích lũy ADR, C4, security, capacity planning và năng lực tư vấn giải pháp.',
            status: 'ke-hoach'
        }
    ],
    topics: [
        { title: 'DATA FOUNDATION', status: 'hoan-thanh', name: 'PostgreSQL Indexing', desc: 'B-tree, Hash, GiST, GIN và chiến lược tối ưu truy vấn.', progress: 82 },
        { title: 'EVENT SYSTEMS', status: 'dang-thuc-hien', name: 'Kafka & Pub/Sub', desc: 'Partitioning, consumer groups và event-driven.', progress: 65 },
        { title: 'CLOUD DELIVERY', status: 'ke-hoach', name: 'Docker & Kubernetes', desc: 'Orchestration, deployment strategy, service mesh.', progress: 38 },
        { title: 'SYSTEM DESIGN', status: 'dang-thuc-hien', name: 'C4 & Capacity Planning', desc: 'Context, container, component, throughput estimation.', progress: 55 }
    ],
    capabilities: {
        radar: [
            { name: 'Backend', value: 82 },
            { name: 'Cloud', value: 66 },
            { name: 'System Design', value: 61 },
            { name: 'Communication', value: 57 },
            { name: 'English', value: 48 },
            { name: 'Delivery', value: 74 }
        ],
        communication: {
            minutes: 142, // [CẦN ĐIỀN: phút thuyết trình thực tế]
            sessions: [
                { name: 'Designing Resilient APIs', duration: 38, icon: 'fa-microphone-lines' },
                { name: 'Architecture Review', duration: 45, icon: 'fa-users' },
                { name: 'English Tech Talk', duration: 59, icon: 'fa-language' }
            ]
        }
    }
};
`;

// 2. HTML FILE
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extract current navbar
const navMatch = htmlContent.match(/<nav class="navbar-unified"[^>]*>[\s\S]*?<\/nav>/);
const navbar = navMatch ? navMatch[0] : '';

const newHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Lộ trình phát triển cá nhân hướng tới Solutions Architect của Hoàng Mạnh Trường.">
  <title>SA.Path — Mục Tiêu Cá Nhân</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/common.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="../assets/css/goals-page.css">
</head>
<body class="sa-path-page" data-theme="dark">
  ${navbar}

  <div class="sa-layout">
    <!-- SIDEBAR -->
    <aside class="sa-sidebar" id="sa-sidebar">
      <div class="sidebar-header">
        <div class="sidebar-progress-ring">
          <svg viewBox="0 0 36 36">
            <path class="ring-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            <path class="ring-fill" id="sb-ring" stroke-dasharray="0, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
          </svg>
          <span id="sb-progress-text">0%</span>
        </div>
        <div class="sidebar-header-text">
          <strong>Tiến độ tổng thể</strong>
          <span class="mono">Build & Validate</span>
        </div>
      </div>
      
      <nav class="sidebar-nav" aria-label="Mục lục trang">
        <div class="nav-scroll-indicator" id="nav-indicator"></div>
        
        <a href="#tong-quan" class="nav-item is-active" data-target="tong-quan" aria-current="true">
          <i class="fa-solid fa-chart-pie"></i>
          <span>Tổng quan</span>
        </a>
        
        <div class="nav-item-group">
          <a href="#muc-tieu" class="nav-item" data-target="muc-tieu">
            <i class="fa-solid fa-crosshairs"></i>
            <span>Mục tiêu</span>
            <span class="badge" id="sb-goals-count">0</span>
          </a>
          <div class="nav-sub-items">
            <button class="nav-filter active" data-filter="all">Tất cả</button>
            <button class="nav-filter" data-filter="hoc-tap">Học tập</button>
            <button class="nav-filter" data-filter="ky-nang">Kỹ năng</button>
            <button class="nav-filter" data-filter="su-nghiep">Sự nghiệp</button>
            <button class="nav-filter" data-filter="cuoc-song">Cuộc sống</button>
          </div>
        </div>
        
        <a href="#lo-trinh" class="nav-item" data-target="lo-trinh">
          <i class="fa-solid fa-route"></i>
          <span>Lộ trình</span>
          <span class="badge" id="sb-roadmap-count">0</span>
        </a>
        
        <a href="#nang-luc" class="nav-item" data-target="nang-luc">
          <i class="fa-solid fa-layer-group"></i>
          <span>Năng lực</span>
          <span class="badge" id="sb-cap-count">0</span>
        </a>
      </nav>
      
      <div class="sidebar-footer">
        <p class="mono" id="sb-last-update">Cập nhật: --/--/----</p>
        <button class="btn-outline btn-sm"><i class="fa-solid fa-download"></i> Tải PDF lộ trình</button>
        <button class="btn-toggle-sidebar" id="btn-toggle-sidebar" aria-label="Thu gọn sidebar">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      </div>
    </aside>

    <!-- MOBILE BOTTOM BAR -->
    <nav class="mobile-bottom-bar">
        <a href="#tong-quan" class="nav-item is-active" data-target="tong-quan">
          <i class="fa-solid fa-chart-pie"></i><span>Tổng quan</span>
        </a>
        <a href="#muc-tieu" class="nav-item" data-target="muc-tieu">
          <i class="fa-solid fa-crosshairs"></i><span>Mục tiêu</span>
        </a>
        <a href="#lo-trinh" class="nav-item" data-target="lo-trinh">
          <i class="fa-solid fa-route"></i><span>Lộ trình</span>
        </a>
        <a href="#nang-luc" class="nav-item" data-target="nang-luc">
          <i class="fa-solid fa-layer-group"></i><span>Năng lực</span>
        </a>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="sa-content">
      
      <!-- 1. TỔNG QUAN -->
      <section id="tong-quan" class="sa-section">
        <div class="overview-hero reveal">
          <div class="hero-label mono">LỘ TRÌNH SOLUTIONS ARCHITECT · <span id="hero-date"></span></div>
          <h1>Từ Java Backend đến <span class="text-gradient">Solutions Architect</span></h1>
          <p class="hero-desc">Bảng điều khiển tiến độ nghề nghiệp: theo dõi các mục tiêu, kỹ năng, và kiến trúc hệ thống để định hướng con đường phát triển chuyên môn.</p>
          <div class="hero-cta">
            <a href="#muc-tieu" class="btn-primary">Xem mục tiêu đang chạy</a>
            <a href="#lo-trinh" class="btn-outline">Mở lộ trình</a>
          </div>
        </div>
        
        <div class="stats-grid reveal" style="transition-delay: 0.1s">
          <div class="stat-card">
            <div class="stat-header">Tiến độ trung bình</div>
            <div class="stat-value text-gradient" id="stat-avg">0%</div>
            <div class="stat-desc">Dựa trên các mục tiêu hiện tại</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">Mục tiêu đang chạy</div>
            <div class="stat-value" id="stat-active-goals">0/0</div>
            <div class="stat-desc">Mục tiêu trong kế hoạch</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">Cột mốc hoàn thành</div>
            <div class="stat-value" id="stat-milestones">0</div>
            <div class="stat-desc">Trong lộ trình dài hạn</div>
          </div>
          <div class="stat-card">
            <div class="stat-header">Trụ cột năng lực</div>
            <div class="stat-value" id="stat-capabilities">0</div>
            <div class="stat-desc">Kỹ năng cốt lõi</div>
          </div>
        </div>

        <div class="stage-card reveal" style="transition-delay: 0.2s">
          <div class="stage-header">
            <h3>Giai đoạn hiện tại: Build & Validate</h3>
            <span class="mono">Backend · Cloud · Giao tiếp</span>
          </div>
          <div class="stage-progress">
            <div class="progress-bar"><div class="progress-fill" style="width: 0%" id="stage-progress-fill"></div></div>
          </div>
          <p class="stage-next">Việc tiếp theo: Đóng gói Docker, thiết lập CI/CD và viết bài chia sẻ kiến trúc.</p>
        </div>
      </section>

      <!-- 2. MỤC TIÊU -->
      <section id="muc-tieu" class="sa-section">
        <div class="section-header reveal">
          <h2>Mục tiêu</h2>
          <div class="mobile-filters" id="mobile-filters">
            <!-- Rendered by JS -->
          </div>
          <div class="controls">
             <select id="goal-sort">
               <option value="progress">Tiến độ ↓</option>
               <option value="deadline">Hạn gần nhất</option>
               <option value="group">Nhóm</option>
             </select>
          </div>
        </div>
        
        <div id="goals-container" class="goals-container">
           <!-- Rendered by JS -->
        </div>
      </section>

      <!-- 3. LỘ TRÌNH -->
      <section id="lo-trinh" class="sa-section">
        <div class="section-header reveal">
          <h2>Lộ trình</h2>
          <p>Hành trình từ nền tảng lập trình đến tư duy thiết kế hệ thống.</p>
        </div>
        <div class="roadmap-container reveal" id="roadmap-container">
          <!-- Rendered by JS -->
        </div>
        
        <h3 class="subsection-title reveal">Chủ đề kỹ thuật</h3>
        <div class="topics-grid reveal" id="topics-grid">
           <!-- Rendered by JS -->
        </div>
      </section>

      <!-- 4. NĂNG LỰC -->
      <section id="nang-luc" class="sa-section">
        <div class="section-header reveal">
          <h2>Năng lực</h2>
          <p>Hệ thống kỹ năng hỗ trợ mục tiêu dài hạn.</p>
        </div>
        
        <div class="capabilities-grid">
          <div class="cap-card reveal">
            <h3>Radar năng lực</h3>
            <div class="radar-container">
              <svg viewBox="0 0 200 200" id="radar-chart"></svg>
              <div class="radar-legend" id="radar-legend"></div>
            </div>
            <p class="cap-note" title="Tự đánh giá qua các dự án cá nhân và công việc thực tế"><i class="fa-solid fa-circle-info"></i> Tự đánh giá theo tiêu chí: mức độ ứng dụng thực tế.</p>
          </div>
          
          <div class="cap-right-col">
            <div class="cap-card reveal" style="transition-delay: 0.1s">
              <h3>90 ngày tới</h3>
              <ul class="priority-list">
                <li>
                  <input type="checkbox" checked disabled>
                  <div>
                    <strong>System Design Journal</strong>
                    <span>Viết 3 ADR và 2 sơ đồ C4. [CẦN ĐIỀN: Hạn]</span>
                  </div>
                </li>
                <li>
                  <input type="checkbox" disabled>
                  <div>
                    <strong>Cloud delivery</strong>
                    <span>Docker, CI/CD, monitoring metrics.</span>
                  </div>
                </li>
                <li>
                  <input type="checkbox" disabled>
                  <div>
                    <strong>English presentation</strong>
                    <span>4 buổi trình bày kiến trúc bằng tiếng Anh.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div class="cap-card reveal" style="transition-delay: 0.2s">
              <div class="comm-header">
                <h3>Nhật ký giao tiếp</h3>
                <span class="status-badge st-hoan-thanh">ON TRACK</span>
              </div>
              <div class="comm-stats">
                <div class="comm-number mono" id="comm-minutes">0</div>
                <span>phút thuyết trình<br>trong tháng</span>
              </div>
              <ul class="comm-list" id="comm-list">
                 <!-- Rendered by JS -->
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- QUOTE & FOOTER -->
      <div class="sa-footer-area">
        <blockquote class="sa-quote reveal">
          <div class="quote-label mono">Nguyên tắc làm việc</div>
          <p>"Tiến bộ không đến từ một kế hoạch hoàn hảo, mà từ một hệ thống đủ rõ để hành động mỗi ngày."</p>
          <cite>Hoàng Mạnh Trường</cite>
        </blockquote>

        <footer class="sa-footer reveal">
          <div class="footer-links">
            <a href="mailto:truongcri0101@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
            <a href="#"><i class="fa-brands fa-github"></i> GitHub</a>
            <a href="#"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
          </div>
          <div class="footer-copy">
            &copy; 2026 Hoàng Mạnh Trường. Từng ngày một, tiến về phía trước.
          </div>
        </footer>
      </div>
    </main>
    
    <a href="#chat" class="fab-chat"><i class="fa-solid fa-comment-dots"></i></a>
  </div>

  <script src="../assets/js/common.js"></script>
  <script src="../assets/js/goals-data.js"></script>
  <script src="../assets/js/goals-page.js"></script>
</body>
</html>
`;

// 3. CSS FILE
const newCss = `
/* DESIGN TOKENS */
:root {
  --bg: #0A0D14;
  --surface: #111623;
  --surface-2: #171D2E;
  --border: rgba(255,255,255,0.08);
  --text: #E8ECF4;
  --text-muted: #9AA4B8;
  --primary: #5B8CFF;
  --accent: #2DD4A7;
  --warning: #FFB86B;
  --gradient: linear-gradient(120deg, var(--primary), var(--accent));
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-heading: 'Space Grotesk', sans-serif;
}

[data-theme="light"] {
  --bg: #F6F8FC;
  --surface: #FFFFFF;
  --surface-2: #F0F3F9;
  --border: rgba(0,0,0,0.08);
  --text: #0F1626;
  --text-muted: #64748B;
  --primary: #3B82F6;
  --accent: #10B981;
  --warning: #F59E0B;
}

body.sa-path-page {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(91, 140, 255, 0.04) 0%, transparent 50%),
    radial-gradient(circle at 85% 30%, rgba(45, 212, 167, 0.04) 0%, transparent 50%);
}

.mono { font-family: var(--font-mono); }
.text-gradient {
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

/* LAYOUT */
.sa-layout {
  display: grid;
  grid-template-columns: 264px 1fr;
  gap: 40px;
  max-width: 1320px;
  margin: 0 auto;
  padding: 88px 24px 40px; /* 64px navbar + 24px padding */
  align-items: start;
}

/* SIDEBAR */
.sa-sidebar {
  position: sticky;
  top: 88px;
  height: calc(100vh - 112px);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
  transition: width 0.3s ease;
}
.sa-sidebar::-webkit-scrollbar { width: 4px; }
.sa-sidebar::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }

.sidebar-header {
  padding: 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 16px;
}
.sidebar-progress-ring {
  width: 56px; height: 56px;
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.sidebar-progress-ring svg { width: 100%; height: 100%; transform: rotate(-90deg); position: absolute; top:0; left:0;}
.ring-bg { fill: none; stroke: var(--surface-2); stroke-width: 3; }
.ring-fill { fill: none; stroke: url(#gradient-ring); stroke-width: 3; stroke-linecap: round; transition: stroke-dasharray 1s ease; }
#sb-progress-text { font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; z-index: 1; }
.sidebar-header-text { display: flex; flex-direction: column; gap: 4px; }
.sidebar-header-text strong { font-size: 0.95rem; }
.sidebar-header-text span { font-size: 0.75rem; color: var(--text-muted); }

.sidebar-nav {
  padding: 16px 0;
  flex: 1;
  position: relative;
}
.nav-scroll-indicator {
  position: absolute;
  left: 0; top: 16px;
  width: 3px; height: 48px;
  background: var(--gradient);
  border-radius: 0 4px 4px 0;
  transition: transform 0.2s ease;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  position: relative;
}
.nav-item i { width: 20px; text-align: center; }
.nav-item .badge { margin-left: auto; background: var(--surface-2); padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text); }
.nav-item:hover { color: var(--text); background: rgba(255,255,255,0.02); }
.nav-item.is-active { color: var(--text); background: var(--surface-2); }
.nav-item.is-active .badge { background: var(--primary); }

.nav-sub-items {
  display: flex;
  flex-direction: column;
  padding: 8px 24px 8px 56px;
  gap: 8px;
  display: none;
}
.nav-item.is-active + .nav-sub-items { display: flex; }
.nav-filter {
  background: none; border: none; padding: 0; color: var(--text-muted); text-align: left;
  font-size: 0.85rem; cursor: pointer; transition: color 0.2s;
}
.nav-filter:hover { color: var(--text); }
.nav-filter.active { color: var(--accent); font-weight: 600; }

.sidebar-footer {
  padding: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.sidebar-footer p { margin: 0; font-size: 0.75rem; color: var(--text-muted); }
.btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); padding: 10px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-decoration: none; text-align: center; display: inline-block;}
.btn-outline:hover { border-color: var(--text); }
.btn-sm { padding: 8px 12px; font-size: 0.8rem; }
.btn-toggle-sidebar { position: absolute; right: 16px; bottom: 24px; background: var(--surface-2); border: 1px solid var(--border); color: var(--text); width: 32px; height: 32px; border-radius: 8px; cursor: pointer; display: none; }

/* RAIL MODE */
.sa-sidebar.is-collapsed { width: 80px; }
.sa-sidebar.is-collapsed .sidebar-header-text, 
.sa-sidebar.is-collapsed .nav-item span,
.sa-sidebar.is-collapsed .nav-sub-items,
.sa-sidebar.is-collapsed .sidebar-footer p,
.sa-sidebar.is-collapsed .sidebar-footer .btn-outline { display: none; }
.sa-sidebar.is-collapsed .sidebar-header { padding: 24px 12px; justify-content: center; }
.sa-sidebar.is-collapsed .nav-item { padding: 12px; justify-content: center; }
.sa-sidebar.is-collapsed .nav-item i { width: auto; font-size: 1.2rem; }
.sa-sidebar.is-collapsed .nav-scroll-indicator { top: 16px; }

/* MAIN CONTENT */
.sa-content {
  max-width: 1000px;
  width: 100%;
}
.sa-section { margin-bottom: 80px; scroll-margin-top: 100px; }
.section-header { margin-bottom: 32px; display: flex; align-items: flex-end; justify-content: space-between; flex-wrap: wrap; gap: 16px;}
.section-header h2 { font-family: var(--font-heading); font-size: 2rem; margin: 0 0 8px; }
.section-header p { margin: 0; color: var(--text-muted); }

/* OVERVIEW */
.overview-hero { margin-bottom: 40px; }
.hero-label { font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.1em; margin-bottom: 16px; display: block;}
.overview-hero h1 { font-family: var(--font-heading); font-size: clamp(2.25rem, 4vw, 3.5rem); margin: 0 0 16px; line-height: 1.1; }
.hero-desc { font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 0 32px; line-height: 1.6; }
.hero-cta { display: flex; gap: 16px; }
.btn-primary { background: var(--gradient); color: #000; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: transform 0.2s; display: inline-block;}
.btn-primary:hover { transform: translateY(-2px); }

.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; margin-bottom: 32px; }
.stat-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 8px; }
.stat-header { font-size: 0.85rem; color: var(--text-muted); font-weight: 600;}
.stat-value { font-family: var(--font-mono); font-size: 2rem; font-weight: 700; margin: 8px 0;}
.stat-desc { font-size: 0.75rem; color: var(--text-muted); }

.stage-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 24px; }
.stage-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;}
.stage-header h3 { margin: 0; font-size: 1.1rem; }
.stage-header span { font-size: 0.85rem; color: var(--accent); }
.stage-progress { height: 8px; background: var(--surface-2); border-radius: 4px; overflow: hidden; margin-bottom: 16px; }
.progress-fill { height: 100%; background: var(--gradient); transition: width 1s cubic-bezier(0.22, 1, 0.36, 1); }
.stage-next { margin: 0; font-size: 0.9rem; color: var(--text-muted); }

/* OBJECTIVES */
.goals-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; align-items: stretch; }
.goal-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; transition: all 0.3s ease; position: relative; overflow: hidden; }
.goal-card:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
.goal-card.hoan-thanh:hover { border-color: var(--accent); }
.goal-card.dang-thuc-hien:hover { border-color: var(--primary); }
.goal-card.qua-han:hover { border-color: var(--warning); }
.goal-header { display: flex; gap: 16px; margin-bottom: 16px; align-items: flex-start; }
.goal-icon { width: 40px; height: 40px; border-radius: 10px; background: var(--surface-2); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; color: var(--text); }
.goal-title { margin: 0; font-size: 1.1rem; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.goal-desc { color: var(--text-muted); font-size: 0.9rem; margin: 0 0 24px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;}
.goal-meta { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 12px; }
.goal-deadline { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); }
.status-badge { font-size: 0.65rem; font-weight: 700; padding: 4px 8px; border-radius: 4px; letter-spacing: 0.05em; text-transform: uppercase; }
.st-hoan-thanh { color: var(--accent); background: rgba(45,212,167,0.1); }
.st-dang-thuc-hien { color: var(--primary); background: rgba(91,140,255,0.1); }
.st-ke-hoach { color: var(--text-muted); background: var(--surface-2); }
.st-qua-han { color: var(--warning); background: rgba(255,184,107,0.1); }
.goal-progress-bar { height: 6px; background: var(--surface-2); border-radius: 3px; overflow: hidden; margin-bottom: 8px;}
.goal-progress-fill { height: 100%; transition: width 1s cubic-bezier(0.22, 1, 0.36, 1); }
.hoan-thanh .goal-progress-fill { background: var(--accent); }
.dang-thuc-hien .goal-progress-fill { background: var(--primary); }
.qua-han .goal-progress-fill { background: var(--warning); }
.ke-hoach .goal-progress-fill { background: var(--text-muted); }
.goal-progress-text { font-family: var(--font-mono); font-size: 0.8rem; text-align: right; }
.controls select { background: var(--surface); color: var(--text); border: 1px solid var(--border); padding: 8px 12px; border-radius: 8px; outline: none;}

/* ROADMAP */
.roadmap-container { display: flex; gap: 0; margin-bottom: 40px; overflow-x: auto; padding-bottom: 16px;}
.roadmap-item { flex: 1; min-width: 200px; position: relative; padding-top: 32px; }
.roadmap-item::before { content: ''; position: absolute; top: 7px; left: 0; width: 100%; height: 2px; background: var(--surface-2); z-index: 1;}
.roadmap-item:last-child::before { width: 50%; }
.roadmap-item:first-child::before { width: 50%; left: 50%; }
.rm-dot { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 16px; height: 16px; border-radius: 50%; background: var(--surface); border: 2px solid var(--border); z-index: 2; transition: all 0.3s;}
.roadmap-item.hoan-thanh .rm-dot { background: var(--accent); border-color: var(--accent); }
.roadmap-item.hoan-thanh::before { background: var(--accent); }
.roadmap-item.dang-thuc-hien .rm-dot { background: var(--primary); border-color: var(--primary); box-shadow: 0 0 10px var(--primary); animation: pulse 2s infinite;}
.roadmap-item.dang-thuc-hien::before { background: linear-gradient(90deg, var(--accent), var(--surface-2)); }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(91,140,255,0.4); } 70% { box-shadow: 0 0 0 10px rgba(91,140,255,0); } 100% { box-shadow: 0 0 0 0 rgba(91,140,255,0); } }
.rm-content { text-align: center; padding: 0 16px; }
.rm-year { font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-bottom: 8px; display: block;}
.rm-content h3 { font-size: 1.05rem; margin: 0 0 8px; }
.rm-content p { font-size: 0.85rem; color: var(--text-muted); margin: 0 0 12px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;}

.subsection-title { font-family: var(--font-heading); font-size: 1.4rem; margin-bottom: 24px; }
.topics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; }
.topic-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 20px; }
.topic-header { display: flex; justify-content: space-between; margin-bottom: 12px; }
.topic-label { font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.1em; color: var(--text-muted); }
.topic-card h4 { margin: 0 0 8px; font-size: 1.05rem; }
.topic-card p { margin: 0 0 16px; font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; }
.topic-progress-bg { height: 4px; background: var(--surface-2); border-radius: 2px; }
.topic-progress-fill { height: 100%; background: var(--text-muted); border-radius: 2px; transition: width 1s ease;}
.topic-card.hoan-thanh .topic-progress-fill { background: var(--accent); }
.topic-card.dang-thuc-hien .topic-progress-fill { background: var(--primary); }

/* CAPABILITIES */
.capabilities-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: stretch; }
.cap-card { background: var(--surface); border: 1px solid var(--border); border-radius: 16px; padding: 32px; display: flex; flex-direction: column; }
.cap-card h3 { font-family: var(--font-heading); font-size: 1.4rem; margin: 0 0 24px; }
.cap-right-col { display: flex; flex-direction: column; gap: 24px; }
.radar-container { display: flex; align-items: center; gap: 24px; margin-bottom: 24px; flex-grow:1;}
#radar-chart { width: 200px; height: 200px; }
.radar-legend { display: flex; flex-direction: column; gap: 8px; flex: 1; }
.legend-item { display: flex; justify-content: space-between; font-size: 0.85rem; }
.legend-val { font-family: var(--font-mono); font-weight: 600; color: var(--primary); }
.cap-note { font-size: 0.8rem; color: var(--text-muted); margin: 0; text-align: center; }

.priority-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.priority-list li { display: flex; gap: 12px; align-items: flex-start; }
.priority-list input[type="checkbox"] { margin-top: 4px; accent-color: var(--accent); }
.priority-list strong { display: block; font-size: 0.95rem; margin-bottom: 4px; }
.priority-list span { display: block; font-size: 0.85rem; color: var(--text-muted); }

.comm-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.comm-stats { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.comm-number { font-size: 3rem; font-weight: 700; color: var(--primary); line-height: 1; }
.comm-stats span { font-size: 0.85rem; color: var(--text-muted); }
.comm-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 12px; }
.comm-list li { display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; padding: 12px; background: var(--surface-2); border-radius: 8px; }
.comm-list i { color: var(--primary); width: 24px; }
.comm-list .time { font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); }

/* FOOTER AREA */
.sa-footer-area { margin-top: 80px; border-top: 1px solid var(--border); padding-top: 40px; }
.sa-quote { margin: 0 0 40px; padding: 0; text-align: center; }
.quote-label { font-size: 0.75rem; color: var(--accent); letter-spacing: 0.1em; margin-bottom: 16px; text-transform: uppercase; }
.sa-quote p { font-family: var(--font-heading); font-size: 1.5rem; line-height: 1.4; max-width: 700px; margin: 0 auto 16px; }
.sa-quote cite { font-style: normal; color: var(--text-muted); font-size: 0.9rem; }
.sa-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
.footer-links { display: flex; gap: 24px; }
.footer-links a { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
.footer-links a:hover { color: var(--text); }
.footer-copy { font-size: 0.85rem; color: var(--text-muted); }

.fab-chat { position: fixed; bottom: 24px; right: 24px; width: 56px; height: 56px; background: var(--primary); color: #000; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; text-decoration: none; box-shadow: 0 4px 20px rgba(91,140,255,0.4); z-index: 100; transition: transform 0.2s;}
.fab-chat:hover { transform: scale(1.1); }

.mobile-bottom-bar { display: none; }
.mobile-filters { display: none; }

/* ANIMATIONS */
.reveal { opacity: 0; transform: translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
.reveal.is-visible { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  .progress-fill, .goal-progress-fill, .topic-progress-fill { transition: none; }
}

/* RESPONSIVE */
@media (max-width: 1279px) {
  .sa-sidebar { width: 80px; }
  .sa-sidebar .sidebar-header-text, .sa-sidebar .nav-item span, .sa-sidebar .nav-sub-items, .sa-sidebar .sidebar-footer p, .sa-sidebar .sidebar-footer .btn-outline { display: none; }
  .sa-sidebar .sidebar-header { padding: 24px 12px; justify-content: center; }
  .sa-sidebar .nav-item { padding: 12px; justify-content: center; }
  .sa-sidebar .nav-item i { width: auto; font-size: 1.2rem; }
  .sa-sidebar .nav-scroll-indicator { top: 16px; }
  .sa-layout { grid-template-columns: 80px 1fr; gap: 24px; }
}

@media (max-width: 1023px) {
  .sa-layout { grid-template-columns: 1fr; padding: 88px 16px 80px; }
  .sa-sidebar { display: none; }
  .mobile-bottom-bar { display: flex; position: fixed; bottom: 0; left: 0; width: 100%; background: var(--surface); border-top: 1px solid var(--border); z-index: 90; justify-content: space-around; padding: 12px 0 calc(12px + env(safe-area-inset-bottom)); backdrop-filter: blur(10px); background: rgba(17,22,35,0.9); }
  .mobile-bottom-bar .nav-item { display: flex; flex-direction: column; align-items: center; gap: 4px; color: var(--text-muted); text-decoration: none; font-size: 0.7rem; font-weight: 600; padding: 4px 12px; }
  .mobile-bottom-bar .nav-item.is-active { color: var(--primary); }
  .mobile-bottom-bar i { font-size: 1.2rem; }
  
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .capabilities-grid { grid-template-columns: 1fr; }
  .roadmap-container { flex-direction: column; gap: 24px; padding-left: 24px; border-left: 2px solid var(--surface-2); margin-left: 12px; }
  .roadmap-item { padding-top: 0; padding-left: 24px; text-align: left; }
  .roadmap-item::before { display: none; }
  .rm-dot { left: -34px; top: 0; transform: none; }
  .rm-content { padding: 0; text-align: left; }
  
  .mobile-filters { display: flex; overflow-x: auto; gap: 8px; padding-bottom: 8px; margin-top: 16px; scrollbar-width: none; width: 100%;}
  .mobile-filters button { white-space: nowrap; background: var(--surface-2); border: 1px solid var(--border); color: var(--text-muted); padding: 6px 16px; border-radius: 16px; font-size: 0.85rem; cursor: pointer;}
  .mobile-filters button.active { background: var(--primary); color: #000; border-color: var(--primary); font-weight: 600;}
  .section-header { flex-direction: column; align-items: flex-start; }
  .fab-chat { bottom: 90px; }
}

@media (max-width: 639px) {
  .stats-grid { grid-template-columns: 1fr; }
  .goals-container { grid-template-columns: 1fr; }
  .radar-container { flex-direction: column; }
  .sa-footer { flex-direction: column; text-align: center; }
}
`;

// 4. JS FILE
const newJs = `
document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Dữ liệu
    const renderData = () => {
        // Hero
        document.getElementById('hero-date').textContent = "cập nhật " + SA_DATA.overview.lastUpdated;
        document.getElementById('sb-last-update').textContent = "Cập nhật: " + SA_DATA.overview.lastUpdated;

        // Stats
        const totalGoals = SA_DATA.goals.length;
        const activeGoals = SA_DATA.goals.filter(g => g.status === 'dang-thuc-hien').length;
        const completedGoals = SA_DATA.goals.filter(g => g.status === 'hoan-thanh').length;
        const avgProgress = Math.round(SA_DATA.goals.reduce((acc, g) => acc + g.progress, 0) / totalGoals);
        const milestones = SA_DATA.roadmap.filter(r => r.status === 'hoan-thanh').length;
        const capabilities = SA_DATA.capabilities.radar.length;

        document.getElementById('stat-avg').textContent = avgProgress + '%';
        document.getElementById('stat-active-goals').textContent = activeGoals + '/' + totalGoals;
        document.getElementById('stat-milestones').textContent = milestones;
        document.getElementById('stat-capabilities').textContent = capabilities;
        
        // Sidebar counts
        document.getElementById('sb-goals-count').textContent = totalGoals;
        document.getElementById('sb-roadmap-count').textContent = SA_DATA.roadmap.length;
        document.getElementById('sb-cap-count').textContent = capabilities;
        
        // Sidebar ring
        const ringFill = document.getElementById('sb-ring');
        setTimeout(() => {
            ringFill.style.strokeDasharray = avgProgress + ', 100';
            document.getElementById('sb-progress-text').textContent = avgProgress + '%';
        }, 300);

        // Stage progress (just visual approx based on milestones)
        const stageFill = document.getElementById('stage-progress-fill');
        setTimeout(() => { stageFill.style.width = '60%'; }, 500);

        // Render Goals
        renderGoals(SA_DATA.goals);

        // Render Roadmap
        const rmContainer = document.getElementById('roadmap-container');
        rmContainer.innerHTML = SA_DATA.roadmap.map((r, i) => \`
            <article class="roadmap-item \${r.status}">
                <div class="rm-dot"></div>
                <div class="rm-content">
                    <span class="rm-year">\${r.year}</span>
                    <h3>\${r.title}</h3>
                    <p>\${r.description}</p>
                    <span class="status-badge st-\${r.status}">\${getStatusText(r.status)}</span>
                </div>
            </article>
        \`).join('');

        // Render Topics
        const topicsGrid = document.getElementById('topics-grid');
        topicsGrid.innerHTML = SA_DATA.topics.map(t => \`
            <div class="topic-card \${t.status} reveal">
                <div class="topic-header">
                    <span class="topic-label">\${t.title}</span>
                    <span class="status-badge st-\${t.status}">\${getStatusText(t.status)}</span>
                </div>
                <h4>\${t.name}</h4>
                <p>\${t.desc}</p>
                <div class="topic-progress-bg">
                    <div class="topic-progress-fill" style="width: 0" data-width="\${t.progress}%"></div>
                </div>
            </div>
        \`).join('');

        // Radar Chart (Simple SVG generation)
        renderRadar(SA_DATA.capabilities.radar);

        // Comm logs
        document.getElementById('comm-minutes').textContent = SA_DATA.capabilities.communication.minutes;
        document.getElementById('comm-list').innerHTML = SA_DATA.capabilities.communication.sessions.map(s => \`
            <li>
                <div style="display:flex; gap:12px; align-items:center;">
                    <i class="fa-solid \${s.icon}"></i>
                    <span>\${s.name}</span>
                </div>
                <span class="time">\${s.duration} phút</span>
            </li>
        \`).join('');
    };

    const getStatusText = (status) => {
        const map = { 'hoan-thanh': 'Hoàn thành', 'dang-thuc-hien': 'Đang thực hiện', 'ke-hoach': 'Kế hoạch', 'qua-han': 'Quá hạn · Cần chú ý' };
        return map[status] || status;
    };

    const getIcon = (cat) => {
        const map = { 'hoc-tap': 'fa-book-open', 'ky-nang': 'fa-code', 'su-nghiep': 'fa-briefcase', 'cuoc-song': 'fa-heart' };
        return map[cat] || 'fa-star';
    };

    const renderGoals = (goals) => {
        const container = document.getElementById('goals-container');
        container.innerHTML = goals.map(g => {
            // Auto check overdue
            let status = g.status;
            if (new Date(g.deadline) < new Date() && status !== 'hoan-thanh') {
                status = 'qua-han';
            }
            return \`
            <article class="goal-card \${status} reveal">
                <div class="goal-header">
                    <div class="goal-icon"><i class="fa-solid \${getIcon(g.category)}"></i></div>
                    <h3 class="goal-title">\${g.title}</h3>
                </div>
                <p class="goal-desc">\${g.description}</p>
                <div class="goal-meta">
                    <span class="status-badge st-\${status}">\${getStatusText(status)}</span>
                    <span class="goal-deadline">\${g.deadline}</span>
                </div>
                <div class="goal-progress-bar">
                    <div class="goal-progress-fill" style="width: 0" data-width="\${g.progress}%"></div>
                </div>
                <div class="goal-progress-text">\${g.progress}%</div>
            </article>
        \`}).join('');
        
        // Trigger progress animation after slight delay
        setTimeout(() => {
            document.querySelectorAll('.goal-progress-fill, .topic-progress-fill').forEach(el => {
                el.style.width = el.getAttribute('data-width');
            });
        }, 100);
    };

    const renderRadar = (data) => {
        const svg = document.getElementById('radar-chart');
        const legend = document.getElementById('radar-legend');
        const cx = 100, cy = 100, r = 80;
        const max = Math.PI * 2;
        const len = data.length;
        
        // Draw grid
        for(let j=1; j<=4; j++){
            let points = "";
            for(let i=0; i<len; i++){
                const angle = (Math.PI / 2) - (max * i / len);
                const x = cx + Math.cos(angle) * (r * j / 4);
                const y = cy - Math.sin(angle) * (r * j / 4);
                points += \`\${x},\${y} \`;
            }
            svg.innerHTML += \`<polygon points="\${points}" fill="none" stroke="rgba(255,255,255,0.08)" />\`;
        }
        // Draw axes
        for(let i=0; i<len; i++){
            const angle = (Math.PI / 2) - (max * i / len);
            const x = cx + Math.cos(angle) * r;
            const y = cy - Math.sin(angle) * r;
            svg.innerHTML += \`<line x1="\${cx}" y1="\${cy}" x2="\${x}" y2="\${y}" stroke="rgba(255,255,255,0.08)" />\`;
        }
        
        // Draw data polygon
        let dataPoints = "";
        let circles = "";
        data.forEach((d, i) => {
            const angle = (Math.PI / 2) - (max * i / len);
            const valR = r * (d.value / 100);
            const x = cx + Math.cos(angle) * valR;
            const y = cy - Math.sin(angle) * valR;
            dataPoints += \`\${x},\${y} \`;
            circles += \`<circle cx="\${x}" cy="\${y}" r="3" fill="#5B8CFF" />\`;
        });
        
        svg.innerHTML += \`<polygon points="\${dataPoints}" fill="rgba(91,140,255,0.2)" stroke="#5B8CFF" stroke-width="2" />\`;
        svg.innerHTML += circles;

        // Legend
        legend.innerHTML = data.map(d => \`
            <div class="legend-item">
                <span>\${d.name}</span>
                <span class="legend-val">\${d.value}%</span>
            </div>
        \`).join('');
    };

    renderData();

    // 2. Scroll Spy & Intersection Observer
    const sections = document.querySelectorAll('.sa-section');
    const navItems = document.querySelectorAll('.sidebar-nav .nav-item, .mobile-bottom-bar .nav-item');
    const navIndicator = document.getElementById('nav-indicator');

    const updateActiveNav = (id) => {
        navItems.forEach(item => {
            item.classList.remove('is-active');
            item.setAttribute('aria-current', 'false');
            if (item.getAttribute('data-target') === id) {
                item.classList.add('is-active');
                item.setAttribute('aria-current', 'true');
                if (navIndicator && item.closest('.sidebar-nav')) {
                    navIndicator.style.transform = \`translateY(\${item.offsetTop - 16}px)\`;
                }
            }
        });
        if(history.replaceState) {
            history.replaceState(null, null, '#' + id);
        }
    };

    const observer = new IntersectionObserver((entries) => {
        let maxVisible = null;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!maxVisible || entry.intersectionRatio > maxVisible.intersectionRatio) {
                    maxVisible = entry;
                }
            }
        });
        if (maxVisible) {
            updateActiveNav(maxVisible.target.id);
        }
    }, { rootMargin: '-100px 0px -40% 0px', threshold: [0, 0.2, 0.5, 0.8] });

    sections.forEach(sec => observer.observe(sec));

    // Keyboard shortcuts 1-4
    document.addEventListener('keydown', (e) => {
        if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const map = { '1': 'tong-quan', '2': 'muc-tieu', '3': 'lo-trinh', '4': 'nang-luc' };
        if (map[e.key]) {
            const target = document.getElementById(map[e.key]);
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 3. Filters & Sorting
    const initFilters = () => {
        const filterBtns = document.querySelectorAll('.nav-filter, .mobile-filters button');
        // clone sidebar filters to mobile
        const mobileFilters = document.getElementById('mobile-filters');
        if(mobileFilters && mobileFilters.innerHTML.trim() === "") {
            mobileFilters.innerHTML = document.querySelector('.nav-sub-items').innerHTML;
        }

        document.querySelectorAll('.nav-filter, .mobile-filters button').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.target.getAttribute('data-filter');
                document.querySelectorAll('.nav-filter, .mobile-filters button').forEach(b => b.classList.remove('active'));
                document.querySelectorAll(\`[data-filter="\${cat}"]\`).forEach(b => b.classList.add('active'));
                
                let filtered = SA_DATA.goals;
                if (cat !== 'all') {
                    filtered = SA_DATA.goals.filter(g => g.category === cat);
                }
                
                // Keep sort
                const sortVal = document.getElementById('goal-sort').value;
                sortGoals(filtered, sortVal);
                
                // Scroll to goals section smoothly
                document.getElementById('muc-tieu').scrollIntoView({ behavior: 'smooth' });
            });
        });

        document.getElementById('goal-sort').addEventListener('change', (e) => {
            const activeCat = document.querySelector('.nav-filter.active').getAttribute('data-filter');
            let filtered = SA_DATA.goals;
            if (activeCat !== 'all') filtered = SA_DATA.goals.filter(g => g.category === activeCat);
            sortGoals(filtered, e.target.value);
        });
    };

    const sortGoals = (goals, sortType) => {
        const sorted = [...goals];
        if (sortType === 'progress') sorted.sort((a,b) => b.progress - a.progress);
        else if (sortType === 'deadline') sorted.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));
        else if (sortType === 'group') sorted.sort((a,b) => a.category.localeCompare(b.category));
        renderGoals(sorted);
    };
    initFilters();

    // 4. Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
});
`;

fs.writeFileSync(dataJsPath, dataJsContent);
fs.writeFileSync(htmlPath, newHtml);
fs.writeFileSync(cssPath, newCss);
fs.writeFileSync(jsPath, newJs);

console.log("Refactored muctieu page successfully!");
