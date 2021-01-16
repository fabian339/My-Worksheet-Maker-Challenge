
<template>
  <v-app>
    <createWorksheet />
  </v-app>
</template>

<script>
import createWorksheet from '@/components/createWorksheet.vue';

export default {
  name: 'App',

  components: {
    createWorksheet
  },

  data: () => ({
    //
  }),
};
</script>
