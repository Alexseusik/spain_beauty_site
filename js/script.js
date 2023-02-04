let burgerbtn = document.querySelector("#burgerbtn");
let burgermenu = document.querySelector("#burgermenu");

function toggleBurger() {
    burgerbtn.classList.toggle("active");
    burgermenu.classList.toggle("active");
}

// $(function () {
//     // Header
//     let header = $("#header");
//     let main = $("#main");
//     let mainH = main.innerHeight() - 20;
//     let scrollPos = $(window).scrollTop();
//     checkScroll(scrollPos,mainH);
//
//     $(window).on("scroll resize", function(){
//         let mainH = main.innerHeight() - 20;
//         scrollPos=$(this).scrollTop();
//         checkScroll(scrollPos,mainH);
//     });
//
//     function checkScroll(scrollPos,mainH) {
//         if (scrollPos> mainH) {
//             header.addClass("fixed");
//         } else {
//             header.removeClass("fixed");
//         }
//     }
// })