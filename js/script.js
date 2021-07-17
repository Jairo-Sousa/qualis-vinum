function registerEmail() {
  const inputEmail = document.getElementById('register-email')
  const email = inputEmail.value
  inputEmail.value = null

  localStorage.setItem('email', email)
  renderConfirmation()
}
function renderConfirmation() {
  const registerConfirmation = document.getElementById('register-confirmation')
  registerConfirmation.innerHTML = `
  <span>Obrigado por se cadastrar!</span>
  `
  console.log('Registrado')
}
