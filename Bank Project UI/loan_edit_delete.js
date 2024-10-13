// JSON object to represent loan application data
let loanData = {
  customerSSN: "123-45-6789",
  customerName: "John Doe",
  occupation: "Software Engineer",
  employerName: "Tech Solutions",
  employerAddress: "123 Tech Lane, Silicon Valley",
  email: "john.doe@example.com",
  address: "456 Elm Street, Springfield",
  maritalStatus: "Married",
  contactNumber: "555-1234",
  loanAmount: "30000",
  loanDuration: "5 years",
};

// Function to populate the form fields with loan data
function populateLoanForm() {
  document.getElementById("customerSSN").value = loanData.customerSSN;
  document.getElementById("customerName").value = loanData.customerName;
  document.getElementById("occupation").value = loanData.occupation;
  document.getElementById("employerName").value = loanData.employerName;
  document.getElementById("employerAddress").value = loanData.employerAddress;
  document.getElementById("email").value = loanData.email;
  document.getElementById("address").value = loanData.address;
  document.getElementById("maritalStatus").value = loanData.maritalStatus;
  document.getElementById("contactNumber").value = loanData.contactNumber;
  document.getElementById("loanAmount").value = loanData.loanAmount;
  document.getElementById("loanDuration").value = loanData.loanDuration;
}

// Call populateLoanForm to fill the form on page load
populateLoanForm();

// Function to handle loan info update
function editLoan() {
  // Update loanData with the new values from the form
  loanData.customerSSN = document.getElementById("customerSSN").value;
  loanData.customerName = document.getElementById("customerName").value;
  loanData.occupation = document.getElementById("occupation").value;
  loanData.employerName = document.getElementById("employerName").value;
  loanData.employerAddress = document.getElementById("employerAddress").value;
  loanData.email = document.getElementById("email").value;
  loanData.address = document.getElementById("address").value;
  loanData.maritalStatus = document.getElementById("maritalStatus").value;
  loanData.contactNumber = document.getElementById("contactNumber").value;
  loanData.loanAmount = document.getElementById("loanAmount").value;
  loanData.loanDuration = document.getElementById("loanDuration").value;

  // Simulate server update success response
  showLoanMessage("Loan application updated successfully!", "success");

  // Show the updated loan info
  showUpdatedLoanInfo();
}

// Function to show delete confirmation for loan
function confirmLoanDelete() {
  const confirmation = confirm(
    "Are you sure you want to delete this loan's information?"
  );

  if (confirmation) {
    // Clear loanData (simulate delete operation)
    loanData = {};

    // Clear the form fields
    clearLoanForm();

    // Show success message
    showLoanMessage("Loan information deleted successfully!", "success");

    // Clear updated info section
    document.getElementById("updatedLoanInfo").classList.add("d-none");
  } else {
    showLoanMessage("Loan deletion cancelled.", "error");
  }
}

// Function to clear the loan form fields
function clearLoanForm() {
  document.getElementById("customerSSN").value = "";
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

// Function to show success or error message for loan operations
function showLoanMessage(message, type) {
  const loanMessageElement = document.getElementById("loanMessage");

  if (type === "success") {
    loanMessageElement.className = "alert alert-success";
    loanMessageElement.innerText = message;
  } else {
    loanMessageElement.className = "alert alert-danger";
    loanMessageElement.innerText = message;
  }
}

// Function to display updated loan information
function showUpdatedLoanInfo() {
  const updatedInfo = `
        <strong>Customer SSN:</strong> ${loanData.customerSSN} <br>
        <strong>Name:</strong> ${loanData.customerName} <br>
        <strong>Occupation:</strong> ${loanData.occupation} <br>
        <strong>Employer Name:</strong> ${loanData.employerName} <br>
        <strong>Employer Address:</strong> ${loanData.employerAddress} <br>
        <strong>Email:</strong> ${loanData.email} <br>
        <strong>Address:</strong> ${loanData.address} <br>
        <strong>Marital Status:</strong> ${loanData.maritalStatus} <br>
        <strong>Contact Number:</strong> ${loanData.contactNumber} <br>
        <strong>Loan Amount:</strong> ${loanData.loanAmount} <br>
        <strong>Loan Duration:</strong> ${loanData.loanDuration}
    `;

  const updatedLoanInfoElement = document.getElementById("updatedLoanInfo");
  updatedLoanInfoElement.innerHTML = updatedInfo;
  updatedLoanInfoElement.classList.remove("d-none");
}