import {useState} from 'react'
import {View} from '@tarojs/components'
import {PostCard, PostForm} from '../../components'
import './index.scss'

export default function Index() {

  const [posts, setPosts] = useState([{
    title: '泰罗奥特曼',
    content: '我曾经很喜欢奥特曼'
  }])
  const [formTitle, setFormTitle] = useState('')
  const [formContent, setFormContent] = useState('')

  // handleSubmit={e => this.handleSubmit(e)}

  function handleSubmit(e) {
    e.preventDefault()
    // posts 是一个数组,所以要用concat来连接
    const newPosts = posts.concat({ title: formTitle, content: formContent })
    setPosts(newPosts)
    setFormTitle('')
    setFormContent('')
  }

  return (
    <View className="index">
      {posts.map((item, index) => (
        <PostCard
          key={index} title={item.title} content={item.content}
          isList
        />
      ))}
      <PostForm
        formTitle={formTitle}
        formContent={formContent}
        handleSubmit={e => handleSubmit(e)}
        handleTitleInput={e => setFormTitle(e.target.value)}
        handleContentInput={e => setFormContent(e.target.value)}
      />
    </View>
  )

}








