
document.querySelector('.values').addEventListener('click', ()=>{
    Swal.fire({
        title: '<strong>ALU Core Values</strong>',
        html:`<div class="alu-values">
                <span>Restless Excellence</span>
                <span>Continuous Learning</span>
                <span>Ownership</span>
                <span>Integrity</span>
                <span>Humility</span>
              </div>`,
        reverseButtons: true,
        allowOutsideClick:true,
        showCloseButton:true, 
        focusClose:false, 
        showConfirmButton:false  
    
    });
})

document.querySelector('.fun-activities').addEventListener('click', ()=>{
    Swal.fire({
        title: '<strong>Island Fun Activities</strong>',
        html:`<div class="campus">
                <img src="/assets/images/island.gif" alt="Campus GIF"/>                
            </div>`,
        reverseButtons: true,
        allowOutsideClick:true,
        showCloseButton:true, 
        focusClose:false, 
        showConfirmButton:false  
    
    });
})


document.querySelector('.campus-images').addEventListener('click', ()=>{
    Swal.fire({
        title: '<strong>Mauritius Campus</strong>',
        html:`<div class="campus">
                <img src="/assets/images/campus.gif" alt="Campus GIF"/>                
              </div>`,
        reverseButtons: true,
        allowOutsideClick:true,
        showCloseButton:true, 
        focusClose:false, 
        showConfirmButton:false  
    
    });
})

