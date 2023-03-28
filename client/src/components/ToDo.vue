<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
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
  name: 'ToDo',
  data() {
    return {
      title: 'Todo List',
      todoList: [
      ],
      newItem: ''
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.todoList.push({
          description: this.newItem,
          completed: false
        });
        this.newItem = '';
      }
    }
  }
};
</script>