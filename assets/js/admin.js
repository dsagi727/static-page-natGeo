//admin table

function getDataEmail() {
  const emailSubsURL = "http://localhost:3000/emailSubs";

  const paramsGET = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  fetch(emailSubsURL, paramsGET)
    .then((response) => response.json())
    .then((data) => renderTable(data))
    .catch((err) => alert("Something went wrong, please try again later!"));
}

getDataEmail();

function renderTable(list) {
  list.forEach((item) => {
    const templateTD = `
      <tr>
      <td>${clickCounter()}</td>
      <td>${item.id}</td>
      <td>${item.email}</td>
      <td><button onclick="deleteData(${
        item.id
      })"class="delete">delete</button></td>
      </tr>
      `;

    document
      .getElementById("email-subs")
      .insertAdjacentHTML("beforeend", templateTD);
  });
}

function deleteData(id) {
  const emailSubsURL = `http://localhost:3000/emailSubs/${id}`;

  const paramsDelete = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  const response = fetch(emailSubsURL, paramsDelete);

  response
    .then((data) => data.json())
    .then((parseData) => renderTable(parseData))
    .catch((error) => console.error(error));

  document.getElementById("email-subs").innerHTML = "";

  getDataEmail();
}

function clickCounter() {
  const counter = document.querySelectorAll("tbody tr").length + 1;
  return counter;
}
const row = clickCounter();
