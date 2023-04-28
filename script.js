let theInput = document.querySelector(".add-task input")
let addSpan = document.querySelector(".plus")
let tasksCount = document.querySelector(".tasks-count span")
let tasksCompleted = document.querySelector(".tasks-completed span")
let taskContainer = document.querySelector(".tasks-content")


window.onload = function () {
    theInput.focus()
}

addSpan.onclick = function () {

    if (theInput.value === "") {

    }else {

        let noTasks = document.querySelector(".no-tasks-message")

        if (document.body.contains(noTasks)) {
            noTasks.remove()
        }
        // Create Main Span
        let mainSpan = document.createElement("span")
        let textSapn = document.createTextNode(theInput.value)
        mainSpan.className = "task-box"
        mainSpan.appendChild(textSapn)
        // Create Delete Button 
        let deleteButton = document.createElement("span")
        let deleteText = document.createTextNode("Delete")
        deleteButton.className = "delete"
        deleteButton.appendChild(deleteText)

        mainSpan.appendChild(deleteButton)
        taskContainer.appendChild(mainSpan)
        theInput.value = ""
        theInput.focus()
        calculateTasks()
    }
}

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove()

        if (taskContainer.childElementCount == 0) {
            createNoTasks()
        }
    }

    if (e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finished")
    }
    calculateTasks()
})

function createNoTasks() {
    let msgSpan = document.createElement("span")
    let msgSpanText = document.createTextNode("No Tasks To Show")
    msgSpan.className = "no-tasks-message"
    msgSpan.appendChild(msgSpanText)
    taskContainer.appendChild(msgSpan)
}

function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length
}