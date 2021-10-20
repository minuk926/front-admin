import React, { useEffect, useState } from 'react';
import UserList from './user_list';
import UserSearch from './user_search';
import Pagenator from '../../cmm/paginator';
import fn from '../../cmm/fn_cmm';
import adminUrl from '../../cmm/admin_url';

const Index = () => {
  const searchParam = fn.useInput('');
  const [selected, setSelected] = useState('');
  const [users, setUsers] = useState();
  const [paginator, setPaginator] = useState({});

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const queryList = () => {
    let param = {
      //cmmUserDto: {

      userId: searchParam.value,
      //},
      // pageable: {
      //
      pageSize: 10,
      pageNumber: 1,
      page: 1,
      size: 10
    };

    return fn.requestApi(
      'get',
      adminUrl.GET_USER_LIST,
      param
      //fn.getJsonFromForm(document.querySelector('#frmJoin'))
      //{"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}
    );
  };
  useEffect(() => {
    queryList().then(res => {
      setUsers(res.data);
      setPaginator(res.paginator);
    });
  }, []);

  return (
    <>
      <UserSearch />
      <UserList users={users} />
      <Pagenator paginator={paginator} />
    </>
  );
};

export default Index;
