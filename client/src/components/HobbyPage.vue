<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in hobby" :key="index">
        <input type="checkbox" v-model="item.completed">{{ item.description }}
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <input type="text" placeholder="Add new item" v-model="newItem">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HobbyPage',
  data() {
    return {
      title: 'Hobby Tracker',
      hobby: [
      ],
      newItem: ''
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.hobby.push({
          description: this.newItem,
          completed: false
        });
        this.newItem = '';
      }
    }
  }
};
</script>