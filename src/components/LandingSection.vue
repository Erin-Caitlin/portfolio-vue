<template>
  <div class="container-fluid p-0" landing>
    <div class="row vh-100 align-items-center animate__animated animate__fadeInTopLeft" page>
      <div class="col">
        <div>
          <img src="https://erin-caitlin.github.io/portfolio-images/VuePortfolio/image24.jpg" alt="profile" class="img-fluid w-75 shadow rounded-top" loading="lazy"> 
        </div>
      </div>
      <div class="col">
        <div class="animate__animated animate__fadeInTopLeft" id="details">
          <h1 class="display-1">Erin Caitlin Williams</h1>
          <h4 class="display-4">Aspiring Developer</h4>
        </div>
        <div id="links">
          <router-link to="/about" class="m-2">
            <button class="btn pro-link">ABOUT ME</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
[page] {
  display: flex;
  justify-content: center;
  width: 95%;
}

.m-2 {
  text-decoration: none;
  color: white;
}

.btn {
  background-color: rgba(245, 245, 220, 0.521);
}

#links {
  margin: 1rem;
}

h1, h2, h3, h4, h6 {
  font-family: "Italiana", sans-serif;
  font-weight: 400;
  filter: drop-shadow(0.1rem 0.1rem 0.1rem black);
  text-decoration-color: #6642428a;
}

img {
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
}

.container-fluid {
  padding: 0px !important;
  margin-top: 4rem;
}


</style>
