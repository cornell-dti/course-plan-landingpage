<template>
  <div class="landing">
    <header>
      <div class="banner">
      <h1 class="title">{{ msg }}</h1>
      </div>
    </header>
    
    <div class="landing-content">
      <div class="landing-imageWrapper">
        <img class="landing-image" src="@/assets/image.png" />
      </div>
      <div class="landing-wrapper">
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
        <div class="landing-imageWrapper--mobile">
          <img class="landing-image" src="@/assets/image.png" />
        </div>
        <h3 class="landing-subHeader">Track requirements. Build schedules. Plan smarter.</h3>
        <div class="landing-inputWrapper">
          <form id="form" class="landing-form" v-on:submit.prevent="addUser">
            <input class="landing-input" placeholder="Your School Email" v-model="newUser.email" />
            <input type="submit" class="landing-button">Get Early Access</input>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseConfig from '../firebaseConfig'

let emailsCollection = firebaseConfig.emailsCollection;

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  firebase: {
    users: emailsCollection
  },
  data() {
    return {
      newUser: {
        email: ''
      }
    }
  },
  methods: {
    addUser: function () {
      emailsCollection.add(this.newUser);
      this.newUser.email = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: Avenir;
  src: url("../assets/fonts/Avenir Roman.otf");
}

@font-face {
  font-family: AvenirBold;
  src: url("../assets/fonts/Avenir-Bold.ttf");
  font-weight: bold;
}

@font-face {
  font-family: OpenSans;
  src: url("../assets/fonts/OpenSans-Regular.ttf");
}

@font-face {
  font-family: OpenSansBold;
  src: url("../assets/fonts/OpenSans-Bold.ttf");
  font-weight: bold;
}

@font-face {
  font-family: AvenirNext;
  src: url("../assets/fonts/AvenirNextLTPro-Regular.otf");
}

@font-face {
  font-family: AvenirNextBold;
  src: url("../assets/fonts/AvenirNextLTPro-Bold.otf");
  font-weight: bold;
}

h1{
  color: #FF7979;
  position: absolute;
  height: 55px;
  left: 60px;
  top: 30px;

  font-family: Avenir;
  font-size: 40px;
  line-height: 55px;
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
  color: #000;
  text-align: left;
  margin-top: 13.5rem;
  margin-left: 7.5rem;
  margin-right: 7.5rem;
}

.landing-image {
  max-width: 21.5rem;
}

.landing-imageWrapper {
  margin-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.landing-imageWrapper--mobile {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.landing-header {
  font-size: 40px;
  font-family: AvenirBold;
  font-weight: bold;
}

.landing-body {
  margin-top: 3.5rem;
  color: #858585;
  font-size: 20px;
  line-height: 27px;
  font-family: AvenirNext;
}

.landing-text--bold {
  font-family: AvenirNextBold;
  font-weight: bold;
}

.landing-subHeader {
  margin-bottom: 2.5rem;
  font-size: 28px;
  font-family: AvenirNextBold;
  font-weight: bold;
}

.landing-inputWrapper {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  height: 59px;
  margin-bottom: 2rem;
}

.landing-input {
  padding: .75rem;
  border: 2px #FF7979 solid;
  border-radius: 5px;
  width: calc(100% / 3 * 2);
  margin-right: 30px;
  font-size: 18px;
  color: #FF7979;
  font-family: OpenSans;
}

.landing-button {
  text-transform: uppercase;
  width: calc(100% / 3);
  background: #FF7979;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding-left: 10px;
  padding-right: 10px;

  font-weight: bold;
  font-family: OpenSansBold;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #FF7979;
  text-transform: uppercase;
  opacity: 1; /* Firefox */
  font-size: 18px;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #FF7979;
  text-transform: uppercase;
  font-size: 18px;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #FF7979;
  text-transform: uppercase;
  font-size: 18px;
}

@media (max-width: 639px) {
  .landing-header {
    text-align: center;
  }

  .landing-subHeader {
    text-align: center;
  }
}

@media (max-width: 1023px) {
  .landing-imageWrapper{
    display: none;
  }

  .landing-content {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
  }

  .landing-image {
    max-width: 15rem;
  }

  .landing-inputWrapper {
    display: flex;
    flex-direction: column;
  }

  .landing-input {
    width: 100%;
    margin-right: 0;
  }

  .landing-button {
    width: 100%;
  }

  .title {
    position: unset;
  }
}

@media (min-width: 1024px) {
  .landing-imageWrapper--mobile{
    display: none;
  }
}

</style>
