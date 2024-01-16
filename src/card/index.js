/*
 * @Author: please
 * @Date: 2024-01-03 11:23:22
 * @LastEditors: please
 * @LastEditTime: 2024-01-16 11:52:56
 * @Description: 请填写简介
 */
//Component Object
Component({
  externalClasses: ['custom-class'],
  options: {
    // multipleSlots: true
  },
  properties: {
    useSlot: {
      type: Boolean,
      value: false
    },
    useInlineDescSlot: {
      type: Boolean,
      value: false
    },
    width: {
      type: Number,
      value: 750
    },
    radius: {
      type: Number,
      value: 20
    },
    title: {
      type: String,
      value: ''
    },
    value: {
      type: String,
      value: ''
    },
    inlineDesc: {
      type: String,
      value: ''
    }
  }
})