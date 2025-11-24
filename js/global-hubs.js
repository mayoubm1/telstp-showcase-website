// Global Life Science Hubs Database
const globalHubs = [
  {
    name: "Cambridge Biomedical Campus",
    location: "Cambridge, UK",
    specialization: ["Genomics", "Precision Medicine", "Clinical Research", "Medical Devices"],
    priority: "High",
    value: "World-leading genomics research hub, established university partnerships, advanced clinical trials infrastructure"
  },
  {
    name: "Singapore Biopolis",
    location: "Singapore",
    specialization: ["Biomedical Research", "Drug Discovery", "Biomarkers", "International Collaboration"],
    priority: "High",
    value: "Gateway to Asia-Pacific market, strong government backing, multinational pharma presence"
  },
  {
    name: "Research Triangle Park",
    location: "North Carolina, USA",
    specialization: ["Biotechnology", "Pharmaceuticals", "Medical Devices", "University Collaboration"],
    priority: "High",
    value: "Largest research park in North America, strong industry-academia model, established success framework"
  },
  {
    name: "Boston Biotech Cluster (MassBio)",
    location: "Boston/Cambridge, Massachusetts, USA",
    specialization: ["Biotech Innovation", "Drug Development", "Venture Capital", "Startup Ecosystem"],
    priority: "High",
    value: "World's largest biotech cluster, extensive VC network, leading universities, mature ecosystem"
  },
  {
    name: "Medicon Valley Alliance",
    location: "Copenhagen, Denmark / Malmö, Sweden",
    specialization: ["Life Sciences", "Medical Technology", "Cross-border Collaboration", "Nordic Innovation"],
    priority: "High",
    value: "Cross-border collaboration model, strong pharma presence, Nordic healthcare expertise"
  },
  {
    name: "Switzerland Innovation Park Basel Area",
    location: "Basel, Switzerland",
    specialization: ["Pharmaceuticals", "Life Sciences", "Healthcare Technology", "Innovation"],
    priority: "High",
    value: "Home to major pharma companies (Novartis, Roche), regulatory expertise, European market access"
  },
  {
    name: "Wellcome Genome Campus",
    location: "Cambridge, UK",
    specialization: ["Genomics", "Computational Biology", "Data Science", "Global Health"],
    priority: "High",
    value: "World-leading genomics research, data science expertise, global health focus"
  },
  {
    name: "Tel Aviv Biotech Hub",
    location: "Tel Aviv, Israel",
    specialization: ["Digital Health", "Medical Technology", "Precision Medicine", "Innovation"],
    priority: "High",
    value: "Middle East hub, innovation culture, digital health expertise, regional proximity"
  },
  {
    name: "San Francisco Bay Area Life Sciences",
    location: "San Francisco, California, USA",
    specialization: ["Biotech Innovation", "Digital Health", "Venture Capital", "Technology"],
    priority: "High",
    value: "Silicon Valley proximity, venture capital access, technology integration"
  },
  {
    name: "Shanghai Biotech Hub",
    location: "Shanghai, China",
    specialization: ["Traditional Medicine", "Modern Therapeutics", "Manufacturing", "Research"],
    priority: "High",
    value: "Chinese market access, traditional medicine expertise, manufacturing capabilities"
  },
  {
    name: "Oxford Science Park",
    location: "Oxford, UK",
    specialization: ["Technology Transfer", "Life Sciences", "Medical Devices", "University Spin-offs"],
    priority: "Medium",
    value: "University of Oxford connection, technology transfer expertise, strategic UK location"
  },
  {
    name: "Heidelberg Technology Park",
    location: "Heidelberg, Germany",
    specialization: ["Biotechnology", "Life Sciences", "Medical Technology", "Cancer Research"],
    priority: "Medium",
    value: "German biotech expertise, cancer research focus, European market position"
  }
];

// Function to populate global hubs data
function populateGlobalHubs() {
  const hubsContainer = document.getElementById('global-hubs-container');
  if (!hubsContainer) return;
  
  let hubsHTML = '';
  
  globalHubs.forEach(hub => {
    hubsHTML += `
      <div class="hub-card">
        <h3>${hub.name}</h3>
        <p class="hub-location"><i class="fas fa-map-marker-alt"></i> ${hub.location}</p>
        <div class="hub-specialization">
          ${hub.specialization.map(spec => `<span class="hub-tag">${spec}</span>`).join('')}
        </div>
        <div class="hub-priority ${hub.priority.toLowerCase()}">
          <span>Priority: ${hub.priority}</span>
        </div>
        <p class="hub-value">${hub.value}</p>
      </div>
    `;
  });
  
  hubsContainer.innerHTML = hubsHTML;
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  populateGlobalHubs();
});
