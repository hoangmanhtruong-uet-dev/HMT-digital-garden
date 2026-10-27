const fs = require('fs');
const path = require('path');

const cssPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/about-redesign.css';
const jsPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/js/about-redesign.js';
const htmlPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/about.html';

const cssContent = `
/* ============================================================
   ABOUT REDESIGN - DEVELOPER EDITORIAL DARK
   ============================================================ */
:root {
    /* Dark Theme (Default) */
    --ar-bg: #0A0D14;
    --ar-surface: #111623;
    --ar-surface-2: #171D2E;
    --ar-border: rgba(255, 255, 255, 0.08);
    --ar-text: #E8ECF4;
    --ar-text-muted: #9AA4B8;
    --ar-primary: #5B8CFF;
    --ar-accent: #2DD4A7;
    --ar-warm: #FFB86B;
    --ar-gradient: linear-gradient(120deg, var(--ar-primary), var(--ar-accent));
}
[data-theme="light"] {
    --ar-bg: #F6F8FC;
    --ar-surface: #FFFFFF;
    --ar-surface-2: #F0F4FA;
    --ar-border: rgba(15, 22, 38, 0.1);
    --ar-text: #0F1626;
    --ar-text-muted: #4B5563;
}

body.about-page {
    background-color: var(--ar-bg);
    color: var(--ar-text);
    font-family: 'Inter', sans-serif;
    line-height: 1.7;
    overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif;
    letter-spacing: -0.02em;
    font-weight: 700;
}

/* Background Effects */
.ar-bg-grid {
    position: fixed;
    inset: 0;
    background-image: 
        linear-gradient(to right, var(--ar-border) 1px, transparent 1px),
        linear-gradient(to bottom, var(--ar-border) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
}
.ar-bg-glow {
    position: fixed;
    top: -20%; left: -10%;
    width: 60vw; height: 60vw;
    background: radial-gradient(circle, rgba(91,140,255,0.05) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    border-radius: 50%;
}

/* Navbar overrides */
.navbar-unified {
    background: rgba(10, 13, 20, 0.7) !important;
    backdrop-filter: blur(12px) !important;
    -webkit-backdrop-filter: blur(12px) !important;
    border-bottom: 1px solid var(--ar-border);
    z-index: 100 !important;
}
[data-theme="light"] .navbar-unified {
    background: rgba(246, 248, 252, 0.8) !important;
}

/* Container */
.ar-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    position: relative;
    z-index: 10;
}
.ar-section { margin-bottom: 120px; }
@media (max-width: 768px) { .ar-section { margin-bottom: 72px; } }

/* Section Title */
.ar-section-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    gap: 16px;
}
.ar-section-title span { color: var(--ar-primary); }

/* Animation Utils */
.ar-reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
.ar-reveal.active { opacity: 1; transform: translateY(0); }

/* 1. Hero Section */
.ar-hero {
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 48px;
    margin-top: 140px;
    align-items: center;
}
@media (max-width: 1024px) {
    .ar-hero { grid-template-columns: 1fr; }
    .ar-hero-right { grid-row: 1; }
}
.ar-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    background: var(--ar-surface);
    border: 1px solid var(--ar-border);
    border-radius: 99px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: var(--ar-text-muted);
    margin-bottom: 32px;
}
.ar-status-dot {
    width: 8px; height: 8px;
    background: var(--ar-accent);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--ar-accent);
    animation: blink 2s infinite;
}
@keyframes blink { 50% { opacity: 0.4; } }
.ar-hero h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.15;
    margin-bottom: 24px;
}
.ar-text-gradient {
    background: var(--ar-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.ar-hero-bio { font-size: 1.15rem; color: var(--ar-text-muted); margin-bottom: 40px; max-width: 90%; }
.ar-hero-actions { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 40px; }
.ar-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    text-decoration: none;
    cursor: pointer;
}
.ar-btn-primary { background: var(--ar-gradient); color: #000; }
.ar-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px -10px var(--ar-primary); }
.ar-btn-outline { background: transparent; border: 1px solid var(--ar-border); color: var(--ar-text); }
.ar-btn-outline:hover { background: var(--ar-surface); transform: translateY(-2px); }
.ar-btn-ghost { padding: 12px; border-radius: 8px; color: var(--ar-text-muted); transition: all 0.3s; }
.ar-btn-ghost:hover { color: var(--ar-text); background: var(--ar-surface); }
.ar-hero-tech { font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: var(--ar-text-muted); }

.ar-avatar-container { position: relative; width: 100%; max-width: 400px; margin: 0 auto; }
.ar-avatar {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 24px;
    border: 1px solid var(--ar-border);
    padding: 8px;
    background: var(--ar-surface);
}
.ar-snippet-card {
    position: absolute;
    bottom: -20px; right: -20px;
    background: var(--ar-surface-2);
    border: 1px solid var(--ar-border);
    border-radius: 12px;
    padding: 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    color: var(--ar-text-muted);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
    backdrop-filter: blur(8px);
}
.ar-snippet-card span.kw { color: var(--ar-primary); }
.ar-snippet-card span.str { color: var(--ar-accent); }
.ar-uet-badge {
    position: absolute;
    top: 20px; left: -20px;
    background: var(--ar-primary);
    color: #fff;
    padding: 6px 12px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    transform: rotate(-10deg);
}
.ar-avatar-caption { text-align: center; margin-top: 24px; }
.ar-avatar-name { font-size: 1.5rem; font-weight: 700; color: var(--ar-text); margin-bottom: 4px; }
.ar-avatar-role { font-size: 0.9rem; color: var(--ar-text-muted); }

/* 2. Stats Strip */
.ar-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    background: var(--ar-surface);
    border: 1px solid var(--ar-border);
    border-radius: 16px;
    padding: 32px;
}
@media (max-width: 1024px) { .ar-stats { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .ar-stats { grid-template-columns: 1fr; } }
.ar-stat-item { text-align: center; border-right: 1px solid var(--ar-border); }
.ar-stat-item:last-child { border-right: none; }
@media (max-width: 1024px) { .ar-stat-item:nth-child(2) { border-right: none; } }
@media (max-width: 480px) { .ar-stat-item { border-right: none; border-bottom: 1px solid var(--ar-border); padding-bottom: 16px; margin-bottom: 16px; } .ar-stat-item:last-child{ border-bottom: none; margin-bottom: 0; padding-bottom: 0; } }
.ar-stat-num { font-size: 2.5rem; font-family: 'Space Grotesk', sans-serif; font-weight: 800; color: var(--ar-text); margin-bottom: 8px; }
.ar-stat-label { font-size: 0.85rem; color: var(--ar-text-muted); font-family: 'JetBrains Mono', monospace; }

/* 3. Timeline */
.ar-timeline {
    position: relative;
    padding-left: 32px;
}
.ar-timeline::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--ar-primary), var(--ar-accent), transparent);
}
.ar-timeline-item { position: relative; margin-bottom: 48px; }
.ar-timeline-dot {
    position: absolute;
    left: -37px; top: 0;
    width: 12px; height: 12px;
    border-radius: 50%;
    background: var(--ar-surface);
    border: 2px solid var(--ar-primary);
    transition: all 0.3s;
}
.ar-timeline-item.active .ar-timeline-dot { background: var(--ar-primary); box-shadow: 0 0 15px var(--ar-primary); }
.ar-timeline-year { font-family: 'JetBrains Mono', monospace; font-size: 0.9rem; color: var(--ar-primary); margin-bottom: 8px; }
.ar-timeline-title { font-size: 1.25rem; margin-bottom: 8px; color: var(--ar-text); }
.ar-timeline-desc { color: var(--ar-text-muted); margin-bottom: 16px; max-width: 800px; }
.ar-timeline-tags { display: flex; gap: 8px; }
.ar-timeline-tag { padding: 4px 12px; background: var(--ar-surface-2); border-radius: 4px; font-size: 0.75rem; color: var(--ar-text-muted); }

/* 4. Skills */
.ar-skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}
@media (max-width: 768px) { .ar-skills-grid { grid-template-columns: 1fr; } }
.ar-skill-card {
    background: var(--ar-surface);
    border: 1px solid var(--ar-border);
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s;
}
.ar-skill-card:hover { transform: translateY(-4px); border-color: var(--ar-primary); }
.ar-skill-card h3 { font-size: 1.1rem; color: var(--ar-text); margin-bottom: 24px; border-bottom: 1px solid var(--ar-border); padding-bottom: 12px; }
.ar-skill-list { display: flex; flex-direction: column; gap: 16px; }
.ar-skill-item { display: flex; align-items: center; justify-content: space-between; }
.ar-skill-name { display: flex; align-items: center; gap: 12px; font-size: 0.95rem; color: var(--ar-text-muted); }
.ar-skill-name i { color: var(--ar-text); width: 20px; text-align: center; }
.ar-skill-card:hover .ar-skill-name i { color: var(--ar-primary); }
.ar-skill-dots { display: flex; gap: 4px; }
.ar-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--ar-border); }
.ar-dot.fill { background: var(--ar-primary); }
.ar-dot.fill-warm { background: var(--ar-warm); }

/* 5. Educator */
.ar-edu-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
}
@media (max-width: 1024px) { .ar-edu-section { grid-template-columns: 1fr; } }
.ar-edu-left h2 span { color: var(--ar-warm); }
.ar-edu-left p { color: var(--ar-text-muted); margin-bottom: 24px; }
.ar-edu-feature { display: flex; gap: 16px; margin-bottom: 24px; }
.ar-edu-feature i { color: var(--ar-warm); font-size: 1.5rem; margin-top: 4px; }
.ar-edu-feature h4 { color: var(--ar-text); margin-bottom: 4px; }
.ar-edu-feature p { color: var(--ar-text-muted); font-size: 0.95rem; margin-bottom: 0; }
.ar-edu-right { display: flex; flex-direction: column; gap: 16px; }
.ar-edu-card { background: var(--ar-surface); border: 1px solid var(--ar-border); padding: 24px; border-radius: 12px; display: flex; justify-content: space-between; align-items: center; }
.ar-edu-card h4 { color: var(--ar-text); margin-bottom: 4px; }
.ar-edu-card p { color: var(--ar-text-muted); font-size: 0.85rem; }
.ar-btn-warm { background: var(--ar-warm); color: #000; margin-top: 16px; align-self: flex-start; }

/* 6. Projects */
.ar-projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}
@media (max-width: 1024px) { .ar-projects-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .ar-projects-grid { grid-template-columns: 1fr; } }
.ar-project-card {
    background: var(--ar-surface);
    border: 1px solid var(--ar-border);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s;
    display: flex;
    flex-direction: column;
}
.ar-project-card:hover { border-color: var(--ar-primary); transform: translateY(-4px); }
.ar-project-img { width: 100%; height: 200px; background: var(--ar-surface-2); position: relative; overflow: hidden; }
.ar-project-img img { width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: 0.3s; }
.ar-project-card:hover .ar-project-img img { opacity: 1; transform: scale(1.05); }
.ar-project-content { padding: 24px; flex: 1; display: flex; flex-direction: column; }
.ar-project-content h3 { color: var(--ar-text); margin-bottom: 8px; }
.ar-project-content p { color: var(--ar-text-muted); font-size: 0.95rem; margin-bottom: 24px; flex: 1; }
.ar-project-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
.ar-project-tag { font-size: 0.75rem; color: var(--ar-primary); font-family: 'JetBrains Mono', monospace; }
.ar-project-actions { display: flex; gap: 12px; }

/* 7. Blog Empty State */
.ar-empty-state {
    text-align: center;
    padding: 64px 24px;
    background: var(--ar-surface);
    border: 1px dashed var(--ar-border);
    border-radius: 16px;
}
.ar-empty-state i { font-size: 3rem; color: var(--ar-border); margin-bottom: 24px; }
.ar-empty-state h3 { color: var(--ar-text); margin-bottom: 8px; }
.ar-empty-state p { color: var(--ar-text-muted); margin-bottom: 24px; }
.ar-subscribe { display: flex; max-width: 400px; margin: 0 auto; gap: 8px; }
.ar-subscribe input { flex: 1; padding: 12px 16px; border-radius: 8px; border: 1px solid var(--ar-border); background: var(--ar-bg); color: var(--ar-text); }
.ar-subscribe input:focus { outline: none; border-color: var(--ar-primary); }

/* 8. CTA & Footer */
.ar-cta {
    text-align: center;
    padding: 80px 24px;
    background: var(--ar-surface);
    border: 1px solid var(--ar-border);
    border-radius: 24px;
    margin-bottom: 64px;
    position: relative;
    overflow: hidden;
}
.ar-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(91,140,255,0.1), transparent 70%);
}
.ar-cta h2 { font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 16px; position: relative; z-index: 1; }
.ar-cta p { color: var(--ar-text-muted); margin-bottom: 32px; font-size: 1.1rem; position: relative; z-index: 1; }
.ar-footer {
    border-top: 1px solid var(--ar-border);
    padding: 48px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}
@media (max-width: 768px) { .ar-footer { grid-template-columns: 1fr; text-align: center; } }
.ar-footer-col h4 { color: var(--ar-text); margin-bottom: 16px; }
.ar-footer-col p, .ar-footer-col a { color: var(--ar-text-muted); text-decoration: none; display: block; margin-bottom: 8px; font-size: 0.95rem; }
.ar-footer-col a:hover { color: var(--ar-primary); }
`;

fs.writeFileSync(cssPath, cssContent);

const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('ar-stat-num')) {
                    animateValue(entry.target);
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.ar-reveal, .ar-timeline-item, .ar-stat-num').forEach(el => observer.observe(el));

    // Number Counter Animation
    function animateValue(obj) {
        const text = obj.innerText;
        const num = parseFloat(text);
        if (isNaN(num)) return;
        const suffix = text.replace(/[0-9.]/g, '');
        
        let startTimestamp = null;
        const duration = 1500;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = (num * ease);
            
            if (Number.isInteger(num)) {
                obj.innerText = Math.floor(current) + suffix;
            } else {
                obj.innerText = current.toFixed(2) + suffix;
            }
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.innerText = text; // Ensure exact final value
            }
        };
        window.requestAnimationFrame(step);
    }
});
`;

fs.writeFileSync(jsPath, jsContent);

let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Ensure links to new CSS/JS
if (!htmlContent.includes('about-redesign.css')) {
    htmlContent = htmlContent.replace('</head>', '    <link rel="stylesheet" href="../assets/css/about-redesign.css">\n</head>');
}
if (!htmlContent.includes('about-redesign.js')) {
    htmlContent = htmlContent.replace('</body>', '    <script src="../assets/js/about-redesign.js"></script>\n</body>');
}

// Re-write nav names
htmlContent = htmlContent.replace(/<li><a href="about.html">Cá Nhân<\/a><\/li>/g, '<li><a href="about.html">Giới thiệu</a></li>');
htmlContent = htmlContent.replace(/<a class="active" href="about.html"><i class="fa-solid fa-user"><\/i><span>Cá nhân<\/span><\/a>/g, '<a class="active" href="about.html"><i class="fa-solid fa-user"></i><span>Giới thiệu</span></a>');

const newMain = `
    <main class="ar-container">
        <!-- Background Effects -->
        <div class="ar-bg-grid"></div>
        <div class="ar-bg-glow"></div>

        <!-- 1. Hero -->
        <section class="ar-section ar-hero">
            <div class="ar-hero-left ar-reveal">
                <div class="ar-status-badge">
                    <div class="ar-status-dot"></div>
                    Đang tìm cơ hội thực tập Java Backend · Nhận dạy kèm lập trình
                </div>
                <h1>Xây <span class="ar-text-gradient">backend vững chắc.</span><br>Dạy lập trình <span class="ar-text-gradient">dễ hiểu.</span></h1>
                <p class="ar-hero-bio">Sinh viên CNTT tại UET – ĐHQGHN. Tập trung nghiên cứu kiến trúc backend hiệu năng cao, cơ sở dữ liệu phân tán và lan tỏa tư duy lập trình thông qua giảng dạy.</p>
                <div class="ar-hero-actions">
                    <a href="projects.html" class="ar-btn ar-btn-primary">Xem dự án</a>
                    <a href="#" class="ar-btn ar-btn-outline"><i class="fa-solid fa-download"></i> Tải CV (PDF)</a>
                    <a href="https://github.com/Mtruong2004" target="_blank" class="ar-btn ar-btn-ghost"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="ar-btn ar-btn-ghost"><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div class="ar-hero-tech">Java · Spring Boot · MySQL · PostgreSQL · Docker</div>
            </div>
            <div class="ar-hero-right ar-reveal" style="transition-delay: 0.2s">
                <div class="ar-avatar-container">
                    <div class="ar-uet-badge">UET K70</div>
                    <img src="../assets/images/profile-new.jpg" alt="Hoàng Mạnh Trường" class="ar-avatar" onerror="this.src='https://images.unsplash.com/photo-1531297172867-a12034104c13?w=500&h=500&fit=crop'">
                    <div class="ar-snippet-card">
                        <span class="kw">@RestController</span><br>
                        <span class="kw">public class</span> Dev {<br>
                        &nbsp;&nbsp;<span class="kw">String</span> role = <span class="str">"Backend"</span>;<br>
                        }
                    </div>
                </div>
                <div class="ar-avatar-caption">
                    <div class="ar-avatar-name">Hoàng Mạnh Trường</div>
                    <div class="ar-avatar-role">Java Backend Engineer & Tech Educator</div>
                </div>
            </div>
        </section>

        <!-- 2. Stats -->
        <section class="ar-section ar-reveal">
            <div class="ar-stats">
                <div class="ar-stat-item">
                    <div class="ar-stat-num">10+</div>
                    <div class="ar-stat-label">Dự án (xem GitHub)</div>
                </div>
                <div class="ar-stat-item">
                    <div class="ar-stat-num">27.75</div>
                    <div class="ar-stat-label">Điểm A00</div>
                </div>
                <div class="ar-stat-item">
                    <div class="ar-stat-num" style="font-size:1.8rem; line-height:1.4; padding-top:10px;">Giải Nhì</div>
                    <div class="ar-stat-label">HSG cấp Tỉnh</div>
                </div>
                <div class="ar-stat-item">
                    <div class="ar-stat-num">[CẦN ĐIỀN]+</div>
                    <div class="ar-stat-label">Học viên đã dạy</div>
                </div>
            </div>
        </section>

        <!-- 3. Timeline -->
        <section class="ar-section ar-reveal">
            <h2 class="ar-section-title"><span>01.</span> Hành trình</h2>
            <div class="ar-timeline">
                <div class="ar-timeline-item">
                    <div class="ar-timeline-dot"></div>
                    <div class="ar-timeline-year">2024 – Nay</div>
                    <h3 class="ar-timeline-title">Sinh viên Đại học Công nghệ (UET - ĐHQGHN)</h3>
                    <p class="ar-timeline-desc">Tập trung nghiên cứu sâu về Java, Cấu trúc dữ liệu và thuật toán, Hệ quản trị cơ sở dữ liệu và Kiến trúc hệ thống phần mềm (Backend Architecture).</p>
                    <div class="ar-timeline-tags">
                        <span class="ar-timeline-tag">Java</span>
                        <span class="ar-timeline-tag">Backend</span>
                    </div>
                </div>
                <div class="ar-timeline-item">
                    <div class="ar-timeline-dot"></div>
                    <div class="ar-timeline-year">[NĂM BẮT ĐẦU DẠY]</div>
                    <h3 class="ar-timeline-title">Bắt đầu hành trình Tech Educator</h3>
                    <p class="ar-timeline-desc">[CẦN ĐIỀN: Bắt đầu dạy kèm lập trình, truyền đạt kiến thức OOP, giải thuật cho học viên giúp họ hiểu bản chất vấn đề.]</p>
                    <div class="ar-timeline-tags">
                        <span class="ar-timeline-tag">Teaching</span>
                        <span class="ar-timeline-tag">Mentoring</span>
                    </div>
                </div>
                <div class="ar-timeline-item">
                    <div class="ar-timeline-dot"></div>
                    <div class="ar-timeline-year">Trước 2024</div>
                    <h3 class="ar-timeline-title">Học sinh chuyên & Kỳ thi Đại học</h3>
                    <p class="ar-timeline-desc">Đạt 27.75 điểm khối A00 và xuất sắc giành Giải Nhì kỳ thi Học sinh giỏi cấp Tỉnh môn [CẦN ĐIỀN MÔN].</p>
                </div>
            </div>
        </section>

        <!-- 4. Skills -->
        <section class="ar-section ar-reveal">
            <h2 class="ar-section-title"><span>02.</span> Tech Stack</h2>
            <div class="ar-skills-grid">
                <!-- Backend -->
                <div class="ar-skill-card">
                    <h3>Backend</h3>
                    <div class="ar-skill-list">
                        <div class="ar-skill-item" title="Đã dùng trong dự án X">
                            <div class="ar-skill-name"><i class="fa-brands fa-java"></i> Java</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot fill"></span><span class="ar-dot fill"></span></div>
                        </div>
                        <div class="ar-skill-item" title="Đã dùng trong dự án Y">
                            <div class="ar-skill-name"><i class="fa-solid fa-leaf"></i> Spring Boot</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot fill"></span><span class="ar-dot"></span></div>
                        </div>
                        <div class="ar-skill-item" title="Xây dựng API tiêu chuẩn">
                            <div class="ar-skill-name"><i class="fa-solid fa-server"></i> REST API</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot fill"></span><span class="ar-dot fill"></span></div>
                        </div>
                    </div>
                </div>
                <!-- Database -->
                <div class="ar-skill-card">
                    <h3>Cơ sở dữ liệu</h3>
                    <div class="ar-skill-list">
                        <div class="ar-skill-item">
                            <div class="ar-skill-name"><i class="fa-solid fa-database"></i> MySQL</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot fill"></span><span class="ar-dot"></span></div>
                        </div>
                        <div class="ar-skill-item">
                            <div class="ar-skill-name"><i class="fa-solid fa-cube"></i> PostgreSQL</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot fill"></span><span class="ar-dot"></span></div>
                        </div>
                    </div>
                </div>
                <!-- Frontend -->
                <div class="ar-skill-card">
                    <h3>Frontend</h3>
                    <div class="ar-skill-list">
                        <div class="ar-skill-item">
                            <div class="ar-skill-name"><i class="fa-brands fa-js"></i> JS / TS</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot fill"></span><span class="ar-dot"></span></div>
                        </div>
                        <div class="ar-skill-item">
                            <div class="ar-skill-name"><i class="fa-brands fa-react"></i> React</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot"></span><span class="ar-dot"></span></div>
                        </div>
                    </div>
                </div>
                <!-- DevOps -->
                <div class="ar-skill-card">
                    <h3>DevOps & Tooling</h3>
                    <div class="ar-skill-list">
                        <div class="ar-skill-item">
                            <div class="ar-skill-name"><i class="fa-brands fa-git-alt"></i> Git</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot fill"></span><span class="ar-dot fill"></span></div>
                        </div>
                        <div class="ar-skill-item">
                            <div class="ar-skill-name"><i class="fa-brands fa-docker"></i> Docker</div>
                            <div class="ar-skill-dots"><span class="ar-dot fill"></span><span class="ar-dot"></span><span class="ar-dot"></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. Educator -->
        <section class="ar-section ar-edu-section ar-reveal">
            <div class="ar-edu-left">
                <h2 class="ar-section-title" style="margin-bottom:24px;"><span>03.</span> Tech <span>Educator</span></h2>
                <p>Không chỉ viết code, mình còn đam mê việc đơn giản hóa các khái niệm phức tạp để truyền đạt lại cho người khác. Sự thấu hiểu thực sự đến từ việc bạn có thể giải thích nó một cách dễ dàng.</p>
                
                <div class="ar-edu-feature">
                    <i class="fa-solid fa-code"></i>
                    <div>
                        <h4>Học qua dự án thực tế</h4>
                        <p>Lý thuyết đi đôi với thực hành. Xây dựng mini-project ngay trong khóa học.</p>
                    </div>
                </div>
                <div class="ar-edu-feature">
                    <i class="fa-solid fa-comments"></i>
                    <div>
                        <h4>Code Review & Feedback</h4>
                        <p>Nhận xét chi tiết từng dòng code, tối ưu hóa thuật toán và clean code.</p>
                    </div>
                </div>
                <div class="ar-edu-feature">
                    <i class="fa-solid fa-layer-group"></i>
                    <div>
                        <h4>Nền tảng vững chắc</h4>
                        <p>Từ Java Basic, OOP, Cấu trúc dữ liệu đến Spring Boot Backend.</p>
                    </div>
                </div>
            </div>
            <div class="ar-edu-right">
                <div class="ar-edu-card" style="border-left: 4px solid var(--ar-warm)">
                    <div>
                        <h4>Khóa Java Nền Tảng</h4>
                        <p>Dành cho người mới bắt đầu, mất gốc.</p>
                    </div>
                    <i class="fa-solid fa-arrow-right" style="color:var(--ar-text-muted)"></i>
                </div>
                <div class="ar-edu-card" style="border-left: 4px solid var(--ar-warm)">
                    <div>
                        <h4>OOP & Thuật toán</h4>
                        <p>Luyện tư duy, chuẩn bị phỏng vấn, thi cử.</p>
                    </div>
                    <i class="fa-solid fa-arrow-right" style="color:var(--ar-text-muted)"></i>
                </div>
                <div class="ar-edu-card" style="border-left: 4px solid var(--ar-warm)">
                    <div>
                        <h4>Thực hành Spring Boot</h4>
                        <p>Làm RESTful API, Database, Security.</p>
                    </div>
                    <i class="fa-solid fa-arrow-right" style="color:var(--ar-text-muted)"></i>
                </div>
                <a href="teaching.html" class="ar-btn ar-btn-warm">Xem chi tiết các khóa học</a>
            </div>
        </section>

        <!-- 6. Projects -->
        <section class="ar-section ar-reveal">
            <h2 class="ar-section-title"><span>04.</span> Dự án nổi bật</h2>
            <div class="ar-projects-grid">
                <!-- Project 1 -->
                <div class="ar-project-card">
                    <div class="ar-project-img">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop" alt="Project 1">
                    </div>
                    <div class="ar-project-content">
                        <h3>[CẦN ĐIỀN: Tên Dự Án 1]</h3>
                        <p>[CẦN ĐIỀN: 1 câu mô tả vấn đề và giải pháp hệ thống. VD: Hệ thống quản lý học tập tối ưu hóa luồng bài tập với Spring Boot.]</p>
                        <div class="ar-project-tags">
                            <span class="ar-project-tag">Java</span>
                            <span class="ar-project-tag">Spring Boot</span>
                            <span class="ar-project-tag">MySQL</span>
                        </div>
                        <div class="ar-project-actions">
                            <a href="#" class="ar-btn ar-btn-outline" style="padding: 8px 16px; font-size: 0.9rem;">Demo</a>
                            <a href="#" class="ar-btn ar-btn-ghost" style="padding: 8px 16px; font-size: 0.9rem;">Source</a>
                        </div>
                    </div>
                </div>
                <!-- Project 2 -->
                <div class="ar-project-card">
                    <div class="ar-project-img">
                        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop" alt="Project 2">
                    </div>
                    <div class="ar-project-content">
                        <h3>[CẦN ĐIỀN: Tên Dự Án 2]</h3>
                        <p>[CẦN ĐIỀN: Mô tả ngắn gọn tính năng cốt lõi và kết quả đạt được.]</p>
                        <div class="ar-project-tags">
                            <span class="ar-project-tag">REST API</span>
                            <span class="ar-project-tag">PostgreSQL</span>
                        </div>
                        <div class="ar-project-actions">
                            <a href="#" class="ar-btn ar-btn-outline" style="padding: 8px 16px; font-size: 0.9rem;">Demo</a>
                            <a href="#" class="ar-btn ar-btn-ghost" style="padding: 8px 16px; font-size: 0.9rem;">Source</a>
                        </div>
                    </div>
                </div>
                <!-- Project 3 -->
                <div class="ar-project-card">
                    <div class="ar-project-img">
                        <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bfce8?w=500&h=300&fit=crop" alt="Project 3">
                    </div>
                    <div class="ar-project-content">
                        <h3>[CẦN ĐIỀN: Tên Dự Án 3]</h3>
                        <p>[CẦN ĐIỀN: Dự án cá nhân hoặc đồ án môn học thể hiện kiến trúc backend tốt nhất.]</p>
                        <div class="ar-project-tags">
                            <span class="ar-project-tag">Java</span>
                            <span class="ar-project-tag">Docker</span>
                        </div>
                        <div class="ar-project-actions">
                            <a href="#" class="ar-btn ar-btn-outline" style="padding: 8px 16px; font-size: 0.9rem;">Demo</a>
                            <a href="#" class="ar-btn ar-btn-ghost" style="padding: 8px 16px; font-size: 0.9rem;">Source</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7. Blog -->
        <section class="ar-section ar-reveal">
            <h2 class="ar-section-title"><span>05.</span> Góc chia sẻ</h2>
            <div class="ar-empty-state">
                <i class="fa-solid fa-pen-nib"></i>
                <h3>Bài viết đầu tiên sắp ra mắt</h3>
                <p>Mình đang ấp ủ những bài viết chia sẻ về kinh nghiệm học Java, giải thuật và các mẹo hay trong Spring Boot. Để lại email để nhận thông báo nhé!</p>
                <form class="ar-subscribe" onsubmit="event.preventDefault(); alert('Cảm ơn bạn đã đăng ký!');">
                    <input type="email" placeholder="Email của bạn..." required>
                    <button type="submit" class="ar-btn ar-btn-primary" style="padding: 12px;">Đăng ký</button>
                </form>
            </div>
        </section>

        <!-- 8. CTA -->
        <section class="ar-cta ar-reveal">
            <h2>Cùng xây dựng một điều gì đó?</h2>
            <p>Sẵn sàng hợp tác, thực tập backend hoặc trao đổi về các cơ hội giảng dạy, chia sẻ công nghệ.</p>
            <div style="display:flex; gap:16px; justify-content:center; flex-wrap:wrap;">
                <a href="mailto:truongcri0101@gmail.com" class="ar-btn ar-btn-primary"><i class="fa-solid fa-paper-plane"></i> Gửi tin nhắn cho mình</a>
                <a href="https://github.com/Mtruong2004" target="_blank" class="ar-btn ar-btn-outline"><i class="fa-brands fa-github"></i> GitHub</a>
                <a href="#" class="ar-btn ar-btn-outline"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </section>
    </main>
`;

htmlContent = htmlContent.replace(/<main class="personal-shell">[\s\S]*?<\/main>/, newMain);

// Write back
fs.writeFileSync(htmlPath, htmlContent);
console.log("Refactored about.html to Developer Editorial Dark!");
