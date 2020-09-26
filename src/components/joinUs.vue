<template>
  <div id="membership"><br><br><br>
     <v-container> 
  
  

        <v-row justify="center">
        
            <v-col cols="12" sm="10" md="6" order-sm="2" order-md="1" :class="{animateImage:notMobile}">
                <v-img src="../images/gym23.1-min.png" width="700"> </v-img>
            </v-col>

           
            <v-col cols="6" align-self="center" order-sm="1" :class="{animateTextFields:notMobile}">   
                 <v-row class="mb-10"> 
                     <v-col>
                         <h1 class="text-center">Became a Member</h1>
                     </v-col>
                 </v-row> 

                <v-row>
                <v-col v-for="n in labels1" :key="n" cols="12" sm="12" md="6">
                    <v-text-field color="#26C6DA"  :label="n" outlined></v-text-field>
                </v-col>
            </v-row>


            <v-row>
                <v-col v-for="n in labels2" :key="n" cols="12" sm="12" md="6">
                    <v-text-field color="#26C6DA" :label="n" outlined></v-text-field>
                </v-col>
            </v-row>

              <v-row justify="center">
               <v-col class="d-flex" cols="12" sm="12">
                <v-select
                color="#26C6DA"
                :items="items"
                label="Choose a membership plan"
                outlined
                ></v-select>
             </v-col>
            </v-row> 

            <v-row>
                <v-col cols="12" class="text-center">
                    <v-btn large color="#26C6DA">Submit</v-btn>
                </v-col>
            </v-row>
       
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
                 labels1:["First name", "Last name"],
                 labels2:["E-mail", "Phone number"],
                 items: ['Starter','Basic', 'Pro'],
                 notMobile:true,
              
             }
         },

         mounted () {
             let membershipPagedetection = document.getElementById('membership').id;
             eventBus.$on('send1', data => {
                 if(membershipPagedetection == data.id) {
                    this.animateMembershipPageImage;
                    this.animateMembershipPageTextFields;
                 }
                 
             });
           
             eventBus.$on('checkIfMobile', data => {
                 this.notMobile = data;
             });
             if(this.$vuetify.breakpoint.smAndDown) this.inputFiledHeight = 40;
         },

         computed: {
             animateMembershipPageImage() {
            if(this.notMobile)  return gsap.fromTo('.animateImage',{x:-300,opacity:0} ,{x:0,autoAlpha:1, duration:0.7, ease: "sine.inOut"}, );
              return 1;
             },

             animateMembershipPageTextFields() {
                if(this.notMobile) return gsap.fromTo('.animateTextFields',{y:-300,opacity:0 } ,{y:0,autoAlpha:1, duration:0.7,ease: "sine.inOut"});
                return 1;

             }
         },
    }
</script>

<style scoped>

 .animateImage {
     opacity: 0;
 }

 .animateTextFields {
     opacity: 0;
 }



</style>

