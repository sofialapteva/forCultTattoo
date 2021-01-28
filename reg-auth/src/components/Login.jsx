import React from 'react'
import styles from './styles'
import { useHistory } from 'react-router-dom'

const url = 'http://localhost:3001'
function Login() {
  const history = useHistory()

  React.useEffect(() => {
    (async () => {
      const req = await fetch(`${url}/registration`);
      const res = await req.json();
      if (res?.authorizated === true) {
        alert('Вы уже вошли');
        history.push('/')
      }
    })()
  }, [])

  const submitHandler = async (e) => {
    e.preventDefault()
    const req = await fetch(`${url}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: e.target.login.value,
        password: e.target.password.value,
      })
    })
    //Обнулять формы необязательно, но можно. При неудачной регистрации лучше сохранить input, при удачной произойдет переадресация
    // e.target.login.value = ''
    // e.target.password.value = ''

    const res = await req.json()
    if (res.issuccess) {
      alert('Вы зарегистрированы');
      history.push('/auth')
    } else {
      alert(res.errormessage)
    }
  }
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <input required name='login' type='text' className={styles.input} placeholder='Login' />
      <input required name='password' type='password' className={styles.input} placeholder='Password' />
      <button className={styles.btn}>Login</button>
    </form >
  )
}

export default Login

