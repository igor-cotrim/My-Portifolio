import {ThemeProvider} from 'next-themes'

import Navbar from '../src/components/Navbar'
import Sidebar from '../src/components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 my-16 lg:px-48 sm:px-20 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark">
          <Sidebar/>
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-dark-500 shadow-custom-light dark:shadow-custom-dark">
          <Navbar/>
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>

  )
  
}

export default MyApp
