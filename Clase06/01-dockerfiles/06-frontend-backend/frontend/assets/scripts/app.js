const tbody = document.querySelector("tbody");
const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const btnAddCustomer = document.querySelector("button");

function clear() {
  tbody.innerHTML = "";
  inputName.value = "";
  inputEmail.value = "";
}

function showCustomers(customers) {
  customers.forEach((customer) => {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    tdId.textContent = customer.id;
    const tdName = document.createElement("td");
    tdName.textContent = customer.name;
    const tdEmail = document.createElement("td");
    tdEmail.textContent = customer.email;

    tr.append(tdId);
    tr.append(tdName);
    tr.append(tdEmail);

    tbody.append(tr);
  });
}

function fetchCustomers() {
  fetch("http://localhost:4000/select")
    .then((res) => res.json())
    .then(showCustomers);
}

function addCustomer() {
  const name = inputName.value;
  const email = inputEmail.value;

  fetch("http://localhost:4000/insert", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  }).then(() => {
    clear();
    fetchCustomers();
  });
}

fetchCustomers();

btnAddCustomer.addEventListener("click", addCustomer);
