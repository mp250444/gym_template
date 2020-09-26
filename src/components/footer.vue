<template>
    <v-footer dark padless>
        <v-card class="flex" flat tile color="#5c0f2f" :height=h>
            <v-card-title>
                <strong class="subheading" :style="{fontSize: fontSize}">Get connected with us on social networks!</strong>
                  
                <v-spacer></v-spacer>
                <v-btn large
                v-for="icon in icons"
                :key="icon"
                class="mx-2"
                dark 
                icon>
                <v-icon id="icon" :size="iconSize">{{ icon }}</v-icon>
                </v-btn>
            </v-card-title>
              <v-card-text>
                  <v-row class="justify-center">
                      <v-col cols="10" sm="3" md="2" class="text-center">
                          <p :style="{fontSize: fontSize}"><b>WORKING HOURS</b></p>
                          <p :style="{fontSize: fontSize}">Mon-Fri: 8am – 7pm<br>
                          Sat-Sun: 9am – 5pm</p></v-col>
                      <v-col cols="10" sm="3" md="2"  class="text-center"> 
                          <p :style="{fontSize: fontSize}"><b>ADDRESS</b></p>
                          <p :style="{fontSize: fontSize}">8439 Pierce Court<br>
                          Sacramento, CA 95820</p>
                      </v-col>
                      <v-col cols="10" sm="3" md="2"  class="text-center">
                          <p :style="{fontSize: fontSize}"><b>GET IN TOUCH</b></p>
                          <p :style="{fontSize: fontSize}">Phone1-800-123-1234<br>
                          E-MailInfo@demolink.org</p></v-col>
                  </v-row>
                    <v-row justify="center"> {{ new Date().getFullYear() }} — <strong :style="{fontSize: fontSize}">all rights resevred</strong></v-row>
              </v-card-text>
          

        </v-card>
    </v-footer>

    
</template>

<script>
    export default {
        data() {
            return {
                h:'',
                icons:[
                    'fab fa-facebook',
                    'fab fa-twitter',
                    'fab fa-google-plus',
                    'fab fa-linkedin',
                    'fab fa-instagram',

                ],
                fontSize:'16px',
                iconSize:"30",
            }
        },
        mounted () {
        this.h = (this.$vuetify.breakpoint.smAndDown)?'600px':'300px';
        this.fontSize = (this.$vuetify.breakpoint.smAndDown) ?'12px':"16px";
        this.iconSize = (this.$vuetify.breakpoint.smAndDown) ? '20' : '30'; 
            window.addEventListener('resize', this.startResize)
        },
        destroyed () {
             window.removeEventListener('resize', this.startResize);
        },

        methods: {
             startResize() {
                let windowWidth = window.innerWidth;
              this.h = (windowWidth < 600)? "630px" : "300px"; 
            
            }
        },
       
    }
</script>

<style scoped>
   #icon:hover {
     color:#26C6DA;
   }

   .alignText {
       text-align:left !important;
   }
</style>