<template>
  <div class="container">
    <div class="row text-center">
      <h2 class="display-2 section-title">Projects</h2>
    </div>
    <div class="project-grid" v-if="projects.length">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-image-container">
          <img :src="project.imgUrl" :alt="project.project" class="project-image" />
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
.container {
  padding: 3rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

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

.project-image-container {
  position: relative;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
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
</style>
