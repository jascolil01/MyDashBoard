<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in budget" :key="index">
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
  name: 'BudgetPage',
  data() {
    return {
      title: 'Budget',
      budget: [
      ],
      newItem: ''
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.budget.push({
          description: this.newItem,
          completed: false
        });
        this.newItem = '';
      }
    }
  }
};
</script>