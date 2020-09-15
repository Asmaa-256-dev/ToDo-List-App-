//selectors
const input =document.querySelector('input');
const btn =document.querySelector('#addTask > button');
btn.addEventListener('click' , addList);


// function 
function addList(e) {
    const notCompleted =document.querySelector('#Not-Completed');
    const Completed =document.querySelector('#Completed');
    const newLi =document.createElement ('li');
    const checkBtn =document.createElement ('button');
    const deleteBtn =document.createElement ('button');
    
    checkBtn.innerHTML= '<i class= "fa fa-check"></i>';
    deleteBtn.innerHTML= '<i class= "fa fa-trash"></i>';


    if (input.value !== '') {
        newLi.textContent= input.value;
        input.value= '';
        notCompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(deleteBtn);
    }
    checkBtn.addEventListener('click' , function() {
    const parent=this.parentNode;
    parent.remove();
    Completed.appendChild(parent);    
    checkBtn.style.display= 'none';
    })
    deleteBtn.addEventListener('click' , function() {
        const parent=this.parentNode;
        parent.remove();
        })


}
