<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2 animate__animated animate__fadeIn">Education & Experiences</h2>
        </div>
        <div class="row gap-2 justify-content-center" v-if="experiences?.length" data-bs-aos="fade-up"
        data-bs-aos-duration="2000">
            <Card v-for="experiences in experiences" :key="experiences.id" cards>
                <template #cardHeader>
                    <h4 class="card-title">{{ experiences.company }}</h4>
                </template>
                <template #cardBody>
                    <img :src="experiences.img_url" :alt="experiences.company" loading="lazy" class="img-fluid">
                    <h5 class="lead">{{ experiences.title }}</h5>
                    <p class="lead">{{ experiences.description }}</p>
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
        education() {
            return this.$store.state.education
        },
        experiences() {
            return this.$store.state.experiences
        }
    },
    mounted() {
        this.$store.dispatch('fetchEducation')
        this.$store.dispatch('fetchExperiences')
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
}

[cards] {
    box-shadow: 0 0.5rem 1rem rosybrown;
    background-color: rgb(208, 188, 177);
    width: 40%;
}
.img-fluid {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    height: 9rem;
}
</style>