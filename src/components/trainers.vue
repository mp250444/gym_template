<template>
<div id="employees">
  <br>
  <br>
  <br>
  <div :class="{employees:notMobile}">
      <h1 align="center">Our Employees</h1>
    <v-sheet class="mx-auto mt-10" max-width="1100" color="#5c0f2f"  >
        
        <v-slide-group show-arrows center-active dark>
           <v-slide-item
             v-for="n in trainerImages"
             :key="n.id"
             v-slot:default="{active,toggle}"> 
             <v-card
             raised
             :color="active ? '#26C6DA' : '#FAFAFA'"
            class="ma-4 putInBack"
            max-height="500"
            max-width="400"
            @click="toggle">
                    <v-img
                        :src="n.icon" :width="w"
                       aspect-ratio=1></v-img>

                    <v-card-title class="black--text">
                      {{n.firstName}} {{n.lastName}}
                    </v-card-title>

                    <v-card-subtitle class="black--text">
                    {{n.expertise}}
                    </v-card-subtitle>
                    
                    <v-card-actions >
                     
                      <fab class="alignbutton"></fab>
                    </v-card-actions>

             </v-card>
        
           </v-slide-item>
        </v-slide-group>
    </v-sheet>
  </div>
</div>
</template>

<script>
import { gsap } from "gsap";
import { eventBus } from '../main';
import fab from './fab.vue';
    export default {
        data() {
            return {
               trainerImages:[
                    {  icon: require('@/images/coach1.jpeg'),id:0,firstName:"Tyrone", lastName:"Williams",expertise:"Athlete Expert"},
                    {  icon: require('@/images/coach2.jpeg'),id:1,firstName:"Kiara", lastName:"Davis",expertise:"Athlete Expert"},
                    {  icon: require('@/images/coach3.jpeg'),id:2,firstName:"Alisha", lastName:"Kim",expertise:"Body Building Expert"},
                    {  icon: require('@/images/coach4.jpg'), id:3,firstName:"Molly", lastName:"Jeffeerson",expertise:"Fitnes Trainer"},
                    // {  icon: require('@/images/coach5.jpg'),id:4,firstName:"Jake", lastName:"Tucker",expertise:"Expert for bodyweight exercises"},
                    {  icon: require('@/images/coach9.jpg'),id:5,firstName:"Scott", lastName:"Russell",expertise:"Body Building Expert"},
                    {  icon: require('@/images/coach7.jpg'), id:6,firstName:"Dustin", lastName:"Matthews",expertise:"CrossFit Trainer"},
                    {  icon: require('@/images/coach8.jpg'),id:7,firstName:"Harold", lastName:"Lin",expertise:"Condition Expert"},
                   
             ],
             w:'',
             notMobile:true,

            }
        },

          components: {
                 fab
             },

             mounted () {
                 let employeesPage = document.getElementById('employees').id
                  
                   eventBus.$on('send1', data=> {
           
                     if(employeesPage == data.id) {
                        this.animateEmployeesPage;
                     }
                      
                   });
                   eventBus.$on('checkIfMobile', data => {
                      this.notMobile = data;
                    });
                   this.w = (this.$vuetify.breakpoint.mdAndDown) ? '200' :'300'
               
            },

            computed: {
              animateEmployeesPage() {
                if(this.notMobile){
                let startAnime = true;
                eventBus.$emit('startAccomplishmentsAnime', startAnime)
                return gsap.fromTo('.employees', {x:-500, autoAlpha: 0},{x:0,autoAlpha:1,duration:1, ease: "power3.inOut"})
                }
                else {
                 return 1;
                }
              }
            },
    }
</script>

<style scoped>
   .alignbutton{
      margin-left:80%;
      margin-right: auto;   
   }

 .employees {
  opacity: 0;
 }
</style>