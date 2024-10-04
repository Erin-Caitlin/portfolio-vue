<template>
  <div class="container-fluid">
    <section class="row" id="landing">
      <LandingSection />
    </section>
    <section class="row" id="about">
      <AboutSection />
    </section>
    <section class="row" id="experience">
      <EducationAndEducationSection />
    </section>
    <section class="row" id="projects">
      <ProjectsSection />
    </section>
    <section class="row" id="contact">
      <ContactSection />
    </section>
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import EducationAndEducationSection from '@/components/EducationAndEducationSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ContactSection from '@/components/ContactSection.vue'

export default {
  name: 'HomeView',
  components: {
    LandingSection, AboutSection, EducationAndEducationSection, ProjectsSection, ContactSection
  }
}
</script>

<style scoped>
</style>