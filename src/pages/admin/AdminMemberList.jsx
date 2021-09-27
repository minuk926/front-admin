/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CogIcon,
  FolderIcon,
  HomeIcon,
  MenuIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  CheckIcon,
  ChevronRightIcon,
  TrashIcon,
  ChevronLeftIcon,
  PencilIcon,
  SearchIcon,
} from '@heroicons/react/solid'

const navigation = [
  { name: '처음으로', href: '/Admin', icon: HomeIcon, current: false },
  { name: '회원관리', href: '/Admin-Member-List', icon: UsersIcon, current: true },
  { name: '게시판관리', href: '/Admin-Board-List', icon: FolderIcon, current: false },
  { name: '환경설정', href: '/Admin-Config', icon: CogIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AdminMemberList() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-left">
              <h1 className="text-2xl font-semibold text-gray-900 mb-5">회원관리</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">


              <div className="flex flex-col  bg-gray-100">
                <div className="justify-center w-full sm:justify-between sm:flex">
                    <div className="flex">
                      <span>
                            <select
                              className="inline-flex items-center  px-2 py-2 mr-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <option>아이디</option>
                              <option>이름</option>
                              <option>휴대폰번호</option>
                            </select>
                      </span>
                      <span>
                       <input
                          className="inline-flex items-center w-40 px-2 py-2 mr-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        </span>
                      <span>

                            <button
                              type="button"
                              className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1  focus:ring-indigo-500"
                            >
                              <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                            </button>
                          </span>
                    </div>


                    <div className="mb-5 text-right mt-5 sm:mt-0">
                          <span>
                            <button
                              type="button"
                              className="inline-flex items-center  px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500 hidden lg:inline-flex " aria-hidden="true" />
                              선택수정
                            </button>
                          </span>

                          <span className="ml-1">
                            <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1  focus:ring-indigo-500"
                            >
                              <TrashIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500 hidden lg:inline-flex" aria-hidden="true" />
                              선택삭제
                            </button>
                          </span>

                          <span className="ml-1">
                            <button
                              type="button"
                              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            >
                              <CheckIcon className="-ml-1 mr-2 h-5 w-5 hidden lg:inline-flex" aria-hidden="true" />
                              회원추가
                            </button>
                          </span>
                    </div>
                  </div>
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-solid divide-gray-200">
                        <thead className="bg-gray-500">
                          <tr>
                            <th
                              scope="col" className=" tracking-wider align-middle " >
                                <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>

                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                            >
                              아이디
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                            >
                              이름
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                            >
                              휴대폰번호
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                            >
                              이메일
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                            >
                              권한
                            </th>
                             <th
                              scope="col"
                              className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                            >
                              차단
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider"
                            >
                              가입일
                            </th>

                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">수정</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-solid divide-gray-200">

                            <tr  className="hover:bg-gray-50">
                              <td className="px-3 py-4 whitespace-nowrap">
                                <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="flex items-center">

                                    <div className="text-sm text-left font-medium text-gray-900">smashpop</div>

                                </div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm text-center text-gray-900">홍철</div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm text-center text-gray-500">010-9167-6731</div>
                              </td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">smashpop@naver.com</td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">

                                <select className="border-gray-300 border-solid border rounded min-w-4">
                                <option value="1" selected="selected">일반</option>
                                <option value="2">매니저</option>
                                <option value="3">관리자</option>
                                </select>
                              </td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500"><input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded"/></td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">21-09-23</td>

                              <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                               <a href="/admin-member-view"><button
                                type="button" className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                              >
                                수정
                              </button></a>
                              </td>
                            </tr>

                            <tr  className="hover:bg-gray-50">
                              <td className="px-3 py-4 whitespace-nowrap">
                                <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="flex items-center">

                                    <div className="text-sm text-left font-medium text-gray-900">smashpop</div>

                                </div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm text-center text-gray-900">홍철</div>
                              </td>
                              <td className="px-3 py-4 whitespace-nowrap">
                                <div className="text-sm text-center text-gray-500">010-9167-6731</div>
                              </td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">smashpop@naver.com</td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">

                                <select className="border-gray-300 border-solid border rounded min-w-4">
                                <option value="1" selected="selected">일반</option>
                                <option value="2">매니저</option>
                                <option value="3">관리자</option>
                                </select>
                              </td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500"><input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded"/></td>
                              <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">21-09-23</td>

                              <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
                               <button
                                type="button"
                                className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                              >
                                수정
                              </button>
                              </td>
                            </tr>


                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>

           <div className="pt-3 items-center justify-between  border-t border-gray-200">

                <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700 mb-3 mt-3 sm:mb-0 sm:mt-0">
                      전체 회원수 : 10명
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-solid border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                      </a>
                      <a
                        href="#"
                        aria-current="page"
                        className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium"
                      >
                        1
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium"
                      >
                        2
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border border-solid text-sm font-medium"
                      >
                        3
                      </a>
                      <span className="relative inline-flex items-center px-4 py-2 border border-solid border-gray-300 bg-white text-sm font-medium text-gray-700">
                        ...
                      </span>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border border-solid text-sm font-medium"
                      >
                        8
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium"
                      >
                        9
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border border-solid text-sm font-medium"
                      >
                        10
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-solid border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>

              </div>



            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
