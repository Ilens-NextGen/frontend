import React from 'react'

const Splash = () => {
  return (
    <div id="splash" className="bg-[#1219D2] h-screen w-full flex flex-col items-center justify-center gap-5">
        <svg id="mainLogo" className="absolute top-[-200px] duration-500 ease-linear" width={87} height={32} viewBox="0 0 87 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 7.66417C0 3.43136 3.43136 0 7.66417 0H21.6114C24.9966 0 27.8693 2.1948 28.8839 5.23905H18.3976C16.2812 5.23905 14.5656 6.95474 14.5656 9.07114V11.726H12.6991C12.5244 11.726 12.355 11.7857 12.2188 11.8952L0 21.7215V7.66417ZM18.3976 26.7624H28.8834C27.8683 29.8059 24.9961 32 21.6114 32H7.66417C3.43137 32 0 28.5686 0 24.3358V23.1928C5.14982 20.216 10.9325 17.3276 14.5656 16.4367V22.9304C14.5656 25.0468 16.2812 26.7624 18.3976 26.7624ZM17.3895 16.861C16.7898 16.861 16.3037 16.3749 16.3037 15.7752V12.099C16.3037 11.4993 16.7898 11.0132 17.3895 11.0132H19.3677V16.861H17.3895Z" fill="#FCFCFF" />
          <path d="M30.3279 22.5V12.2378H31.9046V22.5H30.3279ZM31.1296 10.5274C30.8223 10.5274 30.5573 10.4227 30.3346 10.2134C30.1163 10.004 30.0072 9.75236 30.0072 9.45839C30.0072 9.16442 30.1163 8.91277 30.3346 8.70342C30.5573 8.49408 30.8223 8.38941 31.1296 8.38941C31.437 8.38941 31.6998 8.49408 31.918 8.70342C32.1407 8.91277 32.2521 9.16442 32.2521 9.45839C32.2521 9.75236 32.1407 10.004 31.918 10.2134C31.6998 10.4227 31.437 10.5274 31.1296 10.5274ZM35.0064 22.5V8.817H36.6633V21.0301H43.0238V22.5H35.0064ZM45.5893 22.5V8.817H53.8472V10.2869H47.2462V14.9102H53.4196V16.3801H47.2462V21.0301H53.9541V22.5H45.5893ZM67.6839 8.817V22.5H66.0804L58.6242 11.7567H58.4906V22.5H56.8337V8.817H58.4372L65.9201 19.587H66.0537V8.817H67.6839ZM78.4823 12.2378C78.4021 11.5607 78.077 11.0351 77.5068 10.661C76.9367 10.2869 76.2374 10.0998 75.409 10.0998C74.8032 10.0998 74.2732 10.1978 73.8188 10.3938C73.369 10.5897 73.0171 10.8592 72.7632 11.2022C72.5138 11.5451 72.3891 11.9349 72.3891 12.3714C72.3891 12.7366 72.4759 13.0506 72.6496 13.3134C72.8278 13.5718 73.055 13.7878 73.3311 13.9615C73.6073 14.1307 73.8968 14.271 74.1997 14.3824C74.5026 14.4893 74.7809 14.5762 75.0348 14.643L76.4245 15.0171C76.7808 15.1106 77.1772 15.2398 77.6137 15.4046C78.0547 15.5694 78.4756 15.7944 78.8765 16.0794C79.2818 16.36 79.6159 16.7208 79.8787 17.1618C80.1414 17.6027 80.2728 18.1439 80.2728 18.7853C80.2728 19.5247 80.0791 20.1928 79.6916 20.7896C79.3085 21.3865 78.7473 21.8608 78.0079 22.2127C77.273 22.5646 76.38 22.7405 75.3288 22.7405C74.3489 22.7405 73.5004 22.5824 72.7833 22.2662C72.0706 21.9499 71.5094 21.509 71.0996 20.9433C70.6943 20.3776 70.4649 19.7206 70.4115 18.9724H72.1218C72.1664 19.489 72.3401 19.9166 72.643 20.2551C72.9503 20.5892 73.3378 20.8386 73.8055 21.0034C74.2776 21.1638 74.7854 21.2439 75.3288 21.2439C75.9613 21.2439 76.5292 21.1415 77.0325 20.9366C77.5358 20.7273 77.9344 20.4378 78.2284 20.0681C78.5224 19.6939 78.6694 19.2574 78.6694 18.7586C78.6694 18.3042 78.5424 17.9345 78.2885 17.6495C78.0347 17.3644 77.7006 17.1328 77.2864 16.9546C76.8721 16.7765 76.4245 16.6206 75.9435 16.487L74.2598 16.0059C73.1908 15.6986 72.3445 15.2599 71.721 14.6897C71.0974 14.1196 70.7856 13.3735 70.7856 12.4515C70.7856 11.6854 70.9927 11.0173 71.407 10.4472C71.8256 9.87262 72.3869 9.42721 73.0906 9.11097C73.7988 8.79028 74.5894 8.62993 75.4624 8.62993C76.3443 8.62993 77.1282 8.78805 77.8142 9.10429C78.5001 9.41608 79.0435 9.84367 79.4444 10.3871C79.8497 10.9305 80.0635 11.5474 80.0858 12.2378H78.4823Z" fill="white" />
        </svg>
        <div id="mantra" className="text-white text-3xl text-center opacity-0 duration-1000 ease-linear">
          <h1>Empowering vision</h1>
          <h1>beyond sight</h1>
        </div>
    </div>
  )
}

export default Splash