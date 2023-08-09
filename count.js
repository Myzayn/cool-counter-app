const navbar = document.getElementById("navbar");
const navbarToggle = document.getElementById("navbarToggle");

navbarToggle.addEventListener("click", () => {
    navbar.classList.toggle("collapsed");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("collapsed");
    } else {
        navbar.classList.remove("collapsed");
    }
});





let saveEl =document.getElementById("save-el")
let elCount =document.getElementById("read")
console.log(elCount)


let count = 0
// console.log(saveEl)




function incriment() {
    count += 1
    elCount.innerText= count
}


// creating function for save 
function save() {
    let dashSep = count + "-"

    saveEl.textContent += dashSep
    elCount.textContent =0
    count=0


}
save()


