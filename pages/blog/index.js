import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

// TODO: ページをプリレンダリングする前に、
//       (APIのエンドポイントをコールして)`posts`を取得する必要あり
function Blog({ posts }) {
  return (
    <ul>
      { posts.map( post => (
        <li>{ post.title }</li>
      ))}
    </ul>
  )
}

// この関数はビルド時に呼ばれる
export async function getStaticProps() {
  // 投稿記事を取得する外部APIエンドポイントをコール
  const res = await fetch( 'http://localhost:3000/api/posts');
  const posts = await res.json();
  
  // { props: posts }を返すことで、ビルド時にBlogコンポーネントが
  // `posts`をpropとして受け取れる
  return {
    props: {
      posts
    }
  }
}

export default Blog;
