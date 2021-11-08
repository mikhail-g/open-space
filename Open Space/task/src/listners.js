const confirmPassword = document.getElementById("confirm-password");
const passwordInput = document.getElementById("password");
const checkboxList = document.getElementsByClassName("check");
const rangeList = document.getElementsByClassName("range");
const launchButton = document.getElementById("launch");
const rocket = document.getElementById("rocket");

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

const enableLaunchIfReady = () => {
    const allChecked = Array.from(checkboxList, el => el.checked).every(Boolean);
    const allLeversMax = Array.from(rangeList, el => el.value === el.max).every(Boolean)
    launchButton.disabled = !(allChecked && allLeversMax);
}

disableCheckboxes(true);
disableRanges(true);
launchButton.disabled = true;

const actualPassword = "TrustNo1";

confirmPassword.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    if (actualPassword === enteredPassword) {
        disableCheckboxes(false);
        disableRanges(false);
        passwordInput.disabled = true;
        confirmPassword.disabled = true;
    }
})

for (let checkbox of checkboxList) {
    // checkbox.addEventListener('change', () => enableLaunchIfReady());
    checkbox.onchange = () => enableLaunchIfReady();
}

for (let range of rangeList) {
    // range.addEventListener('change', () => enableLaunchIfReady());
    range.onchange = () => enableLaunchIfReady();
}

launchButton.addEventListener('click', () => {
    rocket.animate(
        [
            { transform: 'rotate(25deg) translate(0px)'},
            { transform: 'rotate(30deg) translate(50px, -75px)', easing: 'ease-in'},
            { transform: 'rotate(30deg) translate(150px, -400px)'},
            { transform: 'rotate(30deg) translate(200px, -600px) rotateX(60deg) scale(.5)'},
            { transform: 'rotate(30deg) translate(250px, -700px) rotateX(90deg) scale(.1)'}
        ], {
            duration: 2000
        }
    )
});
