// document.addEventListener('DOMContentLoaded',  ()=>{
//    let accordHeading = document.querySelectorAll('.accordionHeading');
// let icons = document.querySelectorAll('.button');

//    accordHeading.forEach(button =>{
//      button.addEventListener('click', () =>{
//     let accordContent = button.nextElementSibling;
     
//      if (accordContent.style.display === 'flex' ) {
//          accordContent.style.display = 'none'
       
//      } else {
//          accordContent.style.display = 'flex'  
          
//      } 



   
        
//      })
//    })
// })


document.querySelectorAll('.accordionHeading').forEach((heading) => {
  heading.addEventListener('click', function () {
      const accordionMessage = this.nextElementSibling;

     
      accordionMessage.classList.toggle('expanded');
  });
});
