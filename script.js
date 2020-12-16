function _load() {
    let myObjects = [
        {tag: "h1", content: "Mészáros Zoltán"},
        {tag: "p", content:"Frontend Developer"}
    ];

    let root = document.getElementById("root");

    root.addEventListener("click", function () {
        root.classList.toggle("clicked");
    });

    for (const object of myObjects) {
        let element = document.createElement(object.tag);
        element.innerHTML = object.content;

        root.appendChild(element);
    }

}

window.addEventListener("load", _load);