
$(function() {
    clickReadMore();
    smoothScroll();
});

// readmoreクリック処理
function clickReadMore() {
    $('#read-more-button').on('click', function () {
        var content = document.querySelector(".read-more-contents");
        var button = document.querySelector(".read-more");
        var image = document.querySelector(".linear-gradient");

        content.style.display = "block";
        button.style.display = "none";
        image.classList.remove("linear-gradient");
    });
}

// スムーススクロール
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();  // デフォルトのリンク動作をキャンセル
            const targetId = this.getAttribute('href');  // クリックされたリンクのターゲットIDを取得
            const targetElement = document.querySelector(targetId);  // ターゲット要素を取得
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'  // スムーススクロール
                });
            }
        });
    });
}