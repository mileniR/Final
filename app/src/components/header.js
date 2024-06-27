export default {
    template: `
        <header>
            <div class="logo">LOGO</div>
            <div class="right">            
                <p>Hola {{ nombre }} {{ apellido }}</p>
            </div>
        </header>
    `,
    props: {
        nombre: {
            type: String,
            required: true
        },
        apellido: {
            type: String,
            required: true
        }
    },
    name: 'Header'
}
