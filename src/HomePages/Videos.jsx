// import { iframe } from 'framer-motion/client';
// import React from 'react'

// const shorts = [
//   {
//     id: 1,
//     embedUrl: "https://www.youtube.com/embed/YOUR_SHORT_VIDEO_ID_1",
//   },
//   {
//     id: 2,
//     embedUrl: "https://www.youtube.com/embed/YOUR_SHORT_VIDEO_ID_2",
//   },
//   {
//     id: 3,
//     embedUrl: "https://www.youtube.com/embed/YOUR_SHORT_VIDEO_ID_3",
//   },
//   {
//     id: 4,
//     embedUrl: "https://www.youtube.com/embed/YOUR_SHORT_VIDEO_ID_4",
//   },
//   {
//     id: 5,
//     embedUrl: "https://www.youtube.com/embed/YOUR_SHORT_VIDEO_ID_5",
//   },
//   {
//     id: 6,
//     embedUrl: "https://www.youtube.com/embed/YOUR_SHORT_VIDEO_ID_6",
//   },
// ];

// const longVideos = [
//   {
//     id: 1,
//     embedUrl: "https://www.youtube.com/embed/YOUR_LONG_VIDEO_ID_1",
//     title: "Top Government Stocks for Long-Term Investment",
//   },
//   {
//     id: 2,
//     embedUrl: "https://www.youtube.com/embed/YOUR_LONG_VIDEO_ID_2",
//     title: "Understanding Stock Market Index | Options Trading",
//   },
//   {
//     id: 3,
//     embedUrl: "https://www.youtube.com/embed/YOUR_LONG_VIDEO_ID_3",
//     title: "Savings Devalue Over Time | Smart Investment Strategies",
//   },
// ];


// const Videos = () => {

//   return (
//     <div className='w-full px-20 py-5 flex gap-5 bg-gradient-to-br from-blue-50 to green-50 '>
//         <div className='grid grid-cols-3 container mx-auto w-3/4 gap-10 border border-red-400'>
//             {shorts.map((vid)=>{
//               return(
//                  <div key={shorts.id} className="aspect-[16/16] bg-black rounded overflow-hidden shadow-md">
//                   <iframe
//                     className="w-full h-full"
//                     src={shorts.embedUrl}
//                     title={`Short Video ${shorts.id}`}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               )
             
//             })}
//         </div>
//         <div className='grid grid-cols-1 container mx-auto'>

//         </div>
//     </div>
//   )
// }

// export default Videos


import React from "react";

const longVideos = [
  {
    id: 1,
    embedUrl: "https://www.youtube.com/embed/YOUR_LONG_VIDEO_ID_1",
    title: "Top Government Stocks for Long-Term Investment",
  },
  {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/YOUR_LONG_VIDEO_ID_2",
    title: "Understanding Stock Market Index | Options Trading",
  },
  {
    id: 3,
    embedUrl: "https://www.youtube.com/embed/YOUR_LONG_VIDEO_ID_3",
    title: "Savings Devalue Over Time | Smart Investment Strategies",
  },
];

const InsightsVideo = () => {
  return (
    <section className="bg-green-50 py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Insights Video
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          {longVideos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h4>
                <button className="mt-2 inline-block bg-green-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700">
                  Watch Full video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsVideo;