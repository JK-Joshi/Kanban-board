let addBtn = document.querySelector(".add-btn");
let modalCont = document.querySelector(".modal-cont");
let modalColor = document.querySelectorAll(".modal-color");

let modalFlag = false;
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

modalColor.forEach((colorEle) => {
  colorEle.addEventListener("click", (event) => {
    //remove active class from all divs
    modalColor.forEach((priorityColor) => {
      priorityColor.classList.remove("active");
    });

    //Add active class to the selected div
    colorEle.classList.add("active");
  });
});
