import React from 'react';

const User = ({ user }) => {
  console.log(user);
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-3 py-4 whitespace-nowrap">
        <input type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
      </td>
      <td className="px-3 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-sm text-left font-medium text-gray-900">{user.userId}</div>
        </div>
      </td>
      <td className="px-3 py-4 whitespace-nowrap">
        <div className="text-sm text-center text-gray-900">{user.userName}</div>
      </td>
      <td className="px-3 py-4 whitespace-nowrap">
        <div className="text-sm text-center text-gray-500">{user.userMbl}</div>
      </td>
      <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">{user.userEmail}</td>
      <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">
        <select className="border-gray-300 border-solid border rounded min-w-4">
          <option value="1" selected="selected">
            일반
          </option>
          <option value="2">매니저</option>
          <option value="3">관리자</option>
        </select>
      </td>
      <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">
        <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
      </td>
      <td className="px-3 py-4 text-center whitespace-nowrap text-sm text-gray-500">{user.createdBy}</td>

      <td className="px-3 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="/admin-member-view">
          <button
            type="button"
            className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            수정
          </button>
        </a>
      </td>
    </tr>
  );
};

export default User;
