console.log("Welcome to Beat-On");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Animals-Martin Garrix", filePath: "songs/1.mp3", coverPath: "1.jfif"},
    {songName: "Don't stop the Music-Rihanna", filePath: "songs/2.mp3", coverPath: "covers/2.jpeg"},
    {songName: "Faded-Alan Walker", filePath: "songs/3.mp3", coverPath: "covers/3.jfif"},
    {songName: "Lean On-Major Lazer & DJ Snake", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Don Omar-Danza Kuduro ft Lucenzo", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Shape of you -ED Sheeran", filePath: "songs/6.mp3", coverPath: "covers/6.jiff"},
    {songName: "Me,Myself & I-Bebe Rexha & G-Eazy", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Ruleta-Inna ft Erik", filePath: "songs/8.mp3", coverPath: "covers/8.jiff"},
    {songName: "Starboy-The Weeknd ft Daft Punk", filePath: "songs/9.mp3", coverPath: "covers/9.jiff"},
    {songName: "Let me love you-Dj Snake ft Justin Bieber", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]
const elements = document.querySelectorAll('.my-element');

if (elements.length) {
  elements.forEach((element) => {
    element.innerText = 'Updated text';
  });
}
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})