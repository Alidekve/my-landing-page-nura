function toggleText() {
    const title = document.querySelector(".main-title");
    
    // Если текст видим, делаем его невидимым и наоборот
    if (getComputedStyle(title).opacity === "1") {
        title.style.opacity = "0";
    } else {
        title.style.opacity = "1";
    }
}