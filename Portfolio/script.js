document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For demonstration purposes, we'll just log the data
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

               
        form.reset();

        
        alert('Thank you for your message!');
    });
});
