const sections = document.querySelectorAll('section');
const line = document.querySelector('.line');

const options = {
    threshold: 0.9
};

let observer = new IntersectionObserver(navCheck, options);
function navCheck(entries){
    entries.forEach(entry => {
        const idName = entry.target.id;
        const idName = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left,

        };

        if(entry.isIntersecting){
            line.style.setProperty('left', `${directions.left}px`);
            line.style.setProperty('top', `${directions.top}px`);
            line.style.setProperty('width', `${directions.width}px`);
            line.style.setProperty('height', `${directions.height}px`);
            line.style.background = blue;
        }
    });

}

sections.forEach(section => {
    observer.observe(section);

});
