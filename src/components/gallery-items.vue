<template>
    
      
      <v-dialog v-model="dialog" fullscreen dark>
          <v-card>
          <v-container>
          
        
           <v-row class="visible">
               <v-col cols="12" class="d-flex justify-end align-end">
                 <v-btn fab icon>
                   <v-icon  class="fas fa-share-alt"></v-icon> 
                 </v-btn>
                 <v-btn fab icon download="filename.jpg"  href=downloadImage @click="downloadImageFunc">
                   <v-icon  class="fas fa-download"></v-icon> 
                 </v-btn>
                <v-btn fab icon class="zoomIconsToFront" @click="zoomInFunc">
                   <v-icon class="fas fa-search-plus"></v-icon> 
                 </v-btn>
                 <v-btn fab icon class="zoomIconsToFront" @click="zoomOutFunc">
                   <v-icon class="fas fa-search-minus"></v-icon> 
                 </v-btn> 
                 <v-btn fab icon @click="closeOverlay" class="zoomIconsToFront">
                   <v-icon size="29" class="fas fa-times"></v-icon> 
                 </v-btn>
                
               </v-col>
             
              
           </v-row>  

           <v-row class="mt-10">
                <v-col class="mt-10">
                  
                    <div align="center" class="">
                    
                           <!-- https://stackoverflow.com/questions/59759113/how-to-implement-vuetify-touch-prop-in-the-carousel-thanks?answertab=votes#tab-top -->
                        <v-carousel 
                        :height="carouselHeight" 
                        class="transition1 imageStyle topcina" 
                        :style="{transform:zoomInOut}"  
                        prev-icon="fas fa-angle-left" 
                        next-icon="fas fa-angle-right"
                        v-model="currentIndex">
                           <v-carousel-item class=""  v-for="(image,i) in galleryImages" :key="i" :src="galleryImages[i].icon">
                              
                           </v-carousel-item>
                        </v-carousel> 
                    </div>
                    
               </v-col>
           </v-row>
          
        </v-container>  
        </v-card> 
      </v-dialog>
 
    
</template>

<script>
 import {eventBus} from "../main";
    export default {
    
    data() {
        return {
            dialog: false,
            galleryImages:[],
            currentIndex:null,
            zoomInOut:1,
            zoomCount:0,
            tempValue:1,
            downloadImage:'',
            carouselHeight:600,
           
          

        }
    },

    methods: {

     
        closeOverlay() {
           
             this.dialog = false;
             eventBus.$emit('closeDialog', this.dialog);
             this.zoomCount = 0;
             this.tempValue = 1;
             this.zoomInOut = `scale(${this.tempValue}, ${this.tempValue})`;
        },

         zoomInFunc(){
            
            this.tempValue = (this.zoomCount < 5) ? (this.tempValue / 0.94) : this.tempValue;
            this.zoomInOut = `scale(${this.tempValue}, ${this.tempValue})`;
            if(this.zoomCount < 5) this.zoomCount++;
            

         },
         zoomOutFunc(){
           this.tempValue = (this.zoomCount > -5) ? (this.tempValue * 0.94) : this.tempValue;
              this.zoomInOut = `scale(${this.tempValue}, ${this.tempValue})`;
              if(this.zoomCount > -5) this.zoomCount--;
              
         },
         
         downloadImageFunc() {
            this.downloadImage = this.galleryImages[this.currentIndex].icon;
           
         },

   
    },

  
    mounted () {
         eventBus.$on('open_dialog', data =>{
             this.dialog = data.dialog;
             this.currentImage = data.dialogImage;
             this.galleryImages = data.images;
             this.currentIndex = data.idx;
           
         });
         
         if(this.$vuetify.breakpoint.xsOnly)
         
         {
        
           this.carouselHeight = 300;

         }
      
    },


    }
</script>

<style scoped>
   

    .leftIcon {
      position: relative;
      right:50%;
      top:-270px;
      opacity:0.7;
  
    }

    .rightIcon {
        position: relative;
        left:50%;
        top:-270px;
        opacity:0.7;
    
    }
   .zoomIconsToFront{
     position:relative;
     z-index:1;
   }

   .transition1 {
      width:1100px;
      opacity:1;
      transition: all 0.4s ease;    
   }

   .imageStyle {
     border-radius: 0.5%;
   
   }

 
  



     
</style>