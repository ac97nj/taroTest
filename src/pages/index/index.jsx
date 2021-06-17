import {useState} from 'react'
import {Text, View} from '@tarojs/components'
import {PostCard, PostForm} from '../../components'
import './index.scss'

import {AtFab, AtFloatLayout, AtMessage} from 'taro-ui'

export default function Index() {

  const [posts, setPosts] = useState([{
    title: '泰罗奥特曼',
    content: '我曾经很喜欢奥特曼'
  }])
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')
  const [isOpened, setIsOpened] = useState(false)

  // handleSubmit={e => this.handleSubmit(e)}

  function handleSubmit(e) {
    e.preventDefault()
    // posts 是一个数组,所以要用concat来连接
    const newPosts = posts.concat({title: formTitle, content: formContent})
    setPosts(newPosts)
    setFormTitle('')
    setFormContent('')

    Taro.atMessage({
      message: '恭喜,文章发表成功',
      type: 'success'
    })

  }

  return (
    <View className="index">
      {posts.map((item, index) => (
        <PostCard
          key={index} title={item.title} content={item.content}
          isList
        />
      ))}
      <AtFloatLayout
        isOpened={isOpened}
        title="发新文章"
        onClose={() => setIsOpened(false)}
      >
        <PostForm
          formTitle={formTitle}
          formContent={formContent}
          handleSubmit={e => handleSubmit(e)}
          handleTitleInput={e => setFormTitle(e.target.value)}
          handleContentInput={e => setFormContent(e.target.value)}
        />
      </AtFloatLayout>
      <View className="post-button">
        <AtFab onClick={ ()=>setIsOpened(true) }>
          <Text className="at-fab__icon at-icon at-icon-edit">
          </Text>
        </AtFab>
      </View>
    </View>
  )

}








