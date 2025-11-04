 
        document.addEventListener('DOMContentLoaded', () => {
            // Typewriter effect
            const content = document.querySelector('.content');
            const text = content.innerHTML;
            content.innerHTML = '';
            let i = 0;

            function typeWriter() {
                if (i < text.length) {
                    content.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 20);
                }
            }

            typeWriter();

            // Random glitch effect
            setInterval(() => {
                const glitchElements = document.querySelectorAll('.glitch');
                glitchElements.forEach(element => {
                    element.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`;
                    setTimeout(() => {
                        element.style.transform = 'none';
                    }, 50);
                });
            }, 3000);
        });
    