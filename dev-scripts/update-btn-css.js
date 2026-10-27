const fs = require('fs');
const cssPath = 'd:/JavaProjects/My_project/Website_canhan/backend/src/main/resources/static/assets/css/about-redesign.css';
const cssTarget = 'd:/JavaProjects/My_project/Website_canhan/backend/target/classes/static/assets/css/about-redesign.css';

const newCss = `
/* =========================================
   NEW BUTTON HOVER EFFECT
   From Uiverse.io by OliverZeros
   ========================================= */
.button.ar-btn-override {
  all: unset;
  position: relative;
  display: inline-flex;
  height: 3.5rem;
  align-items: center;
  border-radius: 9999px;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: inherit; /* changed from Segoe UI */
  font-size: 1rem;
  font-weight: 640;
  color: #fafaf6;
  letter-spacing: -0.01em;
  cursor: pointer;
  text-decoration: none;
}

.button-item {
  background-color: transparent;
  color: #1d1d1f;
}

.button-item .button-bg {
  border-color: rgba(255, 208, 116);
  background-color: rgba(255, 208, 116);
}

.button-inner,
.button-inner-hover,
.button-inner-static {
  pointer-events: none;
  display: block;
}

.button-inner {
  position: relative;
  z-index: 2; /* ensure text is above background */
}

.button-inner-hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transform: translateY(70%);
}

.button-bg {
  overflow: hidden;
  border-radius: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1);
  transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1; /* under the text */
}

.button-bg,
.button-bg-layer,
.button-bg-layers {
  display: block;
}

.button-bg-layers {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: -60%;
  aspect-ratio: 1 / 1;
  width: max(200%, 10rem);
}

.button-bg-layer {
  border-radius: 9999px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(0);
}

.button-bg-layer.-purple {
  background-color: rgba(163, 116, 255);
}

.button-bg-layer.-turquoise {
  background-color: rgba(23, 241, 209);
}

.button-bg-layer.-yellow {
  background-color: rgba(255, 208, 116, 1);
}

.button:hover .button-inner-static {
  opacity: 0;
  transform: translateY(-70%);
  transition:
    transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.3s linear;
}

.button:hover .button-inner-hover {
  opacity: 1;
  transform: translateY(0);
  transition:
    transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
}

.button:hover .button-bg-layer {
  transition:
    transform 1.3s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.3s linear;
}

.button:hover .button-bg-layer-1 {
  transform: scale(1);
}

.button:hover .button-bg-layer-2 {
  transition-delay: 0.1s;
  transform: scale(1);
}

.button:hover .button-bg-layer-3 {
  transition-delay: 0.2s;
  transform: scale(1);
}
`;

fs.appendFileSync(cssPath, newCss);
if (fs.existsSync(cssTarget)) {
    fs.appendFileSync(cssTarget, newCss);
}
console.log('Button CSS appended.');
