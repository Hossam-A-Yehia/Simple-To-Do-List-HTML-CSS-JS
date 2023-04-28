let input = document.querySelector("input")
let plus = document.querySelector(".plus")
let container = document.querySelector(".container")
let count = document.querySelector(".count span")
let complate = document.querySelector(".complate span")


plus.onclick = function () {
    if(input.value === "") {

    } else {
        let task = document.querySelector(".container .task")
        if (document.body.contains(task)) {
            task.remove()
        }
        let mainDiv = document.createElement("div")
        mainDiv.classList.add("task-box")
        let textTask = document.createTextNode(input.value)
        mainDiv.appendChild(textTask)
        container.appendChild(mainDiv)
        //////////////////////////////
        let mainBtn = document.createElement("span")
        let textBtn = document.createTextNode("Delete")
        mainBtn.classList.add("delete")
        mainBtn.appendChild(textBtn)
        mainDiv.appendChild(mainBtn)
        calculateTasks()
        input.value = ""
    }
}


document.addEventListener("click" , (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentNode.remove()

        if (container.childElementCount == 0) {
            addMassage()
        }
    }

    if(e.target.classList.contains("task-box")) {
        e.target.classList.toggle("finish")
    }
    calculateTasks()
})


function calculateTasks() {
    count.innerHTML = document.querySelectorAll(".container .task-box").length
    complate.innerHTML = document.querySelectorAll(".container .finish").length
}





function addMassage() {
    let msgSpan = document.createElement("span")
    msgSpan.className = ("task")
    let msgSpanText = document.createTextNode("No Tasks To Show")
    msgSpan.appendChild(msgSpanText)
    container.appendChild(msgSpan)  
}