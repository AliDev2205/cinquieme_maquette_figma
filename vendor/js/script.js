
    // Mobile Menu Toggle
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.toggle('hidden');
    });

    // Testimonials Slider Functionality
    document.addEventListener('DOMContentLoaded', function () {
      let currentSlide = 0;
      const totalSlides = 3;
      const slider = document.getElementById('testimonials-slider');
      const dots = document.querySelectorAll('.dot-indicator');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');

      function updateSlider() {
        const translateX = -currentSlide * 100;
        slider.style.transform = `translateX(${translateX}%)`;

        // Update dots
        dots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.remove('bg-gray-600');
            dot.classList.add('bg-lime-400', 'active');
          } else {
            dot.classList.remove('bg-lime-400', 'active');
            dot.classList.add('bg-gray-600');
          }
        });
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
      }

      function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
      }

      // Event listeners
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);

      // Dot navigation
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          currentSlide = index;
          updateSlider();
        });
      });

      // Auto-slide every 5 seconds (optional)
      setInterval(nextSlide, 5000);
    });
    
    // Handle radio button selection
    document.querySelectorAll('input[name="contact-type"]').forEach(radio => {
      radio.addEventListener('change', function () {
        // Reset all radio buttons visual state
        document.querySelectorAll('input[name="contact-type"]').forEach(r => {
          const indicator = r.parentElement.querySelector('.bg-lime-400');
          if (indicator) {
            indicator.classList.add('hidden');
          }
        });

        // Show selected state
        if (this.checked) {
          const indicator = this.parentElement.querySelector('div > div');
          indicator.classList.remove('hidden');
        }
      });
    });
    
    // Add animation to elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, {
      threshold: 0.1
    });
    
    document.querySelectorAll('.animate-fadeInUp').forEach(el => {
      observer.observe(el);
    });
 