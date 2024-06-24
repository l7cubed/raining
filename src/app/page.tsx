'use client'

import { useEffect, useState } from 'react'
import { Vault } from '@components/Vault'
import { VAULT_LIST } from '@constants/config'

export default function Home() {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  return (
    <>
      <div className='flex gap-2 flex-wrap'>
        {isMounted &&
          VAULT_LIST.tokens.map((vault) => (
            <Vault key={`${vault.chainId}-${vault.address}`} {...vault} />
          ))}
      </div>
    </>
  )
}
