//create variable to select all ('button')
const pageLinks = document.querySelectorAll('button');
console.log(pageLinks);

pageLinks.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.style.backgroundColor = 'blue';
  })
  element.addEventListener('mouseleave', function () {
    element.style.backgroundColor = 'white';
  })
})