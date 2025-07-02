// public/your-landing-id/script.js (Modificado)

// La función trackWhatsAppClick original se elimina de aquí,
// ya que la nueva lógica de Firebase la maneja directamente en index.html.

document.addEventListener('DOMContentLoaded', () => {
    // Lógica para la Notificación de Premios Pagados (inferior izquierda)
    const notificationElement = document.getElementById('paidPrizeNotification');
    const notificationProfilePic = document.getElementById('notificationProfilePic');
    const notificationName = document.getElementById('notificationName');
    const notificationPrize = document.getElementById('notificationPrize');
    const notificationLocation = document.getElementById('notificationLocation');

    // Array de notificaciones de premios (puedes ajustar los nombres de las imágenes)
    const prizeNotifications = [
        {
            name: "María López",
            location: "Desde Rosario - hace 1 hora",
            profilePic: "profile-picture.png" // Ruta relativa si está en la misma carpeta
        },
        {
            name: "Juan Pérez",
            location: "Desde Córdoba - hace 45 min",
            profilePic: "profile-picture.png" // Ruta relativa
        },
        {
            name: "Ana García",
            location: "Desde Buenos Aires - hace 30 min",
            profilePic: "profile-picture.png" // Ruta relativa
        },
        {
            name: "Luis Fernández",
            location: "Desde Mendoza - hace 2 horas",
            profilePic: "profile-picture.png" // Ruta relativa
        }
    ];

    let currentIndex = 0;
    const displayDuration = 5000;
    const fadeDuration = 1000;

    function showNotification() {
        const currentData = prizeNotifications[currentIndex];

        notificationProfilePic.src = currentData.profilePic;
        notificationProfilePic.alt = `${currentData.name} profile picture`;
        notificationName.textContent = currentData.name;
        notificationLocation.textContent = currentData.location;

        notificationElement.classList.add('show');

        setTimeout(() => {
            notificationElement.classList.remove('show');
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % prizeNotifications.length;
                showNotification();
            }, fadeDuration);
        }, displayDuration);
    }

    setTimeout(showNotification, 2000);

    // Lógica para los Testimonios Rotatorios (en el medio de la página)
    const rotatingTestimonialElement = document.getElementById('rotatingTestimonial');
    const testimonialTextElement = document.getElementById('testimonialText');
    const testimonialAuthorElement = document.getElementById('testimonialAuthor');

    const testimonials = [
        {
            text: "¡Súper recomendable! Cobré mis ganancias al instante, sin vueltas.",
            author: "- Sofía M."
        },
        {
            text: "La mejor plataforma que probé, premios reales y soporte 24/7. Confianza total.",
            author: "- Carlos R."
        },
        {
            text: "Era escéptica, pero aquí realmente se gana. ¡Feliz con mis primeros retiros!",
            author: "- Laura V."
        },
        {
            text: "Excelente servicio al cliente y las promociones son increíbles. ¡Muy satisfecho!",
            author: "- Martín G."
        }
    ];

    let currentTestimonialIndex = 0;
    const testimonialDisplayDuration = 3000;
    const testimonialFadeDuration = 400;

    function showNextTestimonial() {
        const currentTestimonial = testimonials[currentTestimonialIndex];

        rotatingTestimonialElement.classList.remove('show');

        setTimeout(() => {
            testimonialTextElement.textContent = currentTestimonial.text;
            testimonialAuthorElement.textContent = currentTestimonial.author;

            rotatingTestimonialElement.classList.add('show');

            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
        }, testimonialFadeDuration);

        setTimeout(showNextTestimonial, testimonialDisplayDuration + testimonialFadeDuration);
    }

    setTimeout(showNextTestimonial, 1000);
});
