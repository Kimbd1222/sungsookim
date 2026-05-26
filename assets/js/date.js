document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  const formatted = today.toLocaleDateString("en-US", options);

  const target = document.getElementById("last-updated");

  if (target) {
    target.innerHTML = `Last updated: ${formatted}<br>© 2026 Sungsoo Kim`;
  }
});
