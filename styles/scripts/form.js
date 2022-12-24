const entryForm = document.forms["entry-form"];
const emailInput = entryForm.querySelector(".form__input");
const entryButton = entryForm.querySelector(".form__button");

function check() {
  if (!emailInput.checkValidity()) {
    entryButton.disabled;
  }
}

emailInput.addEventListener("input", check);

function handleEntryFormSubmit(evt) {
  evt.preventDefault();
  entryButton.textContent = "Спасибо!";
}
entryForm.addEventListener("submit", handleEntryFormSubmit);
