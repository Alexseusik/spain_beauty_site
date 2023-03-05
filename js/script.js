let burgerbtn = document.querySelector("#burgerbtn");
let burgermenu = document.querySelector("#burgermenu");

let banner = document.querySelector("#banner");
let bannerconntent = document.querySelector("#bannercontent");
let bannerclosed = document.querySelector("#bannerclosed");

const map =
function toggleBurger() {
    burgerbtn.classList.toggle("active");
    burgermenu.classList.toggle("active");
}
function closeAdBanner() {
    // bannerconntent.classList.remove("animate__animated",
    //     "animate__slideInUp");
    bannerconntent.classList.add(/*"animate__animated",
        "animate__slideOutDown",*/
        "closed");
    banner.classList.add("closed");
    // bannerclosed.classList.remove("animate__slideOutDown");
    bannerclosed.classList.add("active",
        /*"animate__animated",
        "animate__slideInUp"*/);

}
function openAdBanner() {
    bannerconntent.classList.remove(/*"animate__animated",
        "animate__slideOutDown",*/ "closed");
    // bannerconntent.classList.add("animate__animated",
    //     "animate__slideInUp");
    banner.classList.remove("closed");
    bannerclosed.classList.remove("active",
        /*"animate__slideInUp"*/);
    // bannerclosed.classList.add("animate__slideOutDown");
}

function initMap() {

}