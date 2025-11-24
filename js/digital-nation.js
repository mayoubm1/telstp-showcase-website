// Digital Nation Architecture
const digitalNationStructure = {
  title: "TELSTP Digital Nation Architecture",
  description: "The unified framework for TELSTP's AI-human collaborative ecosystem",
  ministries: [
    {
      name: "Foreign Affairs",
      appName: "Global 3D Network",
      description: "Connects innovators worldwide through an interactive 3D visualization",
      url: "https://iptddxkj.manus.space",
      status: "Active"
    },
    {
      name: "Health",
      appName: "Telemedicine Hub",
      description: "Delivers healthcare services to underserved populations",
      url: "https://dyh6i3c9o0ll.manus.space",
      status: "Active"
    },
    {
      name: "Research & Development",
      appName: "M2-3M System",
      description: "Powers breakthrough research with AI-driven analysis",
      url: "https://qjh9iec5vx5p.manus.space",
      status: "Development"
    },
    {
      name: "Education",
      appName: "Curriculum Hub",
      description: "Educates the next generation of life science professionals",
      url: "#",
      status: "Planning"
    },
    {
      name: "Treasury",
      appName: "Investor Gateway",
      description: "Fuels the ecosystem through strategic investment partnerships",
      url: "#",
      status: "Planning"
    },
    {
      name: "Broadcasting",
      appName: "Radio/Podcasts",
      description: "Shares knowledge through audio content and educational programming",
      url: "#",
      status: "Development"
    }
  ],
  constitution: {
    name: "Omni Cognator",
    components: [
      "API Gateway (Border Control)",
      "Agent Registry (Active AI ministers)",
      "Context Memory (Shared knowledge base)",
      "Message Bus (Inter-minister communication)",
      "Health Monitor (System status)"
    ]
  }
};

// Function to populate digital nation architecture
function populateDigitalNation() {
  const architectureContainer = document.getElementById('digital-nation-container');
  if (!architectureContainer) return;
  
  let ministriesHTML = '';
  
  digitalNationStructure.ministries.forEach(ministry => {
    const statusClass = ministry.status.toLowerCase();
    
    ministriesHTML += `
      <div class="ministry-card">
        <div class="ministry-header">
          <h3>${ministry.name}</h3>
          <span class="ministry-status ${statusClass}">${ministry.status}</span>
        </div>
        <h4>${ministry.appName}</h4>
        <p>${ministry.description}</p>
        ${ministry.url !== "#" ? 
          `<a href="${ministry.url}" target="_blank" class="ministry-link">Visit Platform</a>` : 
          `<span class="ministry-link disabled">Coming Soon</span>`
        }
      </div>
    `;
  });
  
  let constitutionHTML = `
    <div class="constitution-container">
      <h3>${digitalNationStructure.constitution.name}</h3>
      <p>The Digital Constitution of TELSTP</p>
      <ul class="constitution-components">
        ${digitalNationStructure.constitution.components.map(component => 
          `<li>${component}</li>`
        ).join('')}
      </ul>
    </div>
  `;
  
  architectureContainer.innerHTML = `
    <div class="architecture-header">
      <h2>${digitalNationStructure.title}</h2>
      <p>${digitalNationStructure.description}</p>
    </div>
    <div class="ministries-grid">
      ${ministriesHTML}
    </div>
    ${constitutionHTML}
  `;
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  populateDigitalNation();
});
