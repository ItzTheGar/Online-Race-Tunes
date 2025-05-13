// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Form Validation for Car Tuning Form
document
  .querySelector(".car-form form")
  .addEventListener("submit", function (e) {
    const carMake = document.querySelector('input[placeholder="Car Make"]');
    const carModel = document.querySelector('input[placeholder="Car Model"]');
    const carYear = document.querySelector('input[placeholder="Car Year"]');
    const selectedGame = document.querySelector("select").value;

    // Validate fields
    if (!carMake.value || !carModel.value || !carYear.value || !selectedGame) {
      e.preventDefault();
      alert("Please fill out all fields.");
    } else if (isNaN(carYear.value) || carYear.value.length !== 4) {
      e.preventDefault();
      alert("Please enter a valid 4-digit car year.");
    }
  });

// Form Validation for Contact Form
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    const name = document.querySelector('input[placeholder="Your Name"]');
    const email = document.querySelector('input[placeholder="Your Email"]');
    const message = document.querySelector("textarea");

    if (!name.value || !email.value || !message.value) {
      e.preventDefault();
      alert("Please fill out all fields in the contact form.");
    } else if (!validateEmail(email.value)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

// Price Calculation on Car & Track Package
document.querySelectorAll(".pricing-box").forEach((box) => {
  box.addEventListener("click", () => {
    alert(
      "Thank you for selecting this package. Please fill out the form below to proceed with the tuning."
    );
  });
});

// Custom Tuning Note Display
document
  .querySelector(".custom-tuning")
  .addEventListener("mouseover", function () {
    const note = document.createElement("p");
    note.textContent =
      "Custom tuning is tailored to each user's specific needs. Pricing may vary.";
    note.style.color = "#FF4500";
    note.style.fontWeight = "bold";
    note.style.marginTop = "10px";
    this.appendChild(note);
  });

document
  .querySelector(".custom-tuning")
  .addEventListener("mouseout", function () {
    const note = this.querySelector("p");
    if (note) note.remove();
  });