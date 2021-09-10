import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Link from 'next/link'

import useSWR from 'swr'

import Header from './components/header'
import Content from './components/content'


export default function Home() {

  // RESTデータ取得
  const { data, error } = useSWR('/api/message')

  if( error ) return <div>failed to load</div>
  if( !data ) return <div>loading...</div>

  return (
    <Content>


      <Header title="へっだーたいとる"></Header>
      <h1 style={{backgroundColor : `red`}}>たいとる</h1>
      <p>学ぶ。ちゃんと</p>

      <p>{data.message}</p>

      <div className={styles.mytitle}>Title</div>
      <Link href={`/about`}><button>あばうとページへ</button></Link>
    </Content>
    
  )
}
