import Taro from '@tarojs/taro'
import {View} from "@tarojs/components";
import './index.scss'
import classNames from 'classnames'

export default function PostCard(props) {
  const handleClick = () => {
    if (props.isList) {
      const {title, content} = props
      Taro.navigateTo({
        url:`/pages/post/post?title=${title}&content=${content}`
      }).then(

      )
    }
  }
  // classNames('foo', { bar: true }); // => 'foo bar'
  // //classNames({ 'foo-bar': false }); // => ''
  // props.isList  为真时候 postcard__isList存在
  return (
    <View className={classNames('postcard',{postcard__isList: props.isList}) }

          onClick={handleClick}>
      <View className='post-title'>{props.title}</View>
      <View className='post-content'>{props.content}</View>
    </View>
  )
}
