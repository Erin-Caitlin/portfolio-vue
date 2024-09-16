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
            <li class="nav-item"><router-link class="nav-link" to="/" @click="handleLinkClick">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about" @click="handleLinkClick">About</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/education-experience" @click="handleLinkClick">Education & Experience</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/projects" @click="handleLinkClick">Projects</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/contact" @click="handleLinkClick">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isNavbarVisible = ref(false);
  
  function toggleNavbar() {
    isNavbarVisible.value = !isNavbarVisible.value;
  }
  
  function handleLinkClick() {
    if (window.innerWidth <= 991) {
      isNavbarVisible.value = false;
    }
  }
  
  function handleResize() {
    if (window.innerWidth > 991) {
      isNavbarVisible.value = false;
    }
  }
  
  function handleScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  
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
  
  