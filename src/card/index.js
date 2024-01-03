/*
 * @Author: please
 * @Date: 2024-01-03 11:23:22
 * @LastEditors: please
 * @LastEditTime: 2024-01-03 11:52:00
 * @Description: 请填写简介
 */
//Component Object
Component({
  options: {
  },
  properties: {
    extClass: {
      type: String,
      value: ''
    },
    useSlot: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: 'dsda'
    },
    subTitle: {
      type: String,
      value: 'sass'
    },
    customContent: {
      type: Boolean,
      value: false
    },
    right: {
      type: Boolean,
      value: true
    },
    rightArrow: {
      type: Boolean,
      value: true
    },
    rightBtn: {
      type: Boolean,
      value: false
    },
    rightBtnText: {
      type: String,
      value: ''
    }
  }
})