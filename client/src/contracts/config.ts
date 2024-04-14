import { http, createConfig } from 'wagmi'
import { xdcTestnet } from 'wagmi/chains'

export const config = createConfig({
  chains: [xdcTestnet],
  transports: {
    [xdcTestnet.id]: http(),
  },
})
