document.addEventListener('DOMContentLoaded', () => {
    const notificationElement = document.getElementById('paidPrizeNotification');
    const notificationProfilePic = document.getElementById('notificationProfilePic');
    const notificationName = document.getElementById('notificationName');
    const notificationPrize = document.getElementById('notificationPrize');
    const notificationLocation = document.getElementById('notificationLocation');

    // Array of prize notifications
    const prizeNotifications = [
        {
            name: "María López",
            location: "Desde Rosario - hace 1 hora",
            profilePic: "profile-picture-maria.png" // Make sure you have this image
        },
        {
            name: "Juan Pérez",
            location: "Desde Córdoba - hace 45 min",
            profilePic: "profile-picture-juan.png" // Make sure you have this image
        },
        {
            name: "Ana García",
            location: "Desde Buenos Aires - hace 30 min",
            profilePic: "profile-picture-ana.png" // Make sure you have this image
        },
        {
            name: "Luis Fernández",
            location: "Desde Mendoza - hace 2 horas",
            profilePic: "profile-picture-luis.png" // Make sure you have this image
        }
        // Add more entries as needed
    ];

    let currentIndex = 0;
    const displayDuration = 5000; // 5 seconds display
    const fadeDuration = 1000; // 1 second fade in/out

    function showNotification() {
        const currentData = prizeNotifications[currentIndex];

        // Update content
        notificationProfilePic.src = currentData.profilePic;
        notificationProfilePic.alt = `${currentData.name} profile picture`;
        notificationName.textContent = currentData.name;
        // The prize text remains constant, but you could make it dynamic too if needed
        notificationLocation.textContent = currentData.location;

        // Show notification (fade in)
        notificationElement.classList.add('show');

        // Set a timeout to hide the notification after displayDuration
        setTimeout(() => {
            notificationElement.classList.remove('show');
            // After fading out, prepare for the next notification
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % prizeNotifications.length; // Cycle through
                showNotification(); // Call itself to show the next one
            }, fadeDuration); // Wait for fade-out to complete before showing next
        }, displayDuration);
    }

    // Start the notification cycle after a short delay
    // This delay prevents it from appearing immediately on page load,
    // giving the user a moment to see the main content.
    setTimeout(showNotification, 2000); // Start after 2 seconds
});