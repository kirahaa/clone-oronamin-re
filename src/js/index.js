/* for index.html */

export function winning() {
    location.href = "./result.html?win"
}
export function failing() {
    location.href = "./result.html?fail"
}

$(function () {
    $('#startBtn').on('click', function () {
        Math.random() < 0.8 ? failing() : winning();
    })
})