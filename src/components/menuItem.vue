<template>
  <Menu mode="horizontal" active-name="1">
    <img class="layout-logo" src="../images/logo.png" alt="jay">
    <MenuItem :name="item.id" v-for="item in menuList" :key="item.id" :to="item.path">
    <Icon :type="item.icon" />
    <span style="color:#fff">{{item.title}}</span>
    </MenuItem>
  </Menu>
</template>

<script>
export default {
  data () {
    return {
      menuList: [{
        title: '首頁',
        id: '1',
        icon: 'logo-snapchat',
        path: '/home'
      },
      {
        title: '音樂',
        id: '2',
        icon: 'ios-skip-forward',
        path: '/music'
      },
      {
        title: '商城',
        id: '3',
        icon: 'ios-shirt',
        path: '/mall'
      },
      {
        title: '資訊',
        id: '4',
        icon: 'md-text',
        path: '/news'
      },
      {
        title: '影視',
        id: '5',
        icon: 'logo-youtube',
        path: '/video'
      }]
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
.layout-logo {
  width: 38px;
  height: 38px;
  display: inline-block;
  position: absolute;
  left: 0;
  left: -40px;
  top: 13px;
}
</style>
