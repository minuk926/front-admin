import {LockClosedIcon} from '@heroicons/react/solid'

export default function signUPComplete() {
	return (


    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-32  w-auto text-indigo-600 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">회원 가입 완료</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            회원 가입이 완료 되었습니다.

          </p>
        </div>

          <div>
            <button
              type="submit"
              className="bt-indigo group relative w-full flex"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-6 w-6 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              로그인
            </button>
          </div>

      </div>
    </div>
  )
}

