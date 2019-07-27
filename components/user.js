// components/user.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    nickname: ''
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleUserInfo: function(e) {
      this.setData({ nickname: e.detail.userInfo.nickName })
    }
  }
})
