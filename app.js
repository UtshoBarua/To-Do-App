const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click",addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener("click",filterTodo);


function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);


    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.innerHTML = '<i class="fas fa-solid fa-check"></i>';
    

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';

    todoDiv.appendChild(completeButton);
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);

    todoInput.value = "";

}

function deleteCheck(e){
   const item = e.target;
   if(item.classList[0]==="trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall")
    todo.addEventListener("transitionend",function(){
        todo.remove();
    });
  

   }
     
   if(item.classList[0]==="complete-btn"){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  

} 
   

   
   }

   function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
      switch (e.target.value) {
        case "all":
          todo.style.display = "flex";
          break;
        case "completed":
          if (todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
          break;
        case "uncompleted":
          if (!todo.classList.contains("completed")) {
            todo.style.display = "flex";
          } else {
            todo.style.display = "none";
          }
      }
    });
  }






