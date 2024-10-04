<template>
    <div class="container">
      <div class="row">
        <h2 class="display-2 section-title animate__animated animate__fadeIn">Education & Experiences</h2>
      </div>
      <div class="row gap-4 justify-content-center" v-if="experiences?.length" data-bs-aos="fade-up" data-bs-aos-duration="2000">
        <div class="education-card" v-for="experience in experiences" :key="experience.id">
          <div class="education-image-container">
            <img :src="experience.img_url" :alt="experience.company" loading="lazy" class="education-image" />
          </div>
          <div class="education-text-container">
            <h4 class="card-title">{{ experience.company }}</h4>
            <h5 class="lead">{{ experience.title }}</h5>
            <p class="lead">{{ experience.description }}</p>
          </div>
        </div>
      </div>
      <Spinner v-else />
    </div>
  </template>
  
  <script>
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
    gap: 16px;
    width: 100%;
    max-width: 600px;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: rgb(208, 188, 177);
    border-radius: 12px;
    padding: 15px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 1.5rem;
  }
  
  .education-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .education-image-container {
    flex-shrink: 0;
    max-width: 120px;
  }
  
  .education-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }
  
  .education-text-container {
    flex-grow: 1;
    padding-left: 15px;
  }
  
  .card-title {
    font-size: 1.6rem;
    font-weight: bold;
    color: #532823;
    margin-bottom: 0.5rem;
  }
  
  .lead {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    .education-card {
      flex-direction: column;
      padding: 20px;
      max-width: 400px;
    }
  
    .education-image-container {
      margin-bottom: 1rem;
      max-width: 100%;
    }
  
    .education-text-container {
      padding-left: 0;
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .education-card {
      padding: 15px;
      max-width: 300px;
    }
  
    .card-title {
      font-size: 1.3rem;
    }
  
    .lead {
      font-size: 0.9rem;
    }
  }
  </style>
  