//test only- reset used to default the form; wrote for p3
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();//fake submission

        const firstName = document.getElementById("firstname").value;
        const lastName = document.getElementById("lastname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (firstName && lastName && email && password) {
            alert(`Welcome to Freebees, ${firstName}! Your account has been created.`);
            form.reset();//default the form
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
