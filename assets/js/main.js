window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('nav a');
    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        const id = section.getAttribute('id');
        const navLink = document.querySelector(`nav a[href="#${id}"]`);
        if (rect.top <= 1 && rect.bottom >= 1) {
            // Add 'active-link' class to the nav link when the section is in view
            navLink.classList.add('active-link');
        } else {
            // Remove 'active-link' class when the section is not in view
            navLink.classList.remove('active-link');
        }
    });
});


  
document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Get form fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Initialize an error message variable
    let errorMessage = '';
  
    // Validate Name field
    if (name === '') {
      errorMessage += 'Name is required.\n';
    }
  
    // Validate Email field
    if (email === '') {
      errorMessage += 'Email is required.\n';
    } else if (!emailPattern.test(email)) {
      errorMessage += 'Please enter a valid email address.\n';
    }
  
    // Validate Message field
    if (message === '') {
      errorMessage += 'Message is required.\n';
    }
  
    // If there's an error, prevent form submission and show the error message
    if (errorMessage !== '') {
      event.preventDefault(); // Prevent form submission
      alert(errorMessage); // Show error message in an alert
    } else {
      // If no error, clear the fields after successful submission
      setTimeout(() => {
        document.getElementById('contactForm').reset();
      }, 100); // Delay reset slightly to allow form submission to happen
    }
  });
