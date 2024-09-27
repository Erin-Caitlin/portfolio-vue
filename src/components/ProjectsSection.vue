<template>
  <div class="container">
    <div class="row text-center">
      <h2 class="display-2 section-title">Projects</h2>
    </div>
    <div class="project-grid" v-if="projects.length">
      <Card v-for="project in projects" :key="project.id" class="project-card">
        <template #cardHeader>
          <div class="project-image-container">
            <img :src="project.imgUrl" :alt="project.project" class="project-image" />
            <div class="overlay">
              <div class="overlay-content">
                <h6 class="project-title">{{ project.project }}</h6>
                <a :href="project.Github" target="_blank" class="btn btn-light">Github</a>
                <a :href="project.Hosted" target="_blank" class="btn btn-light">Hosted</a>
              </div>
            </div>
          </div>
        </template>
      </Card>
    </div>
    <Spinner v-else />
  </div>
</template>

  
<script>
import Card from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Card,
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
  padding: 20px;
}

.section-title {
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  color: #333;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.project-card {
  background-color: transparent;
  border: none;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image-container {
  position: relative;
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 3px solid #532823;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.project-card:hover .overlay {
  opacity: 1;
}

.overlay-buttons {
  display: flex;
  gap: 10px;
}

.overlay-buttons .btn-dark {
  background-color: #532823;
  border: none;
  color: white;
  padding: 10px 15px;
  transition: background-color 0.3s;
}

.overlay-buttons .btn-dark:hover {
  background-color: #3e1c1b;
}

.project-title {
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
  font-weight: bold;
}
</style>
