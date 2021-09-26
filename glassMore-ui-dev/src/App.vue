<template>
<div>
    <h1> molestiae exercitationem veniam adipisci, natus in rem? Expedita dolorum est ratione cupiditate perferendis sequi aut et dolor enim reiciendis.</h1>
    
    <button @click = "toggleModalState">
        打开弹窗
    </button>
    <gl-dialog v-if="modalOpen" @close = "toggleModalState" :title="警告">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quas recusandae quam odit, dignissimos fuga. Dolor odit accusamus, quaerat error ad dolorem ratione, quisquam repellat quasi consequatur, ut voluptatem atque!
    </gl-dialog>
</div>
</template>

<script>
    import glDialog from './components/gl-dialog.vue'
    export default {
        components: {
            glDialog
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
