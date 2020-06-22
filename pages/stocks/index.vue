<template>
  <b-container>
      <b-row class="stock-card-div">
            <b-col 
                class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 stock-card"
                v-for="(stock,index) in stocks" :key="index"
            >
                <Card  
                    :stock ="stock" 
                    varient = "success" 
                    placeholder = "Buy a stock"
                />
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import Card from '~/components/common/Card.vue'
export default {
    created() {
        this.$store.dispatch('initStocks')
    },
    computed: {
        stocks() {
            return this.$store.getters.getStocks
        }
    },
    components: {
        Card
    }
}
</script>

<style scoped>
.stock-card {
    margin-bottom: 20px;
}
.stock-card-div {
    margin-top: 20px;
}
</style>