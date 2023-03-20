<template>
  <q-page>
    <new-qweet-form @new-qweet="pushNewQweet" />

    <q-separator class="divider" size="10px" color="grey-2" />

    <qweet-list :qweets="qweets" />
  </q-page>
</template>

<script setup lang="ts">
import NewQweetForm from 'src/components/NewQweetForm.vue';
import QweetList from 'src/components/QweetList.vue';
import { ref } from 'vue';

const qweets = ref([
  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. VeritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cumque aliquid doloremque ab nisi! Velit optio voluptate ducimus impedit eius, ea ipsa veniam qui sapiente! Animi neque aperiam dolores enim!',
    date: 1711653238224,
  },
  {
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. VeritatisLorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis cumque aliquid doloremque ab nisi! Velit optio voluptate ducimus impedit eius, ea ipsa veniam qui sapiente! Animi neque aperiam dolores enim!',
    date: 1711653238224,
  },
]);

function pushNewQweet(qweet: any) {
  qweets.value.unshift(qweet);
}
</script>

<style lang="sass">
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
