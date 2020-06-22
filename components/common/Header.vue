<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <nuxt-link 
            to="/" 
            tag="b-nav-item"
            >
                Stock Trade
        </nuxt-link>
        <nuxt-link 
            to="/portfolio" 
            tag="b-nav-item"
        >
            portfolio
        </nuxt-link>
        <nuxt-link 
            to="/stocks" 
            tag="b-nav-item"
        >
            Stocks
        </nuxt-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="endDay">End Day</b-nav-item>
        <b-nav-item-dropdown text="Load & save" right>
          <b-dropdown-item @click="loadItem">Load</b-dropdown-item>
          <b-dropdown-item @click="saveItem">Save</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Funds : {{fund | currancy}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
computed : {
  fund() {
    return this.$store.getters.getFunds
  }
},
methods: {
  endDay() {
    this.$store.dispatch('randomizeStocks')
  },
  saveItem() {
    this.$store.dispatch('saveDataToStore')
  },
  loadItem() {
    this.$store.dispatch('loadDataToStore')
  }
}
}
</script>

<style>

</style>