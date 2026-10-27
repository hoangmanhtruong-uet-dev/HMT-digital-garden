const fs = require('fs');

const htmlFile = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/index.html';
const cssFile = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/style.css';

let html = fs.readFileSync(htmlFile, 'utf8');

// Add body class if not exists
html = html.replace('<body>', '<body class="home-page">');

const newHero = `    <!-- Hero Section (Prisma Aesthetic) -->
    <section id="home" class="hero prisma-hero">
        <div class="prisma-hero-container">
            <!-- Background with warm overlay -->
            <div class="prisma-bg-wrapper">
                <img src="assets/images/hero-developer.jpg" alt="Hoàng Mạnh Trường" class="prisma-bg-img">
                <div class="prisma-overlay"></div>
            </div>

            <!-- Content -->
            <div class="prisma-content">
                <div class="prisma-bottom-grid">
                    <div class="prisma-title-area">
                        <span class="prisma-eyebrow">Xin chào, tôi là</span>
                        <h1 class="prisma-title">
                            <span class="word-pull-up">Hoàng</span>
                            <span class="word-pull-up">Mạnh</span>
                            <span class="word-pull-up">Trường</span>
                        </h1>
                    </div>
                    
                    <div class="prisma-info-area">
                        <h2 class="prisma-role">I'm a <span id="typing-text"></span><span class="typing-cursor">|</span></h2>
                        <p class="prisma-desc">Sinh viên tại ĐH Công nghệ - ĐHQGHN (UET). Đam mê xây dựng các ứng dụng mạng, hệ thống quản lý và chia sẻ kiến thức thông qua việc giảng dạy.</p>
                        
                        <a href="pages/projects.html" class="prisma-cta">
                            Xem Dự Án
                            <span class="prisma-cta-icon"><i class="fa-solid fa-arrow-right"></i></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

html = html.replace(/<!-- Hero Section -->[\s\S]*?<\/section>/, newHero);
fs.writeFileSync(htmlFile, html);

const newCss = `
/* Prisma Hero Aesthetic */
.hero.prisma-hero {
    padding: 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.prisma-hero-container {
    position: relative;
    flex: 1;
    border-radius: 2rem;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
}
.prisma-bg-wrapper {
    position: absolute;
    inset: 0;
    z-index: 1;
}
.prisma-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.85) contrast(1.1) sepia(0.4) hue-rotate(-15deg) saturate(1.2);
}
.prisma-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(20,10,0,0.3) 0%, rgba(20,10,0,0.1) 40%, rgba(20,10,0,0.85) 100%);
}
.prisma-content {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 4rem 3rem;
    color: #E1E0CC;
}
.prisma-bottom-grid {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 3rem;
    max-width: 1400px;
    margin: 0 auto;
    width: 100%;
}
.prisma-title-area {
    flex: 1;
}
.prisma-eyebrow {
    font-size: 1.25rem;
    font-weight: 500;
    letter-spacing: 1px;
    opacity: 0.9;
    display: block;
    margin-bottom: 1rem;
    color: #E1E0CC;
}
.prisma-title {
    font-size: clamp(4rem, 8vw, 7rem);
    line-height: 1.1;
    font-weight: 800;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 0.5rem;
    color: #F5F4E6;
}
.word-pull-up {
    display: inline-block;
    animation: wordsPullUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.word-pull-up:nth-child(1) { animation-delay: 0.1s; }
.word-pull-up:nth-child(2) { animation-delay: 0.3s; }
.word-pull-up:nth-child(3) { animation-delay: 0.5s; }

@keyframes wordsPullUp {
    0% { transform: translateY(60px); opacity: 0; filter: blur(10px); }
    100% { transform: translateY(0); opacity: 1; filter: blur(0); }
}

.prisma-info-area {
    width: 100%;
    max-width: 450px;
    padding-bottom: 1rem;
}
.prisma-role {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #E1E0CC;
}
.prisma-role .typing-cursor {
    color: #E1E0CC;
}
.prisma-desc {
    font-size: 1.1rem;
    line-height: 1.6;
    color: rgba(225, 224, 204, 0.75);
    margin-bottom: 2.5rem;
}
.prisma-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #E1E0CC;
    color: #111;
    padding: 8px 8px 8px 24px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.prisma-cta:hover {
    gap: 18px;
    background: #fff;
    transform: translateY(-2px);
}
.prisma-cta-icon {
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
}

/* Warm Navbar Override for Home Page */
body.home-page .navbar-unified {
    background: rgba(10, 5, 0, 0.85);
    border-color: rgba(225, 224, 204, 0.1);
}
body.home-page .nav-logo {
    color: #E1E0CC;
}
body.home-page .nav-logo span {
    color: #c9b183;
}
body.home-page .nav-links-unified a {
    color: rgba(225, 224, 204, 0.8);
}
body.home-page .nav-links-unified a:hover, 
body.home-page .nav-links-unified a.active {
    color: #E1E0CC;
}
body.home-page .nav-links-unified a::after {
    background: #c9b183;
}
body.home-page .theme-toggle {
    color: #E1E0CC;
}
body.home-page .btn-premium-nav {
    background: linear-gradient(135deg, #c9b183, #8c6a38);
    color: #111;
}

@media (max-width: 900px) {
    .prisma-bottom-grid {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
    }
    .prisma-content {
        padding: 2rem 1.5rem;
    }
    .prisma-title {
        font-size: 3.5rem;
    }
    .prisma-info-area {
        max-width: 100%;
        padding-bottom: 0;
    }
}
`;

fs.appendFileSync(cssFile, newCss);
console.log('Done Prisma styling!');
