function addTask() {
  const input = document.getElementById("taskInput");
  const li = document.createElement("li");
  li.textContent = input.value;
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
<<<<<<< HEAD
console.log("Working on delete task");
=======
console.log("Feature A : Delete Task functinality");
console.log("Feature UI Improvement");
>>>>>>> feature/ui-improvement
