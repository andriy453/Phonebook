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
      <input type="email" name="email" />
        <label>emeil</label>
      </div>
      <div className={css.user_box}>
        <input type="password" name="password" />
        <label>Password</label>
      </div>
      <button  type="submit">Register</button>
    </form>
  </div>
//   <div class="login-box">
//   <h2>Login</h2>
//   <form>
//     <div class="user-box">
//       <input type="text" name="" required="">
//       <label>Username</label>
//     </div>
//     <div class="user-box">
//       <input type="password" name="" required="">
//       <label>Password</label>
//     </div>
//     <a>
//       Submit
//     </a>
//   </form>
// </div>
  );
};
