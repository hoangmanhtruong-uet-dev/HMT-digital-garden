const fs = require('fs');
const path = require('path');

const basePath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static';
const htmlPath = path.join(basePath, 'pages/about.html');
const cssPath = path.join(basePath, 'assets/css/about-redesign.css');
const jsPath = path.join(basePath, 'assets/js/about-redesign.js');

// Extract Navbar and Theme Toggle from existing HTML
let htmlContent = '';
if(fs.existsSync(htmlPath)) {
    htmlContent = fs.readFileSync(htmlPath, 'utf8');
}
const navMatch = htmlContent.match(/<nav class="navbar-unified"[^>]*>[\s\S]*?<\/nav>/);
const navbar = navMatch ? navMatch[0] : '';

// 1. New HTML Content
const newHtml = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hồ sơ cá nhân, hành trình, kỹ năng và góc chia sẻ của Hoàng Mạnh Trường.">
    <title>Trang Cá Nhân — Hoàng Mạnh Trường</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="../assets/css/style.css">
    <link rel="stylesheet" href="../assets/css/common.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="../assets/css/about-redesign.css">
</head>
<body class="about-redesign-page" data-theme="dark">
    ${navbar}

    <!-- Background Elements -->
    <div class="ar-bg-mesh"></div>

    <main class="ar-main-container">
        <!-- 1. HERO SECTION -->
        <section class="ar-hero">
            <div class="ar-hero-content reveal">
                <div class="ar-eyebrow mono type-effect">>_ SOFTWARE ENGINEER & TECH EDUCATOR<span class="cursor">_</span></div>
                <h1 class="ar-h1">Xây dựng hệ thống.<br><span class="text-gradient">Truyền cảm hứng công nghệ.</span></h1>
                <p class="ar-hero-bio">Sinh viên CNTT tại UET – ĐHQGHN. Tập trung nghiên cứu kiến trúc backend hiệu năng cao, cơ sở dữ liệu phân tán và lan tỏa tư duy lập trình thông qua giảng dạy.</p>
                <div class="ar-hero-actions">
                    <a href="projects.html" class="button button-item ar-btn-override">
                      <span class="button-bg">
                        <span class="button-bg-layers">
                          <span class="button-bg-layer button-bg-layer-1 -purple"></span>
                          <span class="button-bg-layer button-bg-layer-2 -turquoise"></span>
                          <span class="button-bg-layer button-bg-layer-3 -yellow"></span>
                        </span>
                      </span>
                      <span class="button-inner">
                        <span class="button-inner-static">Xem dự án</span>
                        <span class="button-inner-hover" style="color: #1d1d1f">Xem dự án</span>
                      </span>
                    </a>
                    <a href="#" class="ar-btn-outline"><i class="fa-solid fa-download"></i> Tải CV</a>
                </div>
            </div>
            
            <div class="ar-hero-visual reveal" style="transition-delay: 0.2s">
                <div class="squircle-avatar-wrapper">
                    <div class="squircle-avatar">
                        <img src="../assets/images/profile-new.jpg" alt="Hoàng Mạnh Trường" onerror="this.src='https://images.unsplash.com/photo-1531297172867-a12034104c13?w=500&h=500&fit=crop'">
                    </div>
                    <div class="floating-code-card tilt-effect">
                        <div class="code-header">
                            <span class="mac-btn close"></span>
                            <span class="mac-btn min"></span>
                            <span class="mac-btn max"></span>
                            <span class="code-title mono">Dev.java</span>
                        </div>
                        <pre class="mono"><code><span class="keyword">@Service</span>
<span class="keyword">public class</span> <span class="class-name">Dev</span> {
    <span class="keyword">String</span> <span class="variable">role</span> = <span class="string">"Backend"</span>;
}</code></pre>
                    </div>
                </div>
            </div>
        </section>

        <!-- 2. STATS BENTO -->
        <section class="ar-stats-bento">
            <div class="bento-grid">
                <div class="bento-card bento-large reveal">
                    <div class="bento-content">
                        <h3 class="mono text-gradient">27.75đ & Giải Nhì QG</h3>
                        <p>Thủ khoa khối A01 toàn trường THPT. Xuất sắc giành Giải Nhì kỳ thi HSG cấp Tỉnh.</p>
                    </div>
                    <i class="fa-solid fa-award bento-bg-icon"></i>
                </div>
                <div class="bento-card bento-vertical reveal" style="transition-delay: 0.1s">
                    <div class="bento-content">
                        <h3 class="mono text-accent">2+ Năm</h3>
                        <p>Giảng dạy lập trình & Toán Lý</p>
                    </div>
                </div>
                <div class="bento-card bento-horizontal reveal" style="transition-delay: 0.2s">
                    <div class="bento-content">
                        <h3 class="mono text-primary">10+ Dự án</h3>
                        <p>Focus Stack: Java, Spring Boot, Postgres</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3. DUAL IDENTITY (SPLIT SCREEN) -->
        <section class="ar-dual-track">
            <h2 class="section-heading text-center reveal">Bản sắc kép</h2>
            <div class="dual-container">
                <!-- Left: Backend -->
                <div class="track-pane track-backend reveal">
                    <div class="pane-header">
                        <i class="fa-solid fa-server pane-icon text-primary"></i>
                        <h3 class="track-title text-primary">01. Backend Engineer</h3>
                    </div>
                    <p class="track-desc">Tư duy hệ thống, tối ưu hiệu năng và thiết kế cơ sở dữ liệu phân tán. Định hướng Solutions Architect.</p>
                    <div class="tech-tags">
                        <span><i class="fa-brands fa-java"></i> Java</span>
                        <span><i class="fa-solid fa-leaf"></i> Spring Boot</span>
                        <span><i class="fa-solid fa-database"></i> PostgreSQL</span>
                        <span><i class="fa-brands fa-docker"></i> Docker</span>
                    </div>
                    <div class="pane-visual">
                        <div class="mock-terminal mono">
                            <div class="term-line"><span class="prompt">$</span> docker-compose up -d</div>
                            <div class="term-line success">Starting db_postgres ... done</div>
                            <div class="term-line success">Starting api_service ... done</div>
                            <div class="term-line"><span class="prompt">$</span> curl -X GET api/health</div>
                            <div class="term-line success">{"status":"UP"}</div>
                        </div>
                    </div>
                </div>

                <!-- Right: Educator -->
                <div class="track-pane track-educator reveal" style="transition-delay: 0.2s">
                    <div class="pane-header">
                        <i class="fa-solid fa-chalkboard-user pane-icon text-accent"></i>
                        <h3 class="track-title text-accent">02. Tech Educator</h3>
                    </div>
                    <p class="track-desc">Biến kiến thức phức tạp thành lộ trình dễ hiểu. Truyền đạt tư duy lập trình và bản chất vấn đề.</p>
                    <div class="tech-tags">
                        <span>Mentoring</span>
                        <span>Code Review</span>
                        <span>Roadmap Design</span>
                    </div>
                    <div class="pane-visual">
                        <ul class="edu-features">
                            <li>
                                <div class="edu-icon"><i class="fa-solid fa-check"></i></div>
                                <div><strong>Dạy qua dự án thực tế</strong><br><span>Học đi đôi với hành, build sản phẩm ngay.</span></div>
                            </li>
                            <li>
                                <div class="edu-icon"><i class="fa-solid fa-check"></i></div>
                                <div><strong>Lộ trình cá nhân hóa</strong><br><span>Bám sát mục tiêu và điểm yếu của từng học viên.</span></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- 4. TIMELINE -->
        <section class="ar-timeline-section">
            <h2 class="section-heading text-center reveal">Hành trình phát triển</h2>
            <div class="central-timeline">
                <div class="timeline-line"></div>
                
                <div class="timeline-item left reveal">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="time mono">2024 - Hiện tại</div>
                        <h3>Sinh viên UET - ĐHQGHN</h3>
                        <p>Khoa Công nghệ thông tin. Tập trung nghiên cứu kiến trúc hệ thống và cơ sở dữ liệu.</p>
                    </div>
                </div>
                
                <div class="timeline-item right reveal" style="transition-delay: 0.1s">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="time mono">[CẦN ĐIỀN NĂM] - Hiện tại</div>
                        <h3>Gia sư Lập trình & Toán Lý</h3>
                        <p>Đồng hành cùng học sinh chinh phục mục tiêu Đại học và sinh viên nắm vững nền tảng lập trình.</p>
                    </div>
                </div>

                <div class="timeline-item left reveal" style="transition-delay: 0.2s">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content">
                        <div class="time mono">Trước 2024</div>
                        <h3>Học sinh chuyên & Cột mốc</h3>
                        <p>Giải Nhì HSG cấp Tỉnh môn [CẦN ĐIỀN]. Rèn luyện tư duy logic và giải quyết vấn đề.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. PROJECTS SHOWCASE -->
        <section class="ar-showcase">
            <h2 class="section-heading text-center reveal">Dự án tiêu biểu</h2>
            
            <div class="showcase-item reveal">
                <div class="showcase-info">
                    <div class="showcase-label mono text-gradient">LATEST PROJECT</div>
                    <h3>SA.Path Dashboard</h3>
                    <p>Hệ thống theo dõi lộ trình nghề nghiệp cá nhân, quản lý mục tiêu kỹ thuật, đánh giá năng lực và tích hợp radar chart tự động.</p>
                    <div class="showcase-tags">
                        <span>Java</span><span>Spring Boot</span><span>JS</span>
                    </div>
                    <a href="muctieu.html" class="ar-link">Xem chi tiết <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div class="showcase-image parallax-container tilt-effect">
                    <img src="../assets/images/sa-path-mockup.jpg" alt="SA Path" class="parallax-img" onerror="this.src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'">
                </div>
            </div>

            <!-- Add more projects here as needed -->
        </section>
    </main>

    <footer class="sa-footer reveal">
        <div class="footer-links">
            <a href="mailto:truongcri0101@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
            <a href="https://github.com/Mtruong2004"><i class="fa-brands fa-github"></i> GitHub</a>
            <a href="#"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        </div>
        <div class="footer-copy">
            &copy; 2026 Hoàng Mạnh Trường. Tư duy hệ thống - Lan tỏa tri thức.
        </div>
    </footer>

    <script src="../assets/js/common.js"></script>
    <script src="../assets/js/about-redesign.js"></script>
</body>
</html>`;

// 2. New CSS Content (about-redesign.css)
const newCss = `
/* DESIGN TOKENS */
:root {
  --bg: #090A0F; /* Midnight Void */
  --surface: #12141C;
  --surface-2: #1A1D27;
  --border: rgba(255,255,255,0.05);
  --border-hover: rgba(255,255,255,0.15);
  --text: #E8ECF4;
  --text-muted: #9AA4B8;
  
  --primary: #3b82f6; /* Blue */
  --primary-glow: rgba(59, 130, 246, 0.4);
  --accent: #f59e0b; /* Amber/Orange for Educator */
  --accent-glow: rgba(245, 158, 11, 0.4);
  --secondary: #8b5cf6; /* Purple */
  
  --gradient-main: linear-gradient(120deg, var(--primary), var(--secondary));
  
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-heading: 'Space Grotesk', sans-serif;
}

[data-theme="light"] {
  --bg: #F8FAFC;
  --surface: #FFFFFF;
  --surface-2: #F1F5F9;
  --border: rgba(0,0,0,0.08);
  --border-hover: rgba(0,0,0,0.15);
  --text: #0F172A;
  --text-muted: #64748B;
  --primary: #2563EB;
  --accent: #D97706;
  --secondary: #7C3AED;
}

body.about-redesign-page {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  line-height: 1.6;
}

.mono { font-family: var(--font-mono); }
.text-gradient {
  background: var(--gradient-main);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.text-primary { color: var(--primary) !important; }
.text-accent { color: var(--accent) !important; }
.text-center { text-align: center; }

/* BACKGROUND MESH */
.ar-bg-mesh {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: -1;
  background-image: 
    radial-gradient(circle at 20% 30%, var(--primary-glow) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, var(--accent-glow) 0%, transparent 40%);
  opacity: 0.5;
  filter: blur(80px);
  pointer-events: none;
}

.ar-main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 24px 40px;
}

.section-heading {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
}

/* 1. HERO SECTION */
.ar-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  min-height: 80vh;
  padding-bottom: 4rem;
}
.ar-hero-content {
  flex: 1;
  max-width: 600px;
}
.ar-eyebrow {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}
.ar-eyebrow .cursor {
  display: inline-block;
  width: 8px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.ar-h1 {
  font-family: var(--font-heading);
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  margin: 0 0 1.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.ar-hero-bio {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
}
.ar-hero-actions {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}
.ar-btn-outline {
  display: inline-flex; align-items: center; justify-content: center;
  height: 3.5rem; padding: 0 2rem;
  border-radius: 9999px;
  border: 1px solid var(--border);
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  background: var(--surface);
  gap: 8px;
}
.ar-btn-outline:hover {
  border-color: var(--text);
  background: var(--surface-2);
}

.ar-hero-visual {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}
.squircle-avatar-wrapper {
  position: relative;
  width: 400px; height: 400px;
}
.squircle-avatar {
  width: 100%; height: 100%;
  border-radius: 40px; /* Squircle approx */
  overflow: hidden;
  position: relative;
  border: 1px solid var(--border);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}
.squircle-avatar::after {
  content: '';
  position: absolute; top:0; left:0; width:100%; height:100%;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
  border-radius: 40px;
  pointer-events: none;
}
.squircle-avatar img {
  width: 100%; height: 100%; object-fit: cover;
}
.floating-code-card {
  position: absolute;
  bottom: -20px; left: -40px;
  background: rgba(18, 20, 28, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
  transform-style: preserve-3d;
}
.code-header { display: flex; gap: 6px; margin-bottom: 12px; align-items: center;}
.mac-btn { width: 10px; height: 10px; border-radius: 50%; }
.mac-btn.close { background: #ff5f56; }
.mac-btn.min { background: #ffbd2e; }
.mac-btn.max { background: #27c93f; }
.code-title { margin-left: 8px; font-size: 0.75rem; color: var(--text-muted); }
.floating-code-card pre { margin: 0; font-size: 0.85rem; line-height: 1.5; }
.keyword { color: var(--secondary); }
.class-name { color: var(--accent); }
.variable { color: var(--text); }
.string { color: #a3be8c; }

/* 2. STATS BENTO */
.ar-stats-bento { margin-bottom: 8rem; }
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: 24px;
}
.bento-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 32px;
  position: relative;
  overflow: hidden;
  display: flex; flex-direction: column; justify-content: flex-end;
  transition: transform 0.3s, border-color 0.3s;
}
.bento-card:hover {
  transform: translateY(-4px);
  border-color: var(--border-hover);
}
.bento-content { position: relative; z-index: 2; }
.bento-card h3 {
  font-size: 2rem; margin: 0 0 8px; font-weight: 700;
}
.bento-card p { margin: 0; color: var(--text-muted); font-size: 0.9rem; }
.bento-large { grid-column: span 2; }
.bento-bg-icon {
  position: absolute; right: -20px; top: -20px;
  font-size: 10rem; color: rgba(255,255,255,0.02);
  z-index: 1; transform: rotate(15deg);
}

/* 3. DUAL IDENTITY */
.ar-dual-track { margin-bottom: 8rem; }
.dual-container {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
}
.track-pane {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 24px; padding: 40px;
  display: flex; flex-direction: column; gap: 24px;
  transition: transform 0.3s;
}
.track-pane:hover { transform: translateY(-4px); border-color: var(--border-hover); }
.pane-header { display: flex; align-items: center; gap: 16px; }
.pane-icon { font-size: 2rem; }
.track-title { font-family: var(--font-heading); font-size: 1.8rem; margin: 0; }
.track-desc { margin: 0; font-size: 1.05rem; color: var(--text-muted); }
.tech-tags { display: flex; flex-wrap: wrap; gap: 12px; }
.tech-tags span {
  padding: 6px 14px; background: var(--surface-2);
  border-radius: 99px; font-size: 0.85rem; border: 1px solid var(--border);
}
.pane-visual { margin-top: auto; padding-top: 24px; }
.mock-terminal {
  background: #000; border-radius: 12px; padding: 16px; font-size: 0.85rem;
  border: 1px solid var(--border);
}
.term-line { color: var(--text); margin-bottom: 4px; }
.term-line .prompt { color: var(--primary); margin-right: 8px; }
.term-line.success { color: var(--accent); }

.edu-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 16px; }
.edu-features li { display: flex; gap: 16px; align-items: flex-start; }
.edu-icon { width: 28px; height: 28px; border-radius: 50%; background: rgba(245, 158, 11, 0.1); color: var(--accent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;}
.edu-features strong { display: block; font-size: 1rem; color: var(--text); }
.edu-features span { display: block; font-size: 0.9rem; color: var(--text-muted); }

/* 4. TIMELINE */
.ar-timeline-section { margin-bottom: 8rem; }
.central-timeline { position: relative; max-width: 800px; margin: 0 auto; padding: 40px 0; }
.timeline-line {
  position: absolute; top: 0; bottom: 0; left: 50%;
  width: 2px; background: var(--border); transform: translateX(-50%);
}
.timeline-item {
  position: relative; width: 50%; padding: 0 40px; margin-bottom: 48px;
}
.timeline-item.left { left: 0; text-align: right; }
.timeline-item.right { left: 50%; text-align: left; }
.timeline-dot {
  position: absolute; top: 0; width: 16px; height: 16px;
  background: var(--bg); border: 2px solid var(--primary);
  border-radius: 50%; z-index: 2; transition: all 0.3s;
}
.timeline-item.left .timeline-dot { right: -8px; }
.timeline-item.right .timeline-dot { left: -8px; }
.timeline-item:hover .timeline-dot { background: var(--primary); box-shadow: 0 0 10px var(--primary-glow); }
.timeline-content .time { color: var(--primary); font-size: 0.85rem; margin-bottom: 8px; }
.timeline-content h3 { font-family: var(--font-heading); font-size: 1.4rem; margin: 0 0 8px; }
.timeline-content p { margin: 0; color: var(--text-muted); font-size: 0.95rem; }

/* 5. SHOWCASE */
.ar-showcase { margin-bottom: 8rem; }
.showcase-item {
  display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; align-items: center;
  margin-bottom: 60px;
}
.showcase-item:nth-child(even) { grid-template-columns: 1.2fr 1fr; }
.showcase-item:nth-child(even) .showcase-info { order: 2; }
.showcase-info { display: flex; flex-direction: column; gap: 16px; }
.showcase-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; }
.showcase-info h3 { font-family: var(--font-heading); font-size: 2.2rem; margin: 0; }
.showcase-info p { color: var(--text-muted); font-size: 1.1rem; margin: 0; }
.showcase-tags { display: flex; gap: 12px; }
.showcase-tags span { color: var(--text); font-size: 0.85rem; }
.ar-link { color: var(--text); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; transition: gap 0.3s; }
.ar-link:hover { gap: 12px; color: var(--primary); }
.showcase-image {
  border-radius: 24px; overflow: hidden; border: 1px solid var(--border);
  aspect-ratio: 16/10; position: relative;
}
.showcase-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.showcase-item:hover .showcase-image img { transform: scale(1.05); }

/* FOOTER */
.sa-footer {
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;
  padding: 40px 24px; border-top: 1px solid var(--border); max-width: 1200px; margin: 0 auto;
}
.footer-links { display: flex; gap: 24px; }
.footer-links a { color: var(--text-muted); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
.footer-links a:hover { color: var(--text); }
.footer-copy { font-size: 0.85rem; color: var(--text-muted); }

/* ANIMATIONS & EFFECTS */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

/* RESPONSIVE */
@media (max-width: 991px) {
  .ar-hero { flex-direction: column; text-align: center; padding-top: 40px; }
  .ar-hero-actions { justify-content: center; }
  .squircle-avatar-wrapper { width: 300px; height: 300px; }
  .floating-code-card { left: -10px; bottom: -10px; }
  .bento-grid { grid-template-columns: 1fr; grid-auto-rows: auto; }
  .bento-large { grid-column: span 1; }
  .dual-container { grid-template-columns: 1fr; }
  .showcase-item, .showcase-item:nth-child(even) { grid-template-columns: 1fr; }
  .showcase-item:nth-child(even) .showcase-info { order: 1; }
}

@media (max-width: 767px) {
  .central-timeline { padding-left: 20px; }
  .timeline-line { left: 20px; }
  .timeline-item.left, .timeline-item.right { width: 100%; left: 0; text-align: left; padding: 0 0 0 40px; }
  .timeline-item.left .timeline-dot, .timeline-item.right .timeline-dot { left: 12px; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal, .tilt-effect, .button-bg, .button-bg-layer, .parallax-img { transition: none !important; transform: none !important; opacity: 1 !important; }
}

/* =========================================
   NEW BUTTON HOVER EFFECT
   From Uiverse.io by OliverZeros
   ========================================= */
.button.ar-btn-override {
  all: unset; position: relative; display: inline-flex; height: 3.5rem; align-items: center;
  border-radius: 9999px; padding-left: 2rem; padding-right: 2rem;
  font-family: inherit; font-size: 1rem; font-weight: 640; color: #fafaf6;
  letter-spacing: -0.01em; cursor: pointer; text-decoration: none;
}
.button-item { background-color: transparent; color: #1d1d1f; }
.button-item .button-bg { border-color: rgba(255, 208, 116); background-color: rgba(255, 208, 116); }
.button-inner, .button-inner-hover, .button-inner-static { pointer-events: none; display: block; }
.button-inner { position: relative; z-index: 2; }
.button-inner-hover { position: absolute; top: 0; left: 0; opacity: 0; transform: translateY(70%); }
.button-bg { overflow: hidden; border-radius: 2rem; position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(1); transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1); z-index: 1; }
.button-bg, .button-bg-layer, .button-bg-layers { display: block; }
.button-bg-layers { position: absolute; left: 50%; transform: translate(-50%); top: -60%; aspect-ratio: 1 / 1; width: max(200%, 10rem); }
.button-bg-layer { border-radius: 9999px; position: absolute; top: 0; left: 0; width: 100%; height: 100%; transform: scale(0); }
.button-bg-layer.-purple { background-color: rgba(163, 116, 255); }
.button-bg-layer.-turquoise { background-color: rgba(23, 241, 209); }
.button-bg-layer.-yellow { background-color: rgba(255, 208, 116, 1); }

.button:hover .button-inner-static { opacity: 0; transform: translateY(-70%); transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear; }
.button:hover .button-inner-hover { opacity: 1; transform: translateY(0); transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1); }
.button:hover .button-bg-layer { transition: transform 1.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s linear; }
.button:hover .button-bg-layer-1 { transform: scale(1); }
.button:hover .button-bg-layer-2 { transition-delay: 0.1s; transform: scale(1); }
.button:hover .button-bg-layer-3 { transition-delay: 0.2s; transform: scale(1); }
`;

// 3. New JS Content (about-redesign.js)
const newJs = `
document.addEventListener('DOMContentLoaded', () => {
    // Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });
    
    revealElements.forEach(el => revealObserver.observe(el));

    // 3D Tilt Effect
    const tiltElements = document.querySelectorAll('.tilt-effect');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;
            
            el.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            el.style.transition = 'transform 0.5s ease';
        });
        
        el.addEventListener('mouseenter', () => {
            el.style.transition = 'transform 0.1s ease'; // Fast transition when mouse enters
        });
    });
});
`;

fs.writeFileSync(htmlPath, newHtml);
fs.writeFileSync(cssPath, newCss);
fs.writeFileSync(jsPath, newJs);

console.log("Rebuilt about.html successfully!");
