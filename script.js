document.addEventListener('DOMContentLoaded', () => {
    const consultationForm = document.getElementById('consultationForm');
    const formFeedback = document.getElementById('formFeedback');

    if (consultationForm) {
        consultationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';

            const name = document.getElementById('clientName').value.trim();
            const email = document.getElementById('clientEmail').value.trim();
            const needs = document.getElementById('securityNeeds').value.trim();

            if (!name || !email || !needs) {
                formFeedback.textContent = 'All fields are required.';
                formFeedback.classList.add('error');
                return;
            }

            // Client-side execution simulated placeholder
            formFeedback.textContent = 'Thank you. Your consultation request has been received.';
            formFeedback.classList.add('success');
            consultationForm.reset();
        });
    }
});