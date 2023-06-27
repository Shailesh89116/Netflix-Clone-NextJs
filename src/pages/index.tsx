import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Head>
    <title>Netflix</title>
   </Head>
   <main>
    <h2>Hello</h2>
   </main>
   </>
  )
}
