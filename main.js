async function loadUtility(name) {
  const container = document.getElementById("utility-container");
  try {
    const res = await fetch(`utilities/${name}.html`);
    const html = await res.text();
    container.innerHTML = html;
  } catch {
    container.innerHTML = `<p>❌ Failed to load ${name}.</p>`;
  }
}
