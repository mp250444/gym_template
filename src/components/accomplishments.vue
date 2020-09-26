// accomplishments
//https://github.com/Leocardoso94/animated-number-vue
<template>
    
       <v-container :class="{accomplishments:notMobile}">
         
           <v-row justify="center">
               <v-col cols="3" sm="3" md="1" xl="1" class="flex-wrap ml-10 mr-10">
                  
                   <animated-number :value="value" :duration="1000" :delay="1500" class="number" :formatValue="format"></animated-number>
                   <h6 class="sub">CLIENTS</h6>
               </v-col>

                <v-col cols="3" sm="3" md="1" xl="1" class="flex-wrap ml-10 mr-10">
              
                  <animated-number :value="value1" :duration="1000" :delay="1500" class="number" :formatValue="format"></animated-number>
                   <h6 class="sub">COACHES</h6>
               </v-col>

                <v-col cols="3" sm="3" md="1" xl="1" class="flex-wrap  ml-10 mr-10">
                    <animated-number :value="value2" :duration="1000" :delay="1500" class="number" :formatValue="format"></animated-number>
               
                   <h6 class="sub">AWARDS</h6>
               </v-col>

                <v-col cols="3" sm="3" md="1" xl="1" class="flex-wrap ml-10 mr-10">
                    <animated-number :value="value3" :duration="1000" :delay="1500" class="number" :formatValue="format"></animated-number>
                 
                   <h6 class="sub">GROUPS</h6>
               </v-col>
               
           </v-row>

       </v-container>


</template>

<script>
import { gsap } from "gsap";
import { eventBus } from '../main';
import AnimatedNumber from 'animated-number-vue';
    export default {

        data() {
            return {
                value: 0,
                value1:0,
                value2:0,
                value3:0,
                notMobile:true,
               
            }
        },

        methods: {
            format(value) {
                 return value.toFixed(0)
            },
          
        },

        mounted () {
            
              
                   eventBus.$on('startAccomplishmentsAnime', data=> {
                       
                       if(data) this.animateAccomplishmentsPage; 
                       this.value = 130;
                       this.value1 = 18;
                       this.value2 = 27;
                       this.value3= 12;
                       
                   });

                 eventBus.$on('checkIfMobile', data => {
                    this.notMobile = data;
                       this.value = 130;
                       this.value1 = 18;
                       this.value2 = 27;
                       this.value3= 12;
                     });
            },

            computed: {
                animateAccomplishmentsPage() {
                    if(this.notMobile)
                    return gsap.fromTo('.accomplishments', {y:+200},{y:0,opacity:1,duration:0.7,delay:0.7});
                    return 1;
                    
                   
                }
            },
     
            components: {
            AnimatedNumber
         },

    }
</script>

<style scoped>
 
   .number {
       font-size:55px;
       font-family:fantasy;
       color:#333333;
      
   }

   .sub {
     font-size: 20px;
     font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
     color:grey;
     line-height: 2; 
   }
  .accomplishments{
      opacity: 0;
  }
 
</style>