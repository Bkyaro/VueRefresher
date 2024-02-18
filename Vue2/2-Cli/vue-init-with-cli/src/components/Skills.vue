<template>
  <div class="hello">
    <span>hihihi -- {{ name }}</span>
    
    {{ btnState ? 'This button is disabled!' : 'This button is active~' }}

    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key="index">
          {{ index }}. {{ data.skill }}
        </li>
      </ul>

      <p v-if="skills.length > 1"> Your skills is greater than 1 :D</p>
      <p v-else> you got one skill only? :(</p>

      <!-- 只有在showAlert为true时 才会有alert类 -->
      <div v-bind:class="{ alert: showAlert }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      name: 'Refresher',
      btnState: false,
      skills: [
        { "skill": "Vue" },
        { "skill": "Three" },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="./skills.css" scoped></style> -->
<style scoped>
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
}

a {
  color: #42b983;
}

.hello {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
