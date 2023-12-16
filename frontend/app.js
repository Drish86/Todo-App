function fetchTasks() {
  let q = document.getElementById("t").value;
  fetch("/api" + "?q=" + q)
    .then((t) => t.json())
    .then((tasks) => {
      document.querySelector("#tasks").innerHTML = "";

      let table = document.createElement("table");

      tasks.forEach((element) => {
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = element.id;
        let td2 = document.createElement("td");
        td2.textContent = element.title;

        row.append(td1, td2);
        table.append(r);

        document.querySelector("#tasks").append(table);
      });
    });
}
