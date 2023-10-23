import { useDispatch } from 'react-redux';
import { register } from 'reduxs/auth/operations';
import css from './RegisterForm.module.css';

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
    <div className={css.user_box}>
        <input type="text" name="name" required />
      <label>Username</label>
    </div>
    <div className={css.user_box}>
    <input type="email" name="email" required />
      <label>emeil</label>
    </div>
    <div className={css.user_box}>
      <input type="password" name="password" required/>
      <label>Password</label>
    </div>
    <button  type="submit">Register</button>
  </form>
</div>
  );
};
