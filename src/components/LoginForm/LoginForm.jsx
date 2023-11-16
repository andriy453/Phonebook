import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.login_box}>
    <h2>Login</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
                <div  className={css.conteinerInput}> 
    <div className={css.user_box}>
    <input type="email" name="email" required placeholder='email' />
    </div>
    <div className={css.user_box}>
      <input type="password" name="password" required placeholder='password'/>
          </div>
          </div>
        <button type="submit">Login</button>
        <div className={css.conteinertoLogin}>
          <p className={css.text}>Don't have an account?</p>
      <NavLink className={css.link} to="/Register">
        Register
      </NavLink></div>
  </form>
  </div>
  );
};
