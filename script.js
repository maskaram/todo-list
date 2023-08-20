const items=document.querySelector('.todo__content__items')
const add =document.querySelector('.todo__add__new__btn')
const form =document.querySelector('.taskmanager__form')
const cancel =document.querySelector('.cancel')
const completed =document.querySelector('.completed')
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const toggleForm = (e) => {
    items.style.display = 'none';
    add.style.display = 'none';
    form.classList.toggle('hide');
  };

  const cancelForm = (e) => {
    e.preventDefault();
    items.style.display = 'block';
    add.style.display = 'block';
    form.classList.toggle('hide');
};


  const listTasks = () => {
    items.innerHTML = "";
    const sorter = (arr, propertyName, order) => {
        const sortedArr = arr.sort((a, b) => {
          if (a[propertyName] < b[propertyName]) {
            return -1;
          }
          if (a[propertyName] > b[propertyName]) {
            return 1;
          }
          return 0;
        });
      
        if (order === 'descending') {
          return sortedArr.reverse();
        }
      
        return sortedArr;
      };

     sorter(tasks, "date" );




    tasks.forEach(({id, task_name, description, date, time, task_status})=>{
        const task=document.createElement('div')
        task.id = id;
        task.classList.add("todo__content__single",task_status);
        task.innerHTML=`<div class="todo__content__single__top">
                                <div class="flex">
                                    <div class="todo__content__single__checkbox complete">
                                    
                                    <img src="./images/check-solid.svg" />
                                    </div>
                                    <div class="todo__content__single__time">${date} -- <span class="time">${time}</span></div>
                                </div>
                                <div class="flex">
                                    <div class="todo__content__single__edit hide"><img src="./images/pen-to-square-solid.svg" alt=""></div>
                                    <div class="todo__content__single__delete hide"><img src="./images/trash-can-regular.svg" alt=""></div>
                                    <div class="todo__content__single__more">
                                    <img src="./images/ellipsis-solid.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="todo__content__single__title">${task_name}</div>
                            <div class="todo__content__single__description ">${description} </div>`
                            items.appendChild(task);
           
    })

    const more = document.querySelectorAll('.todo__content__single__more');
    const deletebtn = document.querySelectorAll('.todo__content__single__delete');
    const edit = document.querySelectorAll('.todo__content__single__edit');
    const complete = document.querySelectorAll('.todo__content__single__checkbox');
    more.forEach((more) => {
        more.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.children[0].classList.toggle('hide');
            e.target.parentElement.parentElement.children[1].classList.toggle('hide');
        });
      });
    
    deletebtn.forEach((deletebtn) => {
        deletebtn.addEventListener('click', (e) => {
          const taskId = e.target.parentElement.parentElement.parentElement.parentElement.id;
          const taskIndex = tasks.findIndex(task => task.id == taskId);
          tasks.splice(taskIndex, 1);
          localStorage.setItem('tasks', JSON.stringify(tasks));
        listTasks();
        });
      });
    
    edit.forEach((edit) => {
        edit.addEventListener('click', (e) => {
          const taskId = e.target.parentElement.parentElement.parentElement.parentElement.id;
          const task = tasks.find(task => task.id == taskId);
          if (task) {
            toggleForm();
            document.querySelector('#submit').innerText="Update";
            cancel.classList.toggle('hide');
            const { task_name, description, date, time } = task;       
            document.querySelector('#task_name').value = task_name;
            document.querySelector('#description').value = description;
            document.querySelector('#date').value = date;
            document.querySelector('#time').value = time;
            tasks.splice(tasks.indexOf(task), 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
          }
        });
      });

    complete.forEach((complete) => {
        complete.addEventListener('click', (e) => {
          const taskId = e.target.parentElement.parentElement.parentElement.parentElement.id;
          const task = tasks.find(task => task.id == taskId);
          if (task) {
            const { task_name, description, date, time } = task;
            tasks.splice(tasks.indexOf(task), 1);
            tasks.push({
              task_name,
              description,
              date,
              time,
              id: taskId,
              task_status: 'completed'
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            listTasks();
          }
        });
      });
  
}
listTasks();

add.addEventListener('click', (e) => {
    e.preventDefault();
    toggleForm(e);
  });

cancel.addEventListener('click', (e) => {
    e.preventDefault();
    cancelForm (e);
  });

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks.push({
      task_name: task_name.value,
      description: description.value,
      date: date.value,
      time: time.value,
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 0,
      task_status: task_status.value
    });
    console.log(tasks)
    localStorage.setItem("tasks", JSON.stringify(tasks));
    cancelForm(e);
    listTasks();
    location.reload();
  });

  