(() => {
    'use strict';

    // Theme Toggle Logic
    const themeToggle = document.getElementById('toggle');
    if (themeToggle) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeToggle.checked = currentTheme === 'dark';
        }
        
        themeToggle.addEventListener('change', function(e) {
            const theme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }

    const header = document.querySelector('[data-header]') || document.querySelector('.site-header');
    const menuToggle = document.querySelector('[data-menu-toggle]');
    const mobileNav = document.querySelector('[data-mobile-nav]');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const setMenuOpen = (open) => {
        if (!menuToggle || !mobileNav) return;
        menuToggle.setAttribute('aria-expanded', String(open));
        menuToggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
        mobileNav.classList.toggle('is-open', open);
        document.body.classList.toggle('menu-open', open);
    };

    menuToggle?.addEventListener('click', () => {
        setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    mobileNav?.addEventListener('click', (event) => {
        if (event.target.closest('a')) setMenuOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMenuOpen(false);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) setMenuOpen(false);
    });

    const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    const revealItems = document.querySelectorAll('[data-reveal]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -30px' });
        revealItems.forEach((item) => revealObserver.observe(item));
    }

    const sectionLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
    const sections = sectionLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible) return;
            sectionLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
            });
        }, { rootMargin: '-25% 0px -58% 0px', threshold: [0, 0.15, 0.5] });
        sections.forEach((section) => sectionObserver.observe(section));
    }

    const interestInput = document.querySelector('input[name="interest"]');
    const contactSection = document.querySelector('#contact');

    const selectInterest = (value) => {
        if (interestInput) interestInput.value = value;
        contactSection?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        window.setTimeout(() => document.querySelector('[data-consultation-form] input[name="name"]')?.focus({ preventScroll: true }), reduceMotion ? 0 : 650);
    };

    document.querySelectorAll('[data-choose-program]').forEach((button) => {
        button.addEventListener('click', () => {
            const program = button.closest('[data-program]')?.dataset.program || 'Chương trình học';
            selectInterest(program);
        });
    });

    document.querySelectorAll('[data-choose-plan]').forEach((button) => {
        button.addEventListener('click', () => {
            const plan = button.closest('[data-plan]')?.dataset.plan || 'Hình thức học';
            selectInterest(plan);
        });
    });

    document.querySelectorAll('[data-resource-title]').forEach((button) => {
        button.addEventListener('click', () => selectInterest(`Nhận tài liệu: ${button.dataset.resourceTitle}`));
    });

    const filterButtons = document.querySelectorAll('[data-filter]');
    const resourceCards = document.querySelectorAll('[data-category]');
    filterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach((item) => item.classList.toggle('is-active', item === button));
            resourceCards.forEach((card) => {
                const categories = card.dataset.category.split(' ');
                card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
            });
        });
    });

    const form = document.querySelector('[data-consultation-form]');
    const formStatus = document.querySelector('[data-form-status]');

    const showFieldError = (field, message) => {
        field.classList.toggle('is-invalid', Boolean(message));
        field.setAttribute('aria-invalid', String(Boolean(message)));
        const error = field.parentElement?.querySelector('.field-error');
        if (error) error.textContent = message;
    };

    const validateField = (field) => {
        const value = field.value.trim();
        let message = '';
        if (field.required && !value) message = 'Vui lòng nhập thông tin này.';
        if (!message && field.name === 'phone' && !/^[0-9+\s.()-]{8,15}$/.test(value)) message = 'Số điện thoại chưa đúng định dạng.';
        showFieldError(field, message);
        return !message;
    };

    form?.querySelectorAll('input[required], select[required]').forEach((field) => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('is-invalid')) validateField(field);
        });
    });

    form?.addEventListener('submit', async (event) => {
        event.preventDefault();
        const requiredFields = [...form.querySelectorAll('input[required], select[required]')];
        const valid = requiredFields.map(validateField).every(Boolean);
        if (!valid) {
            formStatus.textContent = 'Bạn kiểm tra lại các trường được đánh dấu nhé.';
            formStatus.className = 'form-status error';
            form.querySelector('.is-invalid')?.focus();
            return;
        }

        const data = new FormData(form);
        const payload = {
            name: data.get('name'),
            phone: data.get('phone'),
            grade: data.get('grade'),
            subject: data.get('subject'),
            format: data.get('format'),
            interest: data.get('interest'),
            notes: data.get('notes') || ''
        };

        const formLoading = document.querySelector('[data-form-loading]');
        formLoading?.classList.add('is-active');
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        try {
            const response = await fetch('/api/contact/enroll', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                formStatus.textContent = 'Đăng ký thành công! Mình sẽ liên hệ với bạn trong thời gian sớm nhất.';
                formStatus.className = 'form-status success';
                form.reset();
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            formStatus.textContent = 'Có lỗi xảy ra khi gửi đăng ký. Vui lòng thử lại sau.';
            formStatus.className = 'form-status error';
        } finally {
            formLoading?.classList.remove('is-active');
        }
    });
})();
