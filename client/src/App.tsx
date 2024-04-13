import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import Home from '@/pages/Home';
import MintToken from '@/pages/MintToken';
import Dashboard from '@/pages/Dashboard';
// import DiscussionForum from './pages/DiscussionForum';
import NotFoundPage from '@/pages/NotFound';
import Analysis from './pages/Analysis';
import DiscussionForum from './pages/DiscussionForum';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[aliceblue] min-h-screen flex flex-row">
      <div className="relative hidden mr-10 sm:flex">
        <Sidebar />
      </div>
      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-campaign" element={<MintToken />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/payment" element={<NotFoundPage />} />
          <Route path="/discussion" element={<DiscussionForum />} />
          <Route path="/" element={<DiscussionForum />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
