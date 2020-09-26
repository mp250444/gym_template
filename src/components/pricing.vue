<template>
    <v-container  id="pricing">
        <div align="center" class="mb-10"><br><br><br>
        <h1>Choose Your Plan</h1>
         <hr class="mt-5 mb-7 ml-7 mr-7 divider1">
         <span>You can choose any membership plan that you like, but we recommend trying our workouts for yourself before buying.</span>
        </div>
   <v-row justify="center">
  <v-col cols="12" xl=7 class="d-flex flex-row flex-wrap">
    
      <v-card  width="300" height="600" color="#FAFAFA" flat  class="mx-auto mb-10"  :class="{card1:notMobile}">
         
           <v-card-text class="text-center">
               <p class="text--primary fontSize mt-5">
                   Starter</p>
                    <br>
                    <p class=" text--primary fontSize">
                   <sup>$</sup>19<sup class="smallerFont">/month</sup></p>
                    <hr  class="mt-10 ml-7 mr-7 divider">
                    <p class="text--primary mt-5">This plan is perfect if you are just beginning your workouts at FitTime.</p>
                    <span class="spanStyle">Open Gym</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7 "></v-divider>
                    <span class="spanStyle">Fitness</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7 "></v-divider>
                    <span class="spanStyle disabled">CrossFit</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <span class="spanStyle disabled">Yoga</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <span class="spanStyle disabled">Personal Trainer</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    
            
               <v-btn id="b1" large outlined  class="mt-5"><b>Buy now</b></v-btn>
          
           </v-card-text>
           
         
      </v-card>

      <v-card  width="300" height="600"  elevation="24"  class="mx-auto mb-10 text-center"  :class="{card2:notMobile}">
           <v-card-text >
               <p class="text--primary fontSize mt-5">
                   Basic</p>
                    <br>
                    <p class="text--primary fontSize">
                   <sup>$</sup>59<sup class="smallerFont">/month</sup></p>
              <!-- <v-divider  class="mt-10 ml-7 mr-7 divider"></v-divider> -->
              <hr  class="mt-10 ml-7 mr-7 divider">
              <p class="text--primary mt-5">The basic plan includes most popular services regularly offered at our gym.</p>
              <span class="spanStyle">Open Gym</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <span class="spanStyle">Fitness</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7 "></v-divider>
                    <span class="spanStyle">CrossFit</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <span class="spanStyle disabled">Yoga</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <span class="spanStyle disabled">Personal Trainer</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <v-btn large outlined class="mt-5 buttonStyle"><b>Buy now</b></v-btn>
           </v-card-text>

            
      </v-card>

      <v-card  width="300" height="600" color="#FAFAFA" flat  class="mx-auto mb-10 text-center" :class="{card3:notMobile}">
           <v-card-text>
               <p class="text--primary fontSize mt-5">
                   Pro</p>
                    <br>
                    <p class=" text--primary fontSize">
                   <sup>$</sup>99<sup class="smallerFont">/month</sup></p>
                 <hr  class="mt-10 ml-7 mr-7 divider">
                 <p class="text--primary mt-5">If you have some experience in training, then Pro plan is what you need.</p>
                 <span class="spanStyle">Open Gym</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7 "></v-divider>
                    <span class="spanStyle">Fitness</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7 "></v-divider>
                    <span class="spanStyle">CrossFit</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <span class="spanStyle">Yoga</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <span class="spanStyle">Personal Trainer</span>
                    <v-divider  class="mt-3 mb-3 ml-7 mr-7"></v-divider>
                    <v-btn large depressed outlined class="mt-5"><b>Buy now</b></v-btn>
           </v-card-text>
      </v-card>
      </v-col>
      </v-row>
    </v-container>
</template>

<script>

import { gsap } from "gsap";
import { eventBus } from '../main';
    export default {
        data() {
            return {
                notMobile: true,
            }
        },
        mounted () {
            let pricingPage = document.getElementById('pricing').id
            eventBus.$on('send1', data => {
               
             if(pricingPage == data.id) {
                  
                this.animateCard1;
                this.animateCard2;
                this.animateCard3;
             }
           });

            eventBus.$on('checkIfMobile', data => {
                 this.notMobile = data;
             });
        },

        computed: {
            animateCard1() {
                if(this.notMobile)
                return gsap.fromTo('.card1', {x:-500},{x:0,opacity:1,duration:0.5});
                return 1;
            },
              animateCard3() {
                  if(this.notMobile)
                   return gsap.fromTo('.card3', {x:+500},{x:0,opacity:1,duration:0.5,delay:0.5});
                   return 1;
            },
              animateCard2() {
                  if(this.notMobile)
                  return gsap.fromTo('.card2', {height:0},{height:600,opacity:1,duration:0.5,delay:1});
                  return 1;
            }   
        },
    }
</script>

<style scoped>
    .smallerFont {
        font-weight:1000;
        font-size:17px;
        color:grey;
        padding-left:3px;
    }

    .fontSize {
        font-size:40px;
        font-weight: 1000;
        
    }

    .divider {
      position: relative;
      border: none; 
      height: 2px;
      background-color:lightgray;
    
    }

    .spanStyle {
        font-size:20px; 
    }

    .divider1 {
      position: relative;
      width:50px;
      border: none; 
      height: 3px;
      background-color: darkgray;
    
    }

    .disabled {
        color:lightgray;
    }

  

   .v-btn {
       transition: all 0.2s ease-in-out;
       border-color:#26C6DA;
       border-width: 2px;
       color:#5c0f2f;
       } 
  .v-btn:hover{
      background-color:#26C6DA;
      color:white;
      
  }
.card1,.card2, .card3 {
     opacity: 0;;
}

</style>