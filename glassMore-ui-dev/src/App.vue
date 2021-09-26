<template>
<div>
    <h1> molestiae exercitationem veniam adipisci, natus in rem? Expedita dolorum est ratione cupiditate perferendis sequi aut et dolor enim reiciendis.</h1>
    <button @click = "toggleModalState">
        打开弹窗
    </button>
    <gl-dialog v-model:visible="dialogVisible" :closeOnClickOverlay="closeOnClickOverlay" title="Tips">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quas recusandae quam odit, dignissimos fuga. Dolor odit accusamus, quaerat error ad dolorem ratione, quisquam repellat quasi consequatur, ut voluptatem atque!
    </gl-dialog>
</div>
</template>

<script>
    import glDialog from './components/gl-dialog.vue'
    import { ref } from 'vue'
    export default {
        setup () {
            const closeOnClickOverlay = ref(false)
            const dialogVisible = ref(false)
            const toggleModalState = () => {
                dialogVisible.value = !dialogVisible.value;
                console.log(dialogVisible.value)
            };
            return {
                closeOnClickOverlay,
                dialogVisible,
                toggleModalState
            }
        },
        components: {
            glDialog
        }
    }
</script>

<style>

</style>
