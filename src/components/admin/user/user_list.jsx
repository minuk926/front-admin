import React from 'react';
import User from './user';
import UserListHeader from './user_list_header';

const UserList = ({ users }) => {
  console.log(users);
  return (
    <>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-solid divide-gray-200">
              <UserListHeader />
              <tbody className="bg-white divide-y divide-solid divide-gray-200">{users && users.map(user => <User key={user.cmmUserId} user={user} />)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
