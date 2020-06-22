<template>
    <b-card
        border-variant="success"
        :header = "stock.name + ' ' +'(Price :' + stock.price + ')'"
        header-bg-variant="success"
        header-border-variant="success"
        header-text-variant="white"
        align="center"
        :key="stock.id"
    >
        <b-form class="inside-card-form" @submit.prevent="buyShare">
            <b-form-input
                placeholder="Enter no of share for buy"
                type="number"
                v-model="quantity"
                required
            >
            </b-form-input>
            <b-button 
                variant="success"
                type="submit"
                :disabled="quantity <= 0 || quantity*stock.price > funds "
                >
                    Buy
            </b-button>
        </b-form>
    </b-card>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity : 0
        }
    },
    methods: {
        buyShare() {
            this.$store.dispatch('buyStocks',{
                stockId : this.stock.id,
                quantity : this.quantity,
                stockPrice : this.stock.price,
                stockName: this.stock.name
            })
            this.quantity = 0
        }
    },
    computed: {
        funds() {
            return this.$store.getters.getFunds
        }
    }
}
</script>

<style scoped>
.inside-card-form {
    display: flex;
    justify-content: space-around;
}
.form-control {
    margin-right: 10px;
}
.text-center{
  font-size: 25px;
}
.card-body {
  padding:2rem 1.25rem
}

</style>