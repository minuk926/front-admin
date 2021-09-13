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

				  <svg className="h-6 w-6 text-yellow-300 group-hover:text-yellow-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor"
					   aria-hidden="true">

				</svg>
			  </span>
						카카오톡 로그인
					</button>
				</div>


				<div>
					<button onClick="sign.googleLogin()"
							className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
		  <span className="absolute left-0 inset-y-0 flex items-center pl-4">

			  <svg className="h-6 w-6 text-red-400 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17" fill="currentColor" aria-hidden="true">

			</svg>
		  </span>
						구글 로그인
					</button>
				</div>

				<div>
					<button onClick="document.location = 'sign-in.html';"
							className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
			  <span className="absolute left-0 inset-y-0 flex items-center pl-4">
				  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
					   aria-hidden="true">
				</svg>
			  </span>
						아이디 로그인
					</button>
				</div>
				<div>

					<p className="text-center text-xs text-gray-600 pt-5">
						로그인/회원 관련 궁금하신 사항이 있다면? <br/>
						<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 underline ">자주 묻는 질문 바로가기></a>
					</p>
				</div>
			</div>
		</div>

)
}