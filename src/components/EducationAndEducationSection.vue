<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2 section-title" data-aos="fade-in">Education & Experiences</h2>
      </div>
      <div class="row gap-3 justify-content-center" v-if="experiences?.length">
      <!-- <div class="row gap-3 justify-content-center" v-if="experiences?.length" data-aos="fade-up" data-aos-duration="2000"> -->
        <div class="education-card" v-for="experience in experiences" :key="experience.id">
        <!-- <div class="education-card" v-for="experience in experiences" :key="experience.id" data-aos="zoom-in" data-aos-duration="1000"> -->
          <div class="education-image-container">
            <img :src="experience.img_url" :alt="experience.company" loading="lazy" class="education-image"/>
            <!-- <img :src="experience.img_url" :alt="experience.company" loading="lazy" class="education-image" data-aos="flip-left" data-aos-duration="1500" /> -->
          </div>
          <div class="education-text-container">
          <!-- <div class="education-text-container" data-aos="fade-right" data-aos-duration="1200"> -->
            <h4 class="card-title">{{ experience.company }}</h4>
            <h5 class="lead">{{ experience.title }}</h5>
            <p class="lead">{{ experience.year }}</p>
            <p class="lead">{{ experience.description }}</p>
          </div>
        </div>
      </div>
      <Spinner v-else />
    </div>
  </template>
  
  <script>
  import AOS from 'aos';
  import 'aos/dist/aos.css'; 
  import Spinner from '@/components/Spinner.vue';
  
  export default {
    components: {
      Spinner
    },
    computed: {
      experiences() {
        return this.$store.state.experiences || [];
      }
    },
    mounted() {
      this.$store.dispatch('fetchExperiences');
      AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
      });
    },
    updated() {
      AOS.refresh();
    }
  }
  </script>
  
  <style scoped>
  .section-title {
    margin-bottom: 2rem;
    font-weight: bold;
    font-size: 2.5rem;
    color: #532823;
    text-transform: uppercase;
    text-align: center;
  }
  
  .container {
    padding: 3rem;
  }
  
  .education-card {
    display: flex;
    flex-direction: row;
    gap: 14px;
    width: 100%;
    max-width: 600px;
    height: auto;
    align-items: flex-start;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: rgb(208, 188, 177);
    border-radius: 12px;
    padding: 8px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease-in-out;
  }
  
  .education-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .education-image-container {
    flex-shrink: 0;
    width: 140px;
    height: 140px;
    overflow: hidden;
  }
  
  .education-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
  
  .education-text-container {
    text-align: left;
  }
  
  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #532823;
    margin-bottom: 0.5rem;
  }
  
  .lead {
    font-size: 0.95rem;
    color: #666;
    text-align: left;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    .education-card {
      flex-direction: column;
      padding: 10px;
      max-width: 450px;
      height: auto;
      margin-bottom: 1rem;
    }
  
    .education-image-container {
      margin-bottom: 1rem;
      max-width: 100%;
    }
  
    .education-text-container {
      padding-left: 0;
      text-align: left;
    }
  }
  
  @media (max-width: 480px) {
    .education-card {
      padding: 8px;
      max-width: 280px;
    }
  
    .card-title {
      font-size: 1.3rem;
    }
  
    .lead {
      font-size: 0.9rem;
    }
  }
  </style>
  