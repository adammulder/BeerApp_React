import React from 'react'

function Resourses() {
  return (
    <div>
        <div className='justify-evenly p-10 flex pr-32 bg-gradient-to-t from-red-500 to-[#38b6ff]'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lMAlh6X6FIw" title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/18fwz9Itbvo?start=1" title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VqNxYtM_Cf8?start=3" title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className='flex justify-center text-center'>
            <h1 className='text-white text-6xl font-bold bg-gradient-to-t to-red-500 from-[#38b6ff] w-screen'>Beer Resources</h1>
        </div>
        <div className='p-10 flex justify-evenly pr-24 bg-gradient-to-t from-red-500 to-[#38b6ff]'>
            <iframe sandbox="allow-scripts allow-same-origin allow-popups" width="300" height="550" src="https://read.amazon.com/kp/card?asin=B08WK74H77&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_S6PGPX26KH70PBBNENYX" ></iframe>
            <iframe sandbox="allow-scripts allow-same-origin allow-popups" width="300" height="550" src="https://read.amazon.com/kp/card?asin=B072PSVNJ6&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_1FEFMRZEJ3KGCY3ATV90" ></iframe>
            <iframe sandbox="allow-scripts allow-same-origin allow-popups" width="300" height="550" src="https://read.amazon.com/kp/card?asin=B09GPLPSMC&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_39CE1Y2593TG6AXQ6WGN" ></iframe>
            <iframe sandbox="allow-scripts allow-same-origin allow-popups" width="300" height="550" src="https://read.amazon.com/kp/card?asin=B0B84J9KT6&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_ZCN61761PN44KFDQPDSA" ></iframe>
            <iframe sandbox="allow-scripts allow-same-origin allow-popups" width="300" height="550" src="https://read.amazon.com/kp/card?asin=B09BVMVJTD&preview=inline&linkCode=kpe&ref_=cm_sw_r_kb_dp_ZYAW321HNMF3YKSPRN08" ></iframe>
        </div>
    </div>
  )
}

export default Resourses