document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("fileInput");
  const gallery = document.getElementById("gallery");

  document.querySelector(".upload-btn").addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (event) => {
    const files = event.target.files;
    gallery.innerHTML = "";

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.classList.add("gallery-image");
        gallery.appendChild(img);
      };

      reader.readAsDataURL(files[i]);
    }
  });
});