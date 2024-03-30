function startMembership() {
    var email = document.getElementById('email').value;
    if (email) {
        // Perform action, such as validating the email and redirecting to sign-up page
        console.log('Email entered:', email);
    } else {
        alert('Please enter an email address.');
    }
}