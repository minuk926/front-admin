export default function SignIn() {
	return (

		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						아이디 로그인
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						아이디와 패스워드를 입력하세요.
					</p>
				</div>
				<form id="frmLogin" className="mt-8 space-y-6">
					<input type="hidden" name="remember" defaultValue="true" />
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="id" className="sr-only">아이디</label>
								<input id="id" name="id" autoComplete="id" required
									   className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									   placeholder="아이디" />

							</div>
							<div>
								<label htmlFor="password" className="sr-only">패스워드</label>
								<input id="password" name="password" type="password" autoComplete="current-password" required
									   className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									   placeholder="패스워드" />
							</div>
						</div>

						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input id="remember-me" name="remember-me" type="checkbox" className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
									<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
										자동 로그인
									</label>
							</div>

							<div className="text-sm">
								<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
									비밀번호 찾기
								</a>
							</div>
						</div>

						<div>
							<button onClick="sign.login()"
									className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
								  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
									   aria-hidden="true">
								</svg>
							  </span>
								로그인
							</button>
						</div>

				</form>
				<div>

					<p className="mt-2 text-center text-sm text-gray-600">
						아직 계정이 없으신가요? <a href="#" className="font-bold text-indigo-600 hover:text-indigo-500 underline ">회원가입하기</a>
					</p>
				</div>
			</div>
		</div>
	)
}