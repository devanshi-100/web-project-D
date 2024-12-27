document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
    document.getElementById('contact-form').reset();
});
