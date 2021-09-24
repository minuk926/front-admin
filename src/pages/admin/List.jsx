import {
  CheckIcon,
  ChevronRightIcon,
  TrashIcon,
  ChevronLeftIcon,
  PencilIcon,
  SearchIcon,
} from '@heroicons/react/solid'

export default function List() {
  return (
    <div className="flex flex-col p-10 bg-gray-100">
      <div className="justify-between w-full bg-blue-100 flex">
          <div className="flex">
            <span className="">
                  <button
                    type="button"
                    className="inline-flex items-center px-2 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <SearchIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  </button>
                </span>
          </div>


          <div className="mb-5 text-right flex">
                <span className="">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <PencilIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    선택수정
                  </button>
                </span>

                <span className="ml-3">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <TrashIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    선택삭제
                  </button>
                </span>

                <span className="ml-3">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
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
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
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
  )
}
