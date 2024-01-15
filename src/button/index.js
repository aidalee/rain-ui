/*
 * @Author: please
 * @Date: 2024-01-15 17:16:46
 * @LastEditors: please
 * @LastEditTime: 2024-01-15 18:21:38
 * @Description: 请填写简介
 */
//Component Object
Component({
  properties: {
    customClass: {
      type:String,
      value:''
    },
    text:{
      type:String,
      value:'按钮'
    },
    disabled:{
      type:Boolean,
      value:false
    },
    width: {
      type:Number,
      value:634
    },
    height: {
      type:Number,
      value:92
    },
    radius: {
      type:Number,
      value:46
    },
    icon: {
      type:String,
      value:''
    },
    type: {
      type: String,
      value: 'primary'
    },
    fontSize: {
      type: Number,
      value: 32
    },
    fontWeight: {
      type: Number,
      value: 400
    },
  },
  data: {

  },
  methods: {
    
  },
  created: function(){

  },
  attached: function(){

  },
  ready: function(){

  },
  moved: function(){

  },
  detached: function(){

  },
});