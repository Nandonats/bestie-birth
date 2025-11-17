function playMusic() {
    const audio = document.getElementById('background-music');
    
    if (audio) {
        audio.volume = 0.3;
        audio.play().catch(error => {
            console.log("Autoplay diblokir:", error);
        });
        return audio; // Mengembalikan objek audio
    }
}

function goToPage2() {
    // 1. Coba putar musik
    playMusic();
    
    // 2. Tunda navigasi selama 50 milidetik (cukup untuk memulai pemutaran)
    setTimeout(() => {
        window.location.href = 'page2.html';
    }, 50); 
}

function goToPage3() {
    playMusic();
    setTimeout(() => {
        window.location.href = 'page3.html';
    }, 50);
}

function goToHome() {
    playMusic();
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 50);
}

function goBack() {
    // goBack tidak perlu ditunda
    window.history.back();
}

document.addEventListener('DOMContentLoaded', () => {
    // Panggil playMusic() agar musik mencoba diputar saat halaman dimuat
    playMusic();
    
    const wishCards = document.querySelectorAll('.wish-card');
    
    wishCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

});

