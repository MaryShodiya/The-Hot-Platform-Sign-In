import Layout from '../components/Layout'
import ContentChart from '../components/ContentChart'
import PieContentChart from '../components/PieChart';
import RatingCharts from '../components/RatingChart';
import { WidgetIcon } from '../components/icons';


export default function Home() {
  return <Layout>
  <div className="container my-4 px-6 mx-auto"></div>


 <div className="p-4 bg-greyfour ">
  <div className="grid grid-rows-1 gap-9 lg:gap-8 lg:grid-cols-3 md:grid-cols-2 ">

  
      <div className="bg-white rounded-lg shadow-md p-4 ">
    <div className="mx-5 pr-8">
    <h2 className="text-md text-grey align-right font-semibold mb-4 ">Total number of followers </h2>
  <svg className="p-2 float-left w-10 h-10 bg-secondary text-tertiary rounded-full shadow-lg" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path>
          </svg>
          <div className="ml-12">
          <h1 className= "font-semibold text-4xl">
            20K
            </h1>
            </div>
            <div className="flex flex-row justify-center items-center mx-8 my-8">
            <svg className='w-12 h-12 ' viewBox="0 0 24 24" fill="#4ade80" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#4ade80"/>
</svg>
          <p className="text-black font-semibold ml-1 pr-3">+10.04%</p>
          <p className="text-grey text-xs">than last week </p>
        </div>
            </div>
            </div>
 

 
      <div className="bg-white rounded-lg shadow-md p-4">
    <div className="mx-5 pr-8">
    <h2 className="text-md text-grey align-right font-semibold mb-4 ">Total number of likes </h2>
  <svg className="p-2 float-left w-10 h-10 bg-secondary text-tertiary rounded-full shadow-lg" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path>
          </svg>
          <div className="ml-12">
          <h1 className= "font-semibold text-4xl">
            10K
            </h1>
            </div>
            <div className="flex flex-row justify-center items-center mx-8 my-8">
            <svg className='w-12 h-12 ' viewBox="0 0 24 24" fill="#ea0606" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#ea0606"/>
</svg>
          <p className="text-black font-semibold ml-1 pr-3">-15.02%</p>
          <p className="text-grey text-xs">than last week </p>
        </div>
            </div>
            </div>

 



        
      <div className="bg-white rounded-lg shadow-md p-4 ">
    <div className="mx-5 pr-8">
    <h2 className="text-md text-grey align-right font-semibold mb-4 ">Total number of comments </h2>
  <svg className="p-2 float-left w-10 h-10 bg-secondary text-tertiary rounded-full shadow-lg" viewBox="-3 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M20.906 20.75c1.313 0.719 2.063 2 1.969 3.281-0.063 0.781-0.094 0.813-1.094 0.938-0.625 0.094-4.563 0.125-8.625 0.125-4.594 0-9.406-0.094-9.75-0.188-1.375-0.344-0.625-2.844 1.188-4.031 1.406-0.906 4.281-2.281 5.063-2.438 1.063-0.219 1.188-0.875 0-3-0.281-0.469-0.594-1.906-0.625-3.406-0.031-2.438 0.438-4.094 2.563-4.906 0.438-0.156 0.875-0.219 1.281-0.219 1.406 0 2.719 0.781 3.25 1.938 0.781 1.531 0.469 5.625-0.344 7.094-0.938 1.656-0.844 2.188 0.188 2.469 0.688 0.188 2.813 1.188 4.938 2.344zM3.906 19.813c-0.5 0.344-0.969 0.781-1.344 1.219-1.188 0-2.094-0.031-2.188-0.063-0.781-0.188-0.344-1.625 0.688-2.25 0.781-0.5 2.375-1.281 2.813-1.375 0.563-0.125 0.688-0.469 0-1.656-0.156-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.25-2.313 1.438-2.719 1-0.375 2.125 0.094 2.531 0.938 0.406 0.875 0.188 3.125-0.25 3.938-0.5 0.969-0.406 1.219 0.156 1.375 0.125 0.031 0.375 0.156 0.719 0.313-1.375 0.563-3.25 1.594-4.219 2.188zM24.469 18.625c0.75 0.406 1.156 1.094 1.094 1.813-0.031 0.438-0.031 0.469-0.594 0.531-0.156 0.031-0.875 0.063-1.813 0.063-0.406-0.531-0.969-1.031-1.656-1.375-1.281-0.75-2.844-1.563-4-2.063 0.313-0.125 0.594-0.219 0.719-0.25 0.594-0.125 0.688-0.469 0-1.656-0.125-0.25-0.344-1.063-0.344-1.906-0.031-1.375 0.219-2.313 1.406-2.719 1.031-0.375 2.156 0.094 2.531 0.938 0.406 0.875 0.25 3.125-0.188 3.938-0.5 0.969-0.438 1.219 0.094 1.375 0.375 0.125 1.563 0.688 2.75 1.313z"></path>
          </svg>
          <div className="ml-12">
          <h1 className= "font-semibold text-4xl">
            20K
            </h1>
            </div>
            <div className="flex flex-row justify-center items-center mx-8 my-8">
            <svg className='w-12 h-12 ' viewBox="0 0 24 24" fill="#4ade80" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#4ade80"/>
         </svg>
          <p className="text-black font-semibold ml-1 pr-3">+10.04%</p>
          <p className="text-grey text-xs">than last week </p>
        </div>
            </div>
            </div>

   
    
    





    <div className="col-span-2">
    <div className="rounded-lg shadow-lg h-full block bg-white">
  
        <ContentChart/>
       
            </div>
          </div>
  


    <div className="mb-12 lg:mb-0">
    <div className="rounded-lg shadow-lg h-full block bg-white">
        <PieContentChart />
    </div>
    </div>


  <div className="mb-12 lg:mb-0">
 <div className="rounded-lg shadow-lg h-full p-2 block bg-white">
     <RatingCharts />
    </div>
  </div>


  <div className="col-span-2">
  <div className="rounded-lg shadow-lg h-full block bg-white  px-7 pt-3">
       <h2 className="text-left font-medium mb-4 pl-3 pt-1"> Potential client</h2>
       <p className="text-xs text-left text-grey"> Lorem ipsum dolor sit amet, consectetur adip</p>
        <div
  className="relative flex w-full flex-wrap items-center justify-between bg-greyfive rounded-lg mb-5 mt-6 py-2 text-black shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
  <div>
      <a
        className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#">
        <img className="mr-2 rounded-full"
            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          
            style={{height: 34 , width: 34, }}
            alt=""
            loading="lazy" />
        <span className="font-medium dark:text-neutral-200">Jenny Van, Ini</span>
      </a>
      <p className="text-grey pl-8 items-center"> Hoorn Netherlands</p>
    </div>
  </div>
  </div>


  <div
  className="relative flex w-full flex-wrap items-center justify-between rounded-lg bg-greyfive mb-5 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
  <div>
      <a
        className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#">
        <img className="mr-2 rounded-full"
            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          
            style={{height: 34 , width: 34, }}
            alt=""
            loading="lazy" />
        <span className="font-medium dark:text-neutral-200">Jenny Van, Ini</span>
      </a>
      <p className="text-grey pl-8 items-center"> Hoorn Netherlands</p>
    </div>
  </div>
  </div>

  <div
  className="relative flex w-full flex-wrap items-center justify-between bg-greyfive  rounded-lg  mb-5 text-black shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div className="flex w-full flex-wrap items-center justify-between px-3">
  <div>
      <a
        className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#">
        <img className="mr-2 rounded-full"
            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          
            style={{height: 34 , width: 34, }}
            alt=""
            loading="lazy" />
        <span className="font-medium dark:text-neutral-200">Jenny Van, Ini</span>
      </a>
      <p className="text-grey pl-8 items-center"> Hoorn Netherlands</p>
    </div>
  </div>
  </div>

  <div
  className="relative flex w-full flex-wrap items-center justify-between bg-greyfive rounded-lg  mb-5 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
  <div class="flex w-full  items-center justify-between px-3">
    <div>
      <a
        className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
        href="#">
        <img className="mr-2 rounded-full"
            src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
          
            style={{height: 34 , width: 34, }}
            alt=""
            loading="lazy" />
        <span className="font-medium dark:text-neutral-200">Jenny Van, Ini</span>
      </a>
      <p className="text-grey pl-8 items-center"> Hoorn Netherlands</p>
    </div>

  </div>
  
  






        
       </div>
    </div>

  </div>
  </div>

</div>

    </Layout>;
}
