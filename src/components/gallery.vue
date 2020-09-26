<template>
<div id="gallery"><br><br><br>
<h1 class="text-center">Gallery</h1>
    <div class="changeColor">
        <gallery-items></gallery-items>
        <v-item-group>
         <v-container>
             <v-row >
                <v-col
                v-for="(img, index) in images"
                :key="img.id"
                cols="12"
                sm="6"
                md="4"
                xl="3"
                :class="{gallery:notMobile}">
                    <v-item>
                         <v-card
                         raised
                         class="d-flex align-center dimensions"
                         :class="{hoverClass: desktopView}"
                         height="200"
                         @click="openDialog(index)">
                           <v-img eager class="imgBorder" :src="img.icon" height="200"></v-img>
                        </v-card> 
                    </v-item>
                </v-col> 
             </v-row>
            </v-container>
           </v-item-group> 
      </div>
    </div>
</template>

<script>

 import galleryItems from '@/components/gallery-items.vue';
 import { gsap } from "gsap";
 import { CSSRulePlugin } from "gsap/CSSRulePlugin";
 gsap.registerPlugin(CSSRulePlugin);
 import {eventBus} from "../main";
    export default {
        components: {
            'gallery-items':galleryItems,
        },

        data() {
            return {
                parentDialog:false,
                images:[
                    {  icon: require('@/images/gym1-min.jpg'), id:0 },
                    {  icon: require('@/images/gym2-min.jpeg'),id:1 },
                    {  icon: require('@/images/gym3-min.jpeg'),id:2 },
                    {  icon: require('@/images/gym5-min.jpg'), id:3 },
                    {  icon: require('@/images/gym6-min.jpeg'),id:4 },
                    {  icon: require('@/images/gym7-min.jpg'),id:5 },
                    {  icon: require('@/images/gym8-min.jpg'), id:6 },
                    {  icon: require('@/images/gym10-min.jpg'),id:7 },
                    {  icon: require('@/images/gym9-min.jpg'),id:8 },
                    {  icon: require('@/images/gym11-min.jpg'), id:9 },
                    {  icon: require('@/images/gym12-min.jpeg'),id:10 },
                    {  icon: require('@/images/gym14-min.jpg'),id:11 },
             ],
             desktopView:true,
             notMobile:true,
            }
        },

        created () {
            
            eventBus.$on('closeDialog', (message) => {
                    this.parentDialog = message;
             }); 
             
              
        },

        mounted () {
            //  let width = window.innerWidth;
            // if(width < 960){ this.desktopView = false;}
            let galleryPage = document.getElementById('gallery').id;
             eventBus.$on('send1', data => {
                 if(galleryPage == data.id) {
                   
                    this.animateGalleryPage;
                  
                 }
                 
             });

             eventBus.$on('checkIfMobile', data => {
                 this.notMobile = data;
             });
            if(this.$vuetify.breakpoint.smAndDown) this.desktopView = false;

        },

        methods: {
            
            openDialog(index) {
                 this.parentDialog = true;
                 let dialogObj = {};
                 dialogObj.dialog = this.parentDialog;
                 dialogObj.dialogImage = this.images[index].icon;
                 dialogObj.idx = index;
                 dialogObj.images = this.images;
                 eventBus.$emit('open_dialog', dialogObj)
                     
             }
            }, 

            computed: {
                animateGalleryPage() {
                    if(this.notMobile){
                    return gsap.fromTo('.gallery', {scale:0.8 ,autoAlpha: 0}, {scale:1,autoAlpha:1, duration:0.6,stagger: { // wrap advanced options in an object
                    each: 0.3,
                    from: "start",
                    grid: [3,4],
                    ease: "power3.inOut"}
                    })
                  }

                  else {
                      return 1;
                  }
                    
                }
            },
   
        
    }
</script>

<style scoped>

.hoverClass {
 margin: 10px auto;
 transition: all 0.3s ease-in-out;
}

.hoverClass:hover {
  padding: 25px 50px 75px 50px;
}
.gallery {
    opacity:0;
    max-height:600px;
   }
   .dimensions {
       width: 400px ;
       height: 200px;
       margin: 10px auto;
   }
</style>