/* for result.html */

let search = location.search;
let result = search.split("?")[1];
let resultImage = document.querySelectorAll('[data-control="toggle"]');

resultImage.forEach(function(element, index) {
    let images = element.children;
    images[index].classList.remove("-on");
    if(result === 'fail') {
        images[1].classList.add("-on");
    } else {
        images[0].classList.add("-on");
    }
})
$(function() {
    $('#resultBtn').on('click', function () {
        if(result === 'fail') {
            location.href = "./form.html?fail";
        } else {
            location.href = "./form.html?win";
        }
    })
})
// document.querySelector('#resultBtn').addEventListener( "click",function () {
//     if(result === 'fail') {
//         location.href = "./form.html?fail";
//     } else {
//         location.href = "./form.html?win";
//     }
// })