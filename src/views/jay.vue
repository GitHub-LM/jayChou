<template>
  <Layout class="lay">
    <Header>
      <menu-Item></menu-Item>
    </Header>
    <Content>
      <router-view></router-view>
    </Content>
    <Footer class="layout-footer-center">© JayChou *******限公司 *******号</Footer>
  </Layout>
</template>
<script>
import menuItem from '@/components/menuItem.vue'
export default {
  data () {
    return {
      name: 'jay'
    }
  },
  components: {
    menuItem
  }
}
</script>
<style>
.lay {
  width: 100%;
  height: 560px;
  background-attachment: fixed;
  background-size: 100%;
}
.ivu-menu-light {
  background: none;
}
</style>
