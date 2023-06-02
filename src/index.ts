//type assertion: when I want to overwrite TS' inferred view of types because I have info that TS isn't aware of
const taskInput = document.querySelector("#taskInput") as HTMLInputElement | null //using type assertion
const addButton = document.querySelector("#addButton")
const todoContainer = document.querySelector("#todoContainer")
const task = document.querySelectorAll(".task")
//const doneButton = document.querySelectorAll("#doneButton")

//user adds a task to the TodoList
addButton!.addEventListener("click", (e) => {

    e.preventDefault()
    
    if(taskInput?.value == null || taskInput?.value == "") return
    
    console.log(taskInput.value) //struggled to access value becuase I didn't use type assertion
    const newTask = document.createElement("li")
    newTask.className = "task"
    newTask.textContent = taskInput.value;
    todoContainer?.appendChild(newTask);

    const doneButton = document.createElement("button")
    doneButton.id = "doneButton";
    doneButton.textContent = "Done"
    newTask.appendChild(doneButton)

    //const deleteButton = document.createElement("button")
     taskInput.value = "";
})

//user can mark a task as `done`

