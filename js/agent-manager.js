/**
 * Agent Manager - Multi-Agent WhatsApp System
 * Handles agent detection, WhatsApp routing, and link management
 */

// Cache key for sessionStorage
const AGENT_CACHE_KEY = 'current_agent_data';

/**
 * Extract agent slug from current URL path
 * @returns {string} - Agent slug or 'root' for main site
 */
function getAgentSlugFromURL() {
    const pathname = window.location.pathname;

    // Remove leading/trailing slashes
    const cleanPath = pathname.replace(/^\/+|\/+$/g, '');

    // Empty path = root
    if (!cleanPath) {
        return 'root';
    }

    // Get first segment
    const segments = cleanPath.split('/');
    const firstSegment = segments[0];

    // Check if first segment is an HTML file (root page like /index.html)
    if (firstSegment.endsWith('.html')) {
        return 'root';
    }

    // Check if first segment is a known static folder (not an agent)
    const staticPaths = ['css', 'js', 'images', 'database', 'api'];
    if (staticPaths.includes(firstSegment)) {
        return 'root';
    }

    // First segment is the agent slug (e.g., /gouv/ -> 'gouv', /u/catalogue.html -> 'u')
    return firstSegment;
}

/**
 * Check if current URL is root (main site)
 * @returns {boolean}
 */
function isRootURL() {
    return getAgentSlugFromURL() === 'root';
}

/**
 * Load agent data from Supabase by slug
 * @param {string} slug - Agent slug to lookup
 * @returns {Promise<Object|null>} - Agent data or null if not found
 */
async function loadAgentData(slug) {
    try {
        // Check cache first
        const cached = sessionStorage.getItem(AGENT_CACHE_KEY);
        if (cached) {
            const agentData = JSON.parse(cached);
            if (agentData.slug === slug) {
                return agentData;
            }
        }

        // Query Supabase for agent
        const { data, error } = await supabase
            .from('agents')
            .select('*')
            .eq('slug', slug)
            .eq('is_active', true)
            .single();

        if (error) {
            console.error('Error loading agent:', error);
            return null;
        }

        if (data) {
            // Cache the result
            sessionStorage.setItem(AGENT_CACHE_KEY, JSON.stringify(data));
            return data;
        }

        return null;
    } catch (error) {
        console.error('Error in loadAgentData:', error);
        return null;
    }
}

/**
 * Get current agent's WhatsApp number
 * @returns {string|null} - WhatsApp number or null
 */
function getAgentWhatsApp() {
    try {
        const cached = sessionStorage.getItem(AGENT_CACHE_KEY);
        if (cached) {
            const agentData = JSON.parse(cached);
            // Strip all non-numeric characters for wa.me format
            return agentData.whatsapp_number.replace(/\D/g, '');
        }
        return null;
    } catch (error) {
        console.error('Error getting agent WhatsApp:', error);
        return null;
    }
}

/**
 * Get current agent's name
 * @returns {string|null} - Agent name or null
 */
function getAgentName() {
    try {
        const cached = sessionStorage.getItem(AGENT_CACHE_KEY);
        if (cached) {
            const agentData = JSON.parse(cached);
            return agentData.name;
        }
        return null;
    } catch (error) {
        console.error('Error getting agent name:', error);
        return null;
    }
}

/**
 * Open WhatsApp with agent's number and optional message
 * @param {string} message - Optional pre-filled message
 */
function openAgentWhatsApp(message = '') {
    const whatsappNumber = getAgentWhatsApp();
    if (!whatsappNumber) {
        alert('Erreur: Numéro WhatsApp non disponible');
        return;
    }

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

/**
 * Update all internal navigation links to preserve agent slug
 * Converts relative links to include agent slug prefix
 */
function updateAllLinks() {
    const slug = getAgentSlugFromURL();

    // Skip if root (no prefix needed)
    if (slug === 'root') {
        return;
    }

    // Get all anchor tags
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        const href = link.getAttribute('href');

        // Skip external links, anchors, javascript, and already prefixed links
        if (!href ||
            href.startsWith('http') ||
            href.startsWith('//') ||
            href.startsWith('#') ||
            href.startsWith('javascript:') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.startsWith(`/${slug}/`)) {
            return;
        }

        // Only update relative links to HTML pages
        if (href.endsWith('.html') || href === '/' || href === 'index.html') {
            // Remove leading slash if present
            const cleanHref = href.startsWith('/') ? href.substring(1) : href;

            // Add slug prefix
            const newHref = `/${slug}/${cleanHref}`;
            link.setAttribute('href', newHref);
        }
    });
}

/**
 * Initialize agent system on page load
 * Detects agent, loads data, handles invalid agents
 */
async function initializeAgentSystem() {
    try {
        const slug = getAgentSlugFromURL();
        console.log('Detected agent slug:', slug);

        // Load agent data
        const agentData = await loadAgentData(slug);

        if (!agentData) {
            console.warn('Agent not found or inactive:', slug);

            // Only redirect if not already on root
            if (slug !== 'root') {
                alert('Agent non trouvé ou inactif. Redirection vers la page principale...');
                window.location.href = '/';
                return;
            }
        }

        // Update all links to preserve slug
        updateAllLinks();

        console.log('Agent system initialized:', agentData);
    } catch (error) {
        console.error('Error initializing agent system:', error);
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAgentSystem);
} else {
    // DOM already loaded
    initializeAgentSystem();
}
