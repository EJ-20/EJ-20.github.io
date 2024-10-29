// Import styles and libraries
require('./styles.scss');
const Flickity = require('flickity');
require('flickity-imagesloaded');

let carousels = []; // Store initialized carousel instances

// Handle modal functionality
const rootEl = document.documentElement;
const modals = document.querySelectorAll('.modal');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const modalCloses = document.querySelectorAll('.modal-card-head .delete, .modal-card-foot .button');

// Open modal and initialize carousel if necessary
modalTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
        const target = trigger.dataset.target;
        openModal(target);
    });
});

// Close modals on button click
modalCloses.forEach((closeButton) => {
    closeButton.addEventListener('click', closeModals);
});

// Open modal function with smooth animation
function openModal(target) {
    const modal = document.getElementById(target);
    rootEl.classList.add('is-clipped');
    modal.classList.add('is-active', 'fade-in'); // Add fade-in class for smooth animation

    const carouselId = `${target}-carousel`;

    if (document.querySelector(`#${carouselId}`)) {
        if (!carousels.find(c => c.element.id === carouselId)) {
            carousels.push(initCarousel(carouselId)); // Initialize carousel only once
        }
    }
}

// Close modals with smooth animation
function closeModals() {
    modals.forEach(modal => {
        modal.classList.remove('is-active');
        setTimeout(() => rootEl.classList.remove('is-clipped'), 300); // Delay for animation
    });
}

// Initialize carousel
function initCarousel(id) {
    return new Flickity(`#${id}`, {
        imagesLoaded: true,
        adaptiveHeight: true,
        wrapAround: true, // Infinite loop
        autoPlay: 3000, // Autoplay every 3 seconds
        pauseAutoPlayOnHover: true,
        pageDots: false, // Hide dots for cleaner look
        prevNextButtons: true // Show navigation buttons
    });
}

// Utility to get all matching elements
function getAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section'); // Target all sections
    
    const options = {
      threshold: 0.25, // Trigger when 25% of the section is visible
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible'); // Add class when section is in view
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, options);
    
    sections.forEach(section => {
      observer.observe(section); // Observe each section
    });
  });
  

