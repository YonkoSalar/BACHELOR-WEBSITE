//Hidden navbar
const hide = document.getElementById("navbar");

//Navbar
const sections = document.querySelectorAll("section");
const line = document.querySelector(".line");

const options = {
    threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach((entry) => {
        const idName = entry.target.id;
        console.log(idName);
        const activeAnchor = document.querySelector(`[data-page=${idName}]`);
        console.log(activeAnchor);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height - 25,
            width: coords.width,
            top: coords.top + 35,
            left: coords.left,
        };

        if (entry.isIntersecting) {
            line.style.setProperty("left", `${directions.left}px`);
            line.style.setProperty("top", `${directions.top}px`);
            line.style.setProperty("width", `${directions.width}px`);
            line.style.setProperty("height", `${directions.height}px`);
            line.style.background = "background: blue";

            /* if (idName != "home") {
                hide.classList.remove('hidden')
            } else {
                hide.classList.add('hidden')
            } */
        }
    });
}

sections.forEach((section) => {
    observer.observe(section);
});
