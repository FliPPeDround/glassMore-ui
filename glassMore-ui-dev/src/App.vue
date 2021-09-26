<template>
<div>
    <h1> molestiae exercitationem veniam adipisci, natus in rem? Expedita dolorum est ratione cupiditate perferendis sequi aut et dolor enim reiciendis.</h1>
    <gl-dialog>
        Lorem ipsum dolor nisi?
    </gl-dialog>
    <button @click = "toggleModalState">
        打开弹窗
    </button>
    <gl-modal v-if="modalOpen" @close = "toggleModalState">
    </gl-modal>
</div>
</template>

<script>
    import glModal from './components/gl-modal.vue'
    export default {
        components: {
            glModal
        },
        data: () => ({
            modalOpen: false
        }),
        methods: {
            toggleModalState() {
                this.modalOpen = !this.modalOpen;
            }
        }
    }
</script>

<style>

</style>
