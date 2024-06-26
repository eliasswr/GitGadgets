import './Footer.css'

function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}


function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
    )
}


function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
    )
}
function MailIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}


function MapPinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}


function PhoneIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}

const Footer = () => {
    return (
        <footer className="futer">
            <div className="futer-contenedor">
                <div className="empresa-contenedor">
                    <h3 className="titulo">JARVIS INDUSTRY</h3>
                    <p className="texto-empresa">
                    En Jarvis, combinamos componentes de PC de primera calidad con asesoramiento personalizado 
                    gracias a nuestra avanzada inteligencia artificial. Somos tu socio confiable para impulsar 
                    tu experiencia tecnológica al siguiente nivel.
                    </p>
                </div>
                <div className="redes-contenedor">
                    <h3 className="titulo" id='siguenos'>Síguenos</h3>
                    <div className="redes">
                        <a href="#" className="facebook">
                            <FacebookIcon />
                        </a>
                        <a href="#" className="Twitter">
                            <TwitterIcon />
                        </a>
                        <a href="https://www.instagram.com/eliias_wr/" className="Instagram">
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
                <div className="contacto-container">
                    <h3 className="titulo">Contacto</h3>
                    <div className="contacto">
                        <p className="direccio-contenedor">
                            <MapPinIcon className="direccion" />
                            Calle Falsa 123, Ciudad Ejemplo
                        </p>
                        <p className="telefono-contenedor">
                            <PhoneIcon className="telefono" />
                            +1 (555) 123-4567
                        </p>
                        <p className="mail-contenedor">
                            <MailIcon className="telefono" />
                            info@example.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p className="texto-copyright">&copy; 2024 Nuestra Empresa. Todos los derechos reservados.</p>
                <p className="text-sm text-muted-foreground">
                    Desarrollado por{" "}
                    <a href="#" className="equipo">
                        Nuestro Equipo
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer