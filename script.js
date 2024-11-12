function scrollToSection(section) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
// script.js

function fetchEvents() {
    fetch('http://localhost:3000/api/evens')
        .then(response => response.json())
        .then(data => {
            const eventsList = document.querySelector('.events ul');
            eventsList.innerHTML = ''; // Clear existing events
            data.forEach(event => {
                const li = document.createElement('li');
                li.textContent = `${event.name} - Date: ${event.date}`;
                eventsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching events:', error));
}

// Call the function to load events on page load
document.addEventListener('DOMContentLoaded', fetchEvents);
function scrollToSection(section) {
    const element = document.getElementById(section);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

async function getDirections() {
    const origin = document.getElementById('origin').value; // You need an input for origin
    const destination = document.getElementById('destination').value; // You need an input for destination

    const response = await fetch('/api/directions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ origin, destination }),
    });

    if (response.ok) {
        const data = await response.json();
        console.log(data); // Display or use the directions data
    } else {
        console.error('Failed to fetch directions');
    }
}

