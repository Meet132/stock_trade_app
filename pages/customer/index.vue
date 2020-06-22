<template>
<div>
  <b-table
    id="customer-table"
    :items = "items"
    :per-page="perPage"
    :current-page="currentPage"
    :fields="fields"
  >
   <template v-slot:cell(actions)="row">
        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template v-slot:row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
  </b-table>
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="customer-table"
    ></b-pagination>
  </div>
</template>

<script>
export default {
    data() {
        return {
            items : [
                    { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
                    { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
                    { id: 3, first_name: 'Barney', last_name: 'Rubble' },
                    { id: 4, first_name: 'Betty', last_name: 'Rubble' },
                    { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
                    { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
                    { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
                    { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
                    { id: 10, first_name: 'Pearl', last_name: 'Slaghoople' },
                    { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
            ],
             fields: [
                {
                    key: 'last_name',
                    sortable: true
                },
                {
                    key: 'first_name',
                    sortable: false
                },
                {
                    key: 'actions',
                }
             ],
            currentPage : 1,
            perPage: 3
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    }
}
</script>

<style scoped>
.table thead th {
    border-bottom: 2px solid #dee2e6;
    text-align: center;
    background: blueviolet;
    color: aliceblue;
}

</style>