<template>
  <div class="container" reach-me>
    <h2 class="display-2" data-aos="zoom-in-down">Reach Me</h2>
    <div class="row align-items-center">
      <div class="col" id="contact-page">
        <form action="https://formspree.io/f/mkgwnjva" method="POST">
          <div class="row">
          <label>Your Name: <input type="text" name="name" placeholder="Name and Surname" id="name" class="form-control"></label>
        </div>
        <div class="row">
          <label>Your email:<input type="email" name="email" placeholder="Email@gmail.com" id="email" class="form-control"></label>
        </div>
        <div class="row">
          <label>Your message:<textarea name="message" placeholder="Type your message..." id="message" class="form-control"></textarea></label>
        </div>
          <div class="btns">  
            <button type="submit" id="btn-send">Send</button>
            <button type="reset" id="btn-clear">Clear</button>
          </div>
        </form>
      </div>
      <div class="col d-flex flex-column ">
        <img src="https://erin-caitlin.github.io/portfolio-images/VuePortfolio/image19.jpg" alt="reach-me" class="img-fluid w-50 shadow rounded-top mx-auto" loading="lazy">
        <div class=" w-50 mx-auto ">
          <div class="d-flex gap-3" id="contact">
            <i class="bi bi-phone"></i>
            <p class="lead">066 267 3498</p>
          </div>
          <div class="d-flex gap-3" id="contact">
            <i class="bi bi-envelope"></i>
            <p class="lead">erinwilliamscat@gmail.com</p>
          </div>
          <div class="d-flex gap-3" id="contact">
            <i class="bi bi-geo-alt"></i>
            <p class="lead">Mitchells Plain, Cape Town</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  width: 95%;
}

</style>