<template>
  <div class="container">
    <div class="container">
      <BaseTable></BaseTable>
    </div>   
  </div>
</template>
<script>
import Table1 from './components/Task.vue';
import BaseTable from './components/BaseTable.vue';

  export default {
    components: {
    Table1,
    BaseTable
  },
    data(){
      return {
      }
    }
  }
</script>

<style>
  body {
    color:black;
  }
</style>