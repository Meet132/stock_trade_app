<template>
<b-container>
    <b-card
      border-variant="success"
      header="Trade or View your Portfolio"
      header-border-variant="success"
      header-text-variant="success"
      align="center"
      class="bcard"
    >
      <b-card-text>
          <h4>You may save & load your data</h4>
          <h4>Click on 'End Day' to begin new Day</h4>
          <hr />
          <h5>Your fund : {{fund | currancy}}</h5>
      </b-card-text>
    </b-card>
</b-container>
</template>

<script>

export default {
  computed: {
    fund() {
      return this.$store.getters.getFunds
    }
  }
}
</script>

<style scoped>
.bcard {
  margin-top: 25px;
}
.border-success.card-header.text-success {
  font-size: 32px;
}
</style>

