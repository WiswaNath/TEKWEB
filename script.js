// Mendapatkan elemen-elemen HTML
const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Menambahkan tugas baru
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<span>${taskText}</span><span class="delete">X</span>`;
        taskList.appendChild(li);
        taskInput.value = "";

        // Menghapus tugas jika tombol "X" diklik
        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            li.remove();
        });
    }
}

// Menambahkan tugas saat tombol "Tambah" diklik
addTaskButton.addEventListener("click", addTask);

// Menambahkan tugas saat tombol "Enter" ditekan
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
