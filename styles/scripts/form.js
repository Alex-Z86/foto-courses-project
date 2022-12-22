const entryForm = document.forms["entry-form"];
const emailInput = entryForm.querySelector(".form__input");
const entryButton = entryForm.querySelector(".form__button");

emailInput.addEventListener("change", function () {
  entryButton.textContent = "Спасибо!";
});

function handleEntryFormSubmit(evt) {
  evt.preventDefault();

  evt.target.reset();
}
entryButton.addEventListener("submit", handleEntryFormSubmit);
