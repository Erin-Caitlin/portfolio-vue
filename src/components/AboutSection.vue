<template>
  <div class="container">
    <h2 class="display-2 section-title" data-aos="fade-in">About</h2>
    <div id="info">
      <div>
        <p class="lead">Here's a bit of background about myself: I graduated from Mondale High School in 2022, where I was first introduced to basic web development in Computer's Applications Technology. I received 99% in my last year of high school for our yearly Practical Assessment Task that included word documents, excel, database and designing an HTML website. Since then, my passion has driven me to pursue a career in software development.</p>
        <p class="lead">Over the past year, I've obtained a certificate for completing a 3-day photography course through RAD (Rise Above Development) and worked as a Customer Advisor at Sigma Connected (23rd March 2023 - 1st April 2024). In my time working at Sigma Connected, I was able to develop communication and interpersonal skills, along with the ability to work alone and various teams. As a driven and honest individual, I always strive to excel in any task that comes my way.</p>
        <p class="lead">Outside of my professional pursuits, I am a spiritual dancer with a lifelong passion, having started dancing in church at the age of 4 years old and attend the School of Esther, a monthly program that young girls can attend at church.</p>
        <p class="lead">I completed a 6-month full stack development course at Life Choices Academy, where I learned various programming languages and soft skills. This experience has given me a solid foundation in both front-end and back-end development. I'm eager to apply my skills in a professional setting and contribute to innovative projects. With my passion for technology and commitment to growth, I'm excited for the opportunities ahead.</p>
      </div>
    </div>

    <h2 class="display-2 section-title" data-aos="fade-in">Skills</h2>
    <div class="row gap-4 justify-content-center">
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <div class="icon-container">
          <box-icon type='logo' name="html5" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">HTML</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        <div class="icon-container">
          <box-icon type='logo' name="css3" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">CSS</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <div class="icon-container">
          <box-icon type='logo' name="bootstrap" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Bootstrap</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <div class="icon-container">
          <box-icon type='logo' name="javascript" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Javascript</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
        <div class="icon-container">
          <box-icon type='logo' name="vuejs" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Vue.JS</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <div class="icon-container">
          <box-icon type='logo' name="nodejs" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Node.js</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
        <div class="icon-container">
          <img src="https://erin-caitlin.github.io/all-images/VuePortfolio/programing.png" class="skill-icon">
          <h4 class="card-title">MySQL</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <div class="icon-container">
          <box-icon type='logo' name="firebase" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Firebase</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
        <div class="icon-container">
          <box-icon type='solid' name="palette" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Canva</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
        <div class="icon-container">
          <box-icon type='logo' name="figma" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Figma</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1300">
        <div class="icon-container">
          <box-icon type='logo' name="github" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Github</h4>
        </div>
      </div>
      <div class="skill-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
        <div class="icon-container">
          <box-icon type='logo' name="wordpress" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Wordpress</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';

export default {
  data() {
    return {
      isNavbarVisible: false,
    };
  },
  mounted() {
    AOS.init();
  },
  methods: {
    toggleNavbar() {
      this.isNavbarVisible = !this.isNavbarVisible;
    },
    handleLinkClick(event) {
      event.preventDefault();
      if (window.innerWidth <= 991) {
        this.isNavbarVisible = false;
      }

      const target = event.currentTarget.getAttribute('href');
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
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}

.section-title {
  margin-top:1rem;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 2.5rem;
  color: #532823;
  text-transform: uppercase;
}

#info {
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 70%;
  padding: 1.5rem;
  border-radius: 10px;
  background-color: #ffffff2f;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

#info p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.skill-item {
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 220px;
}

.icon-container {
  background-color: #ffffff2f;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.5rem;
  color: #532823;
}

.lead {
  font-size: 1rem;
  color: #666;
}

.skill-item:hover .icon-container {
  transform: translateY(-10px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  #info {
    width: 90%;
  }

  .skill-item {
    width: 180px;
    height: 180px;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .card-title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .skill-item {
    width: 160px;
    height: 160px;
  }
}
</style>
