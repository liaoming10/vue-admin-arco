<template>
  <div :class="['chat-item', item.isCollect ? 'chat-item-collected' : '']">
    <a-space :size="4" direction="vertical" fill>
      <a-typography-text type="warning">
        {{ item.username }}
      </a-typography-text>
      <a-typography-text>
        {{ item.content }}
      </a-typography-text>
      <div class="chat-item-footer">
        <div class="chat-item-time">
          <a-typography-text type="secondary">
            {{ item.time }}
          </a-typography-text>
        </div>
        <div class="chat-item-actions">
          <div class="chat-item-actions-item">
            <icon-command />
          </div>
          <div class="chat-item-actions-item chat-item-actions-collect">
            <icon-star />
          </div>
        </div>
      </div>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { ChatRecord } from '@/api/message'

defineProps({
  item: {
    type: Object as PropType<ChatRecord>,
    required: true,
    default: () => ({}),
  },
})
</script>

<style lang="less" scoped>
.chat-item {
  padding: 8px;
  font-size: 12px;
  line-height: 20px;
  border: 2px;

  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-actions {
    display: flex;
    align-items: center;
    opacity: 0;

    &-item {
      cursor: pointer;
      height: 20px;
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--color-text-3);
      font-size: 14px;
      border-radius: 50%;

      &:hover {
        background-color: rgb(var(--gray-3));
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &-collected {
    .chat-item-actions-collect {
      color: rgb(var(--gold-6));
    }
  }

  &:hover {
    background-color: rgb(var(--gray-2));

    .chat-item-actions {
      opacity: 1;
    }
  }
}

</style>
