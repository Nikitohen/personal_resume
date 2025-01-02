// h2 and p element variables

const h2Elements = document.querySelectorAll('.about-me .heading, .early-90 .heading, .early-2000 .heading, .mid-2000 .heading, .education .heading, .finance .heading, .manufacturing .heading, .current-time .heading');
const pElements = document.querySelectorAll('.about-me .text-block, .early-90 .text-block, .early-2000 .text-block, .mid-2000 .text-block, .education .text-block, .finance .text-block, .manufacturing .text-block, .current-time .text-block');

// function to toggle visibility of p element on/off and add/remove vertical line respectively
function toggleText(index) {
    const currentDisplay = pElements[index].style.display;
    pElements[index].style.display = currentDisplay;

    if (currentDisplay === 'block') {
        pElements[index].style.display = 'none';
        currentHeight -= 215;
    } else {
        pElements[index].style.display = 'block';
        currentHeight += 215;
    }

    verticalLine.style.height = `${currentHeight}px`;
}

// click event listener on h2 elements via forEach iteration
h2Elements.forEach((h2Element, index) => {
    h2Element.addEventListener('click', () => toggleText(index));
});

// vertical line variables

const verticalLine = document.querySelector('.vertical-line');

let currentHeight = 1000;
