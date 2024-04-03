document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
});

async function loadProjects() {
  const response = await fetch("projectList.json");
  const projects = await response.json();
  const menu = document.getElementById("menu");

  projects.forEach((project) => {
    const projectLink = document.createElement("a");
    projectLink.href = `#${project.name}`;
    projectLink.innerText = project.name;
    projectLink.onclick = () => loadProjectImages(project.name, project.images);
    menu.appendChild(projectLink);
    menu.appendChild(document.createElement("br"));
  });
}

function loadProjectImages(projectName, images) {
  const existingContainer = document.getElementById("projectContainer");
  if (existingContainer) {
    existingContainer.remove(); // Remove the existing container if it exists
  }
  const projectContainer = document.createElement("div");
  projectContainer.id = "projectContainer"; // Set an ID to the new container for future reference
  images.forEach((imageFile) => {
    const img = document.createElement("img");
    img.src = `./resources/${imageFile}`;
    img.style.width = "100%"; // Adjust as needed
    projectContainer.appendChild(img);
  });
  document.body.appendChild(projectContainer);
}
