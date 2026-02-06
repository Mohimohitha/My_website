// 1. Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// 2. Auto-Close Menu when a link is clicked (Mobile UX)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('navLinks');
        // Only close if it's currently open (active)
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// 3. Typewriter Effect
const typeTextSpan = document.querySelector(".typewriter");
const textArray = ["Full Stack Developer", "UI/UX Designer", "Student", "Tech Enthusiast"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  // Check if element exists to prevent errors
  if (!typeTextSpan) return;

  if (charIndex < textArray[textArrayIndex].length) {
    typeTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Typing speed (ms)
  } else {
    setTimeout(erase, 2000); // Wait before erasing (ms)
  }
}

function erase() {
  if (!typeTextSpan) return;

  if (charIndex > 0) {
    typeTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Erasing speed (ms)
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0; // Loop back to start
    setTimeout(type, 500); // Wait before typing next word
  }
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", function() {
  if(typeTextSpan) setTimeout(type, 1000);
});