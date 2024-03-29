//Hidden navbar
const hide = document.getElementById("navbar");

//Navbar
const sections = document.querySelectorAll("section");
const line = document.querySelector(".line");

const options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0
};

let observer = new IntersectionObserver(navCheck, options);

let activatedAnchor = null;

function navCheck(entries) {
    entries.forEach((entry) => {
        const idName = entry.target.id;
        const activeAnchor = document.querySelector(`[data-page=${idName}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height - 35,
            width: coords.width,
            top: coords.top + 35,
            left: coords.left,
        };
        if (entry.isIntersecting) {
            activatedAnchor = activeAnchor;
            //console.log("intersecting: " + entry.target.id)
            line.style.setProperty("left", `${directions.left}px`);
            line.style.setProperty("top", `${directions.top}px`);
            line.style.setProperty("width", `${directions.width}px`);
            line.style.setProperty("height", `${directions.height}px`);
            line.style.background = "background: blue";
        }
    });
}

function navResize(){
    //console.log("navResize");
    if(activatedAnchor !== null){
        const coords = activatedAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height - 35,
            width: coords.width,
            top: coords.top + 35,
            left: coords.left,
        };
        line.style.setProperty("left", `${directions.left}px`);
        line.style.setProperty("top", `${directions.top}px`);
        line.style.setProperty("width", `${directions.width}px`);
        line.style.setProperty("height", `${directions.height}px`);
        line.style.background = "background: blue";
    }
}

window.onresize = navResize;


sections.forEach((section) => {
    observer.observe(section);
});




