let accordHeading = document.querySelectorAll('.accordionHeading');

accordHeading.forEach(button =>{
  console.log(button)
let plus = document.querySelectorAll('.plus');
let minus = document.querySelectorAll('.minus')
  button.addEventListener('click', ()=> {
     let accordContent = button.nextElementSibling;
   console.log(accordContent)


       accordContent.classList.toggle('expand');
  })

})


