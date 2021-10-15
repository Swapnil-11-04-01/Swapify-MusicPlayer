console.log("Welcome To Spotify");

// Initialize the variables
let songIndex = "1";
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

let songs = [
    {songName: "Colors", filepath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName: "Shinzou Wo Sasageyo", filepath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songName: "Again", filepath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songName: "Gurenge", filepath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songName: "Hero Too", filepath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songName: "TOP", filepath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songName: "Blue Bird", filepath:"songs/7.mp3", coverpath:"covers/7.jpg"},
    {songName: "Limit Break X Survivor", filepath:"songs/8.mp3", coverpath:"covers/8.jpg"},
    {songName: "Hacking To The Game", filepath:"songs/9.mp3", coverpath:"covers/9.jpg"},
    {songName: "No.1", filepath:"songs/10.mp3", coverpath:"covers/10.jpg"},
]

//Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();

        if(audioElement.src.slice(-11,) == "songs/1.mp3"){
            document.body.style.backgroundImage = `URL("covers/1.jpg")`;
            document.body.style.backgroundSize = `cover`;
            document.getElementById("1").classList.remove("fa-play-circle");
            document.getElementById("1").classList.add("fa-pause-circle");
        }

        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;

    }
})

const makeAllPlace = () =>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}



// Listen to Events
audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");

    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    if(progress == 100){
        if(parseInt(songIndex)>9){
            songIndex = "1";
        }
        else{
            songIndex = (parseInt(songIndex)+1).toString();
        }
        audioElement.src = "songs/" + songIndex + ".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        makeAllPlace();
        document.getElementById(songIndex).classList.remove("fa-play-circle");
        document.getElementById(songIndex).classList.add("fa-pause-circle");
        document.body.style.backgroundImage = `URL("covers/${songIndex}.jpg")`;
        document.body.style.backgroundSize = `cover`;
        masterSongName.innerText = songs[parseInt(songIndex)-1].songName;
    }
})


myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) =>{
        makeAllPlace();
        songIndex = e.target.id;
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = "songs/" + songIndex + ".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        document.body.style.backgroundImage = `URL("covers/${songIndex}.jpg")`;
        document.body.style.backgroundSize = `cover`;
        gif.style.opacity = 1;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        masterSongName.innerText = songs[parseInt(songIndex)-1].songName;
    })
})

document.getElementById("next").addEventListener("click", () =>{
    if(parseInt(songIndex)>9){
        songIndex = "1";
    }
    else{
        songIndex = (parseInt(songIndex)+1).toString();
    }
    audioElement.src = "songs/" + songIndex + ".mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlace();
    document.getElementById(songIndex).classList.remove("fa-play-circle");
    document.getElementById(songIndex).classList.add("fa-pause-circle");
    document.body.style.backgroundImage = `URL("covers/${songIndex}.jpg")`;
    document.body.style.backgroundSize = `cover`;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    masterSongName.innerText = songs[parseInt(songIndex)-1].songName;
})

document.getElementById("previous").addEventListener("click", () =>{
    if(parseInt(songIndex)==1){
        songIndex = "10";
    }
    else{
        songIndex = (parseInt(songIndex)-1).toString();
    }
    audioElement.src = "songs/" + songIndex + ".mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    makeAllPlace();
    document.getElementById(songIndex).classList.remove("fa-play-circle");
    document.getElementById(songIndex).classList.add("fa-pause-circle");
    document.body.style.backgroundImage = `URL("covers/${songIndex}.jpg")`;
    document.body.style.backgroundSize = `cover`;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    masterSongName.innerText = songs[parseInt(songIndex)-1].songName;
})