<template>
  <div class="container">
    <Breadcrumb :items="['menu.form', 'menu.form.step']" />
    <a-spin :loading="loading" style="width: 100%">
      <a-card class="general-card">
        <template #title>
          {{ $t('stepForm.step.title') }}
        </template>
        <div class="wrapper">
          <a-steps v-model:current="step" style="width: 580px" line-less class="steps">
            <a-step :description="$t('stepForm.step.subTitle.baseInfo')">
              {{ $t('stepForm.step.title.baseInfo') }}
            </a-step>
            <a-step :description="$t('stepForm.step.subTitle.channel')">
              {{ $t('stepForm.step.title.channel') }}
            </a-step>
            <a-step :description="$t('stepForm.step.subTitle.finish')">
              {{ $t('stepForm.step.title.finish') }}
            </a-step>
          </a-steps>
          <keep-alive>
            <BaseInfo v-if="step === 1" @step-change="stepChange"></BaseInfo>
            <ChannelInfo v-else-if="step === 2" @step-change="stepChange"></ChannelInfo>
            <Success v-else-if="step === 3" @step-change="stepChange"></Success>
          </keep-alive>
        </div>
      </a-card>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import BaseInfo from './components/base-info.vue'
import ChannelInfo from './components/channel-info.vue'
import Success from './components/success.vue'

import useLoading from '@/hooks/loading'
import { BaseInfoModel, ChannelInfoModel, UnitChannelModel, submitChannelForm } from '@/api/form'
import { ref } from 'vue'

const { loading, setLoading } = useLoading(false)

const step = ref(1)

const submitModel = ref<UnitChannelModel>({} as UnitChannelModel)

const stepChange = (direction: number | string, model: BaseInfoModel | ChannelInfoModel) => {
  if (typeof direction === 'number') {
    step.value = direction
    return
  }

  if (direction === 'forward' || direction === 'submit') {
    submitModel.value = {
      ...submitModel.value,
      ...model,
    }
    if (direction === 'submit') {
      console.log('submit')
      submitForm()
      return
    }
    step.value += 1
  } else if (direction === 'backward') {
    step.value -= 1
  }
}

const submitForm = async () => {
  setLoading(true)
  try {
    await submitChannelForm({ ...submitModel.value })
    step.value = 3
    submitModel.value = {} as UnitChannelModel
  } catch (error) {
  } finally {
    setLoading(false)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 0 20px 20px 20px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-bg-2);
  padding: 64px 0;
  :deep(.arco-form) {
    .arco-form-item {
      &:last-child {
        margin-top: 20px;
      }
    }
  }
}
.steps {
  margin-bottom: 64px;
  display: flex;
}
</style>
