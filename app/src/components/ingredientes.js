export default {
    template: `
        <div class="ingredients">
            <h1>Selecciona tus Ingredientes</h1>
            <div id="ingredientes">
                <label v-for="ingrediente in ingredientes" :key="ingrediente">
                    <input type="checkbox" :value="ingrediente" v-model="seleccionados"> {{ ingrediente }}
                </label>
            </div>
        </div>
    `,
    props: {
        ingredientes: {
            type: Array,
            required: true
        },
        seleccionados: {
            type: Array,
            required: true
        }
    },
    watch: {
        seleccionados: {
            handler(newVal) {
                this.$emit('update:seleccionados', newVal);
            },
            deep: true
        }
    },
    name: 'Ingredientes'
}
