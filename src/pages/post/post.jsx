import Taro, {useRouter} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {PostCard} from '../../components'
import './post.scss'

export default function Post() {
  // useRouter() 等同于 getCurrentInstance().router 获取当前页面的路由参数
  const router = useRouter()
  const {params} = router

  return (
    <View className="post">
      <PostCard
        title={params.title}
        content={params.content}
      />
    </View>
  )

}

Post.config = {
  navigationBarTitleText: '帖子详情',
}
