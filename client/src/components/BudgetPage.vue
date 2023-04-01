<template>
  <div>
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="budget in budgetData" :key="budget._id">
        {{ budget.name }}, ${{ budget.price }}
      </li>
    </ul>
    <form @submit.prevent="addItem">
      <input type="text" placeholder="Item name" v-model="budgetName" required>
      <input type="value" placeholder="price per month" v-model="budgetPrice" required>
      <button @click="addBudgetItem">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '../globals'


export default {
  name: 'BudgetPage',
  data() {
    return {
      title: 'Budget',
      budgetName: '',
      budgetPrice: null,
    };
  },
  props: {
    budgetData: Object,
    userId: String,
    getBudget: Function
  },
  methods: {
    async addBudgetItem() {
      const data = {
        name: this.budgetName,
        price: this.budgetPrice,
        userId: this.userId
      }
      await axios.post(`${BASE_URL}budget`, data)
      this.budgetName = '',
        this.budgetPrice = null
      this.getBudget()
    }
  }
};
</script>