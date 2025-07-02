document.querySelectorAll(".accordion-header").forEach(button => {
    button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const openItem = document.querySelector(".accordion-item.active");

    if (openItem && openItem !== accordionItem) {
        openItem.classList.remove("active");
        openItem.querySelector(".accordion-body").style.maxHeight = null;
    }

    accordionItem.classList.toggle("active");
    const body = accordionItem.querySelector(".accordion-body");
    if (accordionItem.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px";
    } else {
        body.style.maxHeight = null;
    }
    });
});
