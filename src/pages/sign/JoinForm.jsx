import {Fragment, useRef, useState} from 'react';
import {Dialog, Transition} from '@headlessui/react';
import cmm from "../../components/cmm/fn_cmm";
import adminUrl from "../../components/cmm/admin_url";
import {useHistory} from "react-router-dom";

export default function JoinForm() {

	const [open, setOpen] = useState(false);
	const [userId, setUserId] = useState("");
	const [userPswd, setUserPswd] = useState("");
	const [userPswd2, setUserPswd2] = useState("");
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userMbl, setUserMbl] = useState("");
	const [mobileAuth, setMobileAuth] = useState("");

	const cancelButtonRef = useRef(null);

	const saveJoin = (e) => {
		e.preventDefault();
		if(!idCheck()) return false;
		if(!userName){
			document.querySelector('#userName').focus();
			return false;
		}
		if(!passwordCheck()) return false;
		if(!moblieCheck())	return false;

		//console.log(`password=[${password}], password2=[${password2}]`)
		if(userPswd !== userPswd2) {
			return alert('비밀번호와 비밀번호확인은 같아야 합니다.');
		}

		if(!confirm(`회원 가입 하시겠습니까?`)) {
			cmm.requestApi(
				'post',
				adminUrl.JOIN,
				cmm.getJsonFromForm(document.querySelector('#frmJoin')),
				res => {
					//alert(JSON.stringify(res));
					if (res.success) {
						alert('정상 처리 되었습니다');
						useHistory().push('/');
					}
				},
				//{"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}
			)
		}
	}

	function idCheck(e){
		// 숫자, 영문만 입력 가능
		const regExpId = /^[0-9a-zA-Z]{6,20}$/;
		if(!regExpId.test(userId)){
			document.querySelector('#spanIdValid').style = 'display';
			document.querySelector('#userId').focus();
			return false;
		}else{
			document.querySelector('#spanIdValid').style['display'] = 'none';
		}
		return true;
	}

	function moblieCheck(){
		// 숫자, 영문만 입력 가능
		const regExpId = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
		if(!regExpId.test(userMbl)){
			document.querySelector('#spanTelValid').style = 'display';
			document.querySelector('#userMbl').focus();
			return false;
		}else{
			document.querySelector('#spanTelValid').style['display'] = 'none';
		}
		return true;
	}

	function passwordCheck(){
		// 숫자, 영문만 입력 가능
		const regExpId = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{1,50}).{6,50}$/;

		if(!regExpId.test(userPswd)){
			document.querySelector('#spanPasswordValid').style = 'display';
			document.querySelector('#userPswd').focus();
			return false;
		}else{
			document.querySelector('#spanPasswordValid').style['display'] = 'none';
		}

		if(/(\w)\1\1\1/.test(userPswd)){
			alert('444같은 문자를 4번 이상 사용하실 수 없습니다.');
			return false;
		}

		if(userPswd.search(userId) > -1){
			alert("비밀번호에 아이디가 포함되었습니다.");
			return false;
		}
		return true;
	}

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
				<form id="frmJoin" className="mt-8 space-y-6">
					<input type="hidden" name="remember" value="true"/>
					<div className="space-y-6">

						<div>
							<label htmlFor="userId" className="input-label">아이디</label>
							<div className="flex space-x-2">

								<input id="userId" name="userId" type="text" autoComplete="username" required
									   className="input-basic flex-initial w-full"
									   placeholder="아이디" value={userId} onChange={e=>setUserId(e.target.value)}/>

								<button onClick={idCheck} type="button"
										className="bt-gray flex-initial w-1/3 ">
									중복확인
								</button>

							</div>
							<span id="spanIdValid" className="input-msg-red">아이디를 입력해 주세요(영문 또는 숫자 6자 이상 20자 미만)</span>
						</div>
						<div>
							<label htmlFor="userName" className="input-label">이름</label>
							<input id="userName" name="userName" value={userName} onChange={e=>setUserName(e.target.value)} type="text"
								   className="input-basic w-full"
								   placeholder="실명을 입력하세요."/>
						</div>
						<div>

							<label htmlFor="userMbl" className="input-label">휴대폰 번호</label>
							<div className="flex space-x-2">
								<input id="userMbl" name="userMbl" type="text" autoComplete="userMbl" required
									   className="input-basic flex-initial w-full"
									   placeholder="'-'구분없이 입력" value={userMbl} onChange={e=>setUserMbl(e.target.value)}/>
								<button onClick={moblieCheck} type="button"
										className="bt-gray flex-initial w-1/3 ">
									인증번호 전송
								</button>
							</div>
							<span id="spanTelValid" className="input-msg-red">규칙에 맞는 휴대폰 번호를 입력해 주세요.</span>

						</div>
						<div>
							<label htmlFor="mobileAuth" className="input-label">인증번호</label>
							<input id="mobileAuth" name="mobileAuth" type="text"
								   className="input-basic w-full"
								   placeholder="인증번호 입력" value={mobileAuth} onChange={e=>setMobileAuth(e.target.value)}/>
							<span id="" className="input-msg-blue">번호 인증 완료</span>
							<span id="" className="input-msg-red">인증번호가 틀렸습니다. 다시 확인해주세요.</span>
						</div>

						<div>
							<label htmlFor="userPswd" className="input-label">비밀번호</label>
							<input id="userPswd" name="userPswd" type="password" autoComplete="userPswd" required
								   className="input-basic w-full"
								   placeholder="비밀번호" value={userPswd} onChange={e=>setUserPswd(e.target.value)}/>
							<span id="spanPasswordValid" className="input-msg-red">8자 이상, 숫자와 특수문자 포함을 권장합니다.</span>
						</div>
						<div>
							<label htmlFor="userPswd2" className="input-label">비밀번호 확인</label>
							<input id="userPswd2" name="userPswd2" type="password" required
								   className="input-basic w-full"
								   placeholder="비밀번호 확인" value={userPswd2} onChange={e=>setUserPswd2(e.target.value)}/>
							<span className="input-msg-red">비밀번호와 비밀번호확인이 일치하지 않습니다.</span>
						</div>
						<div>
							<label htmlFor="userEmail" className="input-label">이메일</label>
							<input id="userEmail" name="userEmail" type="email"
								   className="input-basic w-full"
								   placeholder="이메일" value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
							<span id="spanTelValid" className="input-msg-red">규칙에 맞는 이메일 주소를 입력해 주세요.</span>
						</div>
						{/*<div>*/}
						{/*	<label htmlFor="memo" className="input-label">하고싶은 말</label>*/}
						{/*	<input id="memo" name="memo" type="text"*/}
						{/*		   className="input-basic w-full"*/}
						{/*		   placeholder="하고싶은 말"/>*/}
						{/*</div>*/}

					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input id="remember-me" name="remember-me" type="checkbox" required className="h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
							<label htmlFor="remember-me" className="ml-2 block text-m text-gray-900 font-bold">
								이용약관 동의
							</label>
						</div>
						<div className="text-sm">
							<button className="font-medium text-indigo-600 hover:text-indigo-500 hover:underline" onClick={() => setOpen(true)}>
								이용약관 보기
							</button>

						</div>


					</div>

					<div>
						<button type="button" onClick={saveJoin}
								className="bt-indigo group w-full flex ">
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
							<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
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
							<div
								className="inline-block align-inline-block align-bottom bg-white w-full rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
								<div className="mt-3 sm:mt-0 sm:ml-4ms-start">
									<h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
										이용약관
									</h3>
									<div className="mt-2">
										<p className="text-sm text-gray-500 overflow-auto h-40">
											제1장 총칙<br/><br/>
											제 1 조 (목적)<br/>
											본 약관은 주식회사 000(이하 ”회사”라 합니다)에서 제공하는 인터넷 관련 서비스(접속 가능한 유•무선 단말기의 종류와 관계없이 회사가 제공하는 이용 가능한 모든 서비스를 의미하며, 이하 “서비스”라 합니다)를 이용함에 있어 회사와 회원의
											권리와 의무, 책임사항을 규정함을 그 목적으로 합니다.<br/>
											<br/>
											제 2 조 (용어의 정의)본 약관에서 사용하는 용어의 정의는 다음과 같습니다.<br/>
											1. “사이트”란 회사가 재화 또는 서비스(이하 “상품 등”이라 합니다)를 회원에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 상품 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며 회사가 모바일 환경에서 서비스하는 모바일 웹과 앱을
											포함합니다.<br/>
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
