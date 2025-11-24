// Project Timeline Data
const projectTimeline = [
  {
    date: "May 2025",
    title: "Initial Website Development",
    description: "Created the first informational website for GAFI and Giza Governorate presenting the core vision, land proposals, and economic impact.",
    milestone: true
  },
  {
    date: "June 2025",
    title: "3D Globe Visualization Launch",
    description: "Deployed the interactive 3D Globe visualization with Earth texture and hub markers showing global research partnerships.",
    milestone: true
  },
  {
    date: "July 2025",
    title: "Bilingual AI Assistant Development",
    description: "Created the bilingual AI Assistant \"حياة\" (Hayah) supporting both Arabic and English for project information access.",
    milestone: false
  },
  {
    date: "August 2025",
    title: "Telemedicine Platform Launch",
    description: "Developed the Telemedicine Hub with separate portals for patients and healthcare professionals.",
    milestone: true
  },
  {
    date: "September 2025",
    title: "M2-3M Research System Integration",
    description: "Implemented the M2-3M Research System with connections to 47+ global institutions and 47.3 TB research database.",
    milestone: true
  },
  {
    date: "October 2025",
    title: "Strategic Metaplan Development",
    description: "Developed the comprehensive TELsTP 2025 Strategic Metaplan and established international research partnerships.",
    milestone: false
  },
  {
    date: "November 2025",
    title: "Digital Nation Framework",
    description: "Established the Digital Nation Framework with Omni Cognator as the central governance system for all platforms.",
    milestone: true
  }
];

// Function to populate timeline
function populateTimeline() {
  const timelineContainer = document.getElementById('timeline-container');
  if (!timelineContainer) return;
  
  let timelineHTML = '<div class="timeline-line"></div>';
  
  projectTimeline.forEach((event, index) => {
    const isEven = index % 2 === 0;
    const milestoneClass = event.milestone ? 'major-milestone' : 'minor-milestone';
    
    timelineHTML += `
      <div class="timeline-item ${isEven ? 'left' : 'right'} ${milestoneClass}">
        <div class="timeline-content">
          <div class="timeline-date">${event.date}</div>
          <h3>${event.title}</h3>
          <p>${event.description}</p>
        </div>
      </div>
    `;
  });
  
  timelineContainer.innerHTML = timelineHTML;
}

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  populateTimeline();
});
