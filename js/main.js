let maxAngleDeg = 2;
let mouseOverContainer = document.body;
let ex1Layer = document.getElementById("backgroundSplash");

let _root = document.querySelector(':root');

mouseOverContainer.addEventListener("mousemove", onPerspectiveTriggerMove);

function transformElement(el, xyEl)
{
    transforms.apply(null, xyEl);
}

function transforms(x, y, el)
{
    let box = el.getBoundingClientRect();

    ((x - (window.innerWidth / 2)) / window.innerWidth) * maxAngleDeg;


    let calcX = ((y - (window.innerHeight / 2)) / window.innerHeight) * maxAngleDeg;
    let calcY = -((x - (window.innerWidth / 2)) / window.innerWidth) * maxAngleDeg;

    _root.style.setProperty("--bg-rotate-x", calcX+"deg");
    _root.style.setProperty("--bg-rotate-y", calcY+"deg");
};

function onPerspectiveTriggerMove(e)
{
    let xy = [e.clientX, e.clientY];
    let position = xy.concat([ex1Layer]);
    window.requestAnimationFrame(function () {
        transformElement(ex1Layer, position);
    });
};
