// Pe un event la id-ul addTask chiama functia addTask
document.getElementById("addTask").addEventListener("click", () => {
  addTask();
});

var wrapperID = 0

const addTask = () => {
  const nameValue = document.getElementById("taskName").value;
  const descValue = document.getElementById("taskDescription").value;
  if (
    nameValue != undefined &&
    nameValue != "" &&
    descValue != undefined &&
    descValue != ""
  ) {
    const taskWrapper = document.createElement("div");
    const nameWrapper = document.createElement("h2");
    const descWrapper = document.createElement("p");
    const completeTaskButton = document.createElement("button");

    wrapperID++;
    taskWrapper.setAttribute('id', 'task-' + wrapperID);
    // classList.add('task-' + wrapperID);

    taskWrapper.classList.add('task-card');
    completeTaskButton.classList.add('btn','btn-complete');

    completeTaskButton.addEventListener('click', () => {
        completeTask(taskWrapper.id);
    })

    const name = document.createTextNode(nameValue);
    const desc = document.createTextNode(descValue);
    const completeTaskText = document.createTextNode("Complete task");

    const taskCardWrapper = document.getElementById("taskCardWrapper");
    taskCardWrapper.appendChild(taskWrapper);
    taskWrapper.appendChild(nameWrapper);

    taskWrapper.appendChild(descWrapper);
    taskWrapper.appendChild(completeTaskButton);

    nameWrapper.appendChild(name);
    descWrapper.appendChild(desc);
    completeTaskButton.appendChild(completeTaskText);

    
  }
};

const completeTask = (id) => {
    document.getElementById(id).style="display:none";
    // Alternative: document.getElementById(id).remove();
}
