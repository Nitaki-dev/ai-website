function validateForm() {
    // Get the form elements
    const name = document.forms["contactForm"]["name"];
    const email = document.forms["contactForm"]["email"];
    const message = document.forms["contactForm"]["message"];
  
    // Validate the form elements
    if (name.value == "") {
      alert("Name must be filled out");
      name.focus();
      return false;
    }
    if (email.value == "") {
      alert("Email must be filled out");
      email.focus();
      return false;
    }
    if (message.value == "") {
      alert("Message must be filled out");
      message.focus();
      return false;
    }
  
    // If all form elements are valid, return true
    return true;
  }
  