function jingle()
{
    var output = document.getElementById("contact");

    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    output.innerHTML = "Name: " + name + "<br>" + "Company: " + company + "<br>" + "Email: " + email + "<br>" + "Phone Number: " + phone;
}
