// Theme toggle functionality
const themeToggler = document.querySelector('.theme-toggler');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');
const logoImg = document.getElementById('logo-img');

// Check for saved theme preference or default to light theme
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.src = './assets/images/icon-sun.svg';
    logoImg.src = './assets/images/logo-dark-theme.svg';
}

themeToggler.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Update icon and logo based on theme
    if (body.classList.contains('dark-theme')) {
        themeIcon.src = './assets/images/icon-sun.svg';
        logoImg.src = './assets/images/logo-dark-theme.svg';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.src = './assets/images/icon-moon.svg';
        logoImg.src = './assets/images/logo-light-theme.svg';
        localStorage.setItem('theme', 'light');
    }
});

// Character counter functionality
const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const wordCount = document.getElementById('word-count');
const sentenceCount = document.getElementById('sentence-count');

function updateCounts() {
    const text = textInput.value;
    
    // Character count
    charCount.textContent = text.length;
    
    // Word count
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    wordCount.textContent = words.length;
    
    // Sentence count
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    sentenceCount.textContent = sentences.length;
}

textInput.addEventListener('input', updateCounts);

// Initialize counts
updateCounts();
