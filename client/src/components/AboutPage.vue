<template>
  <div class="galaxy">
    <h1 class="About">Hello,</h1>
    <h2>My name is Joshua Ascolillo, this is my Capstone project for General Assembly</h2>
    <p>I started this program at the beginning of the year, and my passionate for technology and programming has grown
      since</p>
    <div class="footer">
      <a class="about" href='https://github.com/jascolil01'>
        <img class='footerNavLink' alt=''
          src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' />
      </a>
      <a class="about" href='https://www.linkedin.com/in/joshuaascolillo/'>
        <img class='footerNavLink' alt=''
          src='https://static.vecteezy.com/system/resources/thumbnails/003/692/704/small/linkedin-american-business-logo-social-media-icon-black-pictogram-illustration-isolated-on-white-backgroud-free-vector.jpg' />
      </a>
      <a class="about" href='mailto:jayasco246@gmail.com'>
        <img class='footerNavLink' alt='mailimage'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/1200px-TK_email_icon.svg.png' />
      </a>
      <a class="about"
        href='https://docs.google.com/document/d/1H1LCocNK4BIiGpr6dYy-MCNim9gWq5TjJtGBq81BFyI/edit?usp=sharing'>
        <img class='footerNavLink' alt='resume'
          src='https://static.vecteezy.com/system/resources/previews/002/205/865/original/employee-resume-icon-free-vector.jpg' />
      </a>
    </div>
  </div>
</template>

<script>


export default {
  name: 'AboutPage',
  components: {

  }
}
</script>

<style>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.galaxy {
  font-size: 25px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 100px
}

.about {
  color: transparent;
  background-color: transparent
}
</style>
