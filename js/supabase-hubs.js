// Supabase Client Initialization
// This client will automatically pick up NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
// from the environment variables set in Vercel.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// The Supabase URL and Anon Key are expected to be set as environment variables
// NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseUrl = 'https://vrfyjirddfdnwuffzqhb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZnlqaXJkZGZkbnd1ZmZ6cWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5MDYwNjMsImV4cCI6MjA3NTQ4MjA2M30.glgJwI2yIqUFG8ZtWJk2esxGdXw6nFp5eQ8aANbRAvE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Fetches the list of global research hubs from the Supabase database
 * and dynamically renders them on the website.
 */
async function loadGlobalHubs() {
    const hubsContainer = document.getElementById('global-hubs-container');
    if (!hubsContainer) return;

    hubsContainer.innerHTML = '<p class="loading-message">Loading Global Research Hubs...</p>';

    try {
        const { data: hubs, error } = await supabase
            .from('global_hubs')
            .select('*')
            .order('name', { ascending: true });

        if (error) {
            console.error('Error fetching global hubs:', error);
            hubsContainer.innerHTML = '<p class="error-message">Error loading hubs. Please check the console for details.</p>';
            return;
        }

        if (hubs.length === 0) {
            hubsContainer.innerHTML = '<p class="no-data-message">No global hubs found in the database. Please ensure data is uploaded.</p>';
            return;
        }

        hubsContainer.innerHTML = ''; // Clear loading message

        hubs.forEach(hub => {
            const hubCard = document.createElement('div');
            hubCard.className = 'hub-card animate-on-scroll';
            
            const specializationList = hub.specialization_areas ? 
                hub.specialization_areas.split(',').map(s => `<span class="feature">${s.trim()}</span>`).join('') : 
                '';

            hubCard.innerHTML = `
                <h3>${hub.name}</h3>
                <p class="hub-location"><i class="fas fa-map-marker-alt"></i> ${hub.country}</p>
                <div class="hub-details">
                    <p><i class="fas fa-envelope"></i> <a href="mailto:${hub.contact_email}">${hub.contact_email}</a></p>
                    <p><i class="fas fa-globe"></i> <a href="${hub.website}" target="_blank">${hub.website}</a></p>
                </div>
                <div class="hub-specializations">
                    ${specializationList}
                </div>
            `;
            hubsContainer.appendChild(hubCard);
        });

    } catch (e) {
        console.error('Unexpected error in loadGlobalHubs:', e);
        hubsContainer.innerHTML = '<p class="error-message">An unexpected error occurred during data fetching.</p>';
    }
}

// Attach the function to the window object for easy access
window.loadGlobalHubs = loadGlobalHubs;

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadGlobalHubs);
