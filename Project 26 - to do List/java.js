//selectors 
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const todoButton = document.querySelector(".todo-button");
const filterButton = document.querySelector('filter-todo')
// selectors for delete buttons 
// const deletButton = document.querySelector('TRASH')
//event listeners 


// deletButton.addEventListener('click', addTodo)
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click',deletecheck);
filterButton.addEventListener('click' , filterTodo);



//functions
function addTodo(event) {
  event.preventDefault();//stop page refreshs // prevent form from submitting
  //todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //creat todo list
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //cech mark button
  const completedButton = document.createElement('button');
  completedButton.innerText = 'Check';
  completedButton.classList.add('complete');
  todoDiv.appendChild(completedButton);
  //trash button 
  const trashButton = document.createElement('button');
  trashButton.innerText = 'Delete';
  trashButton.classList.add('TRASH');
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild((todoDiv));
  //clear InputValue 
  todoInput.value='';
}

function deletecheck(event){
  //check what buttons you click at
   console.log(event.target);
   const item = event.target;
  //  target the list
   if (item.classList[0] === 'TRASH')
   {const todoitem = document.querySelector('.todo');
   todoitem.classList.add('fall');
   //delete a list
    todoitem.addEventListener("transitionend", e => {
      todoitem.remove();
    })
}

   //toggele complete one
    if  (item.classList[0] === 'complete') {
    const todoitem = document.querySelector('.todo');
    todoitem.classList.toggle('completed');
     }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  console.log(todos);
   todos.forEach(function(todo){
     switch(e.target.value){
       case "all":
       todo.style.display = 'flex';
       break;
       case "COMPLETED" :
       if (todo.classList.contains('completed')) {
         todo.style.display = 'flex';
       } else {
         todo.style.display = 'none';
       }
       
     }
      
   });
}

