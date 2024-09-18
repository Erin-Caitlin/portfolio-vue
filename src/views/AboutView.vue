<template>
  <div class="container" id="aboutSection">
    <h2 class="display-2 text-white">About</h2>
    <div id="info">
      <div v-if="about" about>             
        <p class="lead">{{ about[0].information[0] }}</p> 
        <p class="lead">{{ about[0].information[1] }}</p> 
        <p class="lead">{{ about[0].information[2] }}</p> 
        <p class="lead">{{ about[0].information[3] }}</p>
      </div>
      <Spinner v-else/>
    </div>

    <div skill>
      <div class="row">
        <h2 class="display-2" data-bs-aos="zoom-in-down">Skills</h2>
      </div>
      <div class="row gap-2 justify-content-center" v-if="skills && skills.length" skills>
        <div v-for="skill in skills" :key="skill.id" data-bs-aos="fade-up">
          <div id="iconss">
            <box-icon type='logo' :name='skill.name' :color="skill.color" id="icon"></box-icon>
          </div>
          <h4 class="card-title">{{ skill.language }}</h4>
          <p class="lead">{{ skill.level }}</p>
        </div>
      </div>
      <Spinner v-else />
    </div>
  </div>
</template>


<script >
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
    this.$store.dispatch('fetchAbout')
    this.$store.dispatch('fetchSkills')
  }
}
</script>
<style scoped>
#info {
    margin: 2rem auto 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    gap: .4rem;
    width: 70%;
}

</style>