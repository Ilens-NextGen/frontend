import React from 'react'

const Settings = () => {
  return (
    <div id="main" className="bg-[#1219D2] h-screen w-full p-5 text-white">
    <header className="">
      <svg width={29} height={32} viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 7.66417C0 3.43136 3.43136 0 7.66417 0H21.6114C24.9966 0 27.8693 2.1948 28.8839 5.23905H18.3976C16.2812 5.23905 14.5656 6.95474 14.5656 9.07114V11.726H12.6991C12.5244 11.726 12.355 11.7857 12.2188 11.8952L0 21.7215V7.66417ZM18.3976 26.7624H28.8834C27.8683 29.8059 24.9961 32 21.6114 32H7.66417C3.43137 32 0 28.5686 0 24.3358V23.1928C5.14982 20.216 10.9325 17.3276 14.5656 16.4367V22.9304C14.5656 25.0468 16.2812 26.7624 18.3976 26.7624ZM17.3895 16.861C16.7898 16.861 16.3037 16.3749 16.3037 15.7752V12.099C16.3037 11.4993 16.7898 11.0132 17.3895 11.0132H19.3677V16.861H17.3895Z" fill="#FCFCFF" />
      </svg>
      <div className='border p-2 flex justify-center relative my-2'>
                <svg className='absolute left-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_500_6771)">
                    <path d="M20.1397 4.00011H10.3697C9.62964 4.00452 8.91733 4.28232 8.3697 4.78011L8.2697 4.89011L2.2697 12.3701C2.10947 12.5693 2.03158 12.8222 2.05204 13.077C2.0725 13.3318 2.18974 13.5691 2.3797 13.7401L8.3797 19.2201C8.92733 19.7179 9.63964 19.9957 10.3797 20.0001H20.1497C20.636 20.0028 21.1035 19.8128 21.4502 19.4718C21.7969 19.1308 21.9944 18.6664 21.9997 18.1801V5.82011C21.9971 5.57847 21.9469 5.33972 21.852 5.11748C21.7571 4.89524 21.6194 4.69386 21.4467 4.52486C21.2739 4.35585 21.0696 4.22253 20.8454 4.13249C20.6211 4.04245 20.3813 3.99747 20.1397 4.00011V4.00011ZM19.9997 18.0001H10.3697C10.1219 17.9995 9.88309 17.9068 9.6997 17.7401L4.3697 12.8901L9.7497 6.22011C9.92564 6.07895 10.1441 6.00142 10.3697 6.00011H19.9997V18.0001Z" fill="white"/>
                    <path d="M11.2899 14.7102C11.3829 14.8039 11.4935 14.8783 11.6154 14.9291C11.7372 14.9798 11.8679 15.006 11.9999 15.006C12.132 15.006 12.2627 14.9798 12.3845 14.9291C12.5064 14.8783 12.617 14.8039 12.7099 14.7102L13.9999 13.4102L15.2899 14.7102C15.3829 14.8039 15.4935 14.8783 15.6154 14.9291C15.7372 14.9798 15.8679 15.006 15.9999 15.006C16.132 15.006 16.2627 14.9798 16.3845 14.9291C16.5064 14.8783 16.617 14.8039 16.7099 14.7102C16.8037 14.6172 16.8781 14.5066 16.9288 14.3848C16.9796 14.2629 17.0057 14.1322 17.0057 14.0002C17.0057 13.8682 16.9796 13.7375 16.9288 13.6156C16.8781 13.4937 16.8037 13.3831 16.7099 13.2902L15.4099 12.0002L16.7099 10.7102C16.8982 10.5219 17.004 10.2665 17.004 10.0002C17.004 9.73388 16.8982 9.47849 16.7099 9.29018C16.5216 9.10188 16.2662 8.99609 15.9999 8.99609C15.7336 8.99609 15.4782 9.10188 15.2899 9.29018L13.9999 10.5902L12.7099 9.29018C12.5216 9.10188 12.2662 8.99609 11.9999 8.99609C11.7336 8.99609 11.4782 9.10188 11.2899 9.29018C11.1016 9.47849 10.9958 9.73388 10.9958 10.0002C10.9958 10.2665 11.1016 10.5219 11.2899 10.7102L12.5899 12.0002L11.2899 13.2902C11.1962 13.3831 11.1218 13.4937 11.071 13.6156C11.0203 13.7375 10.9941 13.8682 10.9941 14.0002C10.9941 14.1322 11.0203 14.2629 11.071 14.3848C11.1218 14.5066 11.1962 14.6172 11.2899 14.7102V14.7102Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_500_6771">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <p className='mx-auto'>Text settings</p>
            </div>
    </header>
    <main className="h-[80%] w-full mt-7">
      <div className='flex items-center gap-4 mb-5'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_500_6744)">
        <path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12ZM19.93 11H17C16.8351 8.64814 16.0293 6.38635 14.67 4.46C16.0665 4.95597 17.2977 5.83007 18.2265 6.98484C19.1553 8.13962 19.745 9.52967 19.93 11ZM9.08 13H15C14.7441 15.4706 13.6911 17.7908 12 19.61C10.3101 17.7984 9.28119 15.4693 9.08 13ZM9.08 11C9.31289 8.54183 10.3376 6.22572 12 4.4C13.7047 6.20612 14.7601 8.52804 15 11H9.08ZM9.44 4.43C8.07355 6.36702 7.2548 8.63672 7.07 11H4.07C4.2589 9.5115 4.86261 8.10612 5.81217 6.94437C6.76172 5.78262 8.01886 4.91133 9.44 4.43ZM4.07 13H7.07C7.23469 15.3613 8.04788 17.6313 9.42 19.56C8.00397 19.0763 6.75199 18.2052 5.80627 17.0456C4.86055 15.886 4.25902 14.4844 4.07 13ZM14.62 19.55C15.9884 17.6207 16.8107 15.3577 17 13H19.95C19.7609 14.4802 19.1615 15.8781 18.2196 17.0356C17.2778 18.193 16.0309 19.064 14.62 19.55Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_500_6744">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <div className='w-[75%]'>
          <p className='font-bold'>Reading language</p>
          <p>You are currently reading in English</p>
        </div>

      </div>

      <div className='flex items-center justify-between'>
      <div className='w-[90%] flex items-center gap-4 mb-5'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_500_6744)">
        <path d="M22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2C9.34784 2 6.8043 3.05357 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12ZM19.93 11H17C16.8351 8.64814 16.0293 6.38635 14.67 4.46C16.0665 4.95597 17.2977 5.83007 18.2265 6.98484C19.1553 8.13962 19.745 9.52967 19.93 11ZM9.08 13H15C14.7441 15.4706 13.6911 17.7908 12 19.61C10.3101 17.7984 9.28119 15.4693 9.08 13ZM9.08 11C9.31289 8.54183 10.3376 6.22572 12 4.4C13.7047 6.20612 14.7601 8.52804 15 11H9.08ZM9.44 4.43C8.07355 6.36702 7.2548 8.63672 7.07 11H4.07C4.2589 9.5115 4.86261 8.10612 5.81217 6.94437C6.76172 5.78262 8.01886 4.91133 9.44 4.43ZM4.07 13H7.07C7.23469 15.3613 8.04788 17.6313 9.42 19.56C8.00397 19.0763 6.75199 18.2052 5.80627 17.0456C4.86055 15.886 4.25902 14.4844 4.07 13ZM14.62 19.55C15.9884 17.6207 16.8107 15.3577 17 13H19.95C19.7609 14.4802 19.1615 15.8781 18.2196 17.0356C17.2778 18.193 16.0309 19.064 14.62 19.55Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_500_6744">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <div className='w-[90%]'>
          <p className='font-bold'>Language Detection</p>
          <p>Automatically read the text in the detected languages. When turned off, text will be read in your phone’s default language</p>
        </div>

        </div>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" defaultValue className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
          {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Small toggle</span> */}
        </label>
      </div>
      </div>

<div className='flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_500_6753)">
        <path d="M4 13.5C4.55228 13.5 5 13.0523 5 12.5C5 11.9477 4.55228 11.5 4 11.5C3.44772 11.5 3 11.9477 3 12.5C3 13.0523 3.44772 13.5 4 13.5Z" fill="white"/>
        <path d="M20.06 11.5H7.94C7.42085 11.5 7 11.9209 7 12.44V12.56C7 13.0791 7.42085 13.5 7.94 13.5H20.06C20.5791 13.5 21 13.0791 21 12.56V12.44C21 11.9209 20.5791 11.5 20.06 11.5Z" fill="white"/>
        <path d="M20.06 16.5H3.94C3.42085 16.5 3 16.9209 3 17.44V17.56C3 18.0791 3.42085 18.5 3.94 18.5H20.06C20.5791 18.5 21 18.0791 21 17.56V17.44C21 16.9209 20.5791 16.5 20.06 16.5Z" fill="white"/>
        <path d="M20.06 6.5H3.94C3.42085 6.5 3 6.92085 3 7.44V7.56C3 8.07915 3.42085 8.5 3.94 8.5H20.06C20.5791 8.5 21 8.07915 21 7.56V7.44C21 6.92085 20.5791 6.5 20.06 6.5Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_500_6753">
        <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
        </clipPath>
        </defs>
        </svg>

        <div className='w-[90%]'>
          <p className='font-bold'>Layout Detection</p>
          <p>Read columns in the right order and speak out whenever a heading is detected. Turn off for vertically written scripts.</p>
        </div>
        </div>

        <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" defaultValue className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
        </label>
      </div>
      </div>
    </main>
  </div>
  )
}

export default Settings