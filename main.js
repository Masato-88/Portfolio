//create variable to select all ('button')
const pageLinks = document.querySelectorAll('a');
console.log(pageLinks);

pageLinks.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.style.color = 'white';
  })
  element.addEventListener('mouseleave', function () {
    element.style.color = 'darkslategrey';
  })
})