// Supabase Integration for TELsTP Showcase Website
// Lightweight implementation to connect to Supabase for database functionality

// Initialize Supabase client with public keys (would be replaced with actual keys in production)
const supabaseUrl = 'https://supabase-demo-instance.co';
const supabaseKey = 'public-anon-key';

// Simulated Supabase client for demonstration purposes
const supabase = {
  from: function(table) {
    return {
      select: function(columns) {
        return {
          eq: function(column, value) {
            return this;
          },
          order: function(column, order) {
            return this;
          },
          then: function(callback) {
            // Simulate database responses based on table requested
            let data = [];
            
            if (table === 'research_hubs') {
              data = [
                { id: 1, name: 'Cairo Life Sciences Hub', country: 'Egypt', lat: 30.0444, lng: 31.2357, focus_area: 'Biotechnology', researchers: 1200 },
                { id: 2, name: 'Harvard Medical Research Center', country: 'USA', lat: 42.3601, lng: -71.0589, focus_area: 'Medical Research', researchers: 950 },
                { id: 3, name: 'Oxford Biosciences Institute', country: 'UK', lat: 51.7520, lng: -1.2577, focus_area: 'Genomics', researchers: 780 },
                { id: 4, name: 'Tokyo Advanced Life Sciences', country: 'Japan', lat: 35.6762, lng: 139.6503, focus_area: 'Regenerative Medicine', researchers: 840 },
                { id: 5, name: 'Berlin Quantum Biology Center', country: 'Germany', lat: 52.5200, lng: 13.4050, focus_area: 'Quantum Biology', researchers: 620 },
                { id: 6, name: 'Singapore Biotech Innovation', country: 'Singapore', lat: 1.3521, lng: 103.8198, focus_area: 'Biotech Innovation', researchers: 580 }
              ];
            } else if (table === 'publications') {
              data = [
                { id: 1, title: 'Advances in CRISPR Gene Editing for Rare Diseases', authors: 'Hassan, A., Smith, J.', publication_date: '2025-03-15', citations: 87 },
                { id: 2, title: 'AI-Driven Drug Discovery: A New Paradigm', authors: 'El-Mansouri, K., Johnson, P.', publication_date: '2025-04-22', citations: 124 },
                { id: 3, title: 'Quantum Computing Applications in Genomic Analysis', authors: 'Zhang, L., Ibrahim, M.', publication_date: '2025-05-10', citations: 56 },
                { id: 4, title: 'Telemedicine Implementation in Rural Egypt', authors: 'Farouk, S., Williams, T.', publication_date: '2025-06-18', citations: 42 },
                { id: 5, title: 'Ethical Considerations in AI-Human Medical Collaboration', authors: 'Ahmed, R., Garcia, C.', publication_date: '2025-07-05', citations: 78 }
              ];
            } else if (table === 'events') {
              data = [
                { id: 1, title: 'TELsTP Grand Opening Symposium', date: '2026-01-15', location: 'Cairo, Egypt', attendees: 1500 },
                { id: 2, title: 'International Life Sciences Conference', date: '2026-03-22', location: 'TELsTP Main Campus', attendees: 2200 },
                { id: 3, title: 'AI in Healthcare Workshop Series', date: '2026-04-10', location: 'TELsTP Innovation Center', attendees: 850 },
                { id: 4, title: 'Genomics & Personalized Medicine Summit', date: '2026-06-18', location: 'TELsTP Research Building', attendees: 1200 },
                { id: 5, title: 'Global Research Partners Annual Meeting', date: '2026-09-05', location: 'TELsTP Conference Center', attendees: 470 }
              ];
            }
            
            callback({ data: data, error: null });
            return this;
          }
        };
      },
      insert: function(data) {
        return {
          then: function(callback) {
            callback({ data: { id: Math.floor(Math.random() * 1000) + 1, ...data }, error: null });
            return this;
          }
        };
      }
    };
  },
  auth: {
    signIn: function(credentials) {
      return {
        then: function(callback) {
          callback({ 
            data: { user: { id: 'user-123', email: credentials.email } }, 
            error: null 
          });
          return this;
        }
      };
    },
    signOut: function() {
      return {
        then: function(callback) {
          callback({ error: null });
          return this;
        }
      };
    }
  }
};

// Function to load research hubs from database
function loadResearchHubs() {
  supabase
    .from('research_hubs')
    .select('*')
    .order('name', { ascending: true })
    .then(({ data, error }) => {
      if (error) {
        console.error('Error loading research hubs:', error);
        return;
      }
      
      displayResearchHubs(data);
    });
}

// Function to load recent publications
function loadPublications() {
  supabase
    .from('publications')
    .select('*')
    .order('publication_date', { ascending: false })
    .then(({ data, error }) => {
      if (error) {
        console.error('Error loading publications:', error);
        return;
      }
      
      displayPublications(data);
    });
}

// Function to load upcoming events
function loadEvents() {
  supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true })
    .then(({ data, error }) => {
      if (error) {
        console.error('Error loading events:', error);
        return;
      }
      
      displayEvents(data);
    });
}

// Display functions for the data
function displayResearchHubs(hubs) {
  const container = document.getElementById('research-hubs-container');
  if (!container) return;
  
  let html = '<div class="research-hubs-grid">';
  
  hubs.forEach(hub => {
    html += `
      <div class="hub-card">
        <h3>${hub.name}</h3>
        <p class="hub-location"><i class="fas fa-map-marker-alt"></i> ${hub.country}</p>
        <p class="hub-focus"><strong>Focus:</strong> ${hub.focus_area}</p>
        <p class="hub-researchers"><i class="fas fa-users"></i> ${hub.researchers} researchers</p>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

function displayPublications(publications) {
  const container = document.getElementById('publications-container');
  if (!container) return;
  
  let html = '<div class="publications-list">';
  
  publications.forEach(pub => {
    html += `
      <div class="publication-item">
        <h3>${pub.title}</h3>
        <p class="publication-authors">${pub.authors}</p>
        <p class="publication-date">${formatDate(pub.publication_date)}</p>
        <p class="publication-citations"><i class="fas fa-quote-right"></i> ${pub.citations} citations</p>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

function displayEvents(events) {
  const container = document.getElementById('events-container');
  if (!container) return;
  
  let html = '<div class="events-timeline">';
  
  events.forEach(event => {
    html += `
      <div class="event-item">
        <div class="event-date">${formatDate(event.date)}</div>
        <div class="event-content">
          <h3>${event.title}</h3>
          <p class="event-location"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
          <p class="event-attendees"><i class="fas fa-users"></i> Expected attendees: ${event.attendees}</p>
        </div>
      </div>
    `;
  });
  
  html += '</div>';
  container.innerHTML = html;
}

// Helper function to format dates
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Initialize data loading when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load data from "database"
  loadResearchHubs();
  loadPublications();
  loadEvents();
  
  // Set up contact form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simulate form submission to database
      supabase
        .from('contact_submissions')
        .insert({ name, email, subject, message, submission_date: new Date().toISOString() })
        .then(({ data, error }) => {
          if (error) {
            alert('There was an error submitting your message. Please try again.');
            return;
          }
          
          alert('Thank you for your message! We will get back to you soon.');
          contactForm.reset();
        });
    });
  }
});
