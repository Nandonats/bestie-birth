function goToPage2() {
    window.location.href = 'page2.html';
}

function goToPage3() {
    window.location.href = 'page3.html';
}

function goToHome() {
    window.location.href = 'index.html';
}

function goBack() {
    window.history.back();
}

if (document.getElementById('confetti-canvas')) {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    
    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#ff6b6b', '#ee5a6f', '#c44569', '#f093fb', '#667eea', '#764ba2', '#ffd93d', '#6bcf7f'];
    
    class Confetti {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 10 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
            
            if (this.x > canvas.width) {
                this.x = 0;
            } else if (this.x < 0) {
                this.x = canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push(new Confetti());
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(confetti => {
            confetti.update();
            confetti.draw();
        });
        
        requestAnimationFrame(animateConfetti);
    }
    
    animateConfetti();
}

function playMusic() {
    const audio = document.getElementById('background-music');
    
    if (audio) {
        // --- BARIS TAMBAHAN UNTUK MENGATUR VOLUME ---
        // Atur volume (nilai antara 0.0 sampai 1.0). Di sini diatur ke 0.3 (30%)
        audio.volume = 0.6;
        // -------------------------------------------
        
        // Mencoba memutar audio.
        audio.play().catch(error => {
            console.log("Autoplay diblokir:", error);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Panggil playMusic() agar musik mencoba diputar saat halaman dimuat
    playMusic();
    
    const wishCards = document.querySelectorAll('.wish-card');
    
    wishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
});