const songImage = document.getElementById("songImage");
const songName = document.getElementById("songName");
const songArtist = document.getElementById("songArtist");

const songSlider = document.getElementById("songSlider");

const playpauseButton = document.getElementById("playPauseSong");
const restartSongButton = document.getElementById("restartSong");
const nextSongButton = document.getElementById("nextSong");

const songs = [
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "I Sing Alleluia",
        artist: "arr. Jeff Lippencott",
        audio: "./music/2026-schedule/I-Sing-Alleluia-LSTN.mp3"
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "A Blessing",
        artist: "arr. Dennis Allen",
        audio: "./music/2026-schedule/A%20Blessing%20-%20Listening%20Demo.mp3"
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "I Will Sing Praise",
        artist: "arr. Dave Williamson",
        audio: "./music/2026-schedule/I%20Will%20Sing%20Praise%20-%20Demo.mp3"
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "Search Me, Lord",
        artist: "arr. Jimm Hammerly",
        audio: "./music/2026-schedule/Search%20Me%20-%20Demonstration.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "Hide Me",
        artist: "arr. Dennis Allen",
        audio: "./music/2026-schedule/Hide-Me.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "When You Speak to Me",
        artist: "arr. Kyle Hill",
        audio: "./music/2026-schedule/When%20You%20Speak%20-%20Demonstration.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "Blessed Is He",
        artist: "arr. Dennis Allen",
        audio: "./music/2026-schedule/Blessed%20is%20He%20-%20Listening%20Demo.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "This Is Our Freedom",
        artist: "arr. Dennis Allen",
        audio: "./music/2026-schedule/This%20Is%20Our%20Freedom%20-%20Demonstration.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "Amazing Love",
        artist: "arr. Bob Burroughs",
        audio: "./music/2026-schedule/Amazing%20Love%20-%20Demonstration.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "Hallelujah",
        artist: "arr. Patrick",
        audio: "./music/2026-schedule/Hallelujah%20-%20Patrick.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "Tis So Sweet to Trust in Jesus",
        artist: "arr. Dennis Allen",
        audio: "./music/2026-schedule/Tis%20So%20Sweet%20-%20Demonstration.mp3",
    },
    {
        image: "./music/2026-schedule/2026-schedule.jpeg",
        name: "Holy",
        artist: "arr. John Patrick",
        audio: "./music/2026-schedule/Holy%20-%20Demo.mp3",
    },
];

const audio = document.createElement("audio");
let currentSongIndex = 0;

updateSong();

/*prevSongButton.addEventListener("click", function() {
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
});*/

playpauseButton.addEventListener("click", function(){
    if (audio.paused) {
    playpauseButton.classList.remove('fa-solid', 'fa-circle-play');
    playpauseButton.classList.add('fa-regular', 'fa-circle-pause');
    console.log("Icon changed to pause");
  } else {
    playpauseButton.classList.remove('fa-regular', 'fa-circle-pause');
    playpauseButton.classList.add('fa-solid', 'fa-circle-play');
    console.log("Icon changed to play");
  }
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

function changeSongIndex(index) {
    currentSongIndex = index;
    updateSong();
    playpauseButton.classList.remove('fa-solid', 'fa-circle-play');
    playpauseButton.classList.add('fa-regular', 'fa-circle-pause');
    audio.play();
};

restartSongButton.addEventListener("click", function() {
    changeSongIndex(currentSongIndex);
    updateSong();
    audio.play();
});

setInterval(moveSlider, 1000);


