// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Show message function
function showMessage() {
    const messageDiv = document.getElementById('message');
    const messages = [
        'Hello! This website is working perfectly!',
        'JavaScript is functioning correctly!',
        'All systems are operational!',
        'Welcome to the test website!',
        'Everything is working as expected!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageDiv.textContent = randomMessage;
    messageDiv.className = 'show success';
    
    // Hide message after 3 seconds
    setTimeout(() => {
        messageDiv.className = '';
    }, 3000);
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('messageText').value;
    const resultDiv = document.getElementById('result');
    
    // Simulate form processing
    resultDiv.textContent = `Thank you, ${name}! Your message has been received. We'll contact you at ${email} soon.`;
    resultDiv.className = 'show success';
    
    // Clear form
    document.querySelector('form').reset();
    
    // Hide result after 5 seconds
    setTimeout(() => {
        resultDiv.className = '';
    }, 5000);
}

// Add some interactive features
let clickCount = 0;

document.addEventListener('click', function() {
    clickCount++;
    console.log(`Total clicks on page: ${clickCount}`);
});

// Change background color on double click
document.addEventListener('dblclick', function() {
    const colors = ['#f4f4f4', '#e8f4fd', '#fff2e8', '#f0f8e8', '#fdf2f8'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    console.log('Background color changed!');
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Press 'h' to go to home
    if (event.key === 'h' || event.key === 'H') {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'a' to go to about
    if (event.key === 'a' || event.key === 'A') {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Press 'c' to go to contact
    if (event.key === 'c' || event.key === 'C') {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// Display current time
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log(`Current time: ${timeString}`);
}

// Update time every minute
setInterval(updateTime, 60000);

// Initial time display
updateTime();

