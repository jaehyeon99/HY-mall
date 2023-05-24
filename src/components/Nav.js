
function Nav() {
    return (
        <div className="bg-black flex items-center py-4 justify-between px-10 mb-10">
            <div>
                <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 7H19M1 1H19M1 13H19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div>
                    <a href="/" className="text-white text-2xl">HYMALL</a>

            </div>
            <div className="flex items-center space-x-3">
                <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M17 19C17 17.6044 17 16.9067 16.8278 16.3389C16.44 15.0605 15.4395 14.06 14.1611 13.6722C13.5933 13.5 12.8956 13.5 11.5 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <svg
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.1978 6C14.1978 7.06087 13.7764 8.07828 13.0263 8.82843C12.2761 9.57857 11.2587 10 10.1978 10C9.13696 10 8.11955 9.57857 7.3694 8.82843C6.61926 8.07828 6.19783 7.06087 6.19783 6M1.83105 5.40138L1.13105 13.8014C0.980672 15.6059 0.905483 16.5082 1.21051 17.2042C1.47852 17.8157 1.94286 18.3204 2.53002 18.6382C3.1983 19 4.10369 19 5.91447 19H14.4812C16.292 19 17.1974 19 17.8656 18.6382C18.4528 18.3204 18.9171 17.8157 19.1851 17.2042C19.4902 16.5082 19.415 15.6059 19.2646 13.8014L18.5646 5.40138C18.4352 3.84875 18.3705 3.07243 18.0267 2.48486C17.7239 1.96744 17.2731 1.5526 16.7323 1.29385C16.1182 1 15.3392 1 13.7812 1L6.61447 1C5.05645 1 4.27745 1 3.66335 1.29384C3.12257 1.5526 2.67173 1.96744 2.36896 2.48486C2.02513 3.07243 1.96043 3.84875 1.83105 5.40138Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 15L12.2779 12.2778M14.2222 7.61111C14.2222 11.2623 11.2623 14.2222 7.61111 14.2222C3.95989 14.2222 1 11.2623 1 7.61111C1 3.95989 3.95989 1 7.61111 1C11.2623 1 14.2222 3.95989 14.2222 7.61111Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Nav;
