<template>
  <q-list>
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut"
    >
      <qweet-item
        v-for="qweet in qweets"
        :key="qweet.date"
        :qweet="qweet"
        @delete-qweet="deleteSomeQweet"
      />
    </transition-group>
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

const emit = defineEmits(['delete-qweet']);

function relativeDate(date: number): string {
  return formatDistance(date, new Date());
}

function deleteSomeQweet(qweet: any) {
  emit('delete-qweet', qweet);
}
</script>
