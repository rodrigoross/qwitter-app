<template>
  <q-item class="qweet q-py-md">
    <q-item-section avatar top>
      <q-avatar>
        <img
          src="https://lh3.googleusercontent.com/ogw/AAEL6shwqaCkwmRyRk-iUohVdp67AwH9p5glHNTvrWfTxQ=s64-c-mo"
        />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-subtitle1">
        <strong> Rodrigo Ross </strong>
        <span class="text-grey-7"> @rodrigoross </span>
      </q-item-label>
      <q-item-label class="qweet-content text-body1">
        {{ qweet.content }}
      </q-item-label>
      <div class="row justify-between q-mt-sm qweet-icons">
        <q-btn flat round color="grey" size="sm" icon="far fa-comment" />
        <q-btn flat round color="grey" size="sm" icon="fas fa-retweet" />
        <q-btn flat round color="grey" size="sm" icon="far fa-heart" />
        <q-btn
          flat
          round
          color="grey"
          size="sm"
          icon="fas fa-trash"
          @click="deleteQweet(qweet)"
        />
      </div>
    </q-item-section>

    <q-item-section side top>
      <slot name="time" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['delete-qweet']);
const props = defineProps<{
  qweet: {
    content: string;
    date: number;
  };
}>();

const qweet = ref(props.qweet);

function deleteQweet(qweet: any) {
  emit('delete-qweet', qweet);
}
</script>

<style scoped lang="sass">
.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px

.qweet:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
