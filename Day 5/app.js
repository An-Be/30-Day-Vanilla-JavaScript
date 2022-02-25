const panels = document.querySelectorAll(".panel");

const toggleOpen = (e) => {
    e.target.classList.toggle("open");
}

const toggleActive = (e) => {
    if(e.propertyName.includes("flex"))
    {
        e.target.classList.toggle("open-active");
    }
}

//listen for a click on each panel and then run the toggleOpen function
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//listen for transitionend event
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));