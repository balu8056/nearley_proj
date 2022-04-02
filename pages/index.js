import Head from 'next/head'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import { useState } from 'react'

export default function Home() {

  const [isValidInput, setValidInput] = useState(false)

  const validateInput = (value) => {
    setValidInput(true)
  }

  return (
    <div>
      <Head>
        <title>Nearley parser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <p className="text-4xl text-gray-300 text-center">Nearley Parser</p>
      </div>

      <div className='border-2 m-6 p-6 text-center'>
        <div className="flex flex-row mx-auto md:w-1/2 border rounded-lg"
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            size="small"
            placeholder="Type something to parse..."
            onInput={validateInput}

          />
          <Divider className={`${isValidInput ? 'visible' : 'invisible'}`} sx={{ height: 34, m: 0.5 }} orientation="vertical" />
          <IconButton className={`${isValidInput ? 'visible' : 'invisible'}`} color="primary" sx={{ p: '10px' }} >
            <CheckIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
