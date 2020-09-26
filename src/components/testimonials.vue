<template> 
<div id="testimonials" ><br><br><br>
<h1 class="text-center">Testimonials</h1>
  <v-container :class="{testimonalsAnime:notMobile}">
    <v-row justify="center">
    <v-col cols="12" sm=10 md=12 xl=8>
     <v-carousel vertical-delimiters vertical cycle interval="5000">
         <v-carousel-item class="setParametars" v-for="(slide,i) in slides" :key="i">
            
     <v-sheet
        :color="colors[i]"
        height="100%">  
       
       
        <v-row justify="center" align="center" class="mb-2"> 
   
          <v-avatar size="100" class="verticalAligment">
            <img
                :src=slide.image
                alt="John">
                </v-avatar>
                    
        </v-row>  

        <v-row justify="center">
        
           <span >{{slide.jobDesc}}</span>
     
        </v-row>
              <br>
        <v-row justify="center">
       
  
         <i class="fas fa-quote-right"></i>

        
        </v-row>

        <v-row justify="center"> 
 
        <v-col cols="7" class="ml-5">
             
          <span class="caption alignText">{{slide.text}}</span>
          
          </v-col>
        </v-row>    
      </v-sheet>

         </v-carousel-item>
         
     </v-carousel>
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
                 slides: [
                      {text:"I have had the phenomenal pleasure of working out with FitTime coaches as a client and friend throughout the course of the last year. Their magnetic personalities ensure that a friendship will inevitably develop throughout the training course.",jobDesc:"Alice Williams Designer at Viper Ltd.", image:"https://quindry.com/wp-content/gallery/people/Business-Headshots-by-Philadelphia-PA-photographer-281.jpg"},
                      {text:"I tried yoga for the first time and it was mind blowing.I recomend these types of tranings to evrybody who has a stressfull job.",jobDesc:"Derick Jackson Designer at Viper Ltd.",  image:"https://cdn.goodgallery.com/1825e7e9-eeb1-4ca9-93a9-56c072e81b6e/s/0800/2b47xn42/actor-male-dark-skin-headshot-friendly-look.jpg"},
                      {text:"I came here to acquire the shape of my body I had half a year ago. I was quite surprised with a range of services they offered me.Moreover, you can benefit from their group training.",jobDesc:"Julia SmithManager at iStep Co.", image:"https://heroshotphotography.com/wp-content/uploads/2018/03/Headshot-Smiling-Chinese.jpg"}, 
                      {text:"When I first started my main goal was to get in shape for an annlual marathon. Fittnes programs as well as guided traning sesions had me ready in no time.",jobDesc:"Darin Williams analyst at iStep Co.",image:"https://www.oberlin.edu/sites/default/files/styles/width_760/public/content/news/image/daquan_williams-new_size.png"}, 
                      
                 ],
                colors: [
                    '#46C6DA',
                    'red lighten-1',
                    'pink darken-2',
                    'deep-purple accent-4',
                    ],
                notMobile:true,
                            
             }
         },

         mounted () {
           let testimonialsPage = document.getElementById('testimonials').id;
           eventBus.$on('send1', data=> {
              if(testimonialsPage == data.id) {
              
                 this.animteTestimonialsPage;
              }
           });

            eventBus.$on('checkIfMobile', data => {
                 this.notMobile = data;
             });
         },

         computed: {
           animteTestimonialsPage() {
             if(this.notMobile)
             return gsap.fromTo(".testimonalsAnime",{opacity:0}, {opacity:1, duration:1,ease: "power3.inOut"});
             return 1;
           }
         },
    }
</script>

<style scoped>
     .alignText {
         text-align: center;
     }

     .verticalAligment {
        margin-top:8.5%;
     }

      .divider {
      width:50px;
      background-color:lightgray;
      
    }

    .testimonalsAnime {
      opacity:0;
    }
</style>