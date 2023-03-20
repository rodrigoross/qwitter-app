<template>
  <q-page>
    <new-qweet-form />

    <q-separator class="divider" size="10px" color="grey-2" />

    <qweet-list />
  </q-page>
</template>

<script setup lang="ts">
import NewQweetForm from 'src/components/NewQweetForm.vue';
import QweetList from 'src/components/QweetList.vue';
</script>

<style lang="sass">
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
