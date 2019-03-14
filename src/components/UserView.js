import React from 'react';

const UserView = ({fetchedUser, userInput}) => (
  <div>
    <h5>User Image</h5>
    <img src={fetchedUser.avatar_url} style={{height: '300px', width: '300px'}} alt='user'/>
    <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <table>
        <tbody>
          <tr>
            <td>
              Name:
            </td>
            <td>
              {fetchedUser.name || 'No listed name'}
            </td>
          </tr>
          <tr>
            <td>
              Email:
            </td>
            <td>
              {fetchedUser.email || 'No listed email'}
            </td>
          </tr>
          <tr>
            <td>
              Company:
            </td>
            <td>
              {fetchedUser.company || 'No listed company'}
            </td>
          </tr>
          <tr>
            <td>
              Public Repo Count:
            </td>
            <td>
              {fetchedUser.public_repos || 'No public repositories'}
            </td>
          </tr>
          <tr>
            <td>
              User Homepage:
            </td>
            <td>
              {<a href={fetchedUser.html_url} target='_blank' rel="noopener noreferrer" alt='user homepage'>GitHub</a> || 'No public repositories'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default UserView;
