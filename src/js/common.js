/* common script */

export function common() {
    let search = location.search;
    let result = search.split("?")[1];
    let resultImage = document.querySelectorAll('[data-control="toggle"]');

    /* result.html 결과 이미지 토글 */
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
        /* result.html */
        $('#resultBtn').on('click', function () {
            if(result === 'fail') {
                location.href = "./form.html?fail";
            } else {
                location.href = "./form.html?win";
            }
        })
        if(result === 'fail') {
            $('.form__success').addClass('-off');
            $('#form__confirm').addClass('-off');
        }
        /* confirm.html */
        $('#confirmBtn').on('click', function () {
            alert('이벤트 참여가 완료되었습니다.')
        })
        $('#rewriteBtn').on('click', function () {
            location.href = "./form.html?" + result;
        })
        // 라디오, 체크박스 WCAG 토글 처리
        $('input').on('click', function () {
            if ($(this).attr('type') == 'radio') {
                toggleWCAG($(this), 'radio', 'aria-checked');
            } else if ($(this).attr('type') == 'checkbox') {
                toggleWCAG($(this), 'checkbox', 'aria-checked');
                // 약관 동의 여부에 따른 하단 '작성 완료' 버튼 활성/비활성 처리
                if($(this).attr('aria-checked') == 'true') {
                    $('.form__button').attr('aria-disabled', 'false');
                } else {
                    $('.form__button').attr('aria-disabled', 'true');
                }
            }
        })
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
}
