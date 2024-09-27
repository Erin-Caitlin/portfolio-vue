<template>
    <div class="container">
        <h2 class="display-2 section-title">Education & Experiences</h2>
        <div class="timeline" v-if="experiences?.length" data-aos="fade-up">
            <div class="timeline-container" v-for="experience in experiences" :key="experience.id">
                <div class="timeline-point"></div>
                <Card>
                    <template #cardHeader>
                        <h4 class="experience-company">{{ experience.company }}</h4>
                    </template>
                    <template #cardBody>
                        <h5 class="experience-title">{{ experience.title }}</h5>
                        <p class="experience-description">{{ experience.description }}</p>
                    </template>
                </Card>
            </div>
        </div>
        <Spinner v-else />
    </div>
</template>

<script>
import AOS from 'aos';
import Card from '@/components/Card.vue';
import Spinner from '@/components/Spinner.vue';

export default {
    components: {
        Card,
        Spinner
    },
    computed: {
        experiences() {
            return this.$store.state.experiences;
        }
    },
    mounted() {
        this.$store.dispatch('fetchExperiences').then(() => {
            AOS.init({ duration: 2000 });
        });
    }
}
</script>

<style scoped>
.container {
    padding: 2rem;
    text-align: center;
}

.section-title {
    margin-bottom: 2rem;
}

.timeline {
    position: relative;
    margin: 0 auto;
    padding: 2rem 0;
}

.timeline-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 2rem;
}

.timeline-point {
    width: 15px;
    height: 15px;
    background-color: #007bff; /* Change to desired color */
    border-radius: 50%;
    position: relative;
    flex-shrink: 0;
    margin-right: 1rem;
}

.card {
    margin: 0;
    width: 300px; /* Increased width for a more modern feel */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.95);
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.card-header {
    font-weight: bold;
    font-size: 1.5rem;
    padding: 1rem;
    border-bottom: 1px solid #eee;
}

.card-body {
    padding: 1rem;
}

.experience-company {
    margin: 0;
}

.experience-title {
    font-size: 1.25rem;
    color: #555;
    margin-bottom: 0.5rem;
}

.experience-description {
    font-size: 1rem;
    color: #333;
}
</style>
