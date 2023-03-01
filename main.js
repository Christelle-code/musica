function inserisciOggetti() {
    let listaCanzoni = [
        {
            autore: "autore1",
            cantante: "cantante1",
            album: "album1",
            video:"video.mp4",
            audio:"audio.wav"
        },
        {
            autore: "autore2",
            cantante: "cantante2",
            album: "album2",
            video:"video.mp4",
            audio:"audio.wav"
        },
        {
            autore: "autore3",
            cantante: "cantante3",
            album: "album3",
            video:"video.mp4",
            audio:"audio.wav"
        },
        {
            autore: "autore4",
            cantante: "cantante4",
            album: "album4",
            video:"video.mp4",
            audio:"audio.wav"
        }
    ]
    let autore;
    let cantante;
    let album;
    let lista;
    let uList=document.createElement("ul");
    let classe;

    for (let i = 0; i < listaCanzoni.length; i++) {
        lista = document.createElement("li");
        classe=document.createAttribute("class");
        classe.value="card";
        lista.setAttributeNode(classe);

        autore = document.createElement("p");
        autore.innerHTML = listaCanzoni[i].autore;

        cantante = document.createElement("p");
        cantante.innerHTML = listaCanzoni[i].cantante;

        album = document.createElement("p");
        album.innerHTML = listaCanzoni[i].album;

        pulsante1=document.createElement("button");
        pulsante1.innerHTML="video";

        pulsante2=document.createElement("button");
        pulsante2.innerHTML="audio";

        btnClass=document.createAttribute("class");
        btnClass.value="btn-primary";
        pulsante1.setAttributeNode(btnClass);
        btnClass2=document.createAttribute("class");
        btnClass2.value="btn-info";
        pulsante2.setAttributeNode(btnClass2);
        
        pulsante1.addEventListener('click', clickVideo);
        pulsante2.addEventListener('click', clickAudio);
       

        lista.appendChild(autore);
        lista.appendChild(cantante);
        lista.appendChild(album);
        lista.appendChild(pulsante1);
        lista.appendChild(pulsante2);


        uList.appendChild(lista)


    }



    
    let contenitore = document.getElementById("listSong");
    contenitore.appendChild(uList);


}
function clickVideo(){
    console.log("ciao")
}

function clickAudio(event){
    console.log("ciao")
    let audio;

    audio=document.createElement("audio");
    att=document.createAttribute("src");
    att.value=event.audio;
    audio.setAttributeNode(att);
}