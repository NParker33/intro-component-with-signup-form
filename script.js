const formControls = document.querySelectorAll(".form-control");
const claimTrialBtn = document.getElementById("claimTrialBtn");

claimTrialBtn.addEventListener("click", function () {
    event.preventDefault(); // prevent form from submitting on click
    
    // loop through all input fields
    formControls.forEach(control => {
        // get error message for input field
        const errorMessage = control.nextElementSibling;

        // check that input field is not empty
        if (control.value.length < 2){
            control.classList.add('invalid');
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
            control.classList.remove('invalid');
        }

        // validate email
        if (control.id === "email"){
            const validFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const email = control.value;
            if (!email.match(validFormat)){
                control.classList.add('invalid');
                errorMessage.classList.remove('hidden');
            }
        }
    })
})