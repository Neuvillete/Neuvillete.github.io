document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', function() {
        navUl.classList.toggle('show');
        hamburger.classList.toggle('active');
    });

    const roles = ['AI/ML Developer', 'API Developer', 'Cybersecutiy Analyst', 'Data Analyst'];
    let roleIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById('typing');

    function type() {
        if (charIndex < roles[roleIndex].length) {
            typingElement.textContent += roles[roleIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }

    type();
});
