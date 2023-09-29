const scriptURL = 'https://script.google.com/macros/s/AKfycbwrt8-X-2YCSW72MUUlgVy1qicPE-gi0cTVhdar2Bvz0ysyuiqWtQfCm6XcLI9jNuVByw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})