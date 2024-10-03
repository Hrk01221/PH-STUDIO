let index = 0;
let playingSong = false;
let track = document.createElement("audio");
let songName = document.querySelector("#song-name");
let songSinger = document.querySelector("#song-singer");
let songImage = document.querySelector(".song-image");
let playPauseImage = document.querySelector("#playpauseImg");
let volumeAdjust = document.querySelector("#volume-range");
let muteOrnotMute = document.querySelector("#vol-svg");
let songDuration = document.querySelector("#song-duration");
let songItem = document.querySelectorAll(".song-item");
let prev_ind = -1;
let songs = [
    {
        name: "Samne Wali khidki me",
        path: "musics/1.mp3",
        image: "assests/sl1.jpeg",
        singer: "KISHORE KUMAR"
    },
    {
        name: "Random Music 1",
        path: "musics/2.mp3",
        image: "assests/sl2.jpg",
        singer: "A GIRL"
    },
    {
        name: "Interstellar",
        path: "musics/3.flac",
        image: "assests/sl3.jpg",
        singer: "ITZ_PLK"
    },
    {
        name: "Amar Dehokhan",
        path: "musics/4.mp3",
        image: "assests/sl4.jpg",
        singer: "ODD SIGNATURE"
    },
    {
        name: "Dukkho Bilash",
        path: "musics/5.mp3",
        image: "assests/sl5.jpeg",
        singer: "ARTCELL"
    },
    {
        name: "Taray Taray",
        path: "musics/6.mp3",
        image: "assests/sl6.jpg",
        singer: "JAMES"
    },
]
function loadTrack(index){
    if(prev_ind==-1){
        songItem[index].style.background =  "rgba(255, 255, 255, 0.8)";
        prev_ind = index;
    }
    else {
        songItem[prev_ind].style.background =  "rgba(255, 255, 255, 0.4)";
        songItem[index].style.background =  "rgba(255, 255, 255, 0.8)";
        prev_ind = index;
    }
    songDuration.value = 0;
    track.src=songs[index].path;
    songName.innerHTML = songs[index].name;
    songSinger.innerHTML = songs[index].singer;
    songImage.style = `background-image: url("${songs[index].image}");`
    volume();
    duration();
    setInterval(()=>{
        songDuration.max = track.duration
        songDuration.value = track.currentTime
    },1000);
    track.loop=true;
    track.load();
}

loadTrack(index);
function playPause(){
    if(playingSong == false){
        playSong()
        musicanim.style.display = "block"
    }
    else {
        pauseSong()
        musicanim.style.display = "none"
    }
}
function playSong(){
    track.play();
    playingSong=true;
    playPauseImage.src = "assests/play.svg"
}
function pauseSong(){
    track.pause();
    playingSong=false;
    playPauseImage.src = "assests/pause.svg"
}
function prevSong(){
    if(index==0)index = songs.length-1;
    else index=index-1;
    loadTrack(index);
    playingSong=false;
    playPause();
}
function nextSong(){
    if(index==songs.length-1)index = 0;
    else index = index+1;
    loadTrack(index);
    playingSong = false;
    playPause();
}
function volume(){
    track.volume = volumeAdjust.value/100;
    if(volumeAdjust.value==0){
        muteOrnotMute.src = "assests/mute.svg";
    }
    else muteOrnotMute.src = "assests/volume.svg";
}
function duration(){
    track.currentTime = songDuration.value;
}
songItem.forEach((song,index)=>{
    song.addEventListener('click',()=>{
        playingSong = false;
        loadTrack(index);
        playPause();
        if(prev_ind==-1){
            songItem[index].style.background =  "rgba(255, 255, 255, 0.8)";
            prev_ind = index;
        }
        else {
            songItem[prev_ind].style.background =  "rgba(255, 255, 255, 0.4)";
            songItem[index].style.background =  "rgba(255, 255, 255, 0.8)";
            prev_ind = index;
        }
    })
})