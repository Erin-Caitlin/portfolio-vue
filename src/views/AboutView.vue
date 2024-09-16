<template>
  <div class="container" id="aboutSection">
    <h2 class="display-2 text-white" data-aos="zoom-in-down">About</h2>
    <div id="info">
        <div v-if="about" about>             
            <p class="lead">{{ about[0].information[0] }}</p> 
            <p class="lead">{{ about[0].information[1] }}</p> 
            <p class="lead">{{ about[0].information[2] }}</p> 
            <p class="lead">{{ about[0].information[3] }}</p>
        </div>
    <Spinner v-else/>
    </div>
  </div>
</template>

<script setup>
import Spinner from '@/components/Spinner.vue';
import {computed, onMounted } from 'vue'
import {useStore} from 'vuex'

const store = useStore()
    const about = 
    computed(() => store.state.about)


    onMounted(() => {
        store.dispatch('fetchAbout')
    })
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