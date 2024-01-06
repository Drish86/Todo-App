function fetchTasks() {
  let q = document.getElementById("newTaskTitle").value;
  fetch("/api" + "?q=" + q)
    .then((newTaskTitle) => newTaskTitle.json())
    .then((newTask) => {
      document.querySelector("#newTask").innerHTML = "";

      let table = document.createElement("table");

      newTask.forEach((element) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = element.id;
        let td2 = document.createElement("td");
        td2.textContent = element.title;

        row.append(td1, td2);
        table.append(r);

        document.querySelector("#newTask").append(table);
      });
    });
}
//select user...
function changePerson() {
  let selectElement = document.getElementById("userSelect");
  let selectedValue = selectElement.value;
  console.log("Selected user: " + selectedValue);
  if (selectedValue === "user1") {
  } else if (selectedValue === "user2") {
  } else if (selectedValue === "user3") {
  }
}

//modal
let modal = document.getElementById("taskDetailModal");
let btn = document.getElementById("btnTaskDetails");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

// zatvara modal kad se klikne izvan modala
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
