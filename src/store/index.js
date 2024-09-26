import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://erin-caitlin.github.io/vue-portfolioData/data/'

export default createStore({
  state: {
    jobTitle: null,
    about: null,
    education: null,
    experiences: null,
    skills: null,
    testimonials: null,
    projects:null
  },
  getters: {
  },
  mutations: {
    setAbout(state, value) {
      state.about = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setExperiences(state, value) {
      state.experiences = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setProjects(state, value) {
      state.projects = value
    },
  },
  actions: {
    async fetchAbout(context) {
      try {
        let {about} = await (await axios.get(portfolioURL)).data
        context.commit("setAbout", about)
      } catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch data",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchEducation(context) {
      try {
        let {education} = await (await axios.get(portfolioURL)).data
        context.commit("setEducation", education)
      } catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch data - education",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchExperiences(context) {
      try {
        let {experiences} = await (await axios.get(portfolioURL)).data
        context.commit("setExperiences", experiences)
      } catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch data - experiences",
          icon: "error",
          timer: 2000
        })
      }
    },
    async fetchSkills(context) {
      try {
        const response = await axios.get(portfolioURL);
        context.commit("setSkills", response.data.skills);
      } catch (e) {
        console.error("Failed to fetch skills:", e);
        Swal.fire({
          title: "Error",
          text: "Failed to fetch data - skills",
          icon: "error",
          timer: 2000
        });
      }
    },
    async fetchProjects(context) {
      try {
        let {projects} = await (await axios.get(portfolioURL)).data
        context.commit("setProjects", projects)
      } catch (e) {
        Swal.fire ({
          title: "Error",
          text: "Failed to fetch data - skills",
          icon: "error",
          timer: 2000
        })
      }
    }
  },
  modules: {}
})
