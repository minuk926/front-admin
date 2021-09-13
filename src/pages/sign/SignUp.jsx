import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function SignUp() {
	const [open, setOpen] = useState(false)

	const cancelButtonRef = useRef(null)

	return (

		<div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						회원가입
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						가입을 위한 정보를 입력하세요.
					</p>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST">
					<input type="hidden" name="remember" value="true"/>
					<div className="space-y-6">

						<div>
							<label htmlFor="id" className="block text-grey-darker text-sm font-bold mb-2 text-left">아이디</label>
							<div className="flex space-x-2">

								<input id="id" name="id" type="text" autoComplete="username" required
									   className="flex-initial w-full appearance-none rounded-none relative block px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									   placeholder="아이디"/>

								<button type="submit"
										className="flex-initial w-1/3 justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
									중복확인
								</button>

							</div>
							<span className="block text-red-700 text-xs mt-2 pl-1 text-left">규칙에 맞는 이메일 주소를 입력해주세요.</span>
						</div>

						<div>

							<label htmlFor="tel" className="block text-grey-darker text-sm font-bold mb-2 text-left">휴대폰 번호</label>
							<div className="flex space-x-2">
								<input id="tel" name="tel" type="tel" autoComplete="tel" required
									   className="flex-initial w-full appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									   placeholder="휴대폰 번호"/>
								<button type="submit"
										className="flex-initial w-1/3 justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2">
									번호인증
								</button>
							</div>
							<span className="block text-red-700 text-xs mt-2  pl-1 text-left">규칙에 맞는 휴대폰 번호를 입력해 주세요.</span>

						</div>
						<div>
							<label htmlFor="password" className="block text-grey-darker text-sm font-bold mb-2 text-left">비밀번호</label>
							<input id="password" name="password" type="password" autoComplete="current-password" required
								   className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								   placeholder="비밀번호"/>
							<span className="block text-red-700 text-xs mt-2 pl-1 text-left">8자 이상, 숫자와 특수문자 포함을 권장합니다.</span>
						</div>
						<div>
							<label htmlFor="password2" className="block text-grey-darker text-sm font-bold mb-2 text-left">비밀번호 확인</label>
							<input id="password2" name="password2" type="password" required
								   className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								   placeholder="비밀번호 확인"/>
							<span className="block text-red-700 text-xs mt-2 pl-1 text-left">비밀번호와 비밀번호확인이 일치하지 않습니다.</span>
						</div>
						<div>
							<label htmlFor="memo" className="block text-grey-darker text-sm font-bold mb-2 text-left">하고싶은 말</label>
							<input id="memo" name="memo" type="text"
								   className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
								   placeholder="하고싶은 말"/>
						</div>

					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input id="remember-me" name="remember-me" type="checkbox" required className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
							<label htmlFor="remember-me" className="ml-2 block text-m text-gray-900 font-bold">
								이용약관 동의
							</label>
						</div>
						<div className="text-sm">
							<button className="font-medium text-indigo-600 hover:text-indigo-500 underline" onClick={() => setOpen(true)}>
								이용약관 보기
							</button>

						</div>


					</div>

					<div>
						<button type="submit"
								className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
							회원가입하기
						</button>
					</div>
				</form>
			</div>

			<Transition.Root show={open} as={Fragment}>
				<Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
					<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="inline-block align-inline-block align-bottom bg-white w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
								<div className="mt-3 sm:mt-0 sm:ml-4ms-start">
									<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title" >
										이용약관
									</h3>
									<div className="mt-2">
										<p className="text-sm text-gray-500 overflow-auto h-40">
														제1장 총칙<br/><br/>
														제 1 조 (목적)<br/>
														본 약관은 주식회사 000(이하 ”회사”라 합니다)에서 제공하는 인터넷 관련 서비스(접속 가능한 유•무선 단말기의 종류와 관계없이 회사가 제공하는 이용 가능한 모든 서비스를 의미하며, 이하 “서비스”라 합니다)를 이용함에 있어 회사와 회원의 권리와 의무, 책임사항을 규정함을 그 목적으로 합니다.<br/>
														<br/>
															제 2 조 (용어의 정의)본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>
															1. “사이트”란 회사가 재화 또는 서비스(이하 “상품 등”이라 합니다)를 회원에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 상품 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며 회사가 모바일 환경에서 서비스하는 모바일 웹과 앱을 포함합니다.<br/>
															2. “회원”이라 함은 사이트에서 정한 소정의 절차를 거쳐 회원가입을 한 자로서, 약관에 따라 회사가 제공하는 서비스를 이용할 수 있는 자를 말합니다.<br/>
															3. “아이디(ID)”라 함은 회원의 식별과 서비스의 이용을 위하여 회원이 설정하고 회사가 승인하여 등록된 전자우편주소 또는 소셜 서비스 연동을 통해 수집된 전자우편주소를 말합니다.<br/>
															4. “메일 인증”이라 함은 회원이 서비스의 이용을 위하여 제출한 인증번호를 통해 이메일의 진위여부를 확인하는 것을 말합니다.<br/>
															5. “비밀번호(Password)”라 함은 회원의 동일성 확인과 회원의 권익 및 비밀보호를 위하여 회원 스스로가 설정하여 사이트에 등록한 문자와 숫자의 조합을 말합니다.<br/>
															6. “포인트”라 함은 상품 등을 구매하거나 사이트가 제공하는 서비스를 이용할 때 현금처럼 사용할 수 있는 사이트 전용의 사이버 화폐를 말합니다.<br/>
															7. “쿠폰”이라 함은 상품 등을 구매하거나 사이트가 제공하는 서비스를 이용할 때 표시된 금액 또는 비율만큼 할인을 받을 수 있는 쿠폰을 말합니다.<br/>
															8. 위 항에서 정의되지 않은 약관 상의 용어의 의미는 일반적인 거래관행에 따릅니다.<br/>

										</p>
									</div>
								</div>
								<div className="mt-5">

									<button
										type="button"
										className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
										onClick={() => setOpen(false)}
										ref={cancelButtonRef}
									>
										확인
									</button>
								</div>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition.Root>



		</div>



	)
}
