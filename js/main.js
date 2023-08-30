const _app = {};

_app.header = () => {
    let index = document.getElementById("index")
    let works = document.getElementById("works")
    let about = document.getElementById("about")
    if (window.location.pathname.includes("index.html")) {
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
    _app.header()
};

_app.startUp();
