<template>
  
   <div id="home">
      <v-img id="header_image" class="mb-10" src="../images/3.jpg" aspect-ratio="1.78" :height=imageHeight></v-img>
      <h1 class="centered display-4 font-weight-bold" :class="[{ 'display-2':title},{'headerContentMobile':title}]">BEST FITNESS</h1>
      <p id="header_text" class="centered" :class="[{'subtitle-2': title}, {subtitleMobile:title}]" >Our club encourages wellness by providing top-notch equipment, first-class instructors, innovative classes, and qualified staff.</p>
      <v-btn absolute large class="buttonPosition" :class="{buttonMobile:title}"  color="#26C6DA">Join Us</v-btn>
        
  </div>
 
  
</template>

<script>
/*  :style="{top:topPosition + 'px', 'margin-top':marginTop+ 45 +'px'}"
:style="{top:topPosition + 150 + 'px','margin-top':(marginTop+40)+'px' }"
*/
    export default {
       data() {
         return {
            title:"",
            imageHeight:'',
         }
       },
       mounted () {
          this.loadInitialvalues();
          window.addEventListener('resize', this.resize1)
       },

       destroyed () {
         window.removeEventListener('resize', this.resize1);
       },

       methods: {
         resize1() {
           let width = window.innerWidth;
            if(width < 1264) {
               this.title=true;
               this.imageHeight = '500';
             
             
            }
 
            else{
              this.title=false;
              this.imageHeight = '800';
             
            }
         },

         loadInitialvalues() {
            this.imageHeight = (this.$vuetify.breakpoint.mdAndDown)?'500':'800';
             this.title = (this.$vuetify.breakpoint.mdAndDown)?true:false; 
         }
       },
      
  
    }
</script>

<style scoped>
 .centered {
  color:#26C6DA; 
  position: absolute;
  top: 300px;
  margin-left: 50%;
  margin-right: auto;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 2px black;
}
.centered h1 {
   color:white;
}

#header_text {
   color:white;
   top: 410px;
   transform: translate(-50%, -50%);

}

 #header_image {
  filter: brightness(70%);
  position: relative;
  top:10%;

} 

.buttonPosition {
     top:500px;
     left: 50%;
     transform: translate(-50%, -50%);   
}
.headerContentMobile {
   top:180px;
}

.subtitleMobile {
  
   margin-top: -120px;
   font-size: 10px;
}

.buttonMobile {
   margin-top: -100px;
   font-size: 12px;
}

 

</style>