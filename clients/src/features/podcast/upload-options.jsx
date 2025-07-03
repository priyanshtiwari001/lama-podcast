import React from 'react';

const options = [
  {
    title: 'RSS Feed',
    description: 'Lorem ipsum dolor sit. Dolor lorem sit.',
    icon: '/icons/rss.png',
  },
  {
    title: 'Youtube Video',
    description: 'Lorem ipsum dolor sit. Dolor lorem sit.',
    icon: '/icons/youtube.png',
  },
  {
    title: 'Upload Files',
    description: 'Lorem ipsum dolor sit. Dolor lorem sit.',
    icon: '/icons/upload.png',
    
  },
];

const UploadOptions = ({modalOpen}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {options.map((opt) => (
        <div
        onClick={()=>modalOpen(true)}
          key={opt.title}
          className={`p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer 
          }`}
        >
          <div className='flex '>
            <div className="flex flex-col  items-start">
            <h3 className="text-lg  font-semibold text-gray-800">{opt.title}</h3>
           <p className="text-sm w-3/4 text-gray-500">{opt.description}</p>
          </div>
        <div>
            <img src={opt.icon} alt={opt.title} className="w-20 h-20 " />
        </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploadOptions;
