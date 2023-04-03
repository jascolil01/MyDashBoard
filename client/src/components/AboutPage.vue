<template>
  <div class="galaxy">
    <h1 class="About">Hello There</h1>
    <h2>My name is Joshua Ascolillo, this is my Capstone project for General Assembly</h2>
    <p>Ever since I started this program a couple of months ago I have grown my passion for technology and programming</p>
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
          src='https://www.pngkey.com/png/detail/15-154826_png-file-email-icon-vector-circle.png' />
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
