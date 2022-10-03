<template>
  <cv-header aria-label="Carbon tutorial">
    <cv-header-name prefix="IBM">Your Library Book</cv-header-name>

    <template slot="header-global">
      <cv-header-global-action aria-label="Notifications">
        <notification-20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="User avatar">
        <user-avatar-20 />
      </cv-header-global-action>
      <cv-header-global-action aria-label="App switcher">
        <app-switcher-20 />
      </cv-header-global-action>
    </template>
  </cv-header>
</template>

<script>
import { Notification20, UserAvatar20, AppSwitcher20 } from "@carbon/icons-vue";

export default {
  name: "HeaderBar",
  components: { Notification20, UserAvatar20, AppSwitcher20 },
};
</script>
