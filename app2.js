let todo = document.querySelector('#todo');
const todoContainerEl = document.querySelector('#todoContainer');
const reset = document.querySelector('#reset');
todo.addEventListener('keypress',(event)=>{  
    if(event.key == "Enter" || event.key == "NumpadEnter"){
        addTodo()
    } 
})
function addTodo() {
    const todoEl = document.createElement("div");
    let todoValue = todo.value
    if (todo.value===""){
        alert("Veuillez inserer une todo")
    }else{
    todoEl.innerText = todoValue;
    todoEl.classList.add("todo");
    todoContainerEl.appendChild(todoEl);
    todo.value="";
    todoEl.addEventListener('click',()=>{
        todoEl.classList.toggle('barre')
    })
    todoEl.addEventListener('dblclick',()=>{
        todoEl.remove();
    })}
    reset.addEventListener('click',()=>{
    todoEl.remove(todoEl)
})
}