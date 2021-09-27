import {Fragment, useRef, useState} from 'react';
import cmm from "../../components/cmm/fn_cmm";
import adminUrl from "../../components/cmm/admin_url";
import {useHistory} from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'

import {
  CogIcon,
  FolderIcon,
  HomeIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'

const navigation = [
  { name: '처음으로', href: '/Admin', icon: HomeIcon, current: true },
  { name: '회원관리', href: '/Admin-Member-List', icon: UsersIcon, current: false },
  { name: '게시판관리', href: '/Admin-Board-List', icon: FolderIcon, current: false },
  { name: '환경설정', href: '/Admin-Config', icon: CogIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Admin() {
 	const [sidebarOpen, setSidebarOpen] = useState(false)

	const history = useHistory();
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
			cmm.alertMessage('비밀번호와 비밀번호확인은 같아야 합니다.', '회원가입')
				.then();
			document.querySelector('#userPswd2').focus();
			return false;
		}

		cmm.confirmMessage( '회원 가입 하시겠습니까?', '회원가입')
			.then(isOk => {
				if(isOk){
					cmm.requestApi(
						'post',
						adminUrl.JOIN,
						cmm.getJsonFromForm(document.querySelector('#frmJoin')),
						res => {
							if (res.success) {
								cmm.alertMessage('정상 처리 되었습니다', '회원가입')
									.then(r => history.push('sign-in'));
							}
						},
						//{"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}
					).then()
				}
			});
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
			cmm.alertMessage('같은 문자를 4번 이상 사용하실 수 없습니다.', '회원가입').then();
			return false;
		}

		if(userPswd.search(userId) > -1){
			alert("비밀번호에 아이디가 포함되었습니다.");
			cmm.alertMessage('비밀번호에 아이디가 포함되었습니다.', '회원가입').then();
			return false;
		}
		return true;
	}



  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4 text-lg font-bold">
                <a href="/admin">React Admin</a>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">관리자</p>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">로그아웃</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-48">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4 text-lg font-bold ">
               <a href="/admin">React Admin</a>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">관리자</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">로그아웃</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-left border-b border-solid border-gray-300">
              <h1 className="text-2xl font-semibold text-gray-900">회원정보 수정</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">



              {/* 회원가입 폼 start */}

				<div className="mb-5 text-right mt-5 sm:mt-0">
                          <span>
                            <a href="/admin-member-list"><button
                              type="button"
                              className="inline-flex items-center  px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >

                              목록
							</button></a>
                          </span>


                          <span className="ml-1">
                           <a href="/admin-member-list"> <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >

                              저장
						   </button></a>
                          </span>
                    </div>

				<form id="frmJoin" className="mt-8">
					<div className="grid grid-cols-2 gap-4">

						<div>
							<label htmlFor="userId" className="input-label">아이디</label>
							<input id="userId" name="userId" type="text" autoComplete="username" required
									className="input-basic flex-initial w-full"
									placeholder="아이디" value={userId} onChange={e=>setUserId(e.target.value)}/>

						</div>
						<div>
							<label htmlFor="userName" className="input-label">이름</label>
							<input id="userName" name="userName" value={userName} onChange={e=>setUserName(e.target.value)} type="text"
								   className="input-basic flex-initial w-full"
								   placeholder="실명을 입력하세요."/>
						</div>
						<div>

							<label htmlFor="userMbl" className="input-label">휴대폰 번호</label>
							<input id="userMbl" name="userMbl" type="text" autoComplete="userMbl" required
								   className="input-basic flex-initial w-full"
								   placeholder="'-'구분없이 입력" value={userMbl} onChange={e=>setUserMbl(e.target.value)}/>


						</div>
						<div>
							<label htmlFor="userPswd" className="input-label">비밀번호</label>
							<input id="userPswd" name="userPswd" type="password" autoComplete="userPswd" required
								   className="input-basic w-full"
								   placeholder="비밀번호" value={userPswd} onChange={e=>setUserPswd(e.target.value)}/>
						</div>
						<div>
							<label htmlFor="userEmail" className="input-label">이메일</label>
							<input id="userEmail" name="userEmail" type="email"
								   className="input-basic w-full"
								   placeholder="이메일" value={userEmail} onChange={e=>setUserEmail(e.target.value)}/>
						</div>

						<div>
							<label htmlFor="userEmail" className="input-label">가입일</label>
							<input type="input"
								   className="input-basic w-full"
								   value="21-01-01"/>
						</div>
						<div>
							<label htmlFor="userEmail" className="input-label">최근접속일</label>
							<input type="input"
								   className="input-basic w-full"
								   value="21-01-01"/>
						</div>
						<div className="text-left">
							<label htmlFor="userEmail" className="input-label">회원권한</label>
							<select className="border-gray-300 border-solid border rounded min-w-4">
                                <option value="1" selected="selected">일반</option>
                                <option value="2">매니저</option>
                                <option value="3">관리자</option>
                                </select>
						</div>
						<div className="text-left">
							<label htmlFor="userEmail" className="input-label">차단여부</label>
							<input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
						</div>


					</div>




				</form>



				{/* 회원가입 폼 end */}

              {/* /End replace */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
