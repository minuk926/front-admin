import {LockClosedIcon} from '@heroicons/react/solid'

export default function Login() {
	return (


		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-5">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						로그인
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						원하시는 로그인 방식을 선택하세요.
					</p>
				</div>
				<div>
					<button onClick="sign.kakaoLogin()"
							className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
				  <span className="absolute left-0 inset-y-0 flex items-center pl-4">
					  <svg className="h-5 w-5 text-yellow-300 group-hover:text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
						   aria-hidden="true">
						<path fillRule="evenodd"
							  d="M10.162,0.665 C4.549,0.665 0.0,4.197 0.0,8.553 C0.0,11.262 1.759,13.652 4.439,15.72 L3.311,19.210 C3.212,19.577 3.628,19.868 3.948,19.656 L8.890,16.378 C9.307,16.419 9.730,16.442 10.162,16.442 C15.774,16.442 20.324,12.910 20.324,8.553 C20.324,4.197 15.774,0.665 10.162,0.665 "/>
					  </svg>
				  </span>

						카카오톡 로그인
					</button>
				</div>


				<div>
					<button onClick="sign.googleLogin()"
							className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
		  <span className="absolute left-0 inset-y-0 flex items-center pl-4">

			  <svg className="h-5 w-5 text-red-400 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
				<path fillRule="evenodd"
					  d="M20.152,8.864 L10.713,8.864 L10.713,12.552 L16.117,12.552 C15.875,13.762 15.165,14.784 14.113,15.479 C13.210,16.68 12.66,16.427 10.713,16.427 C8.98,16.427 5.884,14.702 5.90,12.372 C4.881,11.783 4.773,11.153 4.773,10.500 C4.773,9.845 4.890,9.216 5.90,8.627 C5.884,6.296 8.98,4.572 10.713,4.572 C12.191,4.572 13.511,5.70 14.555,6.43 L17.413,3.247 C15.683,1.661 13.419,0.688 10.713,0.688 C6.794,0.688 3.411,2.895 1.765,6.100 C1.80,7.425 0.688,8.913 0.688,10.500 C0.688,12.85 1.80,13.574 1.765,14.898 C3.411,18.104 6.794,20.311 10.713,20.311 C13.419,20.311 15.683,19.428 17.337,17.932 C19.225,16.223 20.311,13.704 20.311,10.720 C20.311,10.74 20.253,9.461 20.152,8.864 Z"/>
			</svg>
		  </span>
						구글 로그인
					</button>
				</div>

				<div>
					<button onClick="document.location = 'sign-in.html';"
							className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

					<span className="absolute left-1 inset-y-0 flex items-center pl-3">
               			<LockClosedIcon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
            		</span>
						아이디 로그인
					</button>
				</div>
				<div>

					<p className="text-center text-xs text-gray-600 pt-5">
						로그인/회원 관련 궁금하신 사항이 있다면?
					</p>
					<a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline ">자주 묻는 질문 바로가기></a>
				</div>
			</div>
		</div>

	)
}