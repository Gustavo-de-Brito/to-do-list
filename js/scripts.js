const addBtn = document.querySelector("#add-btn");

// função que adiciona tarefa
function addTask() {

    // titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value;

    if(taskTitle) {

        // clonar template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adiciona titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        // remover as classe desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        // adiciona tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(newTask);

        // adicionar evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
            removeTask(this);
        })
        
        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this);
        })

        // limpar texto 
        document.querySelector("#task-title").value = "";
        
    }

}

// função remover tarefa
function removeTask(task) {

    task.parentNode.remove(true);

}

// função completar tarefa
function completeTask(task) {

    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");

}

// evento de adiconar tarefa
addBtn.addEventListener("click", function(e) {

    e.preventDefault();

    addTask();

});