import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p className='text-4xl text-gray-300 text-center'>Nearley Project</p>
      </div>

    </div>
  )
}
