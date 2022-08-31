import { FormEvent, useState } from 'react';
import type { ChangeEventHandler } from 'react';

type User = {
  email: string;
  password: string;
}

const defaultUser: User = {
  email: '',
  password: '',
}

export const LoginForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState<User>(defaultUser);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  }
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log('event: ', event);
  // }

  return (
    <div>
      {isSent ? (
        <div>
          <h2>Form values</h2>
          <p>Email: {user.email}, {user.password}</p>
        </div>
      ): null}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="E-mail">E-mail</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div>
          <input type="submit" value="Send me" />
        </div>
      </form>
    </div>
  );
}