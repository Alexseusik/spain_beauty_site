let burgerbtn = document.querySelector("#burgerbtn");
let burgermenu = document.querySelector("#burgermenu");

let banner = document.querySelector("#banner");
let bannerinfo = document.querySelector("#bannerclosed");

let courseinfo = document.querySelector("#courseInfo");
let closeinfo = document.querySelector("#closeCourseInfo");

function toggleBurger() {
    burgerbtn.classList.toggle("active");
    burgermenu.classList.toggle("active");
}

function changeAdBanner() {
    banner.classList.toggle("closed");
    bannerinfo.classList.toggle("active");
}

function changeAdditionalBanner() {
    courseinfo.classList.toggle("active");
}