const fs = require('fs');

const htmlFile = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/index.html';
const cssFile = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/style.css';

let html = fs.readFileSync(htmlFile, 'utf8');

const newHero = `    <!-- Hero Section (Cosmos/Mars Theme based on Prompt) -->
    <section id="home" class="hero responsive-hero-banner" style="position: relative; overflow: hidden; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 0;">
        <img src="https://cdn.21st.dev/assets/mirror/a8/a8cf38f65f7315f95eba8c803c4a80a9d78cb2ea36fbfee49828396e4a0b9737.jpg" alt="" class="hero-bg-cosmos">
        <div class="hero-overlay-dark"></div>

        <div class="container relative hero-cosmos-content" style="z-index: 10;">
            <div class="hero-cosmos-center text-center">
                <div class="cosmos-badge animate-fade-slide-in-1">
                    <span class="badge-label">New</span>
                    <span class="badge-text">First Commercial Flight to Mars 2026</span>
                </div>

                <h1 class="cosmos-title animate-fade-slide-in-2">
                    Journey Beyond Earth<br class="hidden-sm">
                    Into the Cosmos
                </h1>

                <p class="cosmos-desc animate-fade-slide-in-3">
                    Experience the cosmos like never before. Our advanced spacecraft and cutting-edge technology make interplanetary travel accessible, safe, and unforgettable.
                </p>

                <div class="cosmos-actions animate-fade-slide-in-4">
                    <a href="#" class="btn-primary-cosmos">
                        Book Your Journey
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </a>
                    <a href="#" class="btn-secondary-cosmos">
                        Watch Launch
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>
                    </a>
                </div>
            </div>

            <div class="cosmos-partners mx-auto mt-20 max-w-5xl text-center">
                <p class="animate-fade-slide-in-1" style="color: rgba(255,255,255,0.7); font-size: 0.875rem; margin-bottom: 24px;">Partnering with leading space agencies worldwide</p>
                <div class="partner-logos animate-fade-slide-in-2">
                    <img src="https://cdn.21st.dev/assets/mirror/96/964eca0b0415aebc2718799b530b39d6f552b39634f3fb2072e769df17c6668f.png" alt="Partner 1">
                    <img src="https://cdn.21st.dev/assets/mirror/90/900ad16bdb8bd723836996d2283c47420e719ba8c9a4f7d24ff67e59056e88fe.png" alt="Partner 2">
                    <img src="https://cdn.21st.dev/assets/mirror/1b/1b66b155997cb81da3bdabeb8da22771b07f4ac5273d6a19d629c77cf75a861f.png" alt="Partner 3">
                    <img src="https://cdn.21st.dev/assets/mirror/cb/cb112906d9fa8a57380201b1385c5534075020542dab48d5f29f2e35a3e19bc1.png" alt="Partner 4">
                    <img src="https://cdn.21st.dev/assets/mirror/f6/f68e2933c2f24ef4b28fb81328350831eb56bf42244dee50e2b7f6efd7497783.png" alt="Partner 5">
                </div>
            </div>
        </div>
    </section>`;

html = html.replace(/<!-- Hero Section -->[\s\S]*?<\/section>/, newHero);
fs.writeFileSync(htmlFile, html);

const newCss = `
/* Cosmos Hero Banner */
.hero-bg-cosmos {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    z-index: 1;
}
.hero-overlay-dark {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 2;
}
.hero-cosmos-content {
    padding-top: 100px;
    padding-bottom: 60px;
}
.hero-cosmos-center {
    max-width: 800px;
    margin: 0 auto;
}
.cosmos-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.15);
    padding: 8px 10px;
    border-radius: 50px;
    margin-bottom: 24px;
}
.cosmos-badge .badge-label {
    background: rgba(255,255,255,0.9);
    color: #111;
    padding: 2px 8px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
}
.cosmos-badge .badge-text {
    color: rgba(255,255,255,0.9);
    font-size: 0.875rem;
    font-weight: 500;
    padding-right: 8px;
}
.cosmos-title {
    font-family: "Instrument Serif", Georgia, serif;
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.1;
    color: white;
    font-weight: 400;
    letter-spacing: -1px;
}
.cosmos-desc {
    font-size: clamp(1rem, 2vw, 1.125rem);
    color: rgba(255,255,255,0.8);
    max-width: 600px;
    margin: 24px auto 0;
    line-height: 1.6;
}
.cosmos-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 40px;
}
.btn-primary-cosmos {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    color: white;
    padding: 12px 24px;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;
}
.btn-primary-cosmos:hover {
    background: rgba(255,255,255,0.15);
}
.btn-secondary-cosmos {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: rgba(255,255,255,0.9);
    padding: 12px 24px;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration: none;
    transition: 0.3s;
}
.btn-secondary-cosmos:hover {
    color: white;
}
.partner-logos {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
    opacity: 0.8;
}
.partner-logos img {
    height: 36px;
    transition: 0.3s;
}
.partner-logos img:hover {
    opacity: 1;
}

@keyframes fadeSlideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-slide-in-1 { animation: fadeSlideIn 0.8s ease forwards; opacity: 0; animation-delay: 0.1s; }
.animate-fade-slide-in-2 { animation: fadeSlideIn 0.8s ease forwards; opacity: 0; animation-delay: 0.2s; }
.animate-fade-slide-in-3 { animation: fadeSlideIn 0.8s ease forwards; opacity: 0; animation-delay: 0.3s; }
.animate-fade-slide-in-4 { animation: fadeSlideIn 0.8s ease forwards; opacity: 0; animation-delay: 0.4s; }
.animate-fade-slide-in-5 { animation: fadeSlideIn 0.8s ease forwards; opacity: 0; animation-delay: 0.5s; }
`;

fs.appendFileSync(cssFile, newCss);
console.log('Update success!');
