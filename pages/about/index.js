import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <h1>あばうと</h1>
      <Link href={`/`}><button>topページへ</button></Link>
    </div>
    
  )
}
