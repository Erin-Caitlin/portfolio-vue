<template>
  <div class="container">
    <h2 class="display-2 section-title">About</h2>
    <div id="info">
      <div v-if="about" about>
        <p class="lead">{{ about[0].information[0] }}</p>
        <p class="lead">{{ about[0].information[1] }}</p>
        <p class="lead">{{ about[0].information[2] }}</p>
        <p class="lead">{{ about[0].information[3] }}</p>
      </div>
      <Spinner v-else />
    </div>

    <h2 class="display-2 section-title" data-bs-aos="zoom-in-down">Skills</h2>
    <div class="row gap-2 justify-content-center" v-if="skills && skills.length">
      <div class="d-flex flex-wrap justify-content-center">
        <div v-for="skill in skills" :key="skill.id" data-bs-aos="fade-up" class="skill-item">
          <div id="icons">
            <box-icon type='logo' :name='skill.name' :color="skill.color" class="skill-icon"></box-icon>
          </div>
          <h4 class="card-title">{{ skill.language }}</h4>
          <p class="lead">{{ skill.level }}</p>
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
    about() {
      return this.$store.state.about;
    },
    skills() {
      return this.$store.state.skills;
    }
  },
  mounted() {
    this.$store.dispatch('fetchAbout');
    this.$store.dispatch('fetchSkills');
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}

.section-title {
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  color: #532823;
  text-transform: uppercase;
}

#info {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 70%;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: #ffffff2f;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

#info p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
}

.row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.skill-item {
  text-align: center;
  background-color: #ffffff2f;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33.33% - 20px); /* Changed to 3 items per row */
  margin: 10px;
  max-width: 150px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-10px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.skill-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.5rem;
  color: #532823;
  margin-top: 0.5rem;
}

.lead {
  font-size: 1rem;
  color: #666;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  #info {
    width: 90%;
  }

  .skill-item {
    flex: 1 1 calc(50% - 20px);
    max-width: 120px;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .card-title {
    font-size: 1.2rem;
  }
}
</style>
