import React, { useEffect, useState } from 'react';
import UserList from './user_list';
import UserSearch from './user_search';
import Pagenator from '../../cmm/paginator';
import fn from '../../cmm/fn_cmm';
import adminUrl from '../../cmm/admin_url';

const Index = () => {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({});
  const [paginator, setPaginator] = useState({});

  const handleSearch = p => {
    const param = { ...p, page: paginator.page, size: paginator.limit };

    return fn
      .requestApi(
        'get',
        adminUrl.GET_USER_LIST,
        param
        //fn.getJsonFromForm(document.querySelector('#frmJoin'))
        //{"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}
      )
      .then(res => {
        setParams(param);
        res.data && setUsers(res.data);
        res.paginator && setPaginator(res.paginator);
      });
  };
  useEffect(() => {
    //
    fn.requestApi(
      //
      'get',
      adminUrl.GET_USER_LIST,
      { page: 1, size: 1 }
    ).then(res => {
      res.data && setUsers(res.data);
      res.paginator && setPaginator(res.paginator);
    });
  }, []);

  const handlePaging = page => {
    return fn
      .requestApi(
        //
        'get',
        adminUrl.GET_USER_LIST,
        { ...params, page, size: paginator.limit }
      ) //
      .then(res => {
        res.data && setUsers(res.data);
        res.paginator && setPaginator(res.paginator);
      });
  };

  return (
    <>
      <UserSearch onSearch={handleSearch} />
      <UserList users={users} />
      <Pagenator paginator={paginator} onPaging={handlePaging} />
    </>
  );
};

export default Index;
