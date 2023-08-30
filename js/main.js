const _app = {};

_app.randomImgHome = () => {
    let cont = document.getElementById("imgHome"); // Get the HTML element by ID
    let images = [
        "./asset/images/zando.png",
        "./asset/images/zando2.png",
        "./asset/images/oggetto/0.jpg",
        "./asset/images/oggetto/4.jpg",
        "./asset/images/oggetto/9.jpg",
        "./asset/images/puntoDiDomanda/10.jpg",
        "./asset/images/puntoDiDomanda/12.jpg",
        "./asset/images/puntoDiDomanda/14.jpg",
        "./asset/images/Sindone/15.png",
    ];
    let randomIndex = Math.floor(Math.random() * images.length); // Generate a random index
    cont.src = images[randomIndex]; // Set the src attribute to the randomly selected image URL
};


_app.header = () => {
    let index = document.getElementById("index")
    let works = document.getElementById("works")
    let about = document.getElementById("about")
    if (window.location.pathname.includes("index.html")) {
        _app.randomImgHome();
        index.classList.add("underline")
        works.classList.remove("underline")
        about.classList.remove("underline")
    }
    if (window.location.pathname.includes("works.html")) {
        index.classList.remove("underline")
        works.classList.add("underline")
        about.classList.remove("underline")
    }
    if (window.location.pathname.includes("about.html")) {
        index.classList.remove("underline")
        works.classList.remove("underline")
        about.classList.add("underline")
    }
};

_app.startUp = () => {
    _app.header();
};

_app.startUp();
