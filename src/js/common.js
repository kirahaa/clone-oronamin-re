/* common script */

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

$(document).ready(function() {

    // 라디오, 체크박스 WCAG 토글 처리
    $('input').on('click', function () {
        if ($(this).attr('type') == 'radio') {
            toggleWCAG($(this), 'radio', 'aria-checked');
        } else {
            toggleWCAG($(this), 'checkbox', 'aria-checked');
            // 약관 동의 여부에 따른 하단 '작성 완료' 버튼 활성/비활성 처리
            if($(this).attr('aria-checked') == 'true') {
                $('.form__button').attr('aria-checked', 'false');
                $('.form__button').on('click',apply);
            } else {
                $('.form__button').attr('aria-disabled', 'true');
                $('.form__button').unbind('click', apply);
            }
        }
    })
})