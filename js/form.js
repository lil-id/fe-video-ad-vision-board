/**
 * Lead Form Management System
 * Handles form validation, submission, and lead data storage
 * Supports Google Sheets integration and localStorage fallback
 */

// Configuration
const CONFIG = {
    // Google Apps Script Web App URL (to be configured)
    GOOGLE_SCRIPT_URL: '', // Add your Google Apps Script Web App URL here
    USE_GOOGLE_SHEETS: false, // Set to true when Google Sheets is configured
    RATE_LIMIT_MS: 60000, // 1 minute between submissions from same browser
    LOCAL_STORAGE_KEY: 'aac_leads'
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        initForm();
    }
});

// ==================== FORM INITIALIZATION ====================
function initForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation
    const inputs = form.querySelectorAll('.form-input, .form-textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
}

// ==================== FORM VALIDATION ====================
function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    
    // Check if required field is empty
    if (field.hasAttribute('required') && value === '') {
        isValid = false;
    }
    
    // Email validation
    if (type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        isValid = emailRegex.test(value);
    }
    
    // Phone validation (basic)
    if (type === 'tel' && value !== '') {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        isValid = phoneRegex.test(value) && value.length >= 10;
    }
    
    // Update field state
    if (isValid) {
        field.classList.remove('error');
    } else {
        field.classList.add('error');
    }
    
    return isValid;
}

function validateForm(form) {
    const inputs = form.querySelectorAll('.form-input[required], .form-textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

// ==================== SPAM PROTECTION ====================
function checkHoneypot() {
    const honeypot = document.querySelector('input[name="website"]');
    return honeypot && honeypot.value === '';
}

function checkRateLimit() {
    const lastSubmission = localStorage.getItem('last_form_submission');
    if (lastSubmission) {
        const timeSince = Date.now() - parseInt(lastSubmission);
        if (timeSince < CONFIG.RATE_LIMIT_MS) {
            return false; // Too soon
        }
    }
    return true;
}

// ==================== FORM SUBMISSION ====================
async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const submitText = document.getElementById('submitText');
    const submitSpinner = document.getElementById('submitSpinner');
    const successMessage = document.getElementById('formSuccess');
    
    // Validate form
    if (!validateForm(form)) {
        alert('Mohon lengkapi semua field yang wajib diisi dengan benar.');
        return;
    }
    
    // Check honeypot
    if (!checkHoneypot()) {
        console.log('Spam detected (honeypot)');
        return;
    }
    
    // Check rate limit
    if (!checkRateLimit()) {
        alert('Mohon tunggu sebentar sebelum mengirim form lagi.');
        return;
    }
    
    // Disable submit button
    submitBtn.disabled = true;
    submitText.style.display = 'none';
    submitSpinner.style.display = 'inline-block';
    
    // Collect form data
    const formData = {
        timestamp: new Date().toISOString(),
        companyName: form.companyName.value.trim(),
        contactName: form.contactName.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        serviceInterest: form.serviceInterest.value || 'Tidak disebutkan',
        message: form.message.value.trim()
    };
    
    try {
        // Save to appropriate storage
        if (CONFIG.USE_GOOGLE_SHEETS && CONFIG.GOOGLE_SCRIPT_URL) {
            await saveToGoogleSheets(formData);
        } else {
            saveToLocalStorage(formData);
        }
        
        // Show success message
        successMessage.classList.add('show');
        
        // Reset form
        form.reset();
        
        // Update rate limit
        localStorage.setItem('last_form_submission', Date.now().toString());
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide success message after 10 seconds
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 10000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert('Maaf, terjadi kesalahan saat mengirim form. Silakan hubungi kami via telepon atau WhatsApp.');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitText.style.display = 'inline';
        submitSpinner.style.display = 'none';
    }
}

// ==================== GOOGLE SHEETS INTEGRATION ====================
async function saveToGoogleSheets(data) {
    if (!CONFIG.GOOGLE_SCRIPT_URL) {
        throw new Error('Google Sheets URL not configured');
    }
    
    const response = await fetch(CONFIG.GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires this
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    // Note: with no-cors, we can't read the response
    // Assume success if no error was thrown
    console.log('Data sent to Google Sheets');
    
    // Also save to localStorage as backup
    saveToLocalStorage(data);
}

// ==================== LOCAL STORAGE ====================
function saveToLocalStorage(data) {
    try {
        // Get existing leads
        const existingLeads = getLeadsFromStorage();
        
        // Add new lead
        existingLeads.push(data);
        
        // Save back to localStorage
        localStorage.setItem(CONFIG.LOCAL_STORAGE_KEY, JSON.stringify(existingLeads));
        
        console.log('Lead saved to localStorage:', data);
    } catch (error) {
        console.error('Error saving to localStorage:', error);
        throw error;
    }
}

function getLeadsFromStorage() {
    try {
        const leadsJson = localStorage.getItem(CONFIG.LOCAL_STORAGE_KEY);
        return leadsJson ? JSON.parse(leadsJson) : [];
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return [];
    }
}

// ==================== EXPORT FUNCTIONS ====================
// These functions can be used by admin panel to manage leads

function getAllLeads() {
    return getLeadsFromStorage();
}

function exportToCSV() {
    const leads = getLeadsFromStorage();
    
    if (leads.length === 0) {
        alert('Tidak ada data leads untuk di-export.');
        return;
    }
    
    // Create CSV content
    const headers = ['Timestamp', 'Nama Perusahaan', 'Nama Kontak', 'Email', 'Telepon', 'Layanan', 'Pesan'];
    let csv = headers.join(',') + '\n';
    
    leads.forEach(lead => {
        const row = [
            lead.timestamp,
            `"${lead.companyName}"`,
            `"${lead.contactName}"`,
            lead.email,
            lead.phone,
            `"${lead.serviceInterest}"`,
            `"${lead.message.replace(/"/g, '""')}"`  // Escape quotes
        ];
        csv += row.join(',') + '\n';
    });
    
    // Create download link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function clearAllLeads() {
    if (confirm('Apakah Anda yakin ingin menghapus semua data leads? Tindakan ini tidak bisa dibatalkan.')) {
        localStorage.removeItem(CONFIG.LOCAL_STORAGE_KEY);
        alert('Semua data leads telah dihapus.');
    }
}

// ==================== ADMIN CONSOLE FUNCTIONS ====================
// These functions can be accessed via browser console for admin purposes

window.AAC_Admin = {
    getAllLeads: getAllLeads,
    exportToCSV: exportToCSV,
    clearAllLeads: clearAllLeads,
    getLeadCount: () => getLeadsFromStorage().length,
    viewLatestLead: () => {
        const leads = getLeadsFromStorage();
        return leads.length > 0 ? leads[leads.length - 1] : null;
    }
};

// Log admin functions availability
console.log('Admin functions available via AAC_Admin object:');
console.log('- AAC_Admin.getAllLeads() - Get all leads');
console.log('- AAC_Admin.exportToCSV() - Export leads to CSV');
console.log('- AAC_Admin.getLeadCount() - Get total lead count');
console.log('- AAC_Admin.viewLatestLead() - View latest lead');
console.log('- AAC_Admin.clearAllLeads() - Clear all leads (use with caution!)');
