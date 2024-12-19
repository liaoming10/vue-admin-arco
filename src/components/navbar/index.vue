<template>
  <div class="navbar">
    <div class="left-side">
      <a-space>
        <img
          alt="logo"
          src="//p3-armor.byteimg.com/tos-cn-i-49unhts6dw/dfdba5317c0c20ce20e64fac803d52bc.svg~tplv-49unhts6dw-image.image"
        />
        <a-typography-title :heading="5" style="margin: 0; font-size: 18px">
          Arco Pro
        </a-typography-title>
        <icon-menu-fold v-if="false" style="font-size: 22px; cursor: pointer"></icon-menu-fold>
      </a-space>
    </div>
    <div class="center-side">
      <Menu v-if="false"></Menu>
    </div>
    <ul class="right-side">
      <li>
        <a-tooltip :content="$t('settings.search')">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-search />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.language')">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-language />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.navbar.theme.toDark')">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-moon-fill />
            </template>
          </a-button>
        </a-tooltip>
      </li>

      <li>
        <a-tooltip :content="$t('settings.navbar.alerts')">
          <div class="message-box-trigger">
            <a-badge :count="9" dot>
              <a-button class="nav-btn" type="outline" :shape="'circle'">
                <icon-notification />
              </a-button>
            </a-badge>
          </div>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.navbar.screen.toExit')">
          <a-button class="nav-btn" type="outline" :shape="'circle'">
            <template #icon>
              <icon-fullscreen />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-tooltip :content="$t('settings.title')">
          <a-button
            class="nav-btn"
            type="outline"
            :shape="'circle'"
          >
            <template #icon>
              <icon-settings />
            </template>
          </a-button>
        </a-tooltip>
      </li>
      <li>
        <a-dropdown trigger="click">
          <a-avatar
            :size="32"
            :style="{ marginRight: '8px', cursor: 'pointer' }"
          >
            <img alt="avatar"  />
          </a-avatar>
          <template #content>
            <a-doption>
              <a-space >
                <icon-tag />
                <span>
                  {{ $t('messageBox.switchRoles') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="$router.push({ name: 'Info' })">
                <icon-user />
                <span>
                  {{ $t('messageBox.userCenter') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space @click="$router.push({ name: 'Setting' })">
                <icon-settings />
                <span>
                  {{ $t('messageBox.userSettings') }}
                </span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space >
                <icon-export />
                <span>
                  {{ $t('messageBox.logout') }}
                </span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import Menu from '@/components/menu/index.vue'
</script>

<style lang="less" scoped>
.navbar {
  display: flex;
  height: 100%;
  justify-content: space-between;
  background-color: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.left-side {
  padding: 20px;
  display: flex;
  align-items: center;
}
.center-side {
  display: flex;
  flex: 1;
}
.right-side {
  display: flex;
  padding-right: 20px;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
}
</style>
