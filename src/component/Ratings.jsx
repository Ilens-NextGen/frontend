import React from 'react'

const Ratings = () => {
  return (
    <div>
    <article className='text-white'>
        <div className='flex justify-between items-center mt-4'>
        <div className="flex items-center gap-2 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_500_6808)">
                <path d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5Z" fill="white"/>
                <path d="M12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21C6.26522 21 6.51957 20.8946 6.70711 20.7071C6.89464 20.5196 7 20.2652 7 20C7 18.6739 7.52678 17.4021 8.46447 16.4645C9.40215 15.5268 10.6739 15 12 15C13.3261 15 14.5979 15.5268 15.5355 16.4645C16.4732 17.4021 17 18.6739 17 20C17 20.2652 17.1054 20.5196 17.2929 20.7071C17.4804 20.8946 17.7348 21 18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_500_6808">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <div className="font-medium">
                <p>John Mike</p>
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
            </div>
        </div>
        <p>2 days ago</p>
        </div>
        <p>I’m glad i found the app. It has given me more than an eye</p>
        </article>
    </div>
  )
}

export default Ratings