<template>
  <div class="container">
    <h2 class="display-2 section-title animate__animated animate__fadeIn">About</h2>
    <div id="info">
      <div>
        <p class="lead">Here's a bit of background about myself: I graduated from Mondale High School in 2022, where I was first introduced to basic web development in Computer's Applications Technology. I received 99% in my last year of high school for our yearly Practical Assesment Task that included word documents, excel, database and designing an HTML website. Since then, my passion has driven me to pursue a career in software development.</p>
        <p class="lead">Over the past year, I've obtained a certificate for completing a 3-day photography course through RAD (Rise Above Development) and worked as a Customer Advisor at Sigma Connected (23rd March 2023 - 1st April 2024). In my time working at Sigma Connected, I was able to develop communication and interpersonal skills, along with the ability to work alone and various teams. As a driven and honest individual, I always strive to excel in any task that comes my way.</p>
        <p class="lead">Outside of my professional pursuits, I am a spiritual dancer with a lifelong passion, having started dancing in church at the age of 4 years old and attend the School of Esther, a monthly program that young girls can attend at church.</p>
        <p class="lead">I am currently a student at Life Choices Academy where I am completing a coding course. While I'm still a beginner, I'm commited to continuous learning and growth in the field. My ultimate goal is to become a skilled developer and make a meangingful impact in the industry and I'm excited to see what the future holds.</p>
      </div>
    </div>

    <h2 class="display-2 section-title animate__animated animate__fadeIn">Skills</h2>
    <div class="row gap-4 justify-content-center">
      <div class="skill-item">
        <div class="icon-container">
          <box-icon type='logo' name="html5" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">HTML</h4>
        </div>
      </div>
      <div class="skill-item">
        <div class="icon-container">
          <box-icon type='logo' name="css3" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">CSS</h4>
        </div>
      </div>
      <div class="skill-item">
        <div class="icon-container">
          <box-icon type='logo' name="bootstrap" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Bootstrap</h4>
        </div>
      </div>
      <div class="skill-item">
        <div class="icon-container">
          <box-icon type='logo' name="javascript" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Javascript</h4>
        </div>
      </div>
      <div class="skill-item">
        <div class="icon-container">
          <box-icon type='logo' name="vuejs" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Vue.JS</h4>
        </div>
      </div>
      <div class="skill-item">
        <div class="icon-container">
          <box-icon type='logo' name="nodejs" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Node.js</h4>
        </div>
      </div>
      <div class="skill-item">
        <div class="icon-container">
          <img src="https://erin-caitlin.github.io/all-images/VuePortfolio/programing.png" class="skill-icon">
          <h4 class="card-title">MySQL</h4>
        </div>
      </div>
      <div class="skill-item">
        <div class="icon-container">
          <box-icon type='logo' name="firebase" color="#532823b4" class="skill-icon"></box-icon>
          <h4 class="card-title">Firebase</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}

.section-title {
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
  gap: 40px; /* Corrected gap between skill items */
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
  width: 100%; /* Full width of the skill item */
  height: 100%; /* Full height of the skill item */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition */
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
    width: 180px; /* Slightly smaller on mobile */
    height: 180px; /* Keep it square */
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
    width: 160px; /* Even smaller on very small screens */
    height: 160px; /* Keep it square */
  }
}
</style>
