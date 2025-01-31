function toggleMenu() {
    const navList = document.getElementById("nav-list");
    navList.classList.toggle("active");
}

//Script para mostrar y ocultar el menú de navegación en dispositivos móviles
let lastScrollTop = 0;
const nav = document.getElementById('nav');
const aboutMeSection = document.getElementById('about-me');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollTop);
    const aboutMeOffsetTop = aboutMeSection.offsetTop;
    console.log(aboutMeOffsetTop);

    if (scrollTop > lastScrollTop && scrollTop >= aboutMeOffsetTop) {
        // Scroll hacia abajo y se ha llegado a la sección about-me - Ocultar la barra de navegación
        console.log(`scrollTop: ${scrollTop}`);
        console.log(`lastScrol: ${lastScrollTop}`);
        console.log(`aboutmeSectio: ${aboutMeOffsetTop}`);
        nav.style.top = '-80px'; // Ajusta según la altura de tu barra de navegación
    } else {
        // Scroll hacia arriba o aún no se ha llegado a la sección about-me - Mostrar la barra de navegación
        nav.style.top = '0';
    }
    lastScrollTop = scrollTop;
});

//Script para enviar el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtén los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envía el formulario usando EmailJS
    emailjs.send('service_ie5bw5i', 'template_0a2mebd', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    });
});