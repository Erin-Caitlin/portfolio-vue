<template>
  <div class="container" id="contact-page">
    <h2 class="display-2 section-title animate__animated animate__fadeIn">Contact</h2>
    <div class="contact-content d-flex flex-column flex-md-row align-items-center justify-content-center p-4 rounded shadow">
      <div class="contact-form me-md-4 mb-4 mb-md-0 col-12 col-md-6">
        <form action="https://formspree.io/f/mdknrngb" method="POST">
          <div class="form-group mb-3 d-flex gap-2">
            <label class="form-label text-white" for="name"></label>
            <input type="text" name="name" placeholder="First Name" id="name" class="form-control border-bottom" required>
            <input type="text" name="lastname" placeholder="Last Name" id="lastname" class="form-control border-bottom" required>
          </div>
          <div class="form-group mb-3">
            <label class="form-label text-white" for="email"></label>
            <input type="email" name="email" placeholder="Email@gmail.com" id="email" class="form-control border-bottom" required>
          </div>
          <div class="form-group mb-4">
            <label class="form-label text-white" for="message"></label>
            <textarea name="message" placeholder="Type your message..." id="message" class="form-control border-bottom" rows="5" required></textarea>
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" id="btn-send" class="btn btn-dark me-2">Send</button>
            <button type="reset" id="btn-clear" class="btn btn-outline-dark">Clear</button>
          </div>
        </form>
      </div>

      <div class="contact-details col-12 col-md-5 text-left">
        <div class="text-white">
          <div class="d-flex gap-3 align-items-start mb-3">
            <i class="bi bi-phone"></i>
            <div>
              <h4>Contact number:</h4>
              <p class="lead">066 267 3498</p>
            </div>
          </div>
          <div class="d-flex gap-3 align-items-start mb-3">
            <i class="bi bi-envelope"></i>
            <div>
              <h4>Email:</h4>
              <p class="lead">erinwilliamscat@gmail.com</p>
            </div>
          </div>
          <div class="d-flex gap-3 align-items-start">
            <i class="bi bi-geo-alt"></i>
            <div>
              <h4>Location:</h4>
              <p class="lead">Mitchells Plain, Cape Town</p>
            </div>
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
.btn-dark:hover {
  background-color: #fff;
  color: #532823;
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

::placeholder {
  color: #fff;
}

i {
  padding: .5rem;
  font-size: 1.5rem;
  background-color: #532823;
  border-radius: 3rem;
  color: #fff;
}

.contact-details {
  font-size: 1rem;
  display: flex;
  justify-content: center; 
  text-align: left;
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

.section-title {
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  color: #532823;
  text-transform: uppercase;
  text-align: center;
}
</style>
