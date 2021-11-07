const confirmPassword = document.getElementById("confirm-password");
const passwordInput = document.getElementById("password");
const checkboxList = document.getElementsByClassName("check");
const rangeList = document.getElementsByClassName("range");
const launchButton = document.getElementById("launch");

const disableCheckboxes = (shouldBeDisabled) => {
    for (let checkbox of checkboxList) {
        checkbox.disabled = shouldBeDisabled;
    }
};

const disableRanges = (shouldBeDisabled) => {
    for (let range of rangeList) {
        range.disabled = shouldBeDisabled;
    }
};

const disableLaunch = (shouldBeDisabled) => launchButton.disabled = shouldBeDisabled;

disableCheckboxes(true);
disableRanges(true);
disableLaunch(true);

const actualPassword = "TrustNo1";

confirmPassword.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    console.log(enteredPassword);
    if (actualPassword === enteredPassword) {
        disableCheckboxes(false);
        disableRanges(false);
        disableLaunch(false);
        passwordInput.disabled = true;
        confirmPassword.disabled = true;
    }
})