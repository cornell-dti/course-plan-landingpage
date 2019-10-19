<template>
  <div class="landing">
    <header>
      <div class="banner">
      <h1 class="title">{{ appName }}</h1>
      </div>
    </header>
    
    <main>
    <div class="landing-content">
      <div class="landing-imageWrapper">
        <img class="landing-image" src="@/assets/image.png" alt="walking man" />
      </div>
      <div class="landing-wrapper">
        <h2 class="landing-header">{{ header1 }}</h2>
        <div class="landing-body">
          <span class="landing-text">{{ body1 }}</span>
          <span class="landing-text landing-text--bold">{{ appName }}</span>
          <span class="landing-text">{{ body2 }}</span>
        </div>
        <div class="landing-imageWrapper--mobile">
          <img class="landing-image" src="@/assets/image.png" alt="walking man" />
        </div>
        <h3 class="landing-subHeader">{{ header2 }}</h3>
        <form id="form" class="landing-form" v-on:submit.prevent="addUser">
          <div class="landing-inputWrapper">
            <label class="landing-input-label" for="emailInput">Email</label>
            <input class="landing-input" name="emailInput" id="emailInput" placeholder="Your School Email" v-model="newUser.email" />
            <input type="submit" class="landing-button" name="emailButton" value = "Get Early Access" />
          </div>
        </form>
      </div>
    </div>
    </main>
  </div>
</template>

<script>
import firebaseConfig from '../firebaseConfig'

let emailsCollection = firebaseConfig.emailsCollection;

export default {
  name: 'HelloWorld',
  props: {
    appName: String,
    header1: String,
    header2: String,
    body1: String,
    body2: String
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
  color: #2F3676;
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
  color: #757575;
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
  margin-bottom: 2rem;
}

.landing-input {
  padding-left: .75rem;
  padding-right: .75rem;
  border: 2px #2F3676 solid;
  border-radius: 5px;
  height: 59px;
  width: -webkit-fill-available;
  margin-right: 30px;
  font-size: 18px;
  color: #2F3676;
  font-family: OpenSans;
}

.landing-input-label{
  display: none;
}

.landing-button {
  text-transform: uppercase;
  width: 190px;
  height: 59px;
  background: #2F3676;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;


  padding-left: 20px;
  padding-right: 20px;

  font-size: 18px;
  font-weight: bold;
  font-family: OpenSansBold;
}

.landing-button:hover {
  background-color: #121745;
}

.landing-button:focus {
  background-color: #121745;
}

.landing-button:active {
  background-color: #121745;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #2F3676;
  text-transform: uppercase;
  opacity: 1; /* Firefox */
  font-size: 18px;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #2F3676;
  text-transform: uppercase;
  font-size: 18px;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #2F3676;
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
    width: 100%;
  }

  .landing-input {
    width: auto;
    margin-right: 0;
    height: 59px;
  }

  .landing-button {
    width: auto;
    height: 59px;
    margin-top: .50rem;
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
