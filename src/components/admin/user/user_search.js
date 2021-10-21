import React, { useRef } from 'react';
import { CheckIcon, PencilIcon, SearchIcon, TrashIcon } from '@heroicons/react/solid';

const UserSearch = ({ onSearch }) => {
  const serachSelectRef = useRef('');
  const serachInputRef = useRef('');

  const queryList = () => {
    onSearch({ [serachSelectRef.current.value]: serachInputRef.current.value });
  };

  return (
    <div className="justify-center w-full sm:justify-between sm:flex">
      <div className="flex">
        <span>
          <select
            ref={serachSelectRef}
            className="inline-flex items-center  px-2 py-2 mr-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="userId">아이디</option>
            <option value="userName">이름</option>
            <option value="userMbl">휴대폰번호</option>
          </select>
        </span>
        <span>
          <input
            ref={serachInputRef}
            className="inline-flex items-center w-40 px-2 py-2 mr-1 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </span>
        <span>
          <button
            onClick={queryList}
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
  );
};

export default UserSearch;
