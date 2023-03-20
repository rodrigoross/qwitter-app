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
import { ref, onMounted } from 'vue';
import QweetItem from 'src/components/QweetItem.vue';
import { Qweet } from 'src/types/qweet';
import db from 'src/boot/firebase';
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';

const emit = defineEmits(['delete-qweet']);
const qweets = ref<Qweet[]>([]);

function deleteSomeQweet(qweet: any) {
  emit('delete-qweet', qweet);
}

onMounted(() => {
  const q = query(collection(db, 'qweets'), orderBy('date', 'asc'));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      let qweetChange = change.doc.data();

      if (change.type === 'added') {
        console.log('New: ', qweetChange);
        qweets.value.unshift(qweetChange);
      }
      if (change.type === 'modified') {
        console.log('Modified: ', change.doc.data());
      }
      if (change.type === 'removed') {
        console.log('Removed: ', change.doc.data());
      }
    });
  });
});
</script>
