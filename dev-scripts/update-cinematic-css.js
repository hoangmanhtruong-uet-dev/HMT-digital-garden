const fs = require('fs');
const cssFile = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/style.css';
let css = fs.readFileSync(cssFile, 'utf8');

const newCss = `
/* ============================================================
   CINEMATIC HERO SECTION (PRISMA/V2)
   ============================================================ */
.cinematic-hero {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem 4rem;
    overflow: hidden;
    background-color: #000;
    color: #E1E0CC;
}

.cinematic-bg-wrapper {
    position: absolute;
    inset: 0;
    z-index: 0;
}
.cinematic-bg-img {
    position: absolute;
    inset: 0;
    background-image: url('../images/hero-developer.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.35;
    mix-blend-mode: luminosity;
    filter: contrast(1.2) brightness(0.8);
}
.cinematic-bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.7) 50%, transparent 100%);
}
.cinematic-bg-noise {
    position: absolute;
    inset: 0;
    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
    opacity: 0.15;
    mix-blend-mode: overlay;
    pointer-events: none;
}

.cinematic-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    gap: 4rem;
    padding-bottom: 2rem;
}

.cinematic-left {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.cinematic-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    width: fit-content;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
    opacity: 0;
    transform: translateY(-20px);
}
.cinematic-container.active .cinematic-badge {
    animation: fadeSlideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.pulse-dot {
    position: relative;
    display: flex;
    height: 10px;
    width: 10px;
}
.pulse-ping {
    position: absolute;
    display: inline-flex;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #4ade80;
    opacity: 0.75;
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}
.pulse-core {
    position: relative;
    display: inline-flex;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: #22c55e;
}
@keyframes ping {
    75%, 100% { transform: scale(2.5); opacity: 0; }
}

.badge-text {
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.9);
}

.cinematic-title {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1.5rem;
    row-gap: 0.5rem;
    font-size: clamp(4rem, 9vw, 9rem);
    font-weight: 800;
    color: #F4F4F5;
    line-height: 0.9;
    letter-spacing: -0.04em;
    margin: 0;
}

.word-pull-up {
    display: inline-block;
    opacity: 0;
    transform: translateY(60px);
}
.cinematic-container.active .word-pull-up {
    animation: wordPullUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.cinematic-container.active .word-pull-up:nth-child(1) { animation-delay: 0.3s; }
.cinematic-container.active .word-pull-up:nth-child(2) { animation-delay: 0.45s; }
.cinematic-container.active .word-pull-up:nth-child(3) { animation-delay: 0.6s; }

@keyframes fadeSlideDown {
    to { opacity: 1; transform: translateY(0); }
}
@keyframes wordPullUp {
    to { opacity: 1; transform: translateY(0); }
}

.cinematic-right {
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 1rem;
    opacity: 0;
    transform: translateY(30px);
}
.cinematic-container.active .cinematic-right {
    animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.9s;
}

@keyframes fadeSlideUp {
    to { opacity: 1; transform: translateY(0); }
}

.cinematic-bio-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.cinematic-role {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    color: #ffffff;
    line-height: 1.2;
    letter-spacing: -0.02em;
    margin: 0;
}
.cinematic-desc {
    font-size: clamp(1.05rem, 1.5vw, 1.15rem);
    color: rgba(225, 224, 204, 0.75);
    line-height: 1.6;
    margin: 0;
}

.cinematic-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    margin-top: 0.5rem;
}

.cinematic-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 1.25rem;
    background-color: #E1E0CC;
    color: #000;
    font-weight: 600;
    font-size: 1.05rem;
    border-radius: 9999px;
    padding: 0.5rem 0.5rem 0.5rem 1.75rem;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 0 40px rgba(225,224,204,0.15);
}
.cinematic-btn-primary:hover {
    background-color: #ffffff;
    box-shadow: 0 0 50px rgba(225,224,204,0.3);
    gap: 1.5rem;
    transform: translateY(-2px);
}
.btn-icon-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.1);
    transition: transform 0.4s ease, background-color 0.4s ease;
}
.cinematic-btn-primary:hover .btn-icon-circle {
    transform: translateX(4px);
    background-color: rgba(0,0,0,0.15);
}

.cinematic-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.9rem 1.75rem;
    border-radius: 9999px;
    border: 1px solid rgba(255,255,255,0.2);
    color: #ffffff;
    font-weight: 500;
    font-size: 1.05rem;
    text-decoration: none;
    transition: all 0.4s ease;
    backdrop-filter: blur(8px);
}
.cinematic-btn-secondary:hover {
    background-color: rgba(255,255,255,0.1);
    transform: translateY(-2px);
}
.cinematic-btn-secondary i {
    transition: transform 0.3s ease;
}
.cinematic-btn-secondary:hover i {
    transform: translateY(-3px);
}

@media (max-width: 1024px) {
    .cinematic-container {
        flex-direction: column;
        align-items: flex-start;
        gap: 3rem;
    }
    .cinematic-right {
        max-width: 100%;
        padding-bottom: 0;
    }
    .hidden-md {
        display: none;
    }
    .cinematic-hero {
        padding: 2rem 1.5rem;
    }
}
`;

if (!css.includes('.cinematic-hero')) {
    fs.appendFileSync(cssFile, newCss);
}

console.log('Update CSS Success!');
