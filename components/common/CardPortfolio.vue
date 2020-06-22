<template>
    <b-card
        border-variant="warning"
        :header = "'Price : ' + stock.price + ' | Quantity: ' + stock.quantity + '  | Name: ' + stock.name "
        header-bg-variant="warning"
        header-border-variant="warning"
        header-text-variant="white"
        align="center"
        :key="stock.id"
    >
        <b-form class="inside-card-form" @submit.prevent="sellShare">
            <b-form-input
                placeholder="Enter no of share for sell"
                type="number"
                v-model="quantity"
            >
            </b-form-input>
            <b-button 
                variant="warning"
                type="submit"
                :disabled="quantity > stock.quantity || quantity*stock.price <= funds "
                >
                    Sell
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
        sellShare() {
            this.$store.dispatch('sellStocks',{
                stockId : this.stock.id,
                quantity : this.quantity,
                stockPrice : this.stock.price,
            })
            this.quantity = 0
        }
    },
    computed: {
        funds() {
            this.$store.getters.getFunds
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
  font-size: 18px;
}
.card-body {
  padding:2rem 1.25rem;
  display: flex;
    justify-content: center;
    align-items: center;
}
.card {
    height: 185px;
}

</style>