<template>
  <div class="hello">
    <span>hihihi -- {{ name }}</span>
    
    {{ btnState ? 'This button is disabled!' : 'This button is active~' }}

    <!-- 点击事件 / 属性绑定 -->
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>
    <div class="holder">

      <ul>
        <!-- 循环 -->
        <li v-for="(data, index) in skills" :key="index">
          {{ index }}. {{ data.skill }}
        </li>
      </ul>

      <!-- 条件判断 -->
      <p v-if="skills.length > 1"> Your skills is greater than 1 :D</p>
      <p v-else> you got one skill only? :(</p>

      <!-- 只有在showAlert为true时 才会有alert类,两种写法-->
      <div v-bind:class="{ alert: showAlert, 'another-class': showClass }">v-bind:class 方式一</div>
      <div v-bind:class="alertObject">v-bind:class 方式二</div>

      <!-- 绑定样式(驼峰键) -->
      <div v-bind:style="{ backgroundColor: bgColor, height: bgHeight, width: bgWidth }">v-bind:style</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      name: 'Refresher',
      btnState: false,
      skills: [
        { "skill": "Vue" },
        { "skill": "Three" },
      ],
      showClass: true,
      showAlert: true,
      alertObject: {
        alert: true,
        'another-class': true
      },
      bgColor: 'yellow',
      bgHeight: '30px',
      bgWidth: '100%',

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style src="./skills.css" scoped></style> -->
<style scoped>
.hello {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.alert {
  background-color: yellow;
  width: 100%;
  height: 30px
}

.another-class {
  border: 2px solid black
}
</style>
