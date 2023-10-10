let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let modalColor = document.querySelectorAll(".modal-color");
let taskDesc = document.querySelector(".textArea");
let taskHeading = document.querySelector(".heading");
let modalColorName = "Blue";
let mainCont = document.querySelector(".ticket-main-cont");
let removeBtn = document.querySelector(".dlt-btn");
let filterColor = document.querySelectorAll(".color");
let checkbox = document.getElementById("check");
let toolBoxCont = document.querySelector(".toolBox-cont");
let iconBars = document.querySelector(".fa-solid");
let activeDltBtn = document.querySelector(".active-dlt-btn");
let barsChange = document.querySelector(".bars");

let taskNumber = 0;
let bars = "fa-bars";
let xMark = "fa-xmark";
let lockIconClass = "fa-lock";
let unclokIconClass = "fa-lock-open";

let removeFlag = false;
//Showing and Hiding Modal
let modalFlag = false;
addBtn.addEventListener("click", function (event) {
  modalFlag = !modalFlag;

  console.log(modalFlag);
  if (modalFlag == true) {
    modalCont.style.display = "flex";
    modalColor.forEach((priorityColor) => {
      priorityColor.classList.remove("active");
    });
  } else {
    modalCont.style.display = "none";
  }

  if (checkbox.checked == true) {
    console.log("not Checked");
    toolBoxCont.style.marginLeft = "-100%";
    checkbox.checked = !checkbox.checked;
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
  <div class="ticket-task">${ticketDesc}</div><div class="ticket-lock">
  <i class="fa-lock fa-solid"></i>
</div>`;

  // console.log(ticketCont);
  mainCont.appendChild(ticketCont);

  handleRemove(ticketCont);
  handleLock(ticketCont);
  // handleFilter(ticketColor);
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
    activeDltBtn.style.display = "block";
  } else {
    removeBtn.style.color = "white";
    removeBtn.style.backgroundColor = "#7c81ad";
    activeDltBtn.style.display = "none";
  }

  if (checkbox.checked == true) {
    toolBoxCont.style.marginLeft = "-100%";
    checkbox.checked = !checkbox.checked;
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

checkbox.addEventListener("change", function () {
  if (checkbox.checked == true) {
    console.log("Checked");
    toolBoxCont.style.marginLeft = "0";
    //remove bars
    barsChange.classList.remove("fa-bars");
    //Add Xmark
    barsChange.classList.add("fa-xmark");
  } else {
    console.log("not Checked");
    toolBoxCont.style.marginLeft = "-100%";
    //remove Xmark
    barsChange.classList.remove("fa-xmark");
    //Add bars
    barsChange.classList.add("fa-bars");
  }
});

//Make Heading area and Task area editable
function handleLock(ticket) {
  let ticketLockElement = ticket.querySelector(".ticket-lock");

  let ticketLockIcon = ticketLockElement.children[0];

  let taskHeadingEdit = ticket.querySelector(".ticket-heading");

  let taskArea = ticket.querySelector(".ticket-task");

  let ticketPriority = ticket.querySelector(".ticket-id");

  let ticketPriorityColor = ["Lightpink", "Lightgreen", "Lightblue", "submit"];

  ticketLockIcon.addEventListener("click", (event) => {
    if (ticketLockIcon.classList.contains(lockIconClass)) {
      //remove Lock icon class "fa-lock"
      ticketLockIcon.classList.remove(lockIconClass);
      //add unlock icon class "fa-lock-open"
      ticketLockIcon.classList.add(unclokIconClass);
      //Make Heading editable
      taskHeadingEdit.setAttribute("contenteditable", "true");
      //Make task area Editable
      taskArea.setAttribute("contenteditable", "true");

      //Change Ticket Color on click
      // ticketPriority.addEventListener("click", (priorityEvent) => {
      //   console.log("ticket Color Change is clicked");
      // });
    } else {
      //remove unlock icon class "fa-lock-opn"
      ticketLockIcon.classList.remove(unclokIconClass);
      //add Lock icon class "fa-lock"
      ticketLockIcon.classList.add(lockIconClass);
      //Make Heading Uneditable
      taskHeadingEdit.setAttribute("contenteditable", "false");
      //Makr task area Uneditable
      taskArea.setAttribute("contenteditable", "false");

      //Change Ticket Color on click
      // ticketPriority.addEventListener("click", (priorityEvent) => {
      //   console.log("in Lock class");
      //   priorityEvent.stopPropagation();
      //   priorityEvent.preventDefault();
      // });
    }
  });
}
