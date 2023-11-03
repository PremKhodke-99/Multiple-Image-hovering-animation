var elem = document.querySelectorAll(".elem");

elem.forEach((e) => {
    e.addEventListener('mousemove',(dets)=> {
        e.childNodes[3].style.left = dets.x+"px"
        // e.childNodes[3].style.top = dets.y+"px"
    })
    e.addEventListener('mouseenter',() => {
        e.childNodes[3].style.opacity = 1;
    })
    e.addEventListener('mouseleave',() => {
        e.childNodes[3].style.opacity = 0;
    })
})

// var elemImage = document.querySelector("#elem1 img")

// elem1 .addEventListener('mousemove', (e) => {
//     elemImage.style.left = e.x +"px"
//     elemImage.style.top = e.y +"px"
// })
// elem1 .addEventListener('mouseenter', (e) => {
//     elemImage.style.opacity = 1;
// })
// elem1 .addEventListener('mouseleave', (e) => {
//     elemImage.style.opacity = 0;
// })