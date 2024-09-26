<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2 section-title" data-bs-aos="zoom-in-down">Projects</h2>
    </div>
    <div class="row" data-bs-aos="zoom-in-down" resume>
      <div class="row gap-2 justify-content-center" v-if="projects.length">
        <Card v-for="project in projects" :key="project.id" data-bs-aos="fade-up">
          <template #cardHeader>
            <h6>{{ project.project }}</h6>
            <img :src="project.imgUrl" :alt="project.project" loading="lazy" class="img-fluid">
          </template>
          <template #cardBody>
            <a class="m-2" :href="project.Github" target="_blank">
              <button class="btn btn-danger pro-link" btn2>Github</button>
            </a>
            <a class="m-2" :href="project.Hosted" target="_blank">
              <button class="btn btn-danger pro-link" btn2>Hosted</button>
            </a>
          </template>
        </Card>
      </div>
      <Spinner v-else />
    </div>
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
.img-fluid {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
}
.card {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background-color: rgb(208, 188, 177);
}
[btn2] {
  background-color: #ae8381;
  border: none;
  transition: all 0.4s;
}
</style>
  