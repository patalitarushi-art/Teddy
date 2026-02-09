function openPopup(id) {
    const popup = document.getElementById(id);
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
}

function closePopup(id) {
    const popup = document.getElementById(id);
    popup.style.opacity = "0";
    setTimeout(() => popup.style.visibility = "hidden", 300);
}

// Teddy Interaction
document.getElementById("teddy").addEventListener("click", () => {
    alert("Yohan, this teddy gives you a BIG warm hug! 🤗🧸");
});

// Music toggle
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
let isPlaying = false;

function toggleMusic() {
    const music = document.getElementById('bg-music');

    if (!isPlaying) {
        music.play().then(() => {
            isPlaying = true;
        }).catch(err => {
            console.log("Browser blocked autoplay:", err);
            alert("Tap the screen once, then press the Music button again 🎵");
        });
    } else {
        music.pause();
        isPlaying = false;
    }
}
