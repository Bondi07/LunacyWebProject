/* CHANGING TEXT  */

document.addEventListener("DOMContentLoaded", function() {
    const changingTextElement = document.getElementById("changingText");
    const unchangedStartElement = document.getElementById("unchangedStart");
    const unchangedEndElement = document.getElementById("unchangedEnd");

    if (changingTextElement) { // Check if the element exists
        const words = ["making", "designing", "aligning", "building"]; 
        const colors = ["red", "lightpink", "yellow", "green"]; 
        let currentIndex = 1; 

        function changeWord() {
            changingTextElement.textContent = words[currentIndex];
            changingTextElement.style.color = colors[currentIndex]; 

            currentIndex = (currentIndex + 1) % words.length;
        }

        setInterval(changeWord, 3000); 
    } else {
        console.error("Element with id 'changingText' not found in the document.");
    }
});




/* GO TO TOP BUTTON */

document.addEventListener("DOMContentLoaded", function() {
    var scrollTopButton = document.getElementById("scrollTopButton");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
        scrollTopButton.classList.remove("hidden");
        } else {
        scrollTopButton.classList.add("hidden");
        }
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}




/* LEFT MANU PAGINA ABOUT */

document.addEventListener('DOMContentLoaded', function() {
    // This function runs when the DOM is fully loaded

    window.addEventListener('scroll', function() {
        var menu = document.querySelector('.left-menu');
        var scrollPosition = window.scrollY;

        if (menu) {
            if (scrollPosition > 0) {
                menu.style.top = '50px';
            } else {
                menu.style.top = '120px';
            }
        }
    });
});




/* PENTRU DOWNLOAD SA APARE LOGIN */
// Get the button and modal elements
var buttonDownload = document.getElementById("buttonDownload");
var modalForms = document.getElementById("signInSignUpModal");

// Add event listener to the download button
buttonDownload.addEventListener("click", function() {
    // Display the modal forms
    modalForms.classList.remove("hidden");
});

// Function to close the modal forms
function closeForm() {
    modalForms.classList.add("hidden");
}

function showSignUpForm() {
    var signInFormContainer = document.getElementById("signInFormContainer");
    var signUpFormContainer = document.getElementById("signUpFormContainer");
    var showSignUpButton = document.getElementById("showSignUpButton");
    var showSignInButton = document.getElementById("showSignInButton");

    // Toggle visibility of sign-in and sign-up forms
    signInFormContainer.classList.add("hidden");
    signUpFormContainer.classList.remove("hidden");

    // Hide the "Sign Up" button and show the "Sign In" button
    showSignUpButton.style.display = "none";
    showSignInButton.style.display = "inline-block";
}

function showSignInForm() {
    var signInFormContainer = document.getElementById("signInFormContainer");
    var signUpFormContainer = document.getElementById("signUpFormContainer");
    var showSignUpButton = document.getElementById("showSignUpButton");
    var showSignInButton = document.getElementById("showSignInButton");

    // Toggle visibility of sign-in and sign-up forms
    signUpFormContainer.classList.add("hidden");
    signInFormContainer.classList.remove("hidden");

    // Hide the "Sign In" button and show the "Sign Up" button
    showSignInButton.style.display = "none";
    showSignUpButton.style.display = "inline-block";
}

