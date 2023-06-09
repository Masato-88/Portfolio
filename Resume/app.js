//create a variable to grab openModal btn
const openBtn = document.getElementById('openModal');
console.log(openBtn);
//create a variable to grab modal
const modal = document.getElementById('modal');

//create a variable to close a modal
const closeBtn = document.getElementById('close');

//create a function to open the modal
const openModal = () => {
    modal.style.display = 'block';
}
//create eventListener to open modal
openBtn.addEventListener('click', openModal)

//event handler to close modal
const closeModal = () => {
    modal.style.display = 'none'
}

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

//add eventListener to close modal
closeBtn.addEventListener('click', closeModal)

