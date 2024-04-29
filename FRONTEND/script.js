document.addEventListener("DOMContentLoaded", function() {
    const changingTextElement = document.getElementById("changingText");
    const unchangedStartElement = document.getElementById("unchangedStart");
    const unchangedEndElement = document.getElementById("unchangedEnd");

    const words = ["making", "designing", "aligning", "building"]; 
    const colors = ["red", "lightpink", "yellow", "green"]; 
    let currentIndex = 1; 

    function changeWord() {
        changingTextElement.textContent = words[currentIndex];
        changingTextElement.style.color = colors[currentIndex]; 

        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(changeWord, 3000); 
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








