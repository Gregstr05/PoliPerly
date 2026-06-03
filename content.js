const targetElement = document.querySelector(".rr-main-div");

if (targetElement) {
  const new_page_link = document.createElement("p");
  new_page_link.className = "my-extension-wrapper";
  new_page_link.innerHTML = `
    <p>
        <a href="#" id="load-poli-perly">
            Pár hodnocení nad rámec osnovy předmětu - Cool reviews
        </a>
    </p>
  `;
  targetElement.appendChild(new_page_link);

  const link = document.getElementById("load-poli-perly");
  if (link) {
    link.addEventListener("click", async (event) => {
      event.preventDefault(); // Prevent default link navigation

      try {
        // Fetch the file contents from extension direct resources
        const response = await fetch(
          chrome.runtime.getURL("poli-perly.html")
        );
        const htmlContent = await response.text();

        // Hot swap the DOM container contents with custom page
        targetElement.innerHTML = htmlContent;
      } catch (error) {
        console.error("Failed to load poli-perly.html assets:", error);
      }
    });
  }
} else {
  console.warn("Target element not found on this page.");
}