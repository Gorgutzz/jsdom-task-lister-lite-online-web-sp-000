document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function(e){
    let task = document.getElementById("new-task-description").value;
    let li = document.createElement("li")
    new_el.textContent = task;
    const task_list = document.getElementById("tasks");
    taskList.appendChild(new_el);
    e.preventDefault();
  });
});
