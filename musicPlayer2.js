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
// console.log(musics[0].song)
const playerImg = document.getElementById("imgTitle1");
const playerSong = document.getElementById("player1");
let playerTitle = document.getElementsByClassName("parag");


playerTitle = playerTitle[0];
const tableEl = document.getElementsByTagName("table")

let currentItem = 0;
console.log(currentItem)
window.addEventListener("DOMContentLoaded",function(){  
    showMusic(currentItem);
    const next = document.getElementById("next");
    const startPause = document.getElementById("start-pause");
    const back = document.getElementById("back");
    startPause.classList.add("play")

    next.addEventListener("click",function(e){
        currentItem++
        if(currentItem > musics.length-1){
            currentItem = 0;
        }
        console.log(currentItem)
        showMusic(currentItem);
        
    })

    back.addEventListener("click", function(){
        currentItem--
        if(currentItem < 0){
            currentItem = musics.length-1
        }
        console.log(currentItem)
        showMusic(currentItem);
    })

    startPause.addEventListener("click",function(e){
        let target = e.currentTarget;
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
            let target = e.currentTarget;
            playerImg.src = item.image
            playerSong.src = item.song
            playerTitle.textContent = item.title
            document.getElementById("play").load();
            document.getElementById("play").play();
            console.log(currentItem)
            var elements = document.querySelectorAll("#row")
            for(i = 0; i < musics.length; i++){
                elements[i].classList.remove("active")
                
            }
            musicP.classList.add("active")

        })
       
        tableEl[0].appendChild(musicP) 
       
    }
 
})

function showMusic(item){
    const music = musics[item];
    playerImg.src = music.image;
    playerSong.src = music.song;

    playerTitle.textContent = music.title
    document.getElementById("play").load();


}

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

// var test =  fun2()+fun1() 
// console.log(test)
// function fun1(){
//     console.log("hello")
//     return 1;
// }
// function fun2(){
//     console.log("world")
//     return 1;
// }

// let x = 1
// result = 5 + ++x;
// console.log(x);
// console.log(result);
// let y = 1
// result2 = 5 + y++;
// console.log(y);
// console.log(result2);

// let arr = ['a','b','c','d'];
// let i = 0;
// console.log(arr[i++])
// console.log(arr[++i])
// console.log(i++)
// console.log(i++)

// const previousPlayer1 = document.getElementById("previousP");
// const previousPlayer2 = document.getElementById("previousP2");
// const previousPlayer3 = document.getElementById("previousP3");

// const previousPlayers = [previousPlayer1, previousPlayer2, previousPlayer3]    




// function previousPlayerA(){

//     let clickIts = []

//     var image1 = document.getElementById("imgTitle1");
//     var image2 = document.getElementById("imgTitle2");
//     var image3 = document.getElementById("imgTitle3");
//     var image4 = document.getElementById("imgTitle4");
//     var music1 = document.getElementById("player1");
//     var music2 = document.getElementById("player2");
//     var music3 = document.getElementById("player3");
//     var music4 = document.getElementById("player4");    

//     var parag = document.getElementsByClassName("parag")

//     function MusicPlayer(title,music,image){
//         this.title = title;
//         this.music = music;
//         this.image = image;
//     }
    
//     let yoku = new MusicPlayer(parag[0].innerHTML, music1.src, image1.src)
//     let light = new MusicPlayer(parag[1].innerHTML, music2.src, image2.src)
//     let sino = new MusicPlayer(parag[2].innerHTML, music3.src, image3.src)
//     let paraluman = new MusicPlayer(parag[3].innerHTML, music4.src, image4.src)

//     clickIts.push(yoku)
//     clickIts.push(light)
//     clickIts.push(sino)
//     clickIts.push(paraluman)

//     return clickIts
// }

// function switchClick(){

//     let currentPlayer = [];

    
    

// }

// const previousPlayerR = previousPlayerA();


// window.onload = function(){
//     for(i = 0; i < previousPlayerR.length; i++){
//         previousPlayerR[i].onclick = switchClick();
//     }
// }
 
// function switchPlayer(){

//     for(let i = 0; i < clickIts.length; i++){
        
//     }
// }