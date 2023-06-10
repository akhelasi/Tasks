//   JavaScript



function popup() {
    document.getElementById("popup").classList.add("open");
}



// გამოსული ფანჯარა იხურება როცა ღილაკ "Escape"-ს აჭერ
window.addEventListener("keydown", (a) => {
    if(a.key === "Escape") {
        document.getElementById("popup").classList.remove("open");
    }
});


