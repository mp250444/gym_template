<template>
    <div>
      <v-overlay :value="overlay" color="white" dark opacity="1">         
    <v-progress-circular
      :size="100"
      :width="10"
      color="#26C6DA"
      indeterminate
    ></v-progress-circular>
      </v-overlay>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                overlay: false,
            }
        },

        mounted () {
        
            setTimeout(this.closeOverlay, 1500);
        },

        methods: {
            closeOverlay() {
                this.overlay = false;
            }
        },
    }
</script>

<style scoped>



</style>