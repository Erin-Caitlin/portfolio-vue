<template>
  <div class="container" id="contact-page">
    <h2 class="display-2 text-center text-white mb-4" data-aos="zoom-in-down">Reach Me</h2>
    
    <div class="contact-content d-flex flex-column flex-md-row align-items-center justify-content-between p-4 rounded shadow">
      
      <div class="contact-form me-md-4 mb-4 mb-md-0 col-12 col-md-6">
        <form action="https://formspree.io/f/mkgwnjva" method="POST">
          <div class="form-group mb-3">
            <label class="form-label text-white" for="name">First Name</label>
            <input type="text" name="name" placeholder="First Nname" id="name" class="form-control border-bottom">
          </div>
          <div class="form-group mb-3">
            <label class="form-label text-white" for="name">Last Name</label>
            <input type="text" name="name" placeholder="Last Name" id="name" class="form-control border-bottom">
          </div>
          <div class="form-group mb-3">
            <label class="form-label text-white" for="email">Email</label>
            <input type="email" name="email" placeholder="Email@gmail.com" id="email" class="form-control border-bottom">
          </div>
          <div class="form-group mb-4">
            <label class="form-label text-white" for="message">Message</label>
            <textarea name="message" placeholder="Type your message..." id="message" class="form-control border-bottom" rows="5"></textarea>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" id="btn-send" class="btn btn-dark me-2">Send</button>
            <button type="reset" id="btn-clear" class="btn btn-outline-dark">Clear</button>
          </div>
        </form>
      </div>

      <div class="contact-details col-12 col-md-5">
        <img src="https://erin-caitlin.github.io/portfolio-images/VuePortfolio/image19.jpg" alt="contact" class="img-fluid shadow rounded-top mb-4" loading="lazy">
        <div class="text-white">
          <div class="d-flex gap-3 align-items-center mb-3">
            <i class="bi bi-phone"></i>
            <p class="lead">066 267 3498</p>
          </div>
          <div class="d-flex gap-3 align-items-center mb-3">
            <i class="bi bi-envelope"></i>
            <p class="lead">erinwilliamscat@gmail.com</p>
          </div>
          <div class="d-flex gap-3 align-items-center">
            <i class="bi bi-geo-alt"></i>
            <p class="lead">Mitchells Plain, Cape Town</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#contact-page {
  padding: 2rem;
  color: #fff;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.12);
}

.contact-form, .contact-details {
  background-color: transparent;
}

.form-control {
  background-color: transparent;
  color: #ffffff42;
  border: none;
  border-bottom: 1px solid #fff;
}

.form-control:focus {
  box-shadow: none;
  border-color: #532823;
}

.btn-dark {
  background-color: #532823;
  border-color: #532823;
}

.btn-outline-dark {
  background-color: white;
  color: #532823;
  border-color: #532823;
}

.btn-outline-dark:hover {
  background-color: #532823;
  color: #fff;
}

img {
  border-radius: 0.5rem;
  width: 8rem; 
}

i {
  font-size: 1.5rem;
  color: #fff;
}

.contact-details {
  font-size: 1rem; 
}

.contact-details p {
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    padding: 1rem;
  }

  .contact-details {
    font-size: 0.9rem; 
  }

  .contact-details p {
    font-size: 1rem; 
  }

  .contact-details i {
    font-size: 1.25rem; 
  }
}
</style>
