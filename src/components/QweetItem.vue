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
        <span class="text-grey-7">
          @rodrigoross
          <br class="lt-md" />
          &bull;
          {{ relativeDate(qweet.date) }}
        </span>
      </q-item-label>
      <q-item-label class="qweet-content text-body1">
        {{ qweet.content }}
      </q-item-label>
      <div class="row justify-between q-mt-sm qweet-icons">
        <q-btn flat round color="grey" size="sm" icon="far fa-comment" />
        <q-btn flat round color="grey" size="sm" icon="fas fa-retweet" />
        <q-btn
          flat
          round
          :color="qweet.liked ? 'red' : 'grey'"
          size="sm"
          :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
        />
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
  </q-item>
</template>

<script setup lang="ts">
import { deleteDoc, doc } from '@firebase/firestore';
import { formatDistance } from 'date-fns';
import db from 'src/boot/firebase';
import { Qweet } from 'src/types/qweet';
import { ref, PropType } from 'vue';

const props = defineProps({
  qweet: {
    type: Object as PropType<Qweet>,
    required: true,
  },
});

const qweet = ref(props.qweet);

function relativeDate(date: number): string {
  return formatDistance(date, new Date());
}

function deleteQweet(qweet: Qweet) {
  deleteDoc(doc(db, 'qweets', qweet.id)).catch((err) => {
    console.error(err);
  });
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
