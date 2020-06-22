<template>
  <b-container>
      <b-row class="stock-card-div">
            <b-col 
                class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 stock-card"
                v-for="(stock,index) in stocks" :key="index"
            >
                <CardPortfolio  :stock ="stock" />
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import CardPortfolio from '~/components/common/CardPortfolio.vue'
export default {
    components: {
        CardPortfolio
    },
    computed: { 
        stocks() {
            return this.$store.getters.stockPortfolio 
        }
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