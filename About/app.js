//create variable to grab ('next')
const next = document.querySelector('.next')
//create variable to grab ('images')
const images = document.getElementsByClassName('images');
//create variable to grab previus img
const prev = document.querySelector('.prev')
//create variable to select all ('button')
const pageLinks = document.querySelectorAll('button');
console.log(pageLinks);

//keep track of what image is showing
let currentImgIndex = 0;

//create variable to keep track of what image we switch from
let previousImgIndex = 0;

//eventListener that will hide previous img and show next
next.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex++

    //create a loop to cycle back to first img after last img
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }
    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
});
//eventListener to view previous and hide current img
prev.addEventListener('click', () => {
    previousImgIndex = currentImgIndex
    currentImgIndex--

    //create a loop to cycle back to last img after first img
    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }
    images[previousImgIndex].style.display = 'none'
    images[currentImgIndex].style.display = 'block'
});

pageLinks.forEach(element => {
    element.addEventListener('mouseover', function() {
      element.style.backgroundColor = 'blue';
    })
    element.addEventListener('mouseleave', function () {
      element.style.backgroundColor = 'white';
    })
  })