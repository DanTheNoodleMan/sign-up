var input = document.querySelector("#phone");
window.intlTelInput(input, {
    // show dial codes too
    separateDialCode: true,
    // If there are some countries you want to show on the top.
    // here we are promoting russia and singapore.
    preferredCountries: ["us", "gb", "es"],
    //Default country
    initialCountry:"us",
});