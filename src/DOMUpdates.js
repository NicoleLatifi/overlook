const domUpdates = {
  userTitle: document.querySelector(".user-title"),
  navButtons: document.querySelector("nav"),
  usernameAlert: document.querySelector(".username-alert"),
  passwordAlert: document.querySelector(".password-alert"),
  invalidAlert: document.querySelector(".invalid-alert"),

  // methods for login page
  resetLoginPage() {
    this.userTitle.classList.add('hide');
    this.navButtons.classList.add('hide');
    this.usernameAlert.classList.add('hide');
    this.passwordAlert.classList.add('hide');
    this.invalidAlert.classList.add('hide')
  },

  addUsernameRequiredAlert() {
    this.usernameAlert.classList.remove('hide')
  },

  addPasswordRequiredAlert() {
    this.passwordAlert.classList.remove('hide')
  },

  removeUsernameRequiredAlert() {
    this.usernameAlert.classList.add('hide')
  },

  removePasswordRequiredAlert() {
    this.passwordAlert.classList.add('hide')
  },

  alertMessage(message) {
    console.log(message)
    this.invalidAlert.classList.remove('hide')
    this.invalidAlert.innerText = `${message}, please try again`;
  }
}

export default domUpdates;