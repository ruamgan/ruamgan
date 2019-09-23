function submitMessage(e) {
  var xhr = new XMLHttpRequest();
  var url = "https://script.google.com/macros/s/AKfycbyxgbXhZIgYxfRIUfXWVW-H-lOTcs7FkVCM9CLS44ZMwkzCro4/exec";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  var data = JSON.stringify({
    name: document.getElementById("contactForm_name").value,
    email: document.getElementById("contactForm_email").value,
    message: document.getElementById("contactForm_message").value
  });
  try {
    xhr.send(data);
  } finally {
    alert("Thanks. Your message has been received.");
  return false; // Prevent redirect
  }
}