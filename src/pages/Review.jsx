import React from 'react'
import Ratings from '../component/Ratings'
import { Link } from 'react-router-dom'
const Review = () => {
  return (
    <div className='h-screen w-full bg-[#1219D2] p-5 text-white'>
        <header>
            <div className='border p-1 flex justify-center relative'>
                <Link to="/settings">
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
                </Link>

                <p className='mx-auto'>Review</p>
            </div>

            <div className='flex flex-col justify-center items-center my-5'>
                <p className='font-bold text-lg'>4.5</p>
                <div className='flex'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7065 14.0014C11.5999 14.0019 11.4947 13.9767 11.3998 13.9281L7.99984 12.1481L4.59984 13.9281C4.48944 13.9862 4.36496 14.0121 4.24056 14.0029C4.11616 13.9937 3.99683 13.9499 3.89613 13.8762C3.79543 13.8026 3.7174 13.7022 3.67092 13.5865C3.62443 13.4707 3.61136 13.3443 3.63318 13.2214L4.29984 9.4681L1.55318 6.80144C1.46748 6.71592 1.40669 6.60868 1.37733 6.49123C1.34796 6.37378 1.35114 6.25055 1.38651 6.13477C1.42515 6.01629 1.49623 5.91101 1.59168 5.83088C1.68712 5.75075 1.80312 5.69898 1.92651 5.68144L5.72651 5.1281L7.39984 1.7081C7.45443 1.59539 7.53967 1.50033 7.64578 1.43382C7.7519 1.36731 7.8746 1.33203 7.99984 1.33203C8.12508 1.33203 8.24779 1.36731 8.3539 1.43382C8.46002 1.50033 8.54525 1.59539 8.59984 1.7081L10.2932 5.12144L14.0932 5.67477C14.2166 5.69231 14.3326 5.74408 14.428 5.82421C14.5235 5.90434 14.5945 6.00962 14.6332 6.1281C14.6685 6.24389 14.6717 6.36712 14.6424 6.48457C14.613 6.60202 14.5522 6.70925 14.4665 6.79477L11.7198 9.46144L12.3865 13.2148C12.4103 13.3398 12.3978 13.4689 12.3506 13.5871C12.3033 13.7052 12.2233 13.8073 12.1198 13.8814C11.9991 13.966 11.8538 14.0082 11.7065 14.0014V14.0014ZM7.99984 10.7348C8.10671 10.7321 8.21242 10.7574 8.30651 10.8081L10.8198 12.1414L10.3398 9.33477C10.3212 9.2276 10.3291 9.11751 10.3628 9.01409C10.3965 8.91067 10.455 8.81706 10.5332 8.74144L12.5332 6.78811L9.73318 6.37477C9.6305 6.3541 9.53414 6.30953 9.4519 6.24466C9.36966 6.1798 9.30387 6.09647 9.25984 6.00144L7.99984 3.50144L6.73984 6.00144C6.69161 6.09724 6.62097 6.17999 6.53392 6.24266C6.44688 6.30534 6.346 6.34608 6.23984 6.36144L3.43984 6.77477L5.43984 8.72811C5.51803 8.80373 5.57652 8.89733 5.61022 9.00075C5.64392 9.10417 5.6518 9.21427 5.63318 9.32144L5.15318 12.0948L7.66651 10.7614C7.773 10.7218 7.88841 10.7126 7.99984 10.7348V10.7348Z" fill="#F4DD08"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7065 14.0014C11.5999 14.0019 11.4947 13.9767 11.3998 13.9281L7.99984 12.1481L4.59984 13.9281C4.48944 13.9862 4.36496 14.0121 4.24056 14.0029C4.11616 13.9937 3.99683 13.9499 3.89613 13.8762C3.79543 13.8026 3.7174 13.7022 3.67092 13.5865C3.62443 13.4707 3.61136 13.3443 3.63318 13.2214L4.29984 9.4681L1.55318 6.80144C1.46748 6.71592 1.40669 6.60868 1.37733 6.49123C1.34796 6.37378 1.35114 6.25055 1.38651 6.13477C1.42515 6.01629 1.49623 5.91101 1.59168 5.83088C1.68712 5.75075 1.80312 5.69898 1.92651 5.68144L5.72651 5.1281L7.39984 1.7081C7.45443 1.59539 7.53967 1.50033 7.64578 1.43382C7.7519 1.36731 7.8746 1.33203 7.99984 1.33203C8.12508 1.33203 8.24779 1.36731 8.3539 1.43382C8.46002 1.50033 8.54525 1.59539 8.59984 1.7081L10.2932 5.12144L14.0932 5.67477C14.2166 5.69231 14.3326 5.74408 14.428 5.82421C14.5235 5.90434 14.5945 6.00962 14.6332 6.1281C14.6685 6.24389 14.6717 6.36712 14.6424 6.48457C14.613 6.60202 14.5522 6.70925 14.4665 6.79477L11.7198 9.46144L12.3865 13.2148C12.4103 13.3398 12.3978 13.4689 12.3506 13.5871C12.3033 13.7052 12.2233 13.8073 12.1198 13.8814C11.9991 13.966 11.8538 14.0082 11.7065 14.0014V14.0014ZM7.99984 10.7348C8.10671 10.7321 8.21242 10.7574 8.30651 10.8081L10.8198 12.1414L10.3398 9.33477C10.3212 9.2276 10.3291 9.11751 10.3628 9.01409C10.3965 8.91067 10.455 8.81706 10.5332 8.74144L12.5332 6.78811L9.73318 6.37477C9.6305 6.3541 9.53414 6.30953 9.4519 6.24466C9.36966 6.1798 9.30387 6.09647 9.25984 6.00144L7.99984 3.50144L6.73984 6.00144C6.69161 6.09724 6.62097 6.17999 6.53392 6.24266C6.44688 6.30534 6.346 6.34608 6.23984 6.36144L3.43984 6.77477L5.43984 8.72811C5.51803 8.80373 5.57652 8.89733 5.61022 9.00075C5.64392 9.10417 5.6518 9.21427 5.63318 9.32144L5.15318 12.0948L7.66651 10.7614C7.773 10.7218 7.88841 10.7126 7.99984 10.7348V10.7348Z" fill="#F4DD08"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7065 14.0014C11.5999 14.0019 11.4947 13.9767 11.3998 13.9281L7.99984 12.1481L4.59984 13.9281C4.48944 13.9862 4.36496 14.0121 4.24056 14.0029C4.11616 13.9937 3.99683 13.9499 3.89613 13.8762C3.79543 13.8026 3.7174 13.7022 3.67092 13.5865C3.62443 13.4707 3.61136 13.3443 3.63318 13.2214L4.29984 9.4681L1.55318 6.80144C1.46748 6.71592 1.40669 6.60868 1.37733 6.49123C1.34796 6.37378 1.35114 6.25055 1.38651 6.13477C1.42515 6.01629 1.49623 5.91101 1.59168 5.83088C1.68712 5.75075 1.80312 5.69898 1.92651 5.68144L5.72651 5.1281L7.39984 1.7081C7.45443 1.59539 7.53967 1.50033 7.64578 1.43382C7.7519 1.36731 7.8746 1.33203 7.99984 1.33203C8.12508 1.33203 8.24779 1.36731 8.3539 1.43382C8.46002 1.50033 8.54525 1.59539 8.59984 1.7081L10.2932 5.12144L14.0932 5.67477C14.2166 5.69231 14.3326 5.74408 14.428 5.82421C14.5235 5.90434 14.5945 6.00962 14.6332 6.1281C14.6685 6.24389 14.6717 6.36712 14.6424 6.48457C14.613 6.60202 14.5522 6.70925 14.4665 6.79477L11.7198 9.46144L12.3865 13.2148C12.4103 13.3398 12.3978 13.4689 12.3506 13.5871C12.3033 13.7052 12.2233 13.8073 12.1198 13.8814C11.9991 13.966 11.8538 14.0082 11.7065 14.0014V14.0014ZM7.99984 10.7348C8.10671 10.7321 8.21242 10.7574 8.30651 10.8081L10.8198 12.1414L10.3398 9.33477C10.3212 9.2276 10.3291 9.11751 10.3628 9.01409C10.3965 8.91067 10.455 8.81706 10.5332 8.74144L12.5332 6.78811L9.73318 6.37477C9.6305 6.3541 9.53414 6.30953 9.4519 6.24466C9.36966 6.1798 9.30387 6.09647 9.25984 6.00144L7.99984 3.50144L6.73984 6.00144C6.69161 6.09724 6.62097 6.17999 6.53392 6.24266C6.44688 6.30534 6.346 6.34608 6.23984 6.36144L3.43984 6.77477L5.43984 8.72811C5.51803 8.80373 5.57652 8.89733 5.61022 9.00075C5.64392 9.10417 5.6518 9.21427 5.63318 9.32144L5.15318 12.0948L7.66651 10.7614C7.773 10.7218 7.88841 10.7126 7.99984 10.7348V10.7348Z" fill="#F4DD08"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7065 14.0014C11.5999 14.0019 11.4947 13.9767 11.3998 13.9281L7.99984 12.1481L4.59984 13.9281C4.48944 13.9862 4.36496 14.0121 4.24056 14.0029C4.11616 13.9937 3.99683 13.9499 3.89613 13.8762C3.79543 13.8026 3.7174 13.7022 3.67092 13.5865C3.62443 13.4707 3.61136 13.3443 3.63318 13.2214L4.29984 9.4681L1.55318 6.80144C1.46748 6.71592 1.40669 6.60868 1.37733 6.49123C1.34796 6.37378 1.35114 6.25055 1.38651 6.13477C1.42515 6.01629 1.49623 5.91101 1.59168 5.83088C1.68712 5.75075 1.80312 5.69898 1.92651 5.68144L5.72651 5.1281L7.39984 1.7081C7.45443 1.59539 7.53967 1.50033 7.64578 1.43382C7.7519 1.36731 7.8746 1.33203 7.99984 1.33203C8.12508 1.33203 8.24779 1.36731 8.3539 1.43382C8.46002 1.50033 8.54525 1.59539 8.59984 1.7081L10.2932 5.12144L14.0932 5.67477C14.2166 5.69231 14.3326 5.74408 14.428 5.82421C14.5235 5.90434 14.5945 6.00962 14.6332 6.1281C14.6685 6.24389 14.6717 6.36712 14.6424 6.48457C14.613 6.60202 14.5522 6.70925 14.4665 6.79477L11.7198 9.46144L12.3865 13.2148C12.4103 13.3398 12.3978 13.4689 12.3506 13.5871C12.3033 13.7052 12.2233 13.8073 12.1198 13.8814C11.9991 13.966 11.8538 14.0082 11.7065 14.0014V14.0014ZM7.99984 10.7348C8.10671 10.7321 8.21242 10.7574 8.30651 10.8081L10.8198 12.1414L10.3398 9.33477C10.3212 9.2276 10.3291 9.11751 10.3628 9.01409C10.3965 8.91067 10.455 8.81706 10.5332 8.74144L12.5332 6.78811L9.73318 6.37477C9.6305 6.3541 9.53414 6.30953 9.4519 6.24466C9.36966 6.1798 9.30387 6.09647 9.25984 6.00144L7.99984 3.50144L6.73984 6.00144C6.69161 6.09724 6.62097 6.17999 6.53392 6.24266C6.44688 6.30534 6.346 6.34608 6.23984 6.36144L3.43984 6.77477L5.43984 8.72811C5.51803 8.80373 5.57652 8.89733 5.61022 9.00075C5.64392 9.10417 5.6518 9.21427 5.63318 9.32144L5.15318 12.0948L7.66651 10.7614C7.773 10.7218 7.88841 10.7126 7.99984 10.7348V10.7348Z" fill="#F4DD08"/>
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7065 14.0014C11.5999 14.0019 11.4947 13.9767 11.3998 13.9281L7.99984 12.1481L4.59984 13.9281C4.48944 13.9862 4.36496 14.0121 4.24056 14.0029C4.11616 13.9937 3.99683 13.9499 3.89613 13.8762C3.79543 13.8026 3.7174 13.7022 3.67092 13.5865C3.62443 13.4707 3.61136 13.3443 3.63318 13.2214L4.29984 9.4681L1.55318 6.80144C1.46748 6.71592 1.40669 6.60868 1.37733 6.49123C1.34796 6.37378 1.35114 6.25055 1.38651 6.13477C1.42515 6.01629 1.49623 5.91101 1.59168 5.83088C1.68712 5.75075 1.80312 5.69898 1.92651 5.68144L5.72651 5.1281L7.39984 1.7081C7.45443 1.59539 7.53967 1.50033 7.64578 1.43382C7.7519 1.36731 7.8746 1.33203 7.99984 1.33203C8.12508 1.33203 8.24779 1.36731 8.3539 1.43382C8.46002 1.50033 8.54525 1.59539 8.59984 1.7081L10.2932 5.12144L14.0932 5.67477C14.2166 5.69231 14.3326 5.74408 14.428 5.82421C14.5235 5.90434 14.5945 6.00962 14.6332 6.1281C14.6685 6.24389 14.6717 6.36712 14.6424 6.48457C14.613 6.60202 14.5522 6.70925 14.4665 6.79477L11.7198 9.46144L12.3865 13.2148C12.4103 13.3398 12.3978 13.4689 12.3506 13.5871C12.3033 13.7052 12.2233 13.8073 12.1198 13.8814C11.9991 13.966 11.8538 14.0082 11.7065 14.0014V14.0014ZM7.99984 10.7348C8.10671 10.7321 8.21242 10.7574 8.30651 10.8081L10.8198 12.1414L10.3398 9.33477C10.3212 9.2276 10.3291 9.11751 10.3628 9.01409C10.3965 8.91067 10.455 8.81706 10.5332 8.74144L12.5332 6.78811L9.73318 6.37477C9.6305 6.3541 9.53414 6.30953 9.4519 6.24466C9.36966 6.1798 9.30387 6.09647 9.25984 6.00144L7.99984 3.50144L6.73984 6.00144C6.69161 6.09724 6.62097 6.17999 6.53392 6.24266C6.44688 6.30534 6.346 6.34608 6.23984 6.36144L3.43984 6.77477L5.43984 8.72811C5.51803 8.80373 5.57652 8.89733 5.61022 9.00075C5.64392 9.10417 5.6518 9.21427 5.63318 9.32144L5.15318 12.0948L7.66651 10.7614C7.773 10.7218 7.88841 10.7126 7.99984 10.7348V10.7348Z" fill="#FFFFFF"/>
                    </svg>
                </div>
                <p className='text-md'>Based on 127 ratings</p>
            </div>
        </header>
        <body>
            <section className='h-[60vh] overflow-y-auto'>
                <div>
                    <div className='mb-3 flex items-center justify-between'>
                        <div className='w-[90%] flex flex-col gap-1'>
                            <div>Reliability</div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-[#2EE310] h-1.5 rounded-full w-[80%]"></div>
                            </div>
                        </div>
                        <p>4.3</p>
                    </div>
                    
                    <div className='mb-3 flex items-center justify-between'>
                        <div className='w-[90%] flex flex-col gap-1'>
                            <div>Accuracy</div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-[#2EE310] h-1.5 rounded-full w-[90%]"></div>
                            </div>
                        </div>
                        <p>4.7</p>
                    </div>

                    <div className='mb-3 flex items-center justify-between'>
                        <div className='w-[90%] flex flex-col gap-1'>
                            <div>Speed</div>
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div className="bg-[#2EE310] h-1.5 rounded-full w-[70%]"></div>
                            </div>
                        </div>
                        <p>4.0</p>
                    </div>
                </div>
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
                <Ratings />
            </section>
            <div className='border p-1 flex justify-center relative mt-5'>
                <div className='border bg-white rounded-full absolute right-5'>
                    <svg width="20" height="20" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.0007 28.8206C21.7688 28.8206 23.4645 28.0109 24.7147 26.5697C25.9649 25.1284 26.6673 23.1737 26.6673 21.1354L26.6673 11.5289C26.6673 9.4907 25.9649 7.53594 24.7147 6.09469C23.4645 4.65344 21.7688 3.84375 20.0007 3.84375C18.2325 3.84375 16.5368 4.65344 15.2866 6.09469C14.0364 7.53594 13.334 9.4907 13.334 11.5289L13.334 21.1354C13.334 23.1737 14.0364 25.1284 15.2866 26.5697C16.5368 28.0109 18.2325 28.8206 20.0007 28.8206ZM16.6673 11.5289C16.6673 10.5098 17.0185 9.53244 17.6436 8.81181C18.2688 8.09119 19.1166 7.68634 20.0007 7.68634C20.8847 7.68634 21.7326 8.09119 22.3577 8.81181C22.9828 9.53244 23.334 10.5098 23.334 11.5289L23.334 21.1354C23.334 22.1545 22.9828 23.1319 22.3577 23.8525C21.7326 24.5732 20.8847 24.978 20.0007 24.978C19.1166 24.978 18.2688 24.5732 17.6436 23.8525C17.0185 23.1319 16.6673 22.1545 16.6673 21.1354L16.6673 11.5289Z" fill="#1016D8"/>
                        <path d="M31.6673 21.1361C31.6673 20.6266 31.4917 20.1379 31.1792 19.7776C30.8666 19.4173 30.4427 19.2148 30.0007 19.2148C29.5586 19.2148 29.1347 19.4173 28.8221 19.7776C28.5096 20.1379 28.334 20.6266 28.334 21.1361C28.334 23.6839 27.456 26.1274 25.8932 27.9289C24.3304 29.7305 22.2108 30.7426 20.0007 30.7426C17.7905 30.7426 15.6709 29.7305 14.1081 27.9289C12.5453 26.1274 11.6673 23.6839 11.6673 21.1361C11.6673 20.6266 11.4917 20.1379 11.1792 19.7776C10.8666 19.4173 10.4427 19.2148 10.0007 19.2148C9.55862 19.2148 9.1347 19.4173 8.82214 19.7776C8.50958 20.1379 8.33398 20.6266 8.33398 21.1361C8.33727 24.3675 9.34966 27.4894 11.186 29.9308C13.0222 32.3722 15.5597 33.9699 18.334 34.4315L18.334 38.4278L14.8173 38.4278C14.4239 38.4278 14.0466 38.608 13.7684 38.9286C13.4903 39.2493 13.334 39.6842 13.334 40.1378L13.334 40.5604C13.334 41.014 13.4903 41.4489 13.7684 41.7696C14.0466 42.0902 14.4239 42.2704 14.8173 42.2704L25.184 42.2704C25.5774 42.2704 25.9547 42.0902 26.2329 41.7696C26.511 41.4489 26.6673 41.014 26.6673 40.5604L26.6673 40.1378C26.6673 39.6842 26.511 39.2493 26.2329 38.9286C25.9547 38.608 25.5774 38.4278 25.184 38.4278L21.6673 38.4278L21.6673 34.4315C24.4416 33.9699 26.9791 32.3722 28.8154 29.9308C30.6516 27.4894 31.664 24.3675 31.6673 21.1361Z" fill="#1016D8"/>
                    </svg>
                </div>
                <p className='mx-auto'>Say a review</p>
            </div>
        </body>

    </div>
  )
}

export default Review