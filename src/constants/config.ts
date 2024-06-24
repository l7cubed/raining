// @constants/config.ts
import { NETWORK, VaultList } from '@generationsoftware/hyperstructure-client-js'
import { createConfig, http } from 'wagmi'
import { base } from 'wagmi/chains'

// Renaming local PRIZE_POOLS to avoid conflict
export const LOCAL_PRIZE_POOLS = [
  {
    chainId: NETWORK.base,
    address: '0x988072af9c099365de09b77cd53377d0e1c54509',
    options: { /* any options specific to your prize pool */ }
  },
]

export const PRIZE_POOL_INFO = LOCAL_PRIZE_POOLS.find(
  (entry) => entry.chainId === NETWORK.base
) as NonNullable<(typeof LOCAL_PRIZE_POOLS)[number]>

export const VAULT_LIST = {
  name: 'PoolTogether Template App Vault List',
  version: { major: 0, minor: 1, patch: 1 },
  timestamp: '2024-04-30T15:33:47Z',
  tokens: [
    {
      chainId: NETWORK.base,
      address: '0x621f4A9D1B4cbC457642B740f4111F4068b06d39',
      name: 'WIN Staking',
      logoURI: 'rainETHToken.svg'
    }
  ]
} as const satisfies VaultList

export const WAGMI_CONFIG = createConfig({
  chains: [base],
  transports: {
    [NETWORK.base]: http()
  }
})
