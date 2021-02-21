const accordionItemHeaders = document.querySelectorAll(".accordionItemHead");


accordionItemHeaders.forEach(accordionItemHeaders => {
    accordionItemHeaders.addEventListener("click", event => {
        console.log("click");
    })
})