import React from 'react'

const Terms = () => {
  return (
    <div className="bg-[#1219D2] h-screen w-full p-5 text-white">
    <header className="flex justify-between items-center">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_500_6911)">
        <path d="M33.5675 6.66815H17.2841C16.0507 6.6755 14.8635 7.1385 13.9508 7.96815L13.7841 8.15148L3.78413 20.6182C3.51708 20.9501 3.38727 21.3717 3.42137 21.7963C3.45546 22.221 3.65087 22.6164 3.96746 22.9015L13.9675 32.0348C14.8802 32.8645 16.0674 33.3275 17.3008 33.3348H33.5841C34.3946 33.3393 35.1739 33.0227 35.7516 32.4543C36.3294 31.8859 36.6587 31.1119 36.6675 30.3015V9.70149C36.6631 9.29876 36.5795 8.90083 36.4213 8.53043C36.2632 8.16003 36.0336 7.82441 35.7457 7.54273C35.4579 7.26106 35.1173 7.03884 34.7436 6.88878C34.3698 6.73872 33.9702 6.66375 33.5675 6.66815ZM33.3341 30.0015H17.2841C16.8711 30.0004 16.4731 29.846 16.1675 29.5682L7.28413 21.4848L16.2508 10.3682C16.544 10.1329 16.9082 10.0037 17.2841 10.0015H33.3341V30.0015Z" fill="#FCFDFE"/>
        <path d="M18.8172 24.5157C18.9722 24.6719 19.1565 24.7959 19.3596 24.8805C19.5627 24.9651 19.7805 25.0087 20.0005 25.0087C20.2206 25.0087 20.4384 24.9651 20.6415 24.8805C20.8446 24.7959 21.0289 24.6719 21.1839 24.5157L23.3339 22.349L25.4839 24.5157C25.6388 24.6719 25.8232 24.7959 26.0263 24.8805C26.2294 24.9651 26.4472 25.0087 26.6672 25.0087C26.8872 25.0087 27.1051 24.9651 27.3082 24.8805C27.5113 24.7959 27.6956 24.6719 27.8505 24.5157C28.0068 24.3607 28.1308 24.1764 28.2154 23.9733C28.3 23.7702 28.3435 23.5524 28.3435 23.3323C28.3435 23.1123 28.3 22.8945 28.2154 22.6914C28.1308 22.4883 28.0068 22.3039 27.8505 22.149L25.6839 19.999L27.8505 17.849C28.1644 17.5352 28.3407 17.1095 28.3407 16.6657C28.3407 16.2218 28.1644 15.7962 27.8505 15.4823C27.5367 15.1685 27.1111 14.9922 26.6672 14.9922C26.2234 14.9922 25.7977 15.1685 25.4839 15.4823L23.3339 17.649L21.1839 15.4823C20.87 15.1685 20.4444 14.9922 20.0005 14.9922C19.5567 14.9922 19.1311 15.1685 18.8172 15.4823C18.5034 15.7962 18.3271 16.2218 18.3271 16.6657C18.3271 17.1095 18.5034 17.5352 18.8172 17.849L20.9839 19.999L18.8172 22.149C18.661 22.3039 18.537 22.4883 18.4524 22.6914C18.3678 22.8945 18.3242 23.1123 18.3242 23.3323C18.3242 23.5524 18.3678 23.7702 18.4524 23.9733C18.537 24.1764 18.661 24.3607 18.8172 24.5157Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_500_6911">
        <rect width="40" height="40" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </header>
    <main className='h-[75%] pb-5 overflow-y-auto my-4'>
      <h3 className='font-bold text-2xl'>Terms & Condition</h3>
      <h3 className='text-2xl mt-2'>Acceptance of App</h3>
      <p>By accessing or using the Vision-Impaired App ("iLENS"), you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please refrain from using the App.</p>
    
      <h3 className='text-2xl mt-2'>User Eligibility</h3>
      <p>The App is intended for use by individuals with vision impairments.</p>

      <h3 className='text-2xl mt-2'>Privacy and Data Security</h3>
      <p>Your privacy is important to us. The App collects and processes personal data in accordance with our Privacy Policy. By using the App, you consent to the collection and use of your information as described in the Privacy Policy</p>

      <h3 className='text-2xl mt-2'>Intellectual Property</h3>
      <p>All content, features, and functionality of the App are owned by or licensed to us. Users may not reproduce, distribute, modify, or republish any content from the App without our prior written consent.</p>

      <h3 className='text-2xl mt-2'>Limitation of Liability</h3>
      <p>We are not liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the App. Users use the App at their own risk</p>

      <h3 className='text-2xl mt-2'>Modifications to Terms:</h3>
      <p>We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting. Continued use of the App after modifications constitutes acceptance of the app.</p>
    </main>

    <div className='flex'>
      <button className="group active:border-2 active:border-black h-[100] w-[150px] px-3 py-2 rounded-full bg-white mx-auto">
        <div className="group-active:bg-[#1016D8] bg-[#ECDADA] rounded-3xl flex flex-col items-center justify-center p-2">
          <p className='font-bold text-black'>Submit</p>
        </div>
      </button>
    </div>

  </div>
  )
}

export default Terms