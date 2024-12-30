<template>
  <a-card
    class="general-card chat-panel"
    :title="$t('monitor.title.chatPanel')"
    :bordered="false"
    :header-style="{ paddingBottom: '0' }"
    :body-style="{
      height: '100%',
      paddingTop: '16px',
      display: 'flex',
      flexFlow: 'column',
    }"
  >
    <a-space :size="8">
      <a-select default-value="all" style="width: 86px">
        <a-option value="all">
          {{ $t('monitor.chat.options.all') }}
        </a-option>
      </a-select>
      <a-input-search :placeholder="$t('monitor.chat.placeholder.searchCategory')">
      </a-input-search>
      <a-button type="text">
        <icon-download />
      </a-button>
    </a-space>

    <div class="chat-panel-content">
      <a-spin :loading="loading" :style="{ width: '100%' }">
        <ChatList :render-list="chatData"></ChatList>
      </a-spin>
    </div>
    <div class="chat-panel-footer">
      <a-space :size="8">
        <a-input
          ><template #suffix> <icon-face-smile-fill /> </template
        ></a-input>
        <a-button type="primary">{{ $t('monitor.chat.update') }}</a-button>
      </a-space>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import useLoading from '@/hooks/loading'
import ChatList from './chat-list.vue'
import { queryChatList, ChatRecord } from '@/api/message'
import { ref } from 'vue'

const { loading, setLoading } = useLoading(true)

const chatData = ref<ChatRecord[]>([])

const fetchChatData = async () => {
  try {
    const { data } = await queryChatList()
    chatData.value = data
  } catch (error) {
  } finally {
    setLoading(false)
  }
}

fetchChatData()
</script>

<style lang="less" scoped>
.chat-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--color-bg-2);

  &-content {
    flex: 1;
    margin: 20px 0;
  }
}
</style>
