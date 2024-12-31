<template>
  <a-card class="general-card" :title="$t('monitor.title.quickOperation')">
    <a-space :size="10" fill direction="vertical">
      <a-button long>
        {{ $t('monitor.quickOperation.changeClarity') }}
        <template #icon>
          <IconTags />
        </template>
      </a-button>
      <a-button long>
        {{ $t('monitor.quickOperation.switchStream') }}
        <template #icon>
          <IconSwap />
        </template>
      </a-button>
      <a-button long>
        {{ $t('monitor.quickOperation.removeClarity') }}
        <template #icon>
          <IconStop />
        </template>
      </a-button>
      <a-button long>
        {{ $t('monitor.quickOperation.pushFlowGasket') }}
        <template #icon>
          <IconArrowRight />
        </template>
      </a-button>
    </a-space>
  </a-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
