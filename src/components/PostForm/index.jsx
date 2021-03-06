import Taro from '@tarojs/taro'
import {View, Form, Input, Textarea, Button, Text} from '@tarojs/components'
import './index.scss'

import { AtButton } from 'taro-ui'

export default function postForm(props) {

  // let AA = ()=>{
  //   this.onSubmit()
  // }

  return (
    <View>
      <View>添加新的帖子</View>
      <Form>

        <View className="from-main">
          <View className="form-hint">标题</View>
          <Input
            className="input-title"
            type="text"
            placeholder="点击输入标题"
            value={props.formTitle}
            onInput={props.handleTitleInput}
          />
          <View className="form-hint">正文</View>
          <Textarea
          placeholder="点击输入正文"
          className="input-content"
          value={props.formContent}
          onInput={props.handleContentInput}
          />
          <AtButton   formType="submit"  type={"primary"}
                   onClick={props.handleSubmit} >
            提交
          </AtButton >
        </View>

      </Form>
    </View>
  )
}

//•formTitle：当前编辑中帖子的标题
// •formContent：当前编辑中帖子的内容
// •handleSubmit：处理提交表单的回调函数
// •handleTitleInput：处理标题接收到用户输入时的回调函数
// •handleContentInput：处理内容接收到用户输入时的回调函数
