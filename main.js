//create variable to select all ('button')
const pageLinks = document.querySelectorAll('button');
console.log(pageLinks);


//add event listeners for each button
for(let btn of pageLinks) {
    btn.addEventListener('click', (event) => {
        console.log();
    })
}

//Scroll to top of page function
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  