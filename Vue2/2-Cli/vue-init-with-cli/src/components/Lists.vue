<template>
    <div class="hello">
      <div class="holder">

        <!--监听submit事件并开启preventDefault防止提交导致页面刷新 -->
        <form @submit.prevent="addSkill">        
          <!-- v-model 创建输入元素的双向绑定 / v-validate 表单验证(调库) -->
          <input type="text" placeholder="Enter your skill..." v-model="skill" v-validate="'min:5'" name="skill">
          <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
        </form>

        <ul>
          <!-- 循环 -->
          <li v-for="(data, index) in skills" :key="index">
            {{ data.skill }}
          </li>
        </ul>

        <p>These are the skills that you possess.</p>
  
      </div>
    </div>
  </template>
  
<script>
export default {
  name: "ListsSection",
  data() {
    return {
      skill: "",
      skills: [
        { "skill": "Vue.js" },
        { "skill": "Frontend Developer" }
      ]
    }
  },
  methods: {
    addSkill() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.skills.push({ skill: this.skill })
          this.skill = ""
        } else {
          console.log("Not valid")
        }
      })
    }
  }

}
</script>

<style scoped>
.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}

.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
</style>
  