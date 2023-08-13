const create = document.querySelector(".todo_addnew_btn");
const add = document.querySelector(".todo_add_new_btn");
const form = document.querySelector(".taskmanager__form");
const items = document.querySelector(".todo_content_items");
const cancel = document.querySelector(".cancel");
const completed = document.querySelector(".completed");
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const toggleform=()=>{
    items.style.display="none";
    create.style.display = "none";
    form.classList.toggle("hide");
};

    const cancelform=(e)=>{
    e.preventDefault();
    items.style.display="block";
    create.style.display = "block";
    form.classList.toggle("hide");
};

    create.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleform();
 })

   cancel.addEventListener("click",(e)=>{
    e.preventDefault();
    cancelform();
});

const tasks=JSON.parse(localStorage.getItem("tasks"))||[]
console.log(tasks);

const listTasks=()=>{
tasks.forEach((x)=>{
const {date,description,task_name,task_status,time}=x
    const task=document.createElement("div")
    task.classList.add("todo_content_single");
    task.innerHTML = 
    `  <div class="todo_content_single ${task_status}">
                    <div class="todo_contentsingle_top">
                        <div class="flex">
                            <div class="todo_contentsingle_checkbox"><img src="./images/check-solid.svg"></div>
                            <div class="todo_contentsingle_time">${date} <span class="time">${time}</span></div>
                        </div>
                        <div class="flex">
                            <div class="todo_contentsingle_edit hide"><img src="./images/pen-to-square-solid.svg" alt=""></div>
                            <div class="todo_contentsingle_delete hide"><img src="./images/trash-can-regular.svg" alt=""></div>
                            <div class="todo_contentsingle_more"><img src="./images/ellipsis-solid.svg" alt=""></div>
                        </div>
                    </div>
                    <div class="todo_contentsingle_title">${task_name}</div>
                    <div class="todo_contentsingle_description">${description}</div>
                </div>
               
                `  
                items.appendChild(task)              
})
}
listTasks();

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    tasks.push({
    task_name: task_name.value,  
    description: description.value,
    date: date.value,
    time: time.value, 
    id:tasks.length>0?tasks[tasks.length-1].id+1:0,
    task_status:task_status.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  cancelform(e);
    listTasks();
    location.reload();
    
});