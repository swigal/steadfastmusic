const songImage = document.getElementById("songImage");
const songName = document.getElementById("songName");
const songArtist = document.getElementById("songArtist");

const songSlider = document.getElementById("songSlider");

const playpauseButton = document.getElementById("playPauseSong");
const prevSongButton = document.getElementById("prevSong");
const nextSongButton = document.getElementById("nextSong");

const songs = [
    {
        image: "./music/2026-selections/i-will-sing-praise.jpg",
        name: "I Will Sing Praise",
        artist: "arr. Dave Williamson",
        audio: "./music/2026-selections/I_Will_Sing_Praise_-_Demo.mp3"
    },
    {
        image: "./music/2026-selections/a-blessing.jpg",
        name: "A Blessing",
        artist: "arr. Dennis Allen",
        audio: "./music/2026-selections/A_Blessing_-_Listening_Demo.mp3"
    },
    {
        image: "./music/2026-selections/search-me-lord.jpg",
        name: "Search Me, Lord",
        artist: "arr. Jimm Hammerly",
        audio: "./joy-to-the-world.mp3",
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;

updateSong();

prevSongButton.addEventListener("click", function() {
    if (currentSongIndex == 0) {
        return;
    }
    currentSongIndex--;
    updateSong();
});

nextSongButton.addEventListener("click", function() {
    if (currentSongIndex == songs.length - 1) {
        return;
    }
    currentSongIndex++;
    updateSong();
});

playpauseButton.addEventListener("click", function() {
    if (!audio.paused) {
        audio.pause();
    }
    else {
        audio.play();
    }
});

function updateSong() {
    const song = songs[currentSongIndex];
    songImage.src = song.image;
    songName.innerText = song.name;
    songArtist.innerText = song.artist;

    audio.src = song.audio;
    audio.onloadedmetadata = function() {
        songSlider.value = 0;
        songSlider.max = audio.duration;
    };
}

songSlider.addEventListener("change", function() {
    audio.currentTime = songSlider.value;
})

function moveSlider() {
    songSlider.value = audio.currentTime;
};

setInterval(moveSlider, 1000);


