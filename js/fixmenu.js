{
    window.onload = function () {
        const fixBt = document.querySelector(".fixmenu-bottom")
        let scTop = 0;
        fixBt.addEventListener("click", function () {
            scTop = document.documentElement.scrollTop;
            const scrollElement = 
            window.document.scrollingElement ||
            window.document.body ||
            window.document.documentElement;
            if ( scTop > 200 ) {
                anime({
                    targets: scrollElement,
                    scrollTop: 0,
                    duration: 1500,
                    easing: "easeInOutQuad",
                    });
            } else {
                anime({
                    targets: scrollElement,
                    scrollTop: document.documentElement.scrollHeight,
                    duration: 2000,
                    easing: "easeInOutQuad",
                    });
            }
        });
        window.addEventListener("scroll", function () {
            scTop = document.documentElement.scrollTop;
            if (scTop > 200) {
                fixBt.classList.add("active");
            } else {
                fixBt.classList.remove("active");
            }
        });
    };
}