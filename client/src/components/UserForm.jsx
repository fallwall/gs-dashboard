import React from 'react';

const UserForm = (props) => {
  return (
    <>{props.currentUser === null &&
      (<>
        <div className="userform">
          <form onSubmit={props.isLoggingin ? props.handleLogin : props.handleRegister}>
            <div className="userform-item"> <p>Username:
              <input name="username" type="text"
                value={props.userForm.username}
                onChange={props.handleChange} />
            </p>
            </div>

            {!props.isLoggingin &&
              (<>
                <div className="userform-item">
                  <p>Email:
                  <input name="email" type="text"
                      value={props.userForm.email}
                      onChange={props.handleChange} />
                  </p>
                </div>
              </>
              )
            }
            <div className="userform-item">
              <p>Password:
              <input name="password" type="password"
                  value={props.userForm.password}
                  onChange={props.handleChange} />
              </p>
            </div>
            {!props.isLoggingin &&
              (<>
                <div className="userform-item">
                  <p>Zipcode:
                  <input name="zipcode" type="number"
                      value={props.userForm.zipcode}
                      onChange={props.handleChange}
                      placeholder="94123"
                    />
                  </p>
                </div>
              </>)}
            <br />
            <button className="non-button">Connect</button>
          </form>
          {props.isLoggingin ?
            <button className="non-button" onClick={props.switchForm}>Don't have an account?</button>
            :
            <button className="non-button" onClick={props.switchForm}>Already have an account?</button>
          }
        </div>
      </>
      )}
      {props.currentUser !== null &&
        (<>
          <p>Hi, {props.currentUser.username}
          <button className="button" onClick={props.handleLogout}>LOG OUT</button>
        </p>
      </>
        )
      }
    </>
  )
}

export default UserForm;