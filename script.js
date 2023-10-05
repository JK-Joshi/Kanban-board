let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let modalColor = document.querySelectorAll(".modal-color");
let taskDesc = document.querySelector(".textArea");
let taskHeading = document.querySelector(".heading");
let modalColorName = "Blue";
let mainCont = document.querySelector(".ticket-main-cont");
let removeBtn = document.querySelector(".dlt-btn");
let filterColor = document.querySelectorAll(".color");

let taskNumber = 0;

let modalFlag = false;
let removeFlag = false;

//Showing and Hiding Modal
addBtn.addEventListener("click", function (event) {
  modalFlag = !modalFlag;

  if (modalFlag == true) {
    modalCont.style.display = "flex";
    modalColor.forEach((priorityColor) => {
      priorityColor.classList.remove("active");
    });
  } else {
    modalCont.style.display = "none";
  }
});

//Selecting Color
modalColor.forEach((colorEle) => {
  colorEle.addEventListener("click", (event) => {
    //remove active class from all divs
    modalColor.forEach((priorityColor) => {
      priorityColor.classList.remove("active");
    });

    //Add active class to the selected div
    colorEle.classList.add("active");
    modalColorName = colorEle.classList[0];
    // console.log(modalColorName);
  });
});

//Ticket Creation
let submit = document.querySelector(".submit");

submit.addEventListener("click", (event) => {
  let ticketDesc = taskDesc.value;
  let ticketId = taskNumber + 1;
  let ticketHeading = taskHeading.value;
  //console.log(ticketHeading, ticketDesc);
  if (ticketDesc === "") {
    alert("Pl. enter Task Description");
  }
  if (taskHeading === "") {
    alert("Pl. enter Task Heading..!!");
  }
  if (modalColorName === "") {
    alert("Pl. Select any of the color catagory");
  }
  createTicket(modalColorName, ticketHeading, ticketId, ticketDesc);
  //close the Modal
  modalCont.style.display = "none";
  modalFlag = !modalFlag;
  //Clear the Heading area
  taskHeading.value = "";
  //clear the textArea
  taskDesc.value = "";
});

function createTicket(ticketColor, ticketHeading, ticketId, ticketDesc) {
  let ticketCont = document.createElement("div");

  ticketCont.classList.add("ticket-cont");

  ticketCont.innerHTML = `<div class=" ${ticketColor} ticket-id">${ticketId}</div>
  <div class="ticket-heading">${ticketHeading}</div>
  <div class="ticket-task">${ticketDesc}</div>`;

  // console.log(ticketCont);
  mainCont.appendChild(ticketCont);

  handleRemove(ticketCont);
}

//Selecting Remove Button
removeBtn.addEventListener("click", (event) => {
  removeFlag = !removeFlag;

  if (removeFlag == true) {
    //Show Alert
    alert(
      "Delete Mode is Activated, you just neet to ckick on ticket you want to remove..  "
    );

    //Change color button to RED
    removeBtn.style.color = "red";
    removeBtn.style.backgroundColor = "#4b527e";
  } else {
    removeBtn.style.color = "white";
    removeBtn.style.backgroundColor = "#7c81ad";
  }
});

//Remove the Ticket
function handleRemove(ticket) {
  ticket.addEventListener("click", (event) => {
    if (removeFlag == true) {
      ticket.remove();
    }
  });
}

//Filter Tickets by Color Catagory
//Select Color
