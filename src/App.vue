<template>
  <div id="app">
    <HelloWorld appName="Course Plan" header1="Don't let your schedule overwhelm you" body1="Have you thought about your 4 year plan in College? 
    What classes you need to take? Want to take? With " body2=", track your requirements and plan your classes at Cornell smarter & easier! 
    Gain early access by filling out your email below and help us grow into what you need!" header2="Track requirements. Build schedules. Plan smarter."/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
