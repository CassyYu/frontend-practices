window.onload = function() {
    const $titles = document.getElementsByClassName("title");
    const $subTitles = document.getElementsByClassName("subTitle");
    [...$titles].forEach(($title, index) => {
        $title.addEventListener("mouseover", function() {
            $subTitles[index].setAttribute("style", "display: block;");
        })
        $title.addEventListener("mouseout", function() {
            $subTitles[index].setAttribute("style", "display: none;");
        })
    });

}