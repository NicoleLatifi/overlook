const domUpdates = {
  userTitle: document.querySelector(".user-title"),
  navButtons: document.querySelector("nav"),
  usernameAlert: document.querySelector(".username-alert"),
  passwordAlert: document.querySelector(".password-alert"),

  resetLoginPage() {
    this.userTitle.classList.add('hide');
    this.navButtons.classList.add('hide');
    this.usernameAlert.classList.add('hide');
    this.passwordAlert.classList.add('hide');
    firstInput.value = '';
    secondInput.value = '';
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
}

export default domUpdates;