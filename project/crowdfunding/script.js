const form = document.querySelector(".form-content");
const formEmail = document.querySelector(".form-content input[type='email']");
const formName = document.querySelector(".form-content input[type='text']");
const formAmount = document.querySelector(".form-content input[type='number']");
const table = document.querySelector(".table-1 tbody");
let number = 1;
const progress = document.querySelector(".progress");
const total = document.querySelector(".total-amount");
const funded = document.querySelector(".funded-amount");
const totalAmount = Number(total.innerText);
let fundedAmount = Number(funded.innerText);

updateLoad();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = formName.value;
  const amount = Number(formAmount.value);
  const date = new Date(Date.now());
  if (!(name && amount)) {
    alert("please enter valid inputs");
    return;
  }

  setTimeout(() => {
    const element = `<th scope="row">${number++}</th>
    <td>${name.split(" ")[0]}</td>
    <td>Rs. ${amount}</td>
    <td>${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</td>`;
    const outerElement = document.createElement("tr");
    outerElement.innerHTML = element;
    table.appendChild(outerElement);
    fundedAmount = fundedAmount + amount;
    funded.innerText = fundedAmount;
    updateLoad();
    formName.value = "";
    formAmount.value = "";
    formEmail.value = "";
  }, 2000);
});

function updateLoad() {
  const value = Math.round((fundedAmount / totalAmount) * 100);
  progress.innerHTML = `<div
    class="progress-bar bg-success"
    role="progressbar"
    style="width: ${value}%"
    aria-valuenow="${value}"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    ${value}%
  </div>`;
}
