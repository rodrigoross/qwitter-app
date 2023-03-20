<template>
  <q-list>
    <qweet-item v-for="qweet in qweets" :key="qweet.date">
      <template #author> Rodrigo Ross </template>
      <template #handle> @rodrigoross </template>
      <template #content>
        {{ qweet.content }}
      </template>
      <template #time>
        {{ relativeDate(qweet.date) }}
      </template>
    </qweet-item>
  </q-list>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QweetItem from 'src/components/QweetItem.vue';
import { formatDistance } from 'date-fns';

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

function relativeDate(date: number): string {
  return formatDistance(date, new Date());
}
</script>
