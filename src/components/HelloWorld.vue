<template>
  <div class="landing">
    <header>
      <div class="banner">
      <h1>{{ msg }}</h1>
      </div>
    </header>
    
    <div class="landing-content">
      <div class="landing-imageWrapper">
        <img class="landing-image" src="@/assets/image.png" />
      </div>
      <div class="landing-contentWrapper">
        <h2 class="landing-header">Don't let your schedule overwhelm you</h2>
        <div class="landing-body">
          <span class="landing-text">
            Have you thought about your 4 year plan in College? What classes you need to take? 
            Want to take? With
          </span>
          <span class="landing-text landing-text--bold">Course Plan</span>
          <span class="landing-text">, track your requirements and plan your classes at Cornell smarter & easier! 
            Gain early access by filling out your email below and help us grow into what you need!
          </span>
        </div>
        <input/>
        <button class="landing-button">Get Early Access</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-family: Avenir;
  font-size: 40px;
  line-height: 55px;
  color: #FF7979;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  text-transform: uppercase;
  color: rgb(88, 88, 88);
}
a {
  color: #42b983;
}

.landing-content {
  display: flex;
}

.landing-image {
  max-width: 33%;
}

.landing-body {
  margin-bottom: .5rem;
}

.landing-text--bold {
  font-weight: bold;
}

.landing-button {
  text-transform: uppercase;
}
</style>
