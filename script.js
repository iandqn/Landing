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
            profilePic: "profile-picture-maria.png" // Asegúrate de tener esta imagen
        },
        {
            name: "Juan Pérez",
            location: "Desde Córdoba - hace 45 min",
            profilePic: "profile-picture-juan.png" // Asegúrate de tener esta imagen
        },
        {
            name: "Ana García",
            location: "Desde Buenos Aires - hace 30 min",
            profilePic: "profile-picture-ana.png" // Asegúrate de tener esta imagen
        },
        {
            name: "Luis Fernández",
            location: "Desde Mendoza - hace 2 horas",
            profilePic: "profile-picture-luis.png" // Asegúrate de tener esta imagen
        }
        // Añade más entradas si lo deseas
    ];

    let currentIndex = 0;
    const displayDuration = 5000; // 5 segundos de visualización
    const fadeDuration = 1000; // 1 segundo para fade in/out

    function showNotification() {
        const currentData = prizeNotifications[currentIndex];

        // Actualizar contenido
        notificationProfilePic.src = currentData.profilePic;
        notificationProfilePic.alt = `${currentData.name} profile picture`;
        notificationName.textContent = currentData.name;
        notificationLocation.textContent = currentData.location;

        // Mostrar notificación (fade in)
        notificationElement.classList.add('show');

        // Configurar un temporizador para ocultar la notificación después de displayDuration
        setTimeout(() => {
            notificationElement.classList.remove('show');
            // Después de que se oculte, preparar para la siguiente notificación
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % prizeNotifications.length; // Ciclo
                showNotification(); // Llamarse a sí misma para mostrar la siguiente
            }, fadeDuration); // Esperar a que el fade-out se complete antes de mostrar la siguiente
        }, displayDuration);
    }

    // Iniciar el ciclo de notificaciones después de un pequeño retraso inicial
    setTimeout(showNotification, 2000); // Empezar después de 2 segundos


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
        // Añade más testimonios aquí. Intenta que no sean demasiado largos.
    ];

    let currentTestimonialIndex = 0;
    const testimonialDisplayDuration = 4000; // 6 segundos de visualización
    const testimonialFadeDuration = 500; // 1 segundo para fade in/out

    function showNextTestimonial() {
        const currentTestimonial = testimonials[currentTestimonialIndex];

        // Ocultar antes de cambiar el contenido (para el efecto de fade)
        rotatingTestimonialElement.classList.remove('show');

        setTimeout(() => {
            // Actualizar contenido
            testimonialTextElement.textContent = currentTestimonial.text;
            testimonialAuthorElement.textContent = currentTestimonial.author;

            // Mostrar el nuevo testimonio (fade in)
            rotatingTestimonialElement.classList.add('show');

            // Preparar para el siguiente testimonio
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length; // Ciclo
        }, testimonialFadeDuration); // Espera a que el fade-out termine antes de cambiar y hacer fade-in

        // Configurar el temporizador para la próxima rotación
        setTimeout(showNextTestimonial, testimonialDisplayDuration + testimonialFadeDuration);
    }

    // Iniciar la rotación de testimonios después de un pequeño retraso inicial
    setTimeout(showNextTestimonial, 1000);
});
