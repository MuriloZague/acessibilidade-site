function toggleContrast() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  if (currentTheme === "high-contrast") {
    body.setAttribute("data-theme", "low-contrast");
  } else {
    body.setAttribute("data-theme", "high-contrast");
  }
}
