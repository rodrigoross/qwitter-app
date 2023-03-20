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

const props = defineProps<{
  qweets: {
    content: string;
    date: number;
  }[];
}>();

const qweets = ref(props.qweets);

function relativeDate(date: number): string {
  return formatDistance(date, new Date());
}
</script>
