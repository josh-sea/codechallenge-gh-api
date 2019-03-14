import React from 'react';

const UserView = ({fetchedUser}) => (
  <div>
    <h5>User Image</h5>
    <img src={fetchedUser.avatar_url} style={{height: '300px', width: '300px'}}/>
    <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    <table>
    <tbody>
      <tr>
        <td>
          Name:
        </td>
        <td>
          {fetchedUser.name}
        </td>
      </tr>
      <tr>
        <td>
          Email:
        </td>
        <td>
          {fetchedUser.email}
        </td>
      </tr>
      <tr>
        <td>
          Company:
        </td>
        <td>
          {fetchedUser.company}
        </td>
      </tr>
      <tr>
        <td>
          Public Repo Count:
        </td>
        <td>
          {fetchedUser.public_repos}
        </td>
      </tr>
      </tbody>
    </table>
    </div>
  </div>
);

export default UserView;
