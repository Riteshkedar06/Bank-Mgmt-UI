// Function to generate a random transaction ID
function generateTransactionId() {
    return "TRX-" + Math.floor(Math.random() * 1000000); // Generates a random ID
  }
  
  // Function to handle transaction generation
  function generateTransaction() {
    // Generate Transaction ID
    const transactionId = generateTransactionId();
    document.getElementById("transactionId").value = transactionId;
  
    // Collect all form data
    const transactionData = {
      transactionId: transactionId,
      customerSSN: document.getElementById("customerSSN").value,
      customerName: document.getElementById("customerName").value,
      accountId: document.getElementById("accountId").value,
      aadhaarCardNo: document.getElementById("aadhaarCardNo").value,
      panCardNo: document.getElementById("panCardNo").value,
      address: document.getElementById("address").value,
      date: document.getElementById("transactionDate").value,
      contactNumber: document.getElementById("contactNumber").value,
      modeOfTransaction: document.getElementById("modeOfTransaction").value,
      amount: document.getElementById("transactionAmount").value,
      transactionType: document.getElementById("transactionType").value,
    };
  
    // Simulate a successful transaction
    showTransactionMessage("Transaction generated successfully!", "success");
  
    // Show transaction details
    showTransactionDetails(transactionData);
  }
  
  // Function to show success or error message for transaction operations
  function showTransactionMessage(message, type) {
    const transactionMessageElement =
      document.getElementById("transactionMessage");
  
    if (type === "success") {
      transactionMessageElement.className = "alert alert-success";
      transactionMessageElement.innerText = message;
    } else {
      transactionMessageElement.className = "alert alert-danger";
      transactionMessageElement.innerText = message;
    }
  }
  
  // Function to display transaction details
  function showTransactionDetails(data) {
    const transactionDetailsElement =
      document.getElementById("transactionDetails");
  
    const details = `
          <strong>Transaction ID:</strong> ${data.transactionId} <br>
          <strong>Customer SSN ID:</strong> ${data.customerSSN} <br>
          <strong>Customer Name:</strong> ${data.customerName} <br>
          <strong>Account ID:</strong> ${data.accountId} <br>
          <strong>Aadhaar Card No.:</strong> ${data.aadhaarCardNo} <br>
          <strong>PAN Card No.:</strong> ${data.panCardNo} <br>
          <strong>Address:</strong> ${data.address} <br>
          <strong>Date:</strong> ${data.date} <br>
          <strong>Contact Number:</strong> ${data.contactNumber} <br>
          <strong>Mode of Transaction:</strong> ${data.modeOfTransaction} <br>
          <strong>Amount of Transaction:</strong> ${data.amount} <br>
          <strong>Transaction Type:</strong> ${data.transactionType}
      `;
  
    transactionDetailsElement.innerHTML = details;
    transactionDetailsElement.classList.remove("d-none");
  }