import React from 'react'

export default function Header() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);
  const [emailError, setEmailError] = React.useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');


    const blurHandler = (e) => {
      switch (e.target.value) {
        case 'email':
          setEmailDirty(true)

        case 'password':
          setPasswordDirty(true)
          break;
      }
    }

console.log(emailDirty)

  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <form>
            
              <h1> Simple Flight Check</h1>

              {emailDirty && {emailError}}
              <label htmlFor="email"><b>Логин</b></label>
              <input onBlur={(e) => blurHandler(e)} type="text"  id="email" name="email" />

              <label htmlFor="password"><b>Пароль</b></label>
              <input onBlur={(e) => blurHandler(e)} type="password"  id="password" name="password" />
              {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}

              <div className="btn_block">
                <button type="submit">Войти</button>
              </div>


            

          </form>
        </div>
      </div>
    </div>
  )
}
