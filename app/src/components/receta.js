export default {
    template: `
        <div class="recipe" id="resultado">
            <div v-if="receta">
                <h2>Felicidades, has preparado un {{ receta.nombre }}!</h2>
                <div class="ingredientes">
                    <p>Ingredientes:</p>
                    <ul>
                        <li v-for="ingrediente in receta.ingredientes" :key="ingrediente">{{ ingrediente }}</li>
                    </ul>
                </div>
                <img :src="receta.imagen" alt="Platillo">
            </div>
            <div v-else>
                <p>No hay resultados</p>
            </div>
        </div>
    `,
    props: {
        receta: {
            type: Object,
            required: false
        }
    },
    name: 'Receta'
}
