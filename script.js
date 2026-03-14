// script.js dosyasını bu şekilde güncelle:
music.ontimeupdate = function() {
    let currentTime = music.currentTime;
    
    if (currentTime > 4.5 && currentTime < 9) {
        lyricsContent.style.transform = "translateY(-50px)";
    } else if (currentTime >= 9 && currentTime < 13.5) {
        lyricsContent.style.transform = "translateY(-100px)";
    } else if (currentTime >= 13.5) {
        lyricsContent.style.transform = "translateY(-150px)";
    } else {
        lyricsContent.style.transform = "translateY(0)";
    }
};
