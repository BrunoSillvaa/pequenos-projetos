var taskInput = document.querySelector("input#taskInput")
var tasksList = document.querySelector("div#tasksList")

function addTask() {
    // Criacao da nova tarefa
    var task = document.createElement("label")
    task.id = `${taskInput.value}`

    // Criacao do checkbox dessa tarefa
    var taskCheckbox = document.createElement("input")
    taskCheckbox.type = "checkbox"
    taskCheckbox.id = `${taskInput.value}`

    // Junta o input e o label e adiciona na lista
    tasksList.appendChild(task)
    task.appendChild(taskCheckbox)
    task.innerHTML += `${taskInput.value}`
    
    // Zera o campo de input
    taskInput.focus()
    taskInput.value = ""
}
function resetList() {
    tasksList.innerHTML = ""
}