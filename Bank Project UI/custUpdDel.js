// JSON object to represent customer data
let customerData = {
  ssn: "123-45-6789",
  customerName: "John Doe",
  occupation: "Engineer",
  employerName: "ABC Corp",
  employerAddress: "456 Business Rd",
  email: "john.doe@example.com",
  address: "123 Main Street",
  maritalStatus: "Married",
  contactNumber: "123-456-7890",
  loanAmount: "50000",
  loanDuration: "5 years",
};

// Function to populate the form fields with customer data
function populateForm() {
  document.getElementById("ssn").value = customerData.ssn;
  document.getElementById("customerName").value = customerData.customerName;
  document.getElementById("occupation").value = customerData.occupation;
  document.getElementById("employerName").value = customerData.employerName;
  document.getElementById("employerAddress").value =
    customerData.employerAddress;
  document.getElementById("email").value = customerData.email;
  document.getElementById("address").value = customerData.address;
  document.getElementById("maritalStatus").value = customerData.maritalStatus;
  document.getElementById("contactNumber").value = customerData.contactNumber;
  document.getElementById("loanAmount").value = customerData.loanAmount;
  document.getElementById("loanDuration").value = customerData.loanDuration;
}

// Call populateForm to fill the form on page load
populateForm();

// Function to handle customer info update
function editCustomer() {
  // Update customerData with the new values from the form
  customerData.customerName = document.getElementById("customerName").value;
  customerData.occupation = document.getElementById("occupation").value;
  customerData.employerName = document.getElementById("employerName").value;
  customerData.employerAddress =
    document.getElementById("employerAddress").value;
  customerData.email = document.getElementById("email").value;
  customerData.address = document.getElementById("address").value;
  customerData.maritalStatus = document.getElementById("maritalStatus").value;
  customerData.contactNumber = document.getElementById("contactNumber").value;
  customerData.loanAmount = document.getElementById("loanAmount").value;
  customerData.loanDuration = document.getElementById("loanDuration").value;

  // Simulate server update success response
  showMessage("Customer information updated successfully!", "success");

  // Show the updated info
  showUpdatedInfo();
}

// Function to show delete confirmation
function confirmDelete() {
  const confirmation = confirm(
    "Are you sure you want to delete this customer's information?"
  );

  if (confirmation) {
    // Clear customerData (simulate delete operation)
    customerData = {};

    // Clear the form fields
    clearForm();

    // Show success message
    showMessage("Customer information deleted successfully!", "success");

    // Clear updated info section
    document.getElementById("updatedInfo").classList.add("d-none");
  } else {
    showMessage("Customer deletion cancelled.", "error");
  }
}

// Function to clear the form fields
function clearForm() {
  document.getElementById("ssn").value = "";
  document.getElementById("customerName").value = "";
  document.getElementById("occupation").value = "";
  document.getElementById("employerName").value = "";
  document.getElementById("employerAddress").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("maritalStatus").value = "";
  document.getElementById("contactNumber").value = "";
  document.getElementById("loanAmount").value = "";
  document.getElementById("loanDuration").value = "";
}

// Function to show success or error message
function showMessage(message, type) {
  const messageElement = document.getElementById("message");

  if (type === "success") {
    messageElement.className = "alert alert-success";
    messageElement.innerText = message;
  } else {
    messageElement.className = "alert alert-danger";
    messageElement.innerText = message;
  }
}

// Function to display updated customer information
function showUpdatedInfo() {
  const updatedInfoElement = document.getElementById("updatedInfo");

  const updatedDataHTML = `
      <strong>SSN:</strong> ${customerData.ssn}<br>
      <strong>Name:</strong> ${customerData.customerName}<br>
      <strong>Occupation:</strong> ${customerData.occupation}<br>
      <strong>Employer Name:</strong> ${customerData.employerName}<br>
      <strong>Employer Address:</strong> ${customerData.employerAddress}<br>
      <strong>Email:</strong> ${customerData.email}<br>
      <strong>Address:</strong> ${customerData.address}<br>
      <strong>Marital Status:</strong> ${customerData.maritalStatus}<br>
      <strong>Contact Number:</strong> ${customerData.contactNumber}<br>
      <strong>Loan Amount:</strong> ${customerData.loanAmount}<br>
      <strong>Loan Duration:</strong> ${customerData.loanDuration}
    `;

  updatedInfoElement.innerHTML = updatedDataHTML;
  updatedInfoElement.classList.remove("d-none");
}