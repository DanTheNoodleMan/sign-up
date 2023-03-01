let input = document.querySelector("#phone");
window.intlTelInput(input, {
    // show dial codes too
    separateDialCode: true,
    // If there are some countries you want to show on the top.
    // here we are promoting russia and singapore.
    preferredCountries: ["us", "gb", "es"],
    //Default country
    initialCountry:"us",
});

    
    var check = function() {
        let pass1 = document.getElementById('password');
        let pass2 = document.getElementById('confirmPass');  
        if (pass1.value == pass2.value) {
            pass1.style.borderBottom = '2px solid #77c700';
            pass1.style.borderRight = '2px solid #77c700';
            pass2.style.borderBottom = '2px solid #77c700';
            pass2.style.borderRight = '2px solid #77c700';
        } else {
            pass1.style.borderBottom = '2px solid red';
            pass1.style.borderRight = '2px solid red';
            pass2.style.borderBottom = '2px solid red';
            pass2.style.borderRight = '2px solid red';
        }
    }

