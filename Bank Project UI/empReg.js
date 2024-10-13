let currentStep = 0;
const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

// Generate random 7-digit Employee ID
function generateEmployeeId() {
  return Math.floor(1000000 + Math.random() * 9000000);
}

function showStep(step) {
  steps.forEach((element, index) => {
    element.classList.toggle("active", index === step);
  });

  prevBtn.style.display = step === 0 ? "none" : "inline-block";
  nextBtn.style.display = step === steps.length - 1 ? "none" : "inline-block";
  submitBtn.style.display = step === steps.length - 1 ? "inline-block" : "none";
}

function nextStep() {
  if (validateForm()) {
    currentStep++;
    showStep(currentStep);
  }
}

function prevStep() {
  currentStep--;
  showStep(currentStep);
}

function validateForm() {
  let valid = true;
  const inputs = steps[currentStep].querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add("is-invalid");
      valid = false;
    } else {
      input.classList.remove("is-invalid");
    }
  });
  return valid;
}

document
  .getElementById("employeeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Display registration success message
    const employeeId = generateEmployeeId();
    successMessage.innerHTML = `Employee Registration Successful! <br> Employee ID: ${employeeId} <br> Name: ${
      document.getElementById("firstName").value
    } ${document.getElementById("lastName").value} <br> Email: ${
      document.getElementById("email").value
    }`;
    successMessage.style.color = "green";
    successMessage.style.display = "block";
  });

// Initialize the form
showStep(currentStep);