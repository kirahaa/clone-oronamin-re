/* common script */

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
    if(result === 'fail') {
        $('.form__success').classList.add('-off');
    }
})

// 라디오, 체크박스 WCAG 토글 처리
function toggleWCAG (el, type, key) {
    if ( type == 'radio' ) {
        $('.' + el.attr('class').split('-')[0]).attr(key, 'false');
        el.attr(key, 'true');
    } else { // type == undefined || type == 'checkbox'
        el.attr(key)  == 'true' ?
            el.attr(key, 'false') :
            el.attr(key, 'true');
    }
}

function apply() {
    $('#data-form').submit();
}

$(document).ready(function() {

    // 라디오, 체크박스 WCAG 토글 처리
    $('input').on('click', function () {
        if ($(this).attr('type') == 'radio') {
            toggleWCAG($(this), 'radio', 'aria-checked');
        } else if ($(this).attr('type') == 'checkbox') {
            toggleWCAG($(this), 'checkbox', 'aria-checked');
            // 약관 동의 여부에 따른 하단 '작성 완료' 버튼 활성/비활성 처리
            if($(this).attr('aria-checked') == 'true') {
                $('.form__button').attr('aria-disabled', 'false');
                $('.form__button').on('click',apply);
            } else {
                $('.form__button').attr('aria-disabled', 'true');
                $('.form__button').unbind('click', apply);
            }
        }
    })
})