<template>
  <div id="topDiv">

    <v-app-bar fixed color="white" height="90" shrink-on-scroll>
       <v-app-bar-nav-icon class="d-flex d-lg-none" @click.stop="sendActivation"></v-app-bar-nav-icon>
      <v-toolbar-title class="ml-10 ">Title</v-toolbar-title>
    
      
      <v-spacer></v-spacer>

      <div class="d-none d-lg-flex mr-10">
        <v-btn v-for="(button,index) in buttonInfo" :key="index" text rounded large :href="button.href" @click="activeLink(index)">{{button.name}}</v-btn>
      </div>
  </v-app-bar>

  
  </div>
</template>

<script>
import { eventBus } from '../main';



    export default {
        data() {
            return {
               activateDrawer: false,
               buttonInfo: [
                 {href:"#home", name:"Home"},
                 {href:"#about", name:"About"},
                 {href:"#membership", name:"Membership"},
                 {href:"#gallery", name:"Gallery"},
                 {href:"#employees", name:"Employees"},
                 {href:"#pricing", name:"Pricing"},
                 {href:"#testimonials", name:"Testimonials"}
               ],
               previousLink:0,
               currentLink:0,
               previousScrollingLink:null,
               allLinks:document.getElementsByClassName('v-btn--rounded'),
               lastLink:localStorage.getItem("lastLinkClicked") || 0,
               debounce:false,
            }
        },
        methods: {
            sendActivation() {
                this.activateDrawer = !this.activateDrawer;
                eventBus.$emit('activation',this.activateDrawer);
                this.activateDrawer = false;
            },
           // set an active link in the menu
            activeLink(idx) {
             
               let allLinks = this.allLinks;
         
               allLinks[idx].classList.add("active");
               this.currentLink = idx;
               console.log("added"+ " " + idx)
               this.debounce = true;
               localStorage.setItem("lastLinkClicked",idx);
             
               if(idx !== this.previousLink) {
                 allLinks[this.previousLink].classList.remove("active");
                //  console.log("removed"+ " " + this.previousLink)
                 this.previousLink = idx;
                  
              
               }
              
               setTimeout(() => {
                  this.debounce = false;
               },1000);
   
            },

            srollingTroughLinks(data) {
             
               if(this.debounce) {
                 let prevScrLnk = this.previousScrollingLink;
                 console.log(prevScrLnk)
                 if(prevScrLnk !==null && prevScrLnk!==this.currentLink) this.allLinks[prevScrLnk].classList.remove("active");
                 return;
               }
               else {

                for(let i =0; i < this.allLinks.length;i++) {
                   
                   if(this.allLinks[i].text.toLowerCase() == data.id) {
                  
                        this.allLinks[i].classList.add("active");
                        localStorage.setItem("lastLinkClicked",i);
                        this.previousScrollingLink = i;
                      
                   } 

                   else {
                    this.allLinks[i].classList.remove("active");
                 
                   }
                   
                }
               }
            }

           
          
        },

        mounted () {
            
            if (window.performance) {
             console.info("window.performance works fine on this browser");
            }
            if (performance.navigation.type == 1) {
              console.info( "This page is reloaded" );
              this.allLinks[this.lastLink].classList.add("active");
            } else {
              console.info( "This page is not reloaded");
              this.allLinks[0].classList.add("active");
            }
                    
            eventBus.$on('send1', data => {
                this.srollingTroughLinks(data)
             
            })
          },
    }
</script>

<style>
  
  html {
  scroll-behavior: smooth;
}
.active {
  transition: all 0.2s ease-in-out !important;
  background-color:#26C6DA !important;
  color:white !important;
}


</style>