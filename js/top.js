
$(function() {
    clickReadMore();
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