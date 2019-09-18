$(document).ready(function() {

 $('.loginForm').submit(function(event){
    event.preventDefault();
    const email = $('#email').val();// Change the input name to username
    const password = $('#password').val();// Change the input name to password
    //const check = $('#Check').val();
    if(!email || !password){
        $('.regMessage').html('Kindly fill in all fields'); // Create a div with class name regMessage
        return;
    }
    $.ajax({
        method: 'POST',
        url: `http://localhost:3000/users?email=${emailLogin}&password=${passwordLogin}`,
        data: {
            email,
            password
        },
        beforeSend: function() {
        $('.regMessage').html('Loading....');
        },
        success: function(response) {
            $('.regMessage').html('Login successful....');
            console.log("Login successful");
            $.each(response, function() {
                console.log("ID: " + this.id);
                console.log("First Name: " + this.email);
                console.log("Last Name: " + this.password);
                console.log(" ");
                // Redirects the user to the next page
                window.location.href = '/create_building.html';
            });
        }
    })
 })
});