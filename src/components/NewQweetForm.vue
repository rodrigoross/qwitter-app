<template>
  <div class="q-py-lg q-px-sm row items-end q-col-gutter-md">
    <div class="col">
      <q-input
        class="new-qweet"
        bottom-slots
        v-model="newQweetContent"
        placeholder="What's happening"
        counter
        maxlength="280"
        autogrow
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img
              src="https://lh3.googleusercontent.com/ogw/AAEL6shwqaCkwmRyRk-iUohVdp67AwH9p5glHNTvrWfTxQ=s64-c-mo"
            />
          </q-avatar>
        </template>
      </q-input>
    </div>
    <div class="col col-shrink">
      <q-btn
        class="q-mb-lg"
        no-caps
        unelevated
        rounded
        color="primary"
        label="Qweet"
        :disable="!newQweetContent"
        @click="addNewQweet"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { addDoc, collection } from '@firebase/firestore';
import db from 'src/boot/firebase';
import { ref } from 'vue';
const newQweetContent = ref('');

const addNewQweet = async () => {
  let newQweet = {
    content: newQweetContent.value,
    date: Date.now(),
    liked: false,
  };

  // Adicionar registro em coleção
  const docRef = await addDoc(collection(db, 'qweets'), newQweet);

  console.log('Document written with ID: ', docRef.id);

  newQweetContent.value = '';
};
</script>

<style scoped lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4rem !important
</style>
