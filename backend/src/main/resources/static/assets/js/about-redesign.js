
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
