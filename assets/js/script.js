const IIFEDOM = (() => {

    function privateAtribute(url, id) {
        id.setAttribute("src", url);
    }
    // claudura
    return {
        publica(url, id) {
            privateAtribute( url,id);
        }
    };
})();


class Multimedia {
    constructor(url) {
        let _url = url;

        this.setURL = (value) => (_url = value);
        this.getURL = () => _url
    }

    get getterUrl() {
        return this.getURL();
    }

    set url(value) {
        return this.setURL(value);
    }
    setInicio() {

    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = id
    }
    playMultimedia() {
        IIFEDOM.publica(this.getURL(), this._id);
     }
    setInicio(tiempo) {
        IIFEDOM.publica(`${this.getURL()}?start=${tiempo}`, this._id);
     }
}


const btnMusic = document.getElementById("btnMusic");
const btnPelicula = document.getElementById("btnPelicula");
const btnSerie = document.getElementById("btnSerie");
const videoMusic = document.getElementById("videoMusic");
const videoPelicula = document.getElementById("videoPelicula");
const videoSerie = document.getElementById("videoSerie");
const btnSetMusica = document.getElementById("btnSetMusica");
const btnSetPelicula = document.getElementById("btnSetPelicula");
const btnSetSerie = document.getElementById("btnSetSerie");


btnMusic.addEventListener("click", () => {
    const video1 = new Reproductor("https://www.youtube.com/embed/Tu3l29CLjI4", videoMusic);
    // otra opcion era: video1._id.setAttribute("src", video1._url)
    video1.playMultimedia()
})
btnSetMusica.addEventListener("click", () => {
    const video1 = new Reproductor("https://www.youtube.com/embed/Tu3l29CLjI4", videoMusic);
    const alertInicio = +prompt("indique segundo Inicial")
    video1.setInicio(alertInicio)
})


btnPelicula.addEventListener("click", () => {
    const video2 = new Reproductor("https://www.youtube.com/embed/nJC0HpvySg0", videoPelicula);
    video2.playMultimedia()
})
btnSetPelicula.addEventListener("click", () => {
    const video2 = new Reproductor("https://www.youtube.com/embed/nJC0HpvySg0", videoPelicula);
    const alertInicio = +prompt("indique segundo Inicial")
    video2.setInicio(alertInicio)
})


btnSerie.addEventListener("click", () => {
    const video3 = new Reproductor("https://www.youtube.com/embed/rYwZ6n_Dd-4", videoSerie);
    video3.playMultimedia()
})
btnSetSerie.addEventListener("click", () => {
    const video3 = new Reproductor("https://www.youtube.com/embed/rYwZ6n_Dd-4", videoSerie);
    const alertInicio = +prompt("indique segundo Inicial")
    video3.setInicio(alertInicio)
    btnSetSerie.innerHTML=""

})