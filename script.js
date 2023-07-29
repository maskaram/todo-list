const create = document.querySelector(".todo_add_new_btn");
const form = document.querySelector(".taskmanager_form");
const items = document.querySelector(".todo_content_items");
const cancel = document.querySelector(".cancel");


    const toggleform=()=>{
    items.style.display="none"
    create.style.display = "none"
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
});

const task=JSON.parse(localStorage.getItem("tasks"))||[]
console.log(tasks);
form.addEventListener("submit",(e)=>{
    e.preventDefault();

});