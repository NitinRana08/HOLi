// function startHoli() {
//     document.getElementById("holika").style.display = "none";
//     document.getElementById("colorHoli").style.display = "flex";
// }
function toggleRead() {
    const extra = document.getElementById("extraContent");
    const btn = document.querySelector(".read-btn");

    extra.classList.toggle("show");

    if (extra.classList.contains("show")) {
        btn.innerText = "Read Less";
    } else {
        btn.innerText = "Read More";
    }
}
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("color-btn")) {
        const splash = document.createElement("div");
        splash.classList.add("splash");

        splash.style.left = Math.random() * window.innerWidth + "px";
        splash.style.top = Math.random() * window.innerHeight + "px";

        document.body.appendChild(splash);

        setTimeout(() => {
            splash.remove();
        }, 1000);
    }
});

function startHoli() {
    const holika = document.getElementById("holika");
    const holi = document.getElementById("colorHoli");
    const video = document.querySelector(".bg-video2");


    holika.style.transition = "opacity 1s ease";
    holika.style.opacity = "0";

    setTimeout(() => {
        holika.style.display = "none";

        holi.style.display = "flex";
        setTimeout(() => {
            holi.style.opacity = "1";
        }, 100);


        video.play();
    }, 1000);
}
