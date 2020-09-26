<template>
  <v-app>
    
   <menu-item class="animation"></menu-item>
   <mobile-menu class="animation"></mobile-menu>
  <loader></loader>
   <header-content class="animation"></header-content>
    
    <br> <br> <br>
   <services-item class="animation"></services-item>
  
 <br>
  <join-us class="animation"></join-us>
  <br>
    <v-divider class="marginSet animation"></v-divider>
   <br><br><br>
   <gallery-item class="animation"></gallery-item>
   <br><br><br>
  <trainers-item class="animation"></trainers-item>
   <br><br><br>
   <accomplishments class="animation"></accomplishments>
   <pricing class="animation"></pricing>
   <testimonials class="animation"></testimonials>
   <footer-item></footer-item>
  </v-app>
</template>

<script>
//https://vuejsdevelopers.com/2017/06/18/vue-js-boost-your-app-with-webpack/ - -procitaj sutra
import loader from '@/components/loader.vue';
import { eventBus } from "./main";
import menuItem from './components/menu.vue';
import mobileMenu from '@/components/mobile_menu.vue';
import footerItem from '@/components/footer.vue';
import headerContent from '@/components/header_content.vue';
import services from '@/components/services.vue';
import gallery from '@/components/gallery.vue';
import joinUs from '@/components/joinUs.vue';
import Trainers from '@/components/trainers.vue';
import accomplishments from '@/components/accomplishments.vue';
import pricing from '@/components/pricing.vue';
import testimonials from '@/components/testimonials.vue';

export default {
  name: 'App',
 
 components: {
   'menu-item':menuItem,
   'mobile-menu':mobileMenu,
   'footer-item':footerItem,
   'header-content':headerContent,
   'services-item':services,
   'gallery-item':gallery,
   'join-us':joinUs,
   'trainers-item':Trainers,
   'accomplishments':accomplishments,
   'pricing':pricing,
   'testimonials':testimonials,
   'loader':loader,
 
 },

  data: () => ({
    temporaryElement:0,
    notMobileView:true,
    overlay: true,
  }),

  methods: {
    handleScroll: function() {
      var elementArray = document.querySelectorAll(".animation");
      this.currentElementLength = elementArray.length;

      for (var i = 0; i < elementArray.length; i += 1) {
        var element = elementArray[i].getBoundingClientRect();
        var elementOffset = elementArray[i].offsetTop - element.height + 300;
        
        if (
          window.scrollY >= elementOffset &&
          window.scrollY <= elementOffset + element.height
           
         
        ) {
         
          this.temporaryElement = elementArray[i];
           if(this.$vuetify.breakpoint.mdAndDown) eventBus.$emit("send1",this.temporaryElement);
        
        }
       
      }
      if(this.$vuetify.breakpoint.mdAndUp) eventBus.$emit("send1",this.temporaryElement);
          
       
    }
  },

  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  mounted () {
     if(this.$vuetify.breakpoint.smAndDown) {
      this.notMobileView = false;
       eventBus.$emit("checkIfMobile",this.notMobileView);
    }
     this.overlay = false;

  },
};
</script>

<style scoped>
  .marginSet{
     margin-left:100px;
     margin-right: 100px; 
   }

</style>
