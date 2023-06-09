import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import userApi from '~/api/userApi';

AdminUser.propTypes = {};

function AdminUser(props) {
  const dispatch = useDispatch();
  const { users } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(userApi.getAll());
  }, []);
  return (
    <div className="grow mt-[10px]">
      <h1 className="text-2xl text-center">User Statistic</h1>
      <div className='px-[20px]'>
        <table>
          <th>Username</th>
          <th>Name</th>
          {users.map(user => (
            <tr>
              <td>{user.username}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default AdminUser;
