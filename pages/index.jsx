import Head from 'next/head'
import Image from 'next/image'
import Cabecalho from './components/cabecalho'
import Landing from './Landing'
export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <Landing/>
    </div>
  )
}
