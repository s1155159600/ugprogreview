let goToTopButton = $(".goToTopButton").first();
window.onscroll = function () {
    scroll();
}

function scroll() {
    if (document.body.scrollTop || document.documentElement.scrollTop) goToTopButton.css("display", "block");
    else goToTopButton.css("display", "none");
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}