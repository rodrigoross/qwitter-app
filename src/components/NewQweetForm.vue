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
            <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
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
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const newQweetContent = ref('');
</script>

<style scoped lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4rem !important
</style>
