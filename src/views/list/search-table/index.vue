<template>
  <div class="container">
    <Breadcrumb :items="['menu.list', 'menu.list.searchTable']" />
    <a-card class="general-card" :title="$t('menu.list.searchTable')">
      <a-row>
        <a-col :flex="1">
          <a-form
            :model="formModel"
            :label-col-props="{ span: 6 }"
            :wrapper-col-props="{ span: 18 }"
          >
            <a-row :gutter="16">
              <a-col :span="8">
                <a-form-item field="number" :label="$t('searchTable.form.number')">
                  <a-input
                    v-model="formModel.number"
                    :placeholder="$t('searchTable.form.number.placeholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="name" :label="$t('searchTable.form.name')">
                  <a-input
                    v-model="formModel.name"
                    :placeholder="$t('searchTable.form.name.placeholder')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="contentType" :label="$t('searchTable.form.contentType')">
                  <a-select
                    v-model="formModel.contentType"
                    :options="contentTypeOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="filterType" :label="$t('searchTable.form.filterType')">
                  <a-select
                    v-model="formModel.filterType"
                    :options="filterTypeOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="createdTime" :label="$t('searchTable.form.createdTime')">
                  <a-range-picker v-model="formModel.createdTime" style="width: 100%" />
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <a-form-item field="status" :label="$t('searchTable.form.status')">
                  <a-select
                    v-model="formModel.status"
                    :options="statusOptions"
                    :placeholder="$t('searchTable.form.selectDefault')"
                  />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-col>
        <a-divider style="height: 84px" direction="vertical" />
        <a-col :flex="'86px'">
          <a-space direction="vertical" :size="18">
            <a-button type="primary" @click="search">
              <template #icon>
                <icon-search />
              </template>
              {{ $t('searchTable.form.search') }}
            </a-button>
            <a-button @click="reset">
              <template #icon>
                <icon-refresh />
              </template>
              {{ $t('searchTable.form.reset') }}
            </a-button>
          </a-space></a-col
        >
      </a-row>
      <a-divider style="margin-top: 0" />
      <a-row style="margin-bottom: 16px">
        <a-col :span="12">
          <a-space>
            <a-button type="primary">
              <template #icon>
                <icon-plus />
              </template>
              {{ $t('searchTable.operation.create') }}</a-button
            >
            <a-upload action="/">
              <template #upload-button>
                <a-button>
                  {{ $t('searchTable.operation.import') }}
                </a-button>
              </template>
            </a-upload>
          </a-space>
        </a-col>
        <a-col :span="12" style="display: flex; justify-content: flex-end; align-items: center">
          <a-space>
            <a-button>
              <template #icon>
                <icon-download />
              </template>
              {{ $t('searchTable.operation.download') }}
            </a-button>
            <a-tooltip :content="$t('searchTable.actions.refresh')">
              <div class="action-icon" @click="search"><icon-refresh size="18" /></div>
            </a-tooltip>
            <a-dropdown @select="handleSelectDensity">
              <a-tooltip :content="$t('searchTable.actions.density')">
                <div class="action-icon"><icon-line-height size="18" /></div>
              </a-tooltip>
              <template #content>
                <a-doption
                  v-for="item in densityList"
                  :key="item.value"
                  :value="item.value"
                  :class="{ active: item.value === size }"
                >
                  <span>{{ item.name }}</span>
                </a-doption></template
              >
            </a-dropdown>
            <a-tooltip>
              <a-popover>
                <div class="action-icon"><icon-settings size="18" /></div>
                <template #content>
                  <div id="tableSetting">
                    <div></div>
                  </div>
                </template>
              </a-popover>
            </a-tooltip>
          </a-space>
        </a-col>
      </a-row>
      <a-table
        row-key="id"
        :bordered="false"
        :data="renderData"
        :pagination="pagination"
        :loading="loading"
        :columns="columns"
        @page-change="onPageChange"
      >
        <template #index="{ rowIndex }">{{
          pagination.pageSize * (pagination.current - 1) + rowIndex + 1
        }}</template>
        <template #contentType="{ record }">
          <a-space>
            <a-avatar v-if="record.contentType === 'img'" :size="16" shape="square">
              <img
                alt="avatar"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/581b17753093199839f2e327e726b157.svg~tplv-49unhts6dw-image.image"
              />
            </a-avatar>
            <a-avatar
              v-else-if="record.contentType === 'horizontalVideo'"
              :size="16"
              shape="square"
            >
              <img
                alt="avatar"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77721e365eb2ab786c889682cbc721c1.svg~tplv-49unhts6dw-image.image"
              />
            </a-avatar>
            <a-avatar v-else :size="16" shape="square">
              <img
                alt="avatar"
                src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/ea8b09190046da0ea7e070d83c5d1731.svg~tplv-49unhts6dw-image.image"
              />
            </a-avatar>
            {{ $t(`searchTable.form.contentType.${record.contentType}`) }}
          </a-space>
        </template>
        <template #filterType="{ record }">
          {{ $t(`searchTable.form.filterType.${record.filterType}`) }}
        </template>
        <template #status="{ record }">
          <span v-if="record.status === 'offline'" class="circle"></span>
          <span v-else class="circle pass"></span>
          {{ $t(`searchTable.form.status.${record.status}`) }}
        </template>
        <template #operations>
          <a-button type="text" size="small">
            {{ $t('searchTable.columns.operations.view') }}
          </a-button>
        </template>
      </a-table>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed, reactive } from 'vue'
import useLoading from '@/hooks/loading'
import { queryPolicyList, PolicyParams, PolicyRecord } from '@/api/list'
import type { Pagination } from '@/types/global'
import type { SelectOptionData } from '@arco-design/web-vue/es/select/interface'
import type { TableColumnData } from '@arco-design/web-vue/es/table/interface'

const { t } = useI18n()
const { loading, setLoading } = useLoading(false)

type SizeProps = 'mini' | 'small' | 'medium' | 'large'

const contentTypeOptions = computed<SelectOptionData[]>(() => [
  {
    label: t('searchTable.form.contentType.img'),
    value: 'img',
  },
  {
    label: t('searchTable.form.contentType.horizontalVideo'),
    value: 'horizontalVideo',
  },
  {
    label: t('searchTable.form.contentType.verticalVideo'),
    value: 'verticalVideo',
  },
])
const filterTypeOptions = computed<SelectOptionData[]>(() => [
  {
    label: t('searchTable.form.filterType.artificial'),
    value: 'artificial',
  },
  {
    label: t('searchTable.form.filterType.rules'),
    value: 'rules',
  },
])
const statusOptions = computed<SelectOptionData[]>(() => [
  {
    label: t('searchTable.form.status.online'),
    value: 'online',
  },
  {
    label: t('searchTable.form.status.offline'),
    value: 'offline',
  },
])

const size = ref<SizeProps>('medium')

const densityList = computed(() => [
  {
    name: t('searchTable.size.mini'),
    value: 'mini',
  },
  {
    name: t('searchTable.size.small'),
    value: 'small',
  },
  {
    name: t('searchTable.size.medium'),
    value: 'medium',
  },
  {
    name: t('searchTable.size.large'),
    value: 'large',
  },
])

const handleSelectDensity = (
  density: string | number | Record<string, any> | undefined,
  e: Event,
) => {
  size.value = density as SizeProps
}

const generateFormModel = () => {
  return {
    number: '',
    name: '',
    contentType: '',
    filterType: '',
    createdTime: [],
    status: '',
  }
}
const formModel = ref(generateFormModel())

const search = () => {
  fetchData({
    ...basePagnation,
    ...formModel.value,
  } as unknown as PolicyParams)
}

const reset = () => {
  formModel.value = generateFormModel()
}

type Column = TableColumnData & { checked: boolean }

const columns = computed<TableColumnData[]>(() => {
  return [
    {
      title: t('searchTable.columns.index'),
      dataIndex: 'index',
      slotName: 'index',
    },
    {
      title: t('searchTable.columns.number'),
      dataIndex: 'number',
    },
    {
      title: t('searchTable.columns.name'),
      dataIndex: 'name',
    },
    {
      title: t('searchTable.columns.contentType'),
      dataIndex: 'contentType',
      slotName: 'contentType',
    },
    {
      title: t('searchTable.columns.filterType'),
      dataIndex: 'filterType',
    },
    {
      title: t('searchTable.columns.count'),
      dataIndex: 'count',
    },
    {
      title: t('searchTable.columns.createdTime'),
      dataIndex: 'createdTime',
    },
    {
      title: t('searchTable.columns.status'),
      dataIndex: 'status',
      slotName: 'status',
    },
    {
      title: t('searchTable.columns.operations'),
      dataIndex: 'operations',
      slotName: 'operations',
    },
  ]
})

const cloneColumns = ref<Column[]>([])
const showColumns = ref<Column[]>([])

const basePagnation: Pagination = {
  current: 1,
  pageSize: 20,
}

const pagination = reactive<Pagination>({
  ...basePagnation,
})

const renderData = ref<PolicyRecord[]>([])

const onPageChange = (current: number) => {
  fetchData({ ...basePagnation, current })
}

const fetchData = async (params: PolicyParams = { current: 1, pageSize: 10 }) => {
  setLoading(true)
  try {
    const { data } = await queryPolicyList(params)
    renderData.value = data.list
    pagination.current = params.current
    pagination.total = data.total
  } catch (error) {
  } finally {
    setLoading(false)
  }
}
fetchData()
</script>

<style lang="less" scoped>
.container {
  padding: 0 20px 20px 20px;
}
.action-icon {
  margin-left: 12px;
  cursor: pointer;
}
.active {
  color: #0960bd;
  background-color: #e3f4fc;
}
</style>
