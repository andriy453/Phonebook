import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import { NavLink } from 'react-router-dom';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
      <div className={css.login_box}>
  <h2>Register</h2>
  <form  onSubmit={handleSubmit} autoComplete="off">
        <div  className={css.conteinerInput}>
          <div className={css.user_box}>
        <input type="text" name="name" required placeholder='name' />
    </div>
    <div className={css.user_box}>
    <input type="email" name="email" required placeholder='email' />
    </div>
    <div className={css.user_box}>
      <input type="password" name="password" required placeholder='password'/>
    </div>
    </div>
        <button type="submit">Register</button>
        <div className={css.conteinertoLogin}>
          <p className={css.text}>Already have an account? </p>
      <NavLink className={css.link} to="/login">
        Login
      </NavLink></div>
  </form>
    </div>
  );
};
