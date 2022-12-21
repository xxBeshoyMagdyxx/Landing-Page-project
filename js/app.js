/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
// Scroll to section on link click
// Set sections as active





const navList = document.getElementById("navbar__list");
const sections = Array.from(document.querySelectorAll("section"));

function createListItem() {
    for (sec of sections) {
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="${sec.id}" data-nav="${sec.id}" class="menu__link">${sec.dataset.nav}</a>`
        navList.appendChild(listItem);
    }
}
// getBoundingClientRect
createListItem();
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        if (
            active.getBoundingClientRect().top >= -400 &&
            active.getBoundingClientRect().top <= 150
        ) {
            active.classList.add("your-active-class");
        } else{
            active.classList.remove("your-active-class");
        }
    });
};
/** 
* when you click on nav links will go smoothly to the correct section
* i can shortcut this code just using CSS (html{ scroll-behavior: "smooth"})
* but I think it better to use what I learn
* I use setTimeout to earn some time to scroll smoothly
*/
navList.addEventListener("click", (tosecton) => {
    tosecton.preventDefault();
    if (tosecton.target.dataset.nav) {
        document.getElementById(`${tosecton.target.dataset.nav}`).scrollIntoView({ behavior: "smooth"});
        setTimeout(() => {
            location.hash = `${tosecton.target.dataset.nav}`;
        }, 200);
    }

})
