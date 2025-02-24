


let inputTask= document.querySelector(".textBox")


let addTask =document.querySelector(".AddText")



let form =document.forms[0];

// localStorage.clear()

form.addEventListener("submit",function(e){

  e.preventDefault();
})




addTask.addEventListener('click', function() {
  
  createTask(inputTask.value)
  
  
  
}

)



function createTask(TaskAddress){
  
  let Taskdiv =document.createElement("div");
  Taskdiv.classList.add("task");
  
  let SpanTaskAddress= document.createElement("span");
  
  SpanTaskAddress.classList.add("taskAdress");
  
  SpanTaskAddress.textContent=TaskAddress;
  
  
  Taskdiv.appendChild(SpanTaskAddress);
  
  let SpanDelete=document.createElement("span");
  
  SpanDelete.classList.add("DeleteTask");
  
  SpanDelete.textContent="Delete"
  
  SpanDelete.addEventListener("click",function(e){
    
    fDeleteTask(e.currentTarget)

    saveTasks()
    
  })
  
  
  
  Taskdiv.appendChild(SpanDelete);
  
  
  let TasksShow = document.querySelector(".TasksShow");
  
  TasksShow.appendChild(Taskdiv);
  
  
  saveTasks();
  
  
  
  
}


function saveTasks() {
  
  let tasks=document.querySelector(".TasksShow").innerHTML;
  
  window.localStorage.setItem("tasks",tasks);
}


function deletSavedTask() {

  
  let  SpanDelete = document.querySelectorAll(".DeleteTask");
  
  SpanDelete.forEach((element) => {
    element.addEventListener("click", function (e) {
      ;
      fDeleteTask(e.currentTarget);
    });
  });
  
}

function fDeleteTask(spanDelete) {
  
  spanDelete.parentNode.remove();


}



function LoadTasks()
{

let tasks= window.localStorage.getItem("tasks");

if(tasks)
{

  document.querySelector(".TasksShow").innerHTML = tasks;
}

deletSavedTask()
}



window.onload=LoadTasks();