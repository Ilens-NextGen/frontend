import React from 'react'
import wallpaper from '../assets/MESH2.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div id="main" className="bg-[#1219D2] h-screen w-full p-5 flex flex-col justify-between">
    <header className="flex justify-between items-center">
      <svg width={29} height={32} viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0 7.66417C0 3.43136 3.43136 0 7.66417 0H21.6114C24.9966 0 27.8693 2.1948 28.8839 5.23905H18.3976C16.2812 5.23905 14.5656 6.95474 14.5656 9.07114V11.726H12.6991C12.5244 11.726 12.355 11.7857 12.2188 11.8952L0 21.7215V7.66417ZM18.3976 26.7624H28.8834C27.8683 29.8059 24.9961 32 21.6114 32H7.66417C3.43137 32 0 28.5686 0 24.3358V23.1928C5.14982 20.216 10.9325 17.3276 14.5656 16.4367V22.9304C14.5656 25.0468 16.2812 26.7624 18.3976 26.7624ZM17.3895 16.861C16.7898 16.861 16.3037 16.3749 16.3037 15.7752V12.099C16.3037 11.4993 16.7898 11.0132 17.3895 11.0132H19.3677V16.861H17.3895Z" fill="#FCFCFF" />
      </svg>
      <Link to="/settings">
      <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5673 36.6654H18.4173C17.6747 36.6654 16.9625 36.3704 16.4374 35.8453C15.9123 35.3202 15.6173 34.608 15.6173 33.8654V32.0487C15.6083 31.9417 15.569 31.8394 15.5041 31.7538C15.4392 31.6683 15.3513 31.6029 15.2507 31.5654C15.1487 31.5 15.0301 31.4653 14.909 31.4653C14.7879 31.4653 14.6693 31.5 14.5673 31.5654L13.334 32.8987C13.0753 33.1592 12.7676 33.366 12.4286 33.5071C12.0897 33.6482 11.7261 33.7208 11.359 33.7208C10.9918 33.7208 10.6283 33.6482 10.2893 33.5071C9.95039 33.366 9.64269 33.1592 9.38399 32.8987L7.10065 30.6654C6.83635 30.4072 6.62644 30.0987 6.48332 29.758C6.34019 29.4174 6.26675 29.0515 6.26732 28.682C6.26839 27.9262 6.56789 27.2015 7.10065 26.6654L8.33398 25.432C8.39353 25.3402 8.42521 25.2331 8.42521 25.1237C8.42521 25.0143 8.39353 24.9072 8.33398 24.8154C8.23398 24.5654 8.06732 24.382 7.83398 24.382H6.13398C5.38985 24.3776 4.67769 24.0789 4.15307 23.5512C3.62844 23.0234 3.33397 22.3095 3.33398 21.5654V18.4154C3.33398 17.6728 3.62898 16.9606 4.15409 16.4355C4.67919 15.9104 5.39138 15.6154 6.13398 15.6154H7.95065C8.05768 15.6063 8.15995 15.5671 8.24552 15.5022C8.33109 15.4372 8.39645 15.3493 8.43398 15.2487C8.49932 15.1467 8.53405 15.0281 8.53405 14.907C8.53405 14.7859 8.49932 14.6673 8.43398 14.5654L7.10065 13.332C6.84013 13.0733 6.63336 12.7656 6.49226 12.4267C6.35116 12.0877 6.27852 11.7242 6.27852 11.357C6.27852 10.9899 6.35116 10.6264 6.49226 10.2874C6.63336 9.94843 6.84013 9.64074 7.10065 9.38203L9.33398 7.0987C9.58965 6.83565 9.89535 6.62641 10.2331 6.48329C10.5709 6.34018 10.9338 6.26608 11.3007 6.26536C11.6777 6.26371 12.0514 6.33647 12.4003 6.47946C12.7493 6.62246 13.0665 6.83289 13.334 7.0987L14.5673 8.33203C14.6591 8.39157 14.7662 8.42326 14.8757 8.42326C14.9851 8.42326 15.0922 8.39157 15.184 8.33203C15.434 8.23203 15.6173 8.06536 15.6173 7.83203V6.13203C15.6217 5.3879 15.9204 4.67574 16.4482 4.15111C16.9759 3.62648 17.6898 3.33202 18.434 3.33203H21.6673C22.4099 3.33203 23.1221 3.62703 23.6472 4.15213C24.1723 4.67723 24.4673 5.38943 24.4673 6.13203V7.9487C24.4763 8.05573 24.5156 8.15799 24.5805 8.24357C24.6454 8.32914 24.7333 8.3945 24.834 8.43203C24.936 8.49737 25.0545 8.5321 25.1757 8.5321C25.2968 8.5321 25.4153 8.49737 25.5173 8.43203L26.6673 7.0987C26.926 6.83817 27.2337 6.63141 27.5727 6.49031C27.9116 6.34921 28.2752 6.27657 28.6423 6.27657C29.0095 6.27657 29.373 6.34921 29.712 6.49031C30.0509 6.63141 30.3586 6.83817 30.6173 7.0987L32.9007 9.33203C33.1642 9.59079 33.3736 9.89942 33.5167 10.2399C33.6598 10.5804 33.7336 10.946 33.734 11.3154C33.742 11.6909 33.6721 12.0639 33.5287 12.411C33.3853 12.7582 33.1714 13.0717 32.9007 13.332L31.6673 14.5654C31.6078 14.6572 31.5761 14.7643 31.5761 14.8737C31.5761 14.9831 31.6078 15.0902 31.6673 15.182C31.7673 15.432 31.934 15.6154 32.1673 15.6154H33.984C34.7077 15.6497 35.3903 15.9615 35.89 16.486C36.3898 17.0106 36.6681 17.7075 36.6673 18.432V21.6654C36.6673 22.408 36.3723 23.1202 35.8472 23.6453C35.3221 24.1704 34.6099 24.4654 33.8673 24.4654H32.0507C31.9436 24.4744 31.8414 24.5137 31.7558 24.5786C31.6702 24.6435 31.6049 24.7314 31.5673 24.832C31.5078 24.9238 31.4761 25.0309 31.4761 25.1404C31.4761 25.2498 31.5078 25.3569 31.5673 25.4487L32.8507 26.732C33.1112 26.9907 33.3179 27.2984 33.459 27.6374C33.6001 27.9764 33.6728 28.3399 33.6728 28.707C33.6728 29.0742 33.6001 29.4377 33.459 29.7767C33.3179 30.1156 33.1112 30.4233 32.8507 30.682L30.6673 32.8987C30.4117 33.1618 30.106 33.371 29.7682 33.5141C29.4304 33.6572 29.0675 33.7313 28.7007 33.732C27.9564 33.7223 27.2452 33.4234 26.7173 32.8987L25.434 31.6654C25.3422 31.6058 25.2351 31.5741 25.1257 31.5741C25.0162 31.5741 24.9091 31.6058 24.8173 31.6654C24.5673 31.7654 24.384 31.932 24.384 32.1654V33.982C24.3497 34.7057 24.0379 35.3883 23.5133 35.8881C22.9888 36.3878 22.2918 36.6662 21.5673 36.6654V36.6654ZM18.9507 33.332H21.0507V32.0487C21.0578 31.2801 21.2928 30.5309 21.7259 29.896C22.1591 29.2611 22.771 28.769 23.484 28.482C24.1999 28.1691 24.9929 28.0765 25.7617 28.216C26.5305 28.3555 27.2403 28.7208 27.8007 29.2654L28.7007 30.1654L30.1673 28.6987L29.2673 27.782C28.7262 27.2302 28.3613 26.53 28.2188 25.7703C28.0764 25.0106 28.1629 24.2258 28.4673 23.5154C28.7569 22.8055 29.2501 22.1971 29.8848 21.7671C30.5195 21.337 31.2673 21.1044 32.034 21.0987H33.334V18.9487H32.0507C31.2821 18.9416 30.5329 18.7066 29.898 18.2734C29.263 17.8402 28.7709 17.2284 28.484 16.5154C28.171 15.7994 28.0784 15.0065 28.2179 14.2377C28.3574 13.4689 28.7228 12.759 29.2673 12.1987L30.1673 11.2987L28.7007 9.83203L27.784 10.732C27.2235 11.244 26.5285 11.5851 25.7806 11.7153C25.0328 11.8455 24.2633 11.7592 23.5629 11.4668C22.8624 11.1743 22.2601 10.6878 21.8268 10.0646C21.3935 9.44128 21.1474 8.70718 21.1173 7.9487V6.66536H18.9507V7.9487C18.9436 8.71728 18.7085 9.46646 18.2754 10.1014C17.8422 10.7363 17.2304 11.2284 16.5173 11.5154C15.8014 11.8283 15.0084 11.9209 14.2396 11.7814C13.4708 11.6419 12.761 11.2766 12.2007 10.732L11.3007 9.83203L9.83399 11.2987L10.734 12.2154C11.2459 12.7758 11.5871 13.4709 11.7172 14.2187C11.8474 14.9666 11.7612 15.736 11.4688 16.4365C11.1763 17.137 10.6898 17.7393 10.0665 18.1726C9.44323 18.6058 8.70913 18.852 7.95065 18.882H6.66732V20.982H7.95065C8.71923 20.9891 9.46842 21.2241 10.1033 21.6573C10.7383 22.0905 11.2304 22.7023 11.5173 23.4154C11.8303 24.1313 11.9229 24.9243 11.7834 25.6931C11.6439 26.4619 11.2785 27.1717 10.734 27.732L9.83399 28.632L11.3007 30.0987L12.2173 29.1987C12.7778 28.6868 13.4728 28.3456 14.2207 28.2154C14.9685 28.0853 15.738 28.1715 16.4384 28.4639C17.1389 28.7564 17.7412 29.2429 18.1745 29.8662C18.6078 30.4895 18.8539 31.2236 18.884 31.982L18.9507 33.332Z" fill="#FDFDFE" />
        <path d="M19.9994 25.8346C18.8456 25.8346 17.7178 25.4925 16.7585 24.8515C15.7992 24.2106 15.0516 23.2995 14.6101 22.2336C14.1685 21.1677 14.053 19.9948 14.2781 18.8633C14.5032 17.7317 15.0588 16.6923 15.8746 15.8765C16.6904 15.0607 17.7298 14.5051 18.8613 14.2801C19.9929 14.055 21.1658 14.1705 22.2317 14.612C23.2976 15.0535 24.2086 15.8012 24.8496 16.7605C25.4906 17.7198 25.8327 18.8476 25.8327 20.0013C25.8327 21.5484 25.2181 23.0321 24.1241 24.1261C23.0302 25.2201 21.5464 25.8346 19.9994 25.8346V25.8346ZM19.9994 17.5013C19.5049 17.5013 19.0216 17.6479 18.6104 17.9226C18.1993 18.1973 17.8789 18.5878 17.6897 19.0446C17.5004 19.5014 17.4509 20.0041 17.5474 20.489C17.6439 20.974 17.882 21.4194 18.2316 21.7691C18.5812 22.1187 19.0267 22.3568 19.5116 22.4533C19.9966 22.5497 20.4992 22.5002 20.9561 22.311C21.4129 22.1218 21.8033 21.8014 22.078 21.3902C22.3527 20.9791 22.4994 20.4958 22.4994 20.0013C22.4994 19.3383 22.236 18.7024 21.7671 18.2335C21.2983 17.7647 20.6624 17.5013 19.9994 17.5013Z" fill="#FCFDFE" />
      </svg>
      </Link>
    </header>
    <main style={{ backgroundImage: `url(${wallpaper})` }}
    className="bg-center bg-no-repeat bg-contain h-[70%] w-full relative">
      <div className="flex items-center justify-center bg-[#1218d2a1] h-full backdrop-blur-lg">
      
        <div className="container">
            <button id="speech" className="btn">
            <div className="pulse-ring">

            </div>
            {/* <i className="fa fa-microphone" aria-hidden="true"></i> */}
              <div className='border w-[70%] h-[70%] flex items-center justify-center rounded-[30%] bg-[#ECDADA] shadow-lg'>
              <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.0007 28.8206C21.7688 28.8206 23.4645 28.0109 24.7147 26.5697C25.9649 25.1284 26.6673 23.1737 26.6673 21.1354L26.6673 11.5289C26.6673 9.4907 25.9649 7.53594 24.7147 6.09469C23.4645 4.65344 21.7688 3.84375 20.0007 3.84375C18.2325 3.84375 16.5368 4.65344 15.2866 6.09469C14.0364 7.53594 13.334 9.4907 13.334 11.5289L13.334 21.1354C13.334 23.1737 14.0364 25.1284 15.2866 26.5697C16.5368 28.0109 18.2325 28.8206 20.0007 28.8206ZM16.6673 11.5289C16.6673 10.5098 17.0185 9.53244 17.6436 8.81181C18.2688 8.09119 19.1166 7.68634 20.0007 7.68634C20.8847 7.68634 21.7326 8.09119 22.3577 8.81181C22.9828 9.53244 23.334 10.5098 23.334 11.5289L23.334 21.1354C23.334 22.1545 22.9828 23.1319 22.3577 23.8525C21.7326 24.5732 20.8847 24.978 20.0007 24.978C19.1166 24.978 18.2688 24.5732 17.6436 23.8525C17.0185 23.1319 16.6673 22.1545 16.6673 21.1354L16.6673 11.5289Z" fill="#1016D8"/>
            <path d="M31.6673 21.1361C31.6673 20.6266 31.4917 20.1379 31.1792 19.7776C30.8666 19.4173 30.4427 19.2148 30.0007 19.2148C29.5586 19.2148 29.1347 19.4173 28.8221 19.7776C28.5096 20.1379 28.334 20.6266 28.334 21.1361C28.334 23.6839 27.456 26.1274 25.8932 27.9289C24.3304 29.7305 22.2108 30.7426 20.0007 30.7426C17.7905 30.7426 15.6709 29.7305 14.1081 27.9289C12.5453 26.1274 11.6673 23.6839 11.6673 21.1361C11.6673 20.6266 11.4917 20.1379 11.1792 19.7776C10.8666 19.4173 10.4427 19.2148 10.0007 19.2148C9.55862 19.2148 9.1347 19.4173 8.82214 19.7776C8.50958 20.1379 8.33398 20.6266 8.33398 21.1361C8.33727 24.3675 9.34966 27.4894 11.186 29.9308C13.0222 32.3722 15.5597 33.9699 18.334 34.4315L18.334 38.4278L14.8173 38.4278C14.4239 38.4278 14.0466 38.608 13.7684 38.9286C13.4903 39.2493 13.334 39.6842 13.334 40.1378L13.334 40.5604C13.334 41.014 13.4903 41.4489 13.7684 41.7696C14.0466 42.0902 14.4239 42.2704 14.8173 42.2704L25.184 42.2704C25.5774 42.2704 25.9547 42.0902 26.2329 41.7696C26.511 41.4489 26.6673 41.014 26.6673 40.5604L26.6673 40.1378C26.6673 39.6842 26.511 39.2493 26.2329 38.9286C25.9547 38.608 25.5774 38.4278 25.184 38.4278L21.6673 38.4278L21.6673 34.4315C24.4416 33.9699 26.9791 32.3722 28.8154 29.9308C30.6516 27.4894 31.664 24.3675 31.6673 21.1361Z" fill="#1016D8"/>
            </svg>
              </div>
            </button>
        </div>

      </div>
    </main>
    <footer className="flex justify-center gap-5">
      <button className="group h-[80px] w-[80px]  p-2 rounded-full bg-white">
        <div className="group-active:bg-[#1016D8] bg-[#ECDADA] rounded-3xl flex flex-col items-center justify-center p-2 shadow-lg">
          <svg width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_476_801)">
              <path d="M19.5 3H5.5C4.70435 3 3.94129 3.31607 3.37868 3.87868C2.81607 4.44129 2.5 5.20435 2.5 6V14C2.5 14.7956 2.81607 15.5587 3.37868 16.1213C3.94129 16.6839 4.70435 17 5.5 17H11.5V19H7.5C7.23478 19 6.98043 19.1054 6.79289 19.2929C6.60536 19.4804 6.5 19.7348 6.5 20C6.5 20.2652 6.60536 20.5196 6.79289 20.7071C6.98043 20.8946 7.23478 21 7.5 21H17.5C17.7652 21 18.0196 20.8946 18.2071 20.7071C18.3946 20.5196 18.5 20.2652 18.5 20C18.5 19.7348 18.3946 19.4804 18.2071 19.2929C18.0196 19.1054 17.7652 19 17.5 19H13.5V17H19.5C20.2956 17 21.0587 16.6839 21.6213 16.1213C22.1839 15.5587 22.5 14.7956 22.5 14V6C22.5 5.20435 22.1839 4.44129 21.6213 3.87868C21.0587 3.31607 20.2956 3 19.5 3ZM20.5 14C20.5 14.2652 20.3946 14.5196 20.2071 14.7071C20.0196 14.8946 19.7652 15 19.5 15H5.5C5.23478 15 4.98043 14.8946 4.79289 14.7071C4.60536 14.5196 4.5 14.2652 4.5 14V6C4.5 5.73478 4.60536 5.48043 4.79289 5.29289C4.98043 5.10536 5.23478 5 5.5 5H19.5C19.7652 5 20.0196 5.10536 20.2071 5.29289C20.3946 5.48043 20.5 5.73478 20.5 6V14Z" fill="#03030B" />
            </g>
            <defs>
              <clipPath id="clip0_476_801">
                <rect width={24} height={24} fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p className='font-bold text-xs'>Monitor</p>
        </div>
      </button>
      <button className="group h-[80px] w-[80px] p-2 rounded-full bg-white">
        <div className="group-active:bg-[#1016D8] bg-[#ECDADA] rounded-3xl flex flex-col items-center justify-center p-2 shadow-lg">
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 2C13.2348 2 12.9804 2.10536 12.7929 2.29289C12.6054 2.48043 12.5 2.73478 12.5 3V11C12.5 11.2652 12.6054 11.5196 12.7929 11.7071C12.9804 11.8946 13.2348 12 13.5 12H21.5C21.7652 12 22.0196 11.8946 22.2071 11.7071C22.3946 11.5196 22.5 11.2652 22.5 11C22.5 8.61305 21.5518 6.32387 19.864 4.63604C18.1761 2.94821 15.8869 2 13.5 2V2ZM14.5 10V4.07C15.9962 4.28561 17.3824 4.97978 18.4513 6.04868C19.5202 7.11759 20.2144 8.50379 20.43 10H14.5Z" fill="#03030B"/>
            <path d="M21.3208 14.0616C21.1967 14.0172 21.0651 13.9978 20.9335 14.0045C20.8019 14.0112 20.673 14.0438 20.554 14.1005C20.4351 14.1572 20.3285 14.2368 20.2404 14.3348C20.1524 14.4328 20.0845 14.5473 20.0408 14.6716C19.5902 15.9455 18.8242 17.0845 17.8143 17.9824C16.8044 18.8802 15.5836 19.5076 14.2657 19.806C12.9478 20.1045 11.5757 20.0642 10.2776 19.689C8.97943 19.3138 7.79747 18.6159 6.84197 17.6604C5.88647 16.7049 5.18857 15.523 4.81338 14.2248C4.43818 12.9267 4.39793 11.5547 4.69637 10.2367C4.99481 8.91883 5.62221 7.69798 6.52005 6.68811C7.41789 5.67823 8.5569 4.91224 9.83082 4.46159C10.0815 4.37407 10.287 4.19057 10.4024 3.95146C10.5177 3.71235 10.5333 3.43722 10.4458 3.18659C10.3583 2.93596 10.1748 2.73036 9.93569 2.61503C9.69658 2.49969 9.42145 2.48407 9.17082 2.57159C7.57786 3.13436 6.15345 4.09155 5.03054 5.35381C3.90762 6.61606 3.12281 8.14224 2.74934 9.78989C2.37588 11.4375 2.42594 13.153 2.89486 14.776C3.36378 16.3991 4.23627 17.8769 5.43089 19.0715C6.62551 20.2661 8.10331 21.1386 9.72638 21.6075C11.3495 22.0765 13.0649 22.1265 14.7125 21.7531C16.3602 21.3796 17.8863 20.5948 19.1486 19.4719C20.4109 18.349 21.368 16.9245 21.9308 15.3316C22.0173 15.0822 22.0017 14.8088 21.8875 14.5709C21.7732 14.333 21.5695 14.1499 21.3208 14.0616Z" fill="#030411"/>
          </svg>
          <p className='font-bold text-xs'>Object</p>
        </div>
      </button>
    </footer>
  </div>
  )
}

export default Home