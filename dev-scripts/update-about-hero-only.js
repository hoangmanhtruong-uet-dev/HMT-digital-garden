const fs = require('fs');

const cssPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/style.css';
let css = fs.readFileSync(cssPath, 'utf8');

const newCss = `
/* ============================================================
   ABOUT HERO SECTION (BENTO STYLE)
   ============================================================ */
.about-bento-hero {
    position: relative;
    max-width: 1100px;
    margin: 120px auto 40px;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    z-index: 10;
}
@media (min-width: 1024px) {
    .about-bento-hero { grid-template-columns: 1.2fr 1fr; }
}

.abh-left, .abh-right {
    background: rgba(24, 24, 27, 0.6); /* bg-zinc-900/60 */
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 40px;
    position: relative;
    overflow: hidden;
    opacity: 0;
    transform: translateY(30px);
}
body.loaded .abh-left { animation: abhFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
body.loaded .abh-right { animation: abhFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s; }
.abh-left { animation: abhFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; } /* Fallback */
.abh-right { animation: abhFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s; } /* Fallback */

@keyframes abhFadeUp {
    to { opacity: 1; transform: translateY(0); }
}

/* Ambient Background Glow */
.abh-glow {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.08), transparent 50%);
    pointer-events: none;
    z-index: 0;
}

/* LEFT: Intro */
.abh-eyebrow {
    position: relative;
    z-index: 1;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: #a1a1aa;
    margin-bottom: 24px;
    padding: 6px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 99px;
}
.abh-cursor {
    display: inline-block;
    width: 6px;
    height: 14px;
    background-color: #a1a1aa;
    animation: blink 1s step-end infinite;
}
@keyframes blink { 50% { opacity: 0; } }

.abh-title {
    position: relative;
    z-index: 1;
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.04em;
    color: #F4F4F5;
    margin-bottom: 24px;
    margin-top: 0;
}
.abh-title span {
    background: linear-gradient(135deg, #fff, #71717a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.abh-bio {
    position: relative;
    z-index: 1;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #d4d4d8;
    margin-bottom: 32px;
    max-width: 95%;
}

.abh-tags {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.abh-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 99px;
    font-size: 0.9rem;
    color: #e4e4e7;
    transition: all 0.3s ease;
    cursor: default;
}
.abh-tag:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

/* RIGHT: Profile */
.abh-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.abh-avatar-wrap {
    position: relative;
    z-index: 1;
    width: 130px;
    height: 130px;
    margin-bottom: 20px;
}
.abh-avatar {
    width: 100%;
    height: 100%;
    border-radius: 32px; /* squircle */
    object-fit: cover;
    border: 1px solid rgba(255,255,255,0.2);
    transition: all 0.4s ease;
}
.abh-avatar-wrap:hover .abh-avatar {
    border-color: rgba(255,255,255,0.4);
    box-shadow: 0 0 30px rgba(255,255,255,0.1);
}
.abh-status {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 28px;
    height: 28px;
    background: #18181b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.abh-status-dot {
    width: 12px;
    height: 12px;
    background: #22c55e;
    border-radius: 50%;
    position: relative;
}
.abh-status-dot::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid #22c55e;
    opacity: 0;
    animation: pingDot 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.abh-name { position: relative; z-index: 1; font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 4px; margin-top: 0;}
.abh-role { position: relative; z-index: 1; font-size: 0.95rem; color: #a1a1aa; margin-bottom: 32px; margin-top: 0;}

.abh-stats {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    width: 100%;
    margin-bottom: 32px;
}
.abh-stat-item {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 16px;
    padding: 16px 8px;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.abh-stat-item:hover { transform: translateY(-4px); border-color: rgba(255,255,255,0.15); }
.abh-stat-num { display: block; font-size: 1.5rem; font-weight: 800; color: #fff; }
.abh-stat-label { display: block; font-size: 0.65rem; color: #a1a1aa; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; }

.abh-actions {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 12px;
    width: 100%;
}
.abh-btn-primary {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #fff;
    color: #000;
    padding: 14px 24px;
    border-radius: 99px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
}
.abh-btn-primary:hover { background: #e4e4e7; transform: translateY(-2px); }
.abh-btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    color: #fff;
    transition: all 0.3s;
    text-decoration: none;
}
.abh-btn-icon:hover { background: rgba(255,255,255,0.1); transform: translateY(-2px); }
`;

if (!css.includes('.about-bento-hero')) {
    fs.appendFileSync(cssPath, newCss);
}

const aboutPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/about.html';
let aboutHtml = fs.readFileSync(aboutPath, 'utf8');

const newHero = `
        <section class="about-bento-hero">
            <!-- Left Column -->
            <article class="abh-left">
                <div class="abh-glow"></div>
                <div class="abh-eyebrow">
                    &gt;_ PROFILE // BACKEND // TECH_EDUCATOR <span class="abh-cursor"></span>
                </div>
                <h1 class="abh-title">Hành Trình &amp;<br><span>Hồ Sơ Năng Lực</span></h1>
                <p class="abh-bio">
                    Sinh viên CNTT tại ĐH Công nghệ (UET - ĐHQGHN). Tập trung nghiên cứu kiến trúc backend hiệu năng cao, cơ sở dữ liệu phân tán và lan tỏa tư duy lập trình thông qua giảng dạy.
                </p>
                <div class="abh-tags">
                    <span class="abh-tag"><i class="fa-solid fa-server"></i> Backend</span>
                    <span class="abh-tag"><i class="fa-brands fa-java"></i> Java</span>
                    <span class="abh-tag"><i class="fa-solid fa-leaf"></i> Spring Boot</span>
                    <span class="abh-tag"><i class="fa-solid fa-graduation-cap"></i> Tech Education</span>
                </div>
            </article>

            <!-- Right Column -->
            <article class="abh-right">
                <div class="abh-glow"></div>
                <div class="abh-avatar-wrap">
                    <img class="abh-avatar" src="../assets/images/profile-new.jpg" alt="Hoàng Mạnh Trường" onerror="this.src='https://images.unsplash.com/photo-1531297172867-a12034104c13?w=500&h=500&fit=crop'">
                    <div class="abh-status" title="Available for opportunities"><div class="abh-status-dot"></div></div>
                </div>
                <h2 class="abh-name">Hoàng Mạnh Trường</h2>
                <p class="abh-role">Java Backend Engineer &amp; Tech Educator</p>
                
                <div class="abh-stats">
                    <div class="abh-stat-item">
                        <span class="abh-stat-num">2+</span>
                        <span class="abh-stat-label">Năm học tập</span>
                    </div>
                    <div class="abh-stat-item">
                        <span class="abh-stat-num">10+</span>
                        <span class="abh-stat-label">Dự án</span>
                    </div>
                    <div class="abh-stat-item">
                        <span class="abh-stat-num">1K+</span>
                        <span class="abh-stat-label">Giờ code</span>
                    </div>
                </div>
                
                <div class="abh-actions">
                    <a href="#" class="abh-btn-primary">
                        <i class="fa-solid fa-download"></i> Tải Hồ Sơ (PDF)
                    </a>
                    <a href="https://github.com/Mtruong2004" target="_blank" class="abh-btn-icon" title="GitHub">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="#" class="abh-btn-icon" title="LinkedIn">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
            </article>
        </section>
`;

aboutHtml = aboutHtml.replace(/<section class="personal-hero"[\s\S]*?<\/section>/, newHero);
fs.writeFileSync(aboutPath, aboutHtml);

console.log("Hero Section replaced successfully");
