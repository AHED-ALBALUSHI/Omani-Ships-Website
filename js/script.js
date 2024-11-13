// Simple contact form submission alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Highlighting active link while scrolling
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Slide-in effect for the navigation bar on scroll up
let lastScrollTop = 0;
const nav = document.querySelector('header');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        nav.style.top = '-70px'; // Hide nav
    } else {
        nav.style.top = '0'; // Show nav
    }
    lastScrollTop = scrollTop;
});

// Enhanced alert for form submission using SweetAlert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Thank you!',
        text: 'Your message has been sent successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});


const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // عند التمرير للأسفل - إخفاء الهيدر
        header.style.top = '-80px'; // تعديل القيمة حسب ارتفاع الهيدر
    } else {
        // عند التمرير للأعلى - إظهار الهيدر
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // تجنب القيم السالبة
});