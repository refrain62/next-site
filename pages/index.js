import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Link from 'next/link'

import Header from './components/header'
import Content from './components/content'

export default function Home() {
  return (
    <Content>
      <Header title="へっだーたいとる"></Header>
      <h1 style={{backgroundColor : `red`}}>たいとる</h1>
      <p>学ぶ。ちゃんと</p>
      <div className={styles.mytitle}>Title</div>
      <Link href={`/about`}><button>あばうとページへ</button></Link>
    </Content>
    
  )
}
