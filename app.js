document.addEventListener('DOMContentLoaded',  ()=>{
   let accordHeading = document.querySelectorAll('.accordionHeading');
//    let plus = document.querySelector('.plus');
//    let minus = document.querySelector('.minus')

let icons = document.querySelectorAll('.button');

   accordHeading.forEach(button =>{
     button.addEventListener('click', () =>{
    let accordContent = button.nextElementSibling;
     
     if (accordContent.style.display === 'flex' ) {
         accordContent.style.display = 'none'
       
     } else {
         accordContent.style.display = 'flex'  
          
     } 

     icons.forEach(icon =>{
       let firstChild = icon.firstElementChild;
       let  lastchild = icon.lastElementChild;
       console.log(lastchild)


       if (firstChild.style.display === ' flex' && lastchild.style.display === 'none') {
        firstChild.style.display === 'none'
        lastchild.style.display === 'flex'
       } else {
        firstChild.style.display === ' flex'
       }lastchild.style.display === 'none'
     })

   
        
     })
   })
})



