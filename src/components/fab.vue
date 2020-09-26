 <template>
 <div>
        <v-speed-dial
            v-model="fab"
            :direction="direction"
            :open-on-hover="hover"
            :transition="transition">
            <template v-slot:activator>
                <v-btn
                v-model="fab"
                color="#5c0f2f"
                dark
                fab
                >
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else>mdi-account-circle</v-icon>
                </v-btn>
            </template>
            <v-btn
                fab
                dark
                small
                color="#0078FF"
                href="#"
            >
                <v-icon>fab fa-facebook</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="#db4a39"
                href="#"
            >
                <v-icon>fab fa-google-plus</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="#C13584"
                href="#"
            >
                <v-icon>fab fa-instagram</v-icon>
            </v-btn>
            </v-speed-dial>
</div>
</template>

<script>
    export default {
     data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: true,
      tabs: null,
      transition: 'slide-y-reverse-transition',
    }),

    mounted () {
        if (this.$vuetify.breakpoint.smAndDown) this.hover=false;
    },

    }
</script>

<style scoped>

</style>