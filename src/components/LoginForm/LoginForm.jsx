import { useDispatch } from 'react-redux';
import { logIn } from 'reduxs/auth/operations';
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
    <form  onSubmit={handleSubmit}>
      <div className={css.user_box}>
      <input type="email" name="email" required/>
        <label>emeil</label>
      </div>
      <div className={css.user_box}>
        <input type="password" name="password"  required/>
        <label>Password</label>
      </div>
      <button  type="submit">Login</button>
    </form>
  </div>
  );
};
