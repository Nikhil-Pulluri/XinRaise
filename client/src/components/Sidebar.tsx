// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiPolymerproject } from 'react-icons/si';
import { navlinks } from '../constants';
import { useState } from 'react';



const Sidebar = () => {
  const navigate = useNavigate();
  const [isactive, setIsactive] = useState('home');

  return (
    <div className="flex flex-col justify-between items-center sticky top-2 h-[90vh]">
      <Link to="/">
        <SiPolymerproject onClick={() => {
          navigate('/')
          setIsactive('home')
        }} className="w-[52px] h-[52px] bg-white shadow-lg text-[#836FFF] p-2 rounded-xl" />
      </Link>

      <div className="flex-1 flex flex-col justify-start items-start px-8 w-64 bg-white shadow-lg rounded-[20px] py-10 mt-6">
        <div className="flex flex-col items-start justify-center gap-8">
          {navlinks.map((link) => (
            <div id={link.name} key={link.name}>
              <Link
                to={link.link}
                onClick={() => setIsactive(link.name)}
                className={`  flex items-center justify-start gap-2 hover:text-[#836FFF] text-black ${isactive === link.name ? 'text-[#836FFF] rounded-lg ' : ''}`}
              >
                <div className='text-lg p-2 border rounded-xl'>
                  {link.icon}
                </div>
                <p className='text-base'>{link.name}</p>
              </Link>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Sidebar;
