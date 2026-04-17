// ARYZA BERKAH WISATA - Custom JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission to WhatsApp
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const hp = document.getElementById('hp').value;
        const paket = document.getElementById('paket').value;
        const pesan = document.getElementById('pesan').value;
        
        // Validate
        if (!nama || !hp || !paket || paket === 'Pilih Paket') {
            alert('Mohon lengkapi data yang wajib diisi!');
            return;
        }
        
        // Create WhatsApp message
        const message = `Halo ARYZA BERKAH WISATA,%0A%0ASaya ingin booking:%0A%0ANama: ${nama}%0ANo HP: ${hp}%0APaket: ${paket}${pesan ? `%0A%0APesan: ${pesan}` : ''}`;
        
        const whatsappURL = `https://wa.me/6281365433853?text=${message}`;
        window.open(whatsappURL, '_blank');
        
        // Reset form
        contactForm.reset();
    });

// Enhanced card hover scales with smooth transitions
    document.querySelectorAll('.card, .package-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

// Parallax hero effect
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Testimonial carousel auto height
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
        interval: 5000,
        wrap: true
    });

    // Preload critical images
    const criticalImages = document.querySelectorAll('.hero');
    criticalImages.forEach(img => {
        img.style.opacity = '0';
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transition = 'opacity 0.5s ease';
        });
    });
    
    // Intersection Observer for additional animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    console.log('ARYZA BERKAH WISATA Website loaded successfully!');
});
