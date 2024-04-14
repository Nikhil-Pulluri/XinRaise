import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { WagmiProvider } from 'wagmi';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  xdcTestnet
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'dimo_hacks',
  projectId: '031187eac503814005ac190ad3aa19ff',
  chains: [xdcTestnet],
  ssr: true,
});

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);



root.render(
  <WagmiProvider
    config={config}
  >
    <QueryClientProvider client={queryClient}>
      <RainbowKitProvider>
        {/* <StateContextProvider> */}
        <Router>

          <App />
        </Router>
      </RainbowKitProvider>
    </QueryClientProvider>

  </WagmiProvider>
);
