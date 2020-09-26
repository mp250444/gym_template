<template>
<div id="about"> <br><br><br><br>
   <h1 class="text-center"> About our services</h1>
    <v-container class="mt-12" id="about">
       <v-row>
          <v-col cols="12" :class="{aboutUs:notMobile}" sm=6 md=3 v-for="n in 4" :key="n">
        
        <div class="iconDiv d-flex justify-center mb-5"><v-icon class="icon" size="36">{{iconArray[n-1]}}</v-icon></div>
         <h3 class="d-flex justify-center mb-3">{{titleArray[n-1]}}</h3>
         <p class=" d-flex justify-center ml-10">{{contentArray[n-1]}}</p>
      
          </v-col> 
       </v-row> 
    </v-container>
    </div>
</template>

<script>

 import { gsap } from "gsap";
import { eventBus } from '../main';
    export default {
      data() {
         return {
             iconArray:['fas fa-award','fas fa-dumbbell','fas fa-clipboard-list','fas fa-users'],
             titleArray:["QUALITY SERVICE","SPACIOUS GYM","UNIQUE FITNESS PROGRAMS","GROUP CLASSES"],
             contentArray:["At our fitness studio, you can experience the best level of customer service.","Our gym has enough place for all kinds of workouts and a wide variety of equipment.","Our coaches have developed more than 50 fitness programs and workouts for you.","If you prefer training with friends, then our group classes have what you need."],
             notMobile:true,
         }
      },

      mounted () {

         let aboutPage = document.getElementById('about').id;
         eventBus.$on('send1', data=> {
             if(data.id == aboutPage) {
                this.animateAboutPage;
             }
         });

          eventBus.$on('checkIfMobile', data => {
                 this.notMobile = data;
             });
      },

      computed: {
         animateAboutPage() {
            if(this.notMobile) return gsap.fromTo(".aboutUs", {x:-200} , {x:0,autoAlpha:1,duration:0.5, stagger:0.1});
            return 1;
         }
      },
    }
</script>

<style scoped>
   body{
     padding:0;
     margin:0 ;
     font-family: sans-serif;
   }

   .aboutUs {
       opacity:0;
   }

    .iconDiv {
       position: relative;
       left: 50%;
       transform: translateX(-50%);
       width:90px;
       height: 90px;
      box-sizing: border-box;
      
      

    }

    .iconDiv i{
        margin: 0;
        padding:0;
        color:#5c0f2f;
        width: 100%;
        text-align: center;
        font-size:24px;
        text-transform: unset;
        z-index: 1;

    }

    .iconDiv::before {
       content:'';
       position: absolute;
       left:0;
       top: 0;
       width: 100%;
       height: 100%;
       border:none;
       border-top:2px solid #26C6DA;
       border-bottom:2px solid #26C6DA;
       border-radius: 10%;
       box-sizing:border-box;
       transform: scaleX(0);
       transform: rotate(45deg);
       transition:0.3s;

    }

    .iconDiv:hover::before {
        transform: scaleX(1);
    }

    .iconDiv:hover i{
       color:white;
    }

    .iconDiv::after {
       content:'';
       position: absolute;
       left:0;
       top: 0;
       width: 100%;
       height: 100%;
       border:none;
       border-right:2px solid #26C6DA;
       border-left:2px solid #26C6DA;
       border-radius: 10%;
       box-sizing:border-box;
       transform: scaleY(0);
       transform: rotate(45deg);
       transition:0.3s;

    }

    .iconDiv:hover::after {
        transform: scaleY(1);
        background: #26C6DA;
     
    }
    
</style>