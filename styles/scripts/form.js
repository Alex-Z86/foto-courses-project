const entryForm = document.forms["entry-form"];
const emailInput = entryForm.querySelector(".form__input");
const entryButton = entryForm.querySelector(".form__button");

function check() {
  if (!emailInput.checkValidity()) {
    entryButton.disabled;
  } else {
    entryButton.textContent = "Спасибо!";
  }
}

emailInput.addEventListener("input", check);

function handleEntryFormSubmit(evt) {
  evt.preventDefault();

  evt.target.reset();
}
entryButton.addEventListener("submit", handleEntryFormSubmit);
