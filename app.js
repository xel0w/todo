class Todo{
    constructor(id, text,isChecked = false){
        this.id=id;
        this.text=text;
        this.isChecked=isChecked;
    }
    checkTodo(){
        this.isChecked = !this.isChecked;
    }
}
class List{
    constructor(){
    this.listTodos = [];
    }
    getItems(){
        return this.listTodos;
    }
    addTodoInList(todo){
        this.listTodos.push(todo);
    }
    deleteTodoInList(todo){
        this.listTodos.remove(todo);
    }
    // save(){
    //     
    // }
    // init(){
    //     
    // }
}
const todoContainerEl = document.querySelector('#todoContainer');
let todo = document.querySelector('#todo');
let compteur = 0;
let listTodo = new List();

const reset = document.querySelector('#reset');
todo.addEventListener('keypress',(event)=>{  
    if(event.key == "Enter" || event.key == "NumpadEnter"){
        addTodo();
    } 
})

function addTodo() {
    const todoEl = document.createElement("div");
    let todoValue = todo.value;
    if (todo.value===""){
        alert("Veuillez inserer une todo");
    }else{
    compteur ++;
    let todos = new Todo(compteur,todoValue);
    listTodo.addTodoInList(todos);
    let tab = listTodo.getItems();
    console.log(tab);
    tab.forEach((todo)=>{
        todoEl.innerText = todo.text;
        todoEl.classList.add("todo");
        todoContainerEl.appendChild(todoEl) ;
    })
    todoEl.addEventListener('click',()=>{
        todoEl.classList.toggle('barre');
    })
    todoEl.addEventListener('dblclick',()=>{
        todoEl.remove();
    })
    todo.value="";   
}
}