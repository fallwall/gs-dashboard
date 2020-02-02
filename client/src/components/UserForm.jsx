import React from 'react';

const UserForm = (props) => {
  return (
    <>
      <div className="userform">
        <form onSubmit={props.isLoggingin ? props.handleLogin : props.handleRegister}>
          <p>Username:</p>
          <input name="username" type="text"
            value={props.userForm.username}
            onChange={props.handleChange} />
          {!props.isLoggingin &&
            (<>
              <p>Email:</p>
              <input name="email" type="text"
                value={props.userForm.email}
                onChange={props.handleChange} />
            </>
            )
          }
          <p>Password:</p>
          <input name="password" type="password"
            value={props.userForm.password}
            onChange={props.handleChange} />
          {!props.isLoggingin &&
            (<>
              <p>Zipcode:</p>
              <input name="zipcode" type="number"
                value={props.userForm.zipcode}
                onChange={props.handleChange}
                placeholder="94123"
              />
            </>)}
          <br />
          <button>GO TIME</button>
        </form>
        {props.isLoggingin ?
          <button onClick={props.switchForm}>Don't have an account?</button>
          :
          <button onClick={props.switchForm}>Already have an account?</button>
        }
      </div>
    </>
  )
}

export default UserForm;