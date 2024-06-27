import Header from './components/header.js';
import Ingredientes from './components/ingredientes.js';
import Receta from './components/receta.js';
import Servicios from './services/api.js';

var app = new Vue({
    el: '#app',
    data: {
        myNombre: 'Mileni',
        myApellido: 'Reyes',
        ingredientes: [],
        seleccionados: [],
        receta: null,
        recetas: []
    },
    components: {
        Header,
        Ingredientes,
        Receta
    },
    methods: {
        async fetchData() {
            const servicio = new Servicios();
            servicio.fetchData((error, response) => {
                if (error) {
                    console.error('Error al obtener datos:', error);
                } else {
                    this.ingredientes = response.ingredientes;
                    this.recetas = response.recetas;
                }
            });
        },
        cocinar() {
            this.receta = this.verificarReceta(this.seleccionados);
        },
        verificarReceta(ingredientes) {
            for (let receta of this.recetas) {
                let contieneTodosLosIngredientes = receta.ingredientes.every(i => ingredientes.includes(i));
                if (contieneTodosLosIngredientes) {
                    return receta;
                }
            }
            return null;
        }
    },
    mounted() {
        this.fetchData();
    },
    template: `
        <div>
            <Header :nombre="myNombre" :apellido="myApellido" />
            <div class="container">
                <Ingredientes :ingredientes="ingredientes" :seleccionados.sync="seleccionados" />
                <Receta :receta="receta" />
            </div>
            <button @click="cocinar">Cocinar</button>
        </div>
    `
});
