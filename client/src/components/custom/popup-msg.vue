
<template>
    <div v-if="msg" class="pop-up-msg shadow">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
import { eventBus } from "../../services/event-bus.js"
export default {
    data() {
        return {
            unsubscribe: null,
            msg: null
        }
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 2000)
        }
    },
    computed: {
        unmounted() {
            this.unsubscribe()
        },
    },
}
</script>
   