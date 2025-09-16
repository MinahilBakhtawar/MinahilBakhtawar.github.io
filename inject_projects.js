// inject_projects.js

let projectsShown = 0; // Track how many projects are currently displayed


function createProjectCard(project) {
  const col = document.createElement("div");
  col.className = "col s12 m6 l4";

  col.innerHTML = `
    <div class="card medium">
      <div class="card-image waves-effect waves-block waves-light">
        <img alt="${project.title}" src="${project.image}" style="height:100%; width:100%" class="activator" />
      </div>
      <div class="card-content">
        <span class="card-title activator teal-text hoverline">${project.title}<i class="mdi-navigation-more-vert right"></i></span>
        <p>${project.description}</p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text"><small>Accomplishments</small><i class="mdi-navigation-close right"></i></span>
        <ul>
          ${project.accomplishments.map(a => `<li>${a}</li>`).join("")}
        </ul>
        <div class="card-action">
          <a aria-label="Visit the GitHub repo for project" href="${project.github}" target="_blank"
            class="btn-floating btn-large waves-effect waves-light blue-grey"><i class="fa fa-github"></i></a>
        </div>
      </div>
    </div>
  `;
  return col;
}

// Function to show projects dynamically
function showProjects(count = 1) {
  const container = document.getElementById("recent-projects");

  for (let i = projectsShown; i < projectsShown + count && i < projects.length; i++) {
    container.appendChild(createProjectCard(projects[i]));
  }

  projectsShown += count;

  if (projectsShown >= projects.length) {
    document.getElementById("load-more").style.display = "none";
  }
}

// Initialize: show only the latest project on page load
document.addEventListener("DOMContentLoaded", () => {
  showProjects(1); // Display latest project

  document.getElementById("load-more").addEventListener("click", () => {
    showProjects(1); // Load one more project per click
  });
});
