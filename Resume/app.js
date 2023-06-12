//create a variable to grab openModal btn
const openBtn = document.getElementById('openModal');
console.log(openBtn);
//create a variable to grab modal
const modal = document.getElementById('modal');

//create a variable to close a modal
const closeBtn = document.getElementById('close');

//create a function to open the modal
const openModal = () => {
    modal.style.display = 'flex';
    openBtn.style.visibility = 'hidden';
}
//create eventListener to open modal
openBtn.addEventListener('click', openModal) 
    
//event handler to close modal
const closeModal = () => {
    modal.style.display = 'none'
    openBtn.style.visibility = 'initial'
}


//create variable to select all ('a')
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

//add eventListener to close modal
closeBtn.addEventListener('click', closeModal)

