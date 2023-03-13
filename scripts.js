const inputElement = document.querySelector(".new-task-input");
const addTaskButton = document.querySelector(".new-task-button");

const validateInput = () => {
  if (inputElement.value.trim().length > 0) {
    return true;
  } else {
    return false;
  }

  // Podemos substituir o if e else por esta linha abaixo também que é mais limpo o código:
  //const validateInputLength = () => inputElement.value.trim().length > 0;
};

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return inputElement.classList.add("error");
  }
};

const handleInputChange = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return inputElement.classList.remove("error");
  }
};

addTaskButton.addEventListener("click", () => handleAddTask());

inputElement.addEventListener("change", () => handleInputChange());
