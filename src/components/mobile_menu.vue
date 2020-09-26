<template>
    <v-sheet
    height="100%"
    class="overflow-hidden">

    <v-navigation-drawer
    v-model="drawer"
    fixed
    temporary>
           <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>Title</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

         <v-divider></v-divider>
        <v-list dense nav class="text-center">
           <v-list-item
           class="makeUpClass"
           v-for="(item,index) in items"
           :key="item.title"
           link
           :href="item.href"
           @click="activeLink(index)">
               
        

           <v-list-item-content>
               <v-list-item-title>{{item.title}}</v-list-item-title>
           </v-list-item-content>

           </v-list-item>
        </v-list>
     
    </v-navigation-drawer>

    </v-sheet>
</template>

<script>
import { eventBus } from '../main';

    export default {
        data() {
            return {
               drawer: null,
               items:[
                   {title:'Home',href:'#home'},
                   {title:'About Us',href:'#about'},
                   {title:'Membership',href:'#membership'},
                   {title:'Gallery',href:'#gallery'},
                   {title:'Our Employees',href:'#employees'},
                   {title:'Pricing',href:'#pricing'},
                   {title:'Testimonials',href:'#testimonials'},
               ],
                previousLink:0,
               allLinks:document.getElementsByClassName('makeUpClass'),
               lastLink:localStorage.getItem("lastLinkClickedMobile") || 0,
            }
        },

        methods: {

           
            activeLink(idx) {
             let allLinks = this.allLinks;
              let counter = 0;
              
            if(counter < 1)  allLinks[this.lastLink].classList.remove("active");
            allLinks[idx].classList.add("active");
               console.log("added"+ " " + idx)
               
               localStorage.setItem("lastLinkClickedMobile",idx);
               
               if(idx !== this.previousLink) {
                 allLinks[this.previousLink].classList.remove("active");

                 console.log("removed"+ " " + this.previousLink)
                 this.previousLink = idx;
                  
              
               } 
             
              } 
            },

         mounted () {

          // check if active 
           this.allLinks[this.lastLink].classList.add("active");
            
          },

       created () {
          eventBus.$on('activation',(data)=> {
              this.drawer = data;
          })
       },
    }
</script>

<style scoped>

.active {
  transition: all 0.2s ease-in-out !important;
  background-color:#26C6DA !important;
  color:white !important;
}

</style>