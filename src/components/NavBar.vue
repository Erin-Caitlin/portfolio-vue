<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid d-flex flex-column align-items-center">
      <div class="navbar-title d-flex justify-content-center align-items-center w-100">
        <h1>Erin Caitlin Williams</h1>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarSupportedContent" aria-expanded="isNavbarVisible" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" :class="{ show: isNavbarVisible }" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="#landing" @click="handleLinkClick">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about" @click="handleLinkClick">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#edu/exp" @click="handleLinkClick">Education & Experience</a></li>
          <li class="nav-item"><a class="nav-link" href="#projects" @click="handleLinkClick">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact" @click="handleLinkClick">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarVisible: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarVisible = !this.isNavbarVisible;
    },
    handleLinkClick(event) {
      if (window.innerWidth <= 991) {
        this.isNavbarVisible = false;
      }
      const target = event.currentTarget.getAttribute('href');

      // Use Vue Router's router.push to handle hash navigation
      this.$router.push({ hash: target });

      this.smoothScroll(target);
    },
    smoothScroll(target) {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleResize() {
      if (window.innerWidth > 991) {
        this.isNavbarVisible = false;
      }
    },
    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
h1 {
  font-size: 24px;
}
.nav-link {
  position: relative;
  padding-bottom: 5px;
  color: #fff;
  text-decoration: none;
}
.nav-link:hover {
  color: #f8f9fa;
}
.nav-link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: #f8f9fa;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.nav-link:hover::after {
  transform: scaleX(1);
}
.nav-link.active {
  color: #f8f9fa;
}
.nav-link.active::after {
  transform: scaleX(1);
  background-color: #f8f9fa;
}
@media (max-width: 991.98px) {
  .navbar-collapse {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100%;
    background-color: #532823b4;
    transition: left 0.3s ease;
    z-index: 1050;
  }
  .navbar-collapse.show {
    left: 0;
  }
}
.navbar-toggler {
  border: none;
  background-color: white;
}
</style>
