//create variable to select all ('button')
const pageLinks = document.querySelectorAll('button');
console.log(pageLinks);

// document.addEventListener('mouseover', function () {
//   pageLinks.forEach(element => {
//     console.log('I work')
//     // property.style.background = blue; 
//   })
// });

pageLinks.forEach(element => {
  element.addEventListener('mouseover', function() {
    element.style.backgroundColor = 'blue';
  })
  element.addEventListener('mouseleave', function () {
    element.style.backgroundColor = 'white';
  })

})