const musics = [
    {
        id: 0,
        image: "images/adie-paraluman.jpg", 
        title: "Paraluman By Adie",
        song: "musics/adie-paraluman.mp3"
    },
    {
        id: 1,
        image: "images/lightswitch.png", 
        title:"Light Switch by Charlie Puth",
        song: "musics/LightSwitch.mp3"
    },
    {
        id: 2,
        image: "images/yoku.webp", 
        title:"Yoku by Eve",
        song: "musics/YOKU-Eve.mp3"
    },
    {
        id: 3,
        image: "images/uniqueSino.jpg", 
        title:"Sino by Unique",
        song: "musics/unique-sino.mp3"
    }    
]


const playerImg = document.getElementById("imgTitle1");
const playerSong = document.getElementById("player1");
let playerTitle = document.getElementsByClassName("parag");


playerTitle = playerTitle[0];
const tableEl = document.getElementsByTagName("table")

// Item number of musics
let currentItem = 0;
window.addEventListener("DOMContentLoaded",function(){  
    showMusic(currentItem);
    const next = document.getElementById("next");
    const startPause = document.getElementById("start-pause");
    const back = document.getElementById("back");
    startPause.classList.add("play")
    // Next button 
    next.addEventListener("click",function(e){
        currentItem++
        if(currentItem > musics.length-1){
            currentItem = 0;
        }
        showMusic(currentItem);
        
    })
    // Back button
    back.addEventListener("click", function(){
        currentItem--
        if(currentItem < 0){
            currentItem = musics.length-1
        }
        showMusic(currentItem);
    })
    // pause and start
    startPause.addEventListener("click",function(e){
        const play = document.getElementById("play");
        play.autoplay = true
        play.load()
        if(startPause.classList.contains("play")){
            startPause.classList.toggle("play");
            startPause.classList.add("pause");
        }else if(startPause.classList.contains("pause")){
            play.autoplay = false
            startPause.classList.toggle("pause")
            startPause.classList.add("play");
        }   
    })
    for(i = 0; i < musics.length; i++){

        let item = musics[i];  
        let musicP = tableP(item.image, item.song, item.title)
        musicP.addEventListener("click",function(e){
            currentItem = item.id
            playerImg.src = item.image
            playerSong.src = item.song
            playerTitle.textContent = item.title
            document.getElementById("play").load();
            document.getElementById("play").play();
            var elements = document.querySelectorAll("#row")
            for(i = 0; i < musics.length; i++){
                elements[i].classList.remove("active")
                
            }
            musicP.classList.add("active")

        })
       
        tableEl[0].appendChild(musicP) 
       
    }
 
})
// UI of on play musics
function showMusic(item){
    const music = musics[item];
    playerImg.src = music.image;
    playerSong.src = music.song;

    playerTitle.textContent = music.title
    document.getElementById("play").load();


}

// UI table
function tableP(image, song, title){

let trEl = document.createElement("tr"),
    docFang = document.createDocumentFragment(),
    tdEl = document.createElement("td"),
    buttonEl = document.createElement("button"),
    divPEL = document.createElement("div"),
    divC1EL = document.createElement("div"),
    imgEl = document.createElement("img"),
    pEL = document.createElement("p"),
    audioEl = document.createElement("audio"),
    sourceEl = document.createElement("audio");

    trEl.setAttribute("id", "row")
    trEl.appendChild(tdEl)
    tdEl.appendChild(divPEL)
    divPEL.setAttribute("id", "previousP")
    divPEL.appendChild(divC1EL)
    divC1EL.appendChild(imgEl)
    divC1EL.setAttribute("class", "box2")
    imgEl.setAttribute("id", "imgTitle2")
    imgEl.src = "sss"
    divC1EL.appendChild(pEL)
    pEL.setAttribute("class", "parag")
    divPEL.appendChild(audioEl)
    audioEl.appendChild(sourceEl)
    audioEl.setAttribute("id", "play2")
    sourceEl.setAttribute("id", "player2")

    imgEl.src = image
    sourceEl.src = song
    pEL.textContent = title

 
    return docFang.appendChild(trEl);
}

