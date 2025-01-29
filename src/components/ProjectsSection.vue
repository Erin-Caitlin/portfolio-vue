<template>
  <div class="container">
    <div class="row text-center">
      <h2 class="display-2 section-title" data-aos="fade-in">Projects</h2>
    </div>
    <div class="project-grid" v-if="projects.length">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-image-container">
          <img :src="project.imgUrl" :alt="project.project" class="project-image" loading="lazy"/>
          <div class="overlay">
            <div class="overlay-content">
              <h6 class="project-title">{{ project.project }}</h6>
              <div class="overlay-buttons">
                <a :href="project.Github" target="_blank" class="btn">Github</a>
                <a :href="project.Hosted" target="_blank" class="btn">Hosted</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Spinner v-else />
    <!-- Case Studies Section -->
    <h2 class="display-2 section-title" data-aos="fade-in" case>LC Studios</h2>
<div class="case-studies" data-aos="fade-up" data-aos-duration="1000">
  <h3 class="case-studies-heading">Case Studies / Hackathons</h3>
  
  <div class="case-study-item">
    <h4 class="case-study-title">UI/UX Design</h4>
    <div class="case-study-buttons">
      <a href="https://drive.google.com/file/d/1EMkgljrnJI0cIW17roOfadi5mkSd5SYG/view?usp=sharing" target="_blank" class="view-button">View</a>
    </div>
  </div>
  
  <div class="case-study-item">
    <h4 class="case-study-title">SCRUM</h4>
    <div class="case-study-buttons">
      <a href="https://drive.google.com/file/d/1tNs3rqN3B2WDNf0Zahla3wU4DF9bGpcC/view?usp=sharing" target="_blank" class="view-button">View</a>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Spinner
  },
  computed: {
    projects() {
      return this.$store.state.projects || [];
    }
  },
  mounted() {
    this.$store.dispatch('fetchProjects');
  }
}
</script>

<style scoped>
/* Universal Section Title Styling */
.section-title {
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  color: #532823;
  text-transform: uppercase;
  text-align: center;
}

/* Container Padding */
.container {
  padding: 3rem;
}

/* Grid Layout for Projects */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for desktop */
  grid-gap: 20px;
}

/* Project Card Styling */
.project-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: scale(1.05);
}

/* Image Container and Overlay */
.project-image-container {
  position: relative;
}

.project-image {
  width: 100%;
  height: 200px; /* Keep height same for desktop */
  object-fit: cover;
  object-position: top;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.project-card:hover .overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-buttons {
  display: flex;
  gap: 10px;
}

.btn {
  background-color: #532823;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #3e1c1b;
}

.project-title {
  font-size: 18px;
  margin: 10px 0;
  font-weight: bold;
}

/* Case Studies Section */
.case-studies {
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff2f;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 80%; /* Adjust this value to make it smaller */
  max-width: 600px; /* Optional: Set a max width for larger screens */
  margin: 3rem auto; /* Center the element */
}

[case] {
  padding-top: 3rem;
}

.case-studies-heading {
  font-size: 2rem;
  color: #532823;
  margin-bottom: 1.5rem;
}

.case-study-item {
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background-color: #ffffff42;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.case-study-item:hover {
  transform: translateY(-5px);
}

.case-study-title {
  font-size: 1.5rem;
  color: #532823;
}

.case-study-buttons {
  display: flex;
  gap: 1rem;
  justify-content: flex-end; /* Align buttons to the right */
}

.view-button,
.download-button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #532823;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none; /* Remove text decoration */
}

.view-button:hover,
.download-button:hover {
  background-color: #805040;
}

/* Responsive Styles */

/* For medium devices (up to 992px) */
@media (max-width: 992px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }

  .project-image {
    height: 200px; /* Same height for tablets */
  }
}

/* For small devices (up to 576px) */
@media (max-width: 576px) {
  .project-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for mobile */
    grid-gap: 15px;
  }

  .container {
    padding: 1.5rem;
  }

  /* Adjusting the project image size for smaller screens */
  .project-image {
    height: 150px; /* Smaller height for mobile to display full image */
  }

  .case-study-item {
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
  }

  .case-study-buttons {
    width: 100%;
    justify-content: space-evenly;
  }
}

</style>
