import React from 'react';

const UserListHeader = () => {
  return (
    <thead className="bg-gray-500">
      <tr>
        <th scope="col" className=" tracking-wider align-middle ">
          <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
        </th>
        <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
          아이디
        </th>
        <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
          이름
        </th>
        <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
          휴대폰번호
        </th>
        <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
          이메일
        </th>
        <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
          권한
        </th>
        <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
          차단
        </th>
        <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">
          가입일
        </th>

        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">수정</span>
        </th>
      </tr>
    </thead>
  );
};

export default UserListHeader;
