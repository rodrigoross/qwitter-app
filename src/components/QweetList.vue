<template>
  <q-list>
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut"
    >
      <qweet-item v-for="qweet in qweets" :key="qweet.id" :qweet="qweet" />
    </transition-group>
  </q-list>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import QweetItem from 'src/components/QweetItem.vue';
import { Qweet } from 'src/types/qweet';
import db from 'src/boot/firebase';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';

const qweets = ref<Qweet[]>([]);

onMounted(() => {
  const q = query(collection(db, 'qweets'), orderBy('date', 'asc'));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      let qweetChange: Qweet = {
        id: change.doc.id,
        ...change.doc.data(),
      };

      if (change.type === 'added') {
        console.log('New: ', qweetChange);
        qweets.value.unshift(qweetChange);
      }
      if (change.type === 'modified') {
        console.log('Modified: ', change.doc.data());

        const index = qweets.value.findIndex(
          (qweet) => qweet.id === qweetChange.id
        );

        if (index !== -1) {
          Object.assign(qweets.value[index], qweetChange);
        }
      }
      if (change.type === 'removed') {
        console.log('Removed: ', qweetChange);

        const index = qweets.value.findIndex(
          (qweet) => qweet.id === qweetChange.id
        );

        qweets.value.splice(index, 1);
      }
    });
  });
});
</script>
