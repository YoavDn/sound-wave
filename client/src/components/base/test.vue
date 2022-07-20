<!-- <template>
    <div class="slider">
        <div class="slider-bar" ref="bar">
            <div class="slider-handle" ref="handle" ></div>
            <div class="slider-fill"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "slider",

    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
             type: Number,
            default: 1,
        },
        value: Number,
        disabled: Boolean,
    },

    data() {
        return {
            isDragged: false,
            handleWidth:0,
            barWidth:0,
        }
    },
    mounted() {
        this.calcDimensions()
    },
        methods: {
            calcDimensions() {
                const {bar, handle} = this.refs
                console.log({bar, handle})
            },
        },
}

</script> -->

<!-- <template>
  <vue-slider v-model="value" />
</template>

<script>
import { reactive, toRefs } from 'vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  setup() {
    const data = reactive({ value: 0 })
    return toRefs(data)
  },
}
</script> -->