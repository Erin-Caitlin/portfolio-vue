<template>
  <div class="container-fluid p-0" landing>
    <div class="row vh-100 align-items-center" page>
      <div class="col animate__animated animate__fadeInLeft">
          <img src="https://erin-caitlin.github.io/portfolio-images/VuePortfolio/image24.jpg" alt="profile" class="img-fluid w-75 shadow rounded-top" loading="lazy"> 
      </div>
      <div class="col animate__animated animate__fadeInRight" id="details">
          <h1 class="display-1">Erin Caitlin Williams</h1>
          <h4 class="display-4">Aspiring Developer</h4>
          <div id="links">
              <button class="btn"><a href="./AboutSection.vue">ABOUT ME</a></button>
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
  background-color: rgba(247, 203, 233, 0.521);
}
.btn:hover {
  background-color: #53282357;
}

#links {
  margin: 1rem;
}

h1, h4 {
  font-family: "Italiana", sans-serif;
  font-weight: 400;
  filter: drop-shadow(0.1rem 0.1rem 0.1rem black);
  -color: #6642428a;
}

h1 {
  font-size: 4.5rem
}

h4 {
  font-size: 3rem;

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

a {
  text-decoration: none;
  color: #532823;

}
a:hover {
  color: #fff;
}
</style>
