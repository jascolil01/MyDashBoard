<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>Your salary is ${{ userData.salary }}</h3>
    <ul>
      <li v-for="budget in budgetData" :key="budget._id">
        {{ budget.name }}, ${{ budget.price }}<div class='button' @click='handleDelete(budget._id)'>Remove Budget Item
        </div>
      </li>
    </ul>
    <div class="flex">
      <div v-if="this.seeSpending">
        <h2>${{ (userData.salary / 12).toFixed(2) }} is how much you have to spend per month</h2>
        <h2 v-if="this.total">${{ this.total }} is your total money spent per month</h2>
        <h2 v-else>No money spent throughout the month</h2>
        <h2>${{ this.difference }} is how much you have after bills</h2>
        <div class="flex">
          <div class='button' @click="seeSpending = false">Hide Monthly Data</div>
        </div>
      </div>
      <div class='button' v-else @click="handleConsole">See Monthly Data</div>
    </div>
    <form @submit.prevent="addItem">
      <input class='input' type="text" placeholder="Item name" v-model="budgetName" required>
      <input class='input' type="value" placeholder="price per month" v-model="budgetPrice" required>
      <div class="flex">
        <button type="submit" class='button' @click="addBudgetItem">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_URL } from '@/globals'



export default {
  name: 'BudgetPage',
  data() {
    return {
      title: 'Budget',
      budgetName: '',
      budgetPrice: null,
      total: null,
      difference: null,
      seeSpending: false
    };
  },
  props: {
    userData: Object,
    budgetData: Object,
    grabBudget: Function
  },
  mounted: async function () {
  },
  methods: {
    async addBudgetItem() {
      const data = {
        name: this.budgetName,
        price: this.budgetPrice,
        userId: this.userData._id
      }
      await axios.post(`${BASE_URL}/api/budget`, data)
      this.budgetName = '',
        this.budgetPrice = null
      this.grabBudget()
    },
    async handleConsole() {
      this.seeSpending = true
      let prices = []
      const res = await axios.get(`${BASE_URL}/api/budget/by_userId/${this.userData._id}`)
      let data = res.data.budget
      let arr = data.map((x) => {
        return prices.push(x.price)
      })
      console.log(arr)
      let sum = prices.reduce((x, y) => {
        return this.total = x + y
      })
      console.log(sum, "for testing")
      let plump = (this.userData.salary / 12) - sum
      this.difference = plump.toFixed(2)
    },
    async handleDelete(x) {
      await axios.delete(`${BASE_URL}/api/budget/delete_budget/${x}`)
      this.grabBudget()
    }
  }
};
</script>