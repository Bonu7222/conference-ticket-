
function validateAvatar() {
  const fileInput = document.getElementById("avatar");
  const files = fileInput.files;
  const maxSize = 512 * 1024; // 500KB in bytes
  const allowedTypes = ["image/jpeg", "image/png"];
  const invalidMessage = document.querySelector(".upload-invalid");

  invalidMessage.style.display = "none";

  if (files.length === 0) {
    invalidMessage.textContent = "Avatar is required";
    invalidMessage.style.display = "flex";
    return false;
  }

  const file = files[0];


  if (!allowedTypes.includes(file.type)) {
    invalidMessage.textContent = "Invalid file type. Only JPG or PNG allowed.";
    invalidMessage.style.display = "flex";
    return false;
  }


  if (file.size > maxSize) {
    invalidMessage.textContent =
      "File too large. Please upload a photo under 500KB";
    invalidMessage.style.display = "flex";
    return false;
  }

  return true;
}


function customerAvatar() {
  let fileInput = document.getElementById("avatar");
  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("customer-photo").src = e.target.result;
      document.getElementById("avatar-preview").src = e.target.result;
      document.getElementById("avatar-preview").style.display = "block";
      document.querySelector(".upload-icon svg").style.display = "none";
      document.querySelector(".upload-text").style.display = "none";
    };
    reader.readAsDataURL(file);
  });
}

customerAvatar();


export { validateAvatar, customerAvatar };
