const fs = require('fs');
const path = require('path');

const aboutPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/pages/about.html';
let aboutHtml = fs.readFileSync(aboutPath, 'utf8');

// 1. Fix sticky navbar bug in common.css
const commonCssPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/common.css';
let commonCss = fs.readFileSync(commonCssPath, 'utf8');
if (!commonCss.includes('z-index: 50 !important;')) {
    // Add high z-index and blur to navbar-unified
    commonCss = commonCss.replace('.navbar-unified {', '.navbar-unified {\n    z-index: 50 !important;\n    background: rgba(0,0,0,0.8) !important;\n    backdrop-filter: blur(12px) !important;');
    fs.writeFileSync(commonCssPath, commonCss);
}

// 2. Create bento-about.css
const bentoCss = `
/* BENTO ABOUT PAGE STYLES */
.bento-main {
    max-width: 1280px;
    margin: 120px auto 60px;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.bento-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
}

.bento-card {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 24px;
    padding: 32px;
    backdrop-filter: blur(12px);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    position: relative;
}
.bento-card:hover {
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
}

/* Hero Section */
.bento-hero-left { grid-column: span 7; display: flex; flex-direction: column; justify-content: center; }
.bento-hero-right { grid-column: span 5; display: flex; flex-direction: column; align-items: center; text-align: center; }

.bento-eyebrow {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.85rem;
    color: #4ade80;
    margin-bottom: 16px;
    letter-spacing: 0.05em;
    display: inline-flex;
    padding: 6px 12px;
    background: rgba(74, 222, 128, 0.1);
    border: 1px solid rgba(74, 222, 128, 0.2);
    border-radius: 99px;
    width: fit-content;
}

.bento-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    color: #F4F4F5;
    margin-bottom: 24px;
    line-height: 1.1;
    letter-spacing: -0.03em;
}

.bento-bio {
    font-size: 1.1rem;
    color: rgba(225, 224, 204, 0.8);
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 90%;
}

.bento-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}
.bento-tag {
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 99px;
    font-size: 0.9rem;
    color: #E1E0CC;
    transition: all 0.2s ease;
}
.bento-tag:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
}

/* Profile Card */
.profile-avatar-wrap {
    position: relative;
    width: 140px;
    height: 140px;
    margin: 0 auto 24px;
}
.profile-avatar-wrap img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255,255,255,0.1);
    position: relative;
    z-index: 2;
}
.profile-aura {
    position: absolute;
    inset: -10px;
    border-radius: 50%;
    background: linear-gradient(45deg, #3b82f6, #10b981);
    filter: blur(15px);
    opacity: 0.5;
    animation: pulseAura 3s ease-in-out infinite alternate;
}
@keyframes pulseAura {
    from { opacity: 0.4; transform: scale(1); }
    to { opacity: 0.7; transform: scale(1.05); }
}

.profile-name { font-size: 1.75rem; font-weight: 700; color: #fff; margin-bottom: 8px; }
.profile-title { font-size: 1rem; color: #94a3b8; margin-bottom: 24px; }

.profile-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    width: 100%;
    margin-bottom: 24px;
}
.stat-item {
    background: rgba(0,0,0,0.2);
    padding: 12px;
    border-radius: 12px;
    transition: transform 0.2s;
}
.stat-item:hover { transform: translateY(-3px); }
.stat-num { display: block; font-size: 1.25rem; font-weight: 800; color: #fff; }
.stat-label { display: block; font-size: 0.75rem; color: #94a3b8; margin-top: 4px; }

.btn-resume {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    color: #000;
    padding: 12px 24px;
    border-radius: 99px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
}
.btn-resume:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255,255,255,0.3);
}

/* Timeline & Skills */
.bento-timeline { grid-column: span 5; }
.bento-skills { grid-column: span 7; }

.bento-header {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 24px;
}

.timeline-list {
    position: relative;
    padding-left: 20px;
    border-left: 2px solid rgba(255,255,255,0.1);
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.timeline-item { position: relative; }
.timeline-dot {
    position: absolute;
    left: -27px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3b82f6;
    box-shadow: 0 0 10px #3b82f6;
}
.timeline-item:last-child .timeline-dot { background: #64748b; box-shadow: none; }
.timeline-date { font-size: 0.85rem; color: #94a3b8; margin-bottom: 4px; }
.timeline-title { font-weight: 600; color: #fff; margin-bottom: 8px; }
.timeline-desc { font-size: 0.95rem; color: rgba(255,255,255,0.7); }

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 16px;
}
.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    transition: all 0.3s;
}
.skill-item:hover {
    border-color: rgba(59, 130, 246, 0.5);
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.05);
}
.skill-item i { font-size: 2rem; color: #fff; }
.skill-item span { font-size: 0.85rem; font-weight: 500; color: #cbd5e1; }

/* Blog Section */
.bento-blog { grid-column: span 12; }
.blog-filters { display: flex; gap: 12px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 8px; }
.filter-btn {
    padding: 8px 16px;
    border-radius: 99px;
    background: rgba(255,255,255,0.05);
    color: #94a3b8;
    border: 1px solid rgba(255,255,255,0.1);
    cursor: pointer;
    transition: all 0.3s;
    white-space: nowrap;
}
.filter-btn.active, .filter-btn:hover { background: #fff; color: #000; }

.blog-grid-inner {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 24px;
}
.blog-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s;
}
.blog-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.1); }
.blog-card-img {
    width: 100%;
    height: 160px;
    overflow: hidden;
    position: relative;
}
.blog-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
}
.blog-card:hover .blog-card-img img { transform: scale(1.05); }
.blog-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(59, 130, 246, 0.8);
    backdrop-filter: blur(4px);
    color: #fff;
    font-size: 0.75rem;
    padding: 4px 8px;
    border-radius: 6px;
    font-weight: 600;
}
.blog-card-content { padding: 20px; }
.blog-meta { display: flex; gap: 16px; font-size: 0.8rem; color: #64748b; margin-bottom: 12px; }
.blog-card-content h3 { font-size: 1.1rem; color: #fff; margin-bottom: 8px; line-height: 1.4; }
.blog-card-content p { font-size: 0.9rem; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* CTA */
.bento-cta {
    grid-column: span 12;
    background: radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%), rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.08);
    text-align: center;
    padding: 60px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bento-cta h2 { font-size: 2.5rem; color: #fff; margin-bottom: 16px; }
.bento-cta p { font-size: 1.1rem; color: #94a3b8; max-width: 600px; margin-bottom: 32px; }
.btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #3b82f6;
    color: #fff;
    padding: 14px 28px;
    border-radius: 99px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s;
}
.btn-cta:hover { background: #2563eb; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(59,130,246,0.3); }

@media (max-width: 1024px) {
    .bento-hero-left, .bento-hero-right, .bento-timeline, .bento-skills { grid-column: span 12; }
}
`;
fs.writeFileSync('d:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/bento-about.css', bentoCss);

// 3. Update about.html
// Link CSS
if (!aboutHtml.includes('bento-about.css')) {
    aboutHtml = aboutHtml.replace('<link rel="stylesheet" href="../assets/css/share-page.css', '<link rel="stylesheet" href="../assets/css/bento-about.css">\n    <link rel="stylesheet" href="../assets/css/share-page.css');
}

// Replace <main> content
const newMain = `
    <main class="bento-main">
        <div class="bento-grid">
            
            <!-- A. Hero Left (Bio) -->
            <article class="bento-card bento-hero-left reveal">
                <div class="bento-eyebrow">[ >_ PROFILE // KNOWLEDGE // EXPERIENCE ]</div>
                <h1 class="bento-title">Trang Cá Nhân</h1>
                <p class="bento-bio">
                    Hồ sơ ghi lại hành trình học tập, nghiên cứu và phát triển phần mềm. Tập trung xây dựng các hệ sinh thái backend vững chắc, kiến trúc hướng dịch vụ và chia sẻ giá trị thông qua giảng dạy công nghệ.
                </p>
                <div class="bento-tags">
                    <span class="bento-tag">#Backend</span>
                    <span class="bento-tag">#Java</span>
                    <span class="bento-tag">#SpringBoot</span>
                    <span class="bento-tag">#SystemDesign</span>
                    <span class="bento-tag">#TechEducation</span>
                </div>
            </article>

            <!-- A. Hero Right (Profile Card) -->
            <article class="bento-card bento-hero-right reveal">
                <div class="profile-avatar-wrap">
                    <div class="profile-aura"></div>
                    <img src="../assets/images/profile-new.jpg" alt="Hoàng Mạnh Trường" onerror="this.src='https://images.unsplash.com/photo-1531297172867-a12034104c13?w=500&h=500&fit=crop'">
                </div>
                <h2 class="profile-name">Hoàng Mạnh Trường</h2>
                <p class="profile-title">Backend Engineer & Educator | UET - VNU</p>
                
                <div class="profile-stats">
                    <div class="stat-item">
                        <span class="stat-num">2+</span>
                        <span class="stat-label">Năm học tập</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-num">10+</span>
                        <span class="stat-label">Dự án</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-num">1K+</span>
                        <span class="stat-label">Giờ code</span>
                    </div>
                </div>
                
                <a href="#" class="btn-resume">
                    <i class="fa-solid fa-download"></i> Lưu hồ sơ PDF
                </a>
            </article>

            <!-- B. Timeline -->
            <article class="bento-card bento-timeline reveal">
                <div class="bento-header"><i class="fa-solid fa-route"></i> Hành Trình</div>
                <div class="timeline-list">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2024 - Hiện tại</div>
                        <div class="timeline-title">Sinh viên CNTT - ĐH Công nghệ (UET)</div>
                        <div class="timeline-desc">Tập trung backend, thuật toán và kiến trúc hệ thống.</div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">Trước 2024</div>
                        <div class="timeline-title">Học sinh chuyên / Khối A00</div>
                        <div class="timeline-desc">27.75 điểm ĐH & Giải Nhì HSG Tỉnh.</div>
                    </div>
                </div>
                <a href="timeline.html" style="display:inline-block; margin-top: 24px; color: #3b82f6; text-decoration: none; font-weight: 500;">Xem toàn bộ lộ trình →</a>
            </article>

            <!-- B. Skills -->
            <article class="bento-card bento-skills reveal">
                <div class="bento-header"><i class="fa-solid fa-layer-group"></i> Kỹ Năng Nổi Bật</div>
                <div class="skills-grid">
                    <div class="skill-item" title="Java"><i class="fa-brands fa-java"></i><span>Java</span></div>
                    <div class="skill-item" title="Spring Boot"><i class="fa-solid fa-leaf"></i><span>Spring</span></div>
                    <div class="skill-item" title="TypeScript / JS"><i class="fa-brands fa-js"></i><span>TS / JS</span></div>
                    <div class="skill-item" title="React"><i class="fa-brands fa-react"></i><span>React</span></div>
                    <div class="skill-item" title="REST API"><i class="fa-solid fa-server"></i><span>REST API</span></div>
                    <div class="skill-item" title="MySQL"><i class="fa-solid fa-database"></i><span>MySQL</span></div>
                    <div class="skill-item" title="PostgreSQL"><i class="fa-solid fa-cube"></i><span>Postgres</span></div>
                    <div class="skill-item" title="Docker"><i class="fa-brands fa-docker"></i><span>Docker</span></div>
                    <div class="skill-item" title="Git"><i class="fa-brands fa-git-alt"></i><span>Git</span></div>
                </div>
            </article>

            <!-- C. Blog Grid -->
            <article class="bento-card bento-blog reveal">
                <div class="bento-header"><i class="fa-solid fa-book-open"></i> Góc Chia Sẻ</div>
                <div class="blog-filters">
                    <button class="filter-btn active">Tất cả</button>
                    <button class="filter-btn">Công nghệ</button>
                    <button class="filter-btn">Gia sư / Sư phạm</button>
                    <button class="filter-btn">Kinh nghiệm</button>
                </div>
                <div class="blog-grid-inner">
                    <!-- Fake Card 1 -->
                    <a href="#" class="blog-card" style="text-decoration:none;">
                        <div class="blog-card-img">
                            <span class="blog-badge" style="background: rgba(59,130,246,0.8)">Tech</span>
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop" alt="Code">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-meta"><span>12/10/2026</span><span>5 phút đọc</span></div>
                            <h3>Tối ưu hóa truy vấn Database trong Spring Boot</h3>
                            <p>Cách sử dụng EntityGraph và FetchType hiệu quả để tránh N+1 Query...</p>
                        </div>
                    </a>
                    <!-- Fake Card 2 -->
                    <a href="#" class="blog-card" style="text-decoration:none;">
                        <div class="blog-card-img">
                            <span class="blog-badge" style="background: rgba(245,158,11,0.8)">Teaching</span>
                            <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=500&h=300&fit=crop" alt="Teach">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-meta"><span>05/10/2026</span><span>7 phút đọc</span></div>
                            <h3>Phương pháp sư phạm trong IT</h3>
                            <p>Chia sẻ kinh nghiệm gia sư lập trình giúp học viên nắm bắt nhanh các khái niệm OOP...</p>
                        </div>
                    </a>
                    <!-- Fake Card 3 -->
                    <a href="#" class="blog-card" style="text-decoration:none;">
                        <div class="blog-card-img">
                            <span class="blog-badge" style="background: rgba(16,185,129,0.8)">Experience</span>
                            <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop" alt="Experience">
                        </div>
                        <div class="blog-card-content">
                            <div class="blog-meta"><span>28/09/2026</span><span>4 phút đọc</span></div>
                            <h3>Hành trình thi HSG và vào UET</h3>
                            <p>Những kinh nghiệm ôn thi và định hướng lựa chọn trường đại học khối công nghệ...</p>
                        </div>
                    </a>
                </div>
            </article>

            <!-- D. CTA -->
            <article class="bento-card bento-cta reveal">
                <h2>Bạn muốn cùng xây dựng một dự án?</h2>
                <p>Sẵn sàng trao đổi cơ hội thực tập, dự án phần mềm hoặc các buổi workshop chia sẻ kiến thức.</p>
                <a href="contact.html" class="btn-cta">
                    <i class="fa-solid fa-paper-plane"></i> Gửi tin nhắn cho tôi
                </a>
            </article>

        </div>
    </main>
`;

aboutHtml = aboutHtml.replace(/<main class="personal-shell">[\s\S]*?<\/main>/, newMain);

// Write back
fs.writeFileSync(aboutPath, aboutHtml);
console.log("Refactored about.html to Bento grid!");
