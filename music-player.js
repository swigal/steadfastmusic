const songImage = document.getElementById("songImage");
const songName = document.getElementById("songName");
const songArtist = document.getElementById("songArtist");

const songSlider = document.getElementById("songSlider");

const playpauseButton = document.getElementById("playPauseSong");
const restartSongButton = document.getElementById("restartSong");
const nextSongButton = document.getElementById("nextSong");
const closePlayerButton = document.getElementById("closePlayer");
const playerPanel = document.getElementById("playerPanel");

const song0 = document.getElementById("song0");
const song1 = document.getElementById("song1");
const song2 = document.getElementById("song2"); 
const song3 = document.getElementById("song3");
const song4 = document.getElementById("song4");
const song5 = document.getElementById("song5");
const song6 = document.getElementById("song6");
const song7 = document.getElementById("song7");
const song8 = document.getElementById("song8");
const song9 = document.getElementById("song9");
const song10 = document.getElementById("song10");
const song11 = document.getElementById("song11");


const songs = [
    { //song index 0
        image: "./music/26-27-schedule/Folder.jpg",
        name: "Christ Is Able to Save",
        artist: "arr. Marty Parks",
        audio: "./music/26-27-schedule/Christ-Is-Able-to-Save.mp3"
    },
    {//song index 1
        image: "./music/26-27-schedule/Folder.jpg",
        name: "Peace In The Presence",
        artist: "arr. Kyle Hill",
        audio: "./music/26-27-schedule/Peace-In-The-Presence.mp3"
    },
    {//song index 2
        image: "./music/26-27-schedule/Folder.jpg",
        name: "I Will Believe (Ver. B)",
        artist: "arr. Dave Williamson",
        audio: "./music/26-27-schedule/I-Will-Believe-(Version-B).mp3"
    },
    {//song index 3
        image: "./music/26-27-schedule/Folder.jpg",
        name: "You Are My Shelter",
        artist: "arr. Phillip Keveren",
        audio: "./music/26-27-schedule/You-Are-My-Shelter.mp3",
    },
    {//song index 4
        image: "./music/26-27-schedule/Folder.jpg",
        name: "Comfort Comes",
        artist: "arr. Robert Sterling",
        audio: "./music/26-27-schedule/Comfort-Comes.mp3",
    },
    {//song index 5
        image: "./music/26-27-schedule/Folder.jpg",
        name: "Thanks Be To God",
        artist: "arr. Sheldon Curry",
        audio: "./music/26-27-schedule/Thanks-Be-To-God.mp3",
    },
    {//song index 6
        image: "./music/26-27-schedule/Folder.jpg",
        name: "Gloria (SATB)",
        artist: "arr. Jeff Lippencott",
        audio: "./music/26-27-schedule/Gloria-(SATB).mp3",
    },
 

];

const audio = document.createElement("audio");
let currentSongIndex = 0;

updateSong();

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
    audio.play();
}

audio.addEventListener('ended', function() {
    nextSong();
});

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

const urlParams = new URLSearchParams(window.location.search);
const songIndex = urlParams.get('songIndex');

document.addEventListener('DOMContentLoaded', function() {
  if (songIndex) {
    console.log('Current song index from URL:', songIndex);
    changeSongIndex(parseInt(songIndex, 10));
  } else {
    console.log('No song index found in URL.');
  }
});

function changeSongIndex(index) {
    currentSongIndex = parseInt(index, 10);
    updateSong();
    setTimeout(activeSong, 0);
    playerPanel.style.visibility = "visible";
    playpauseButton.classList.remove('fa-solid', 'fa-circle-play');
    playpauseButton.classList.add('fa-regular', 'fa-circle-pause');
    audio.play();
};

restartSongButton.addEventListener("click", function() {
    changeSongIndex(currentSongIndex);
    updateSong();
    audio.play();
});

closePlayerButton.addEventListener("click", function() {
    audio.pause();
    playerPanel.style.visibility = "hidden";
});

setInterval(moveSlider, 1000);

function activeSong() {
    const songElements = document.querySelectorAll('[id^="song"]');
    songElements.forEach((element) => {
        const songNumber = parseInt(element.id.replace('song', ''), 10);
        if (songNumber === currentSongIndex) {
            element.classList.add("current-song");
            console.log("Added current-song class to element with ID:", element.id);
        } else {
            element.classList.remove("current-song");
            console.log("Removed current-song class from element with ID:", element.id);
        }
    });
}