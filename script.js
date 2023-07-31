const create = document.querySelector(".todo_addnew_btn");
const form = document.querySelector(".taskmanager__form");
const items = document.querySelector(".todo_content_items");
const cancel = document.querySelector(".cancel");


    const toggleform=()=>{
    items.style.display="none"
    create.style.display = "none";
    form.classList.toggle("hide")
}
    const cancelform=()=>{
    items.style.display="block"
    create.style.display = "block"
    form.classList.toggle("hide")
};

    create.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleform();
 })

   cancel.addEventListener("click",(e)=>{
    e.preventDefault();
    toggleform();
});

const task=JSON.parse(localStorage.getItem("tasks"))||[]
console.log(tasks);

const listTask=()=>{
tasks.forEach((x)=>[
    const task=document.createElement("div")
    task.classList.add("todo_content_single");
    task.innerHTML = `<div

    <div class="todo_content_single_top">
        <class="flex">
            <div class="todo_content_single_checkbox complete">
                <img src="./images/square-regular.svg" class="box"/>
                <img src="./images/check-solid.svg" 
                class="right hide"/>
            </div>
            <div class="todo_contentsingle_time"></div>2023-06-25--<span class="time">10:55</span></div>
        
        <div class="flex">
            <div class="todo_contentsingle_edit hide"><img src="./images/pen-to-square-solid.svg" alt=""></div>
            <div class="todo_contentsingle_delete hide"><img src="./images/trash-can-regular.svg" alt=""></div>
            <div 
                   
                          
    `
                    
])
}
listTasks();



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    tasks.push({
    task_name: task_name.value,  
    description: description.value,
    date:time.value, 
    id:tasks.length>0?tasks[tasks.length-1].id+1:0,
    task_status:task_status.value,
  });
  localStorage.setItem("tasks", JSON.stringify(task));
  toggleForm
    
});