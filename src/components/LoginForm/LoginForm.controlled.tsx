import { FormEvent, useState, useEffect } from 'react';
import type { ChangeEventHandler } from 'react';

type User = {
  email: string;
  password: string;
};

const defaultUser: User = {
  email: 'patryk@wp.pl',
  password: 'xzbjhsdbjdsf',
};

export const LoginFormControlled = () => {
  const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState<User>(defaultUser);

  // useEffect(() => {
  //   if (user.email.includes('@')) {
  //     console.log('valid');
  //   } else {
  //     console.log('invalid');
  //   }
  // }, [user.email, user.password]); // email || password

  useEffect(() => {
    if (user.email.includes('php')) {
      setUser({
        ...user,
        email: '****@domain.com',
      });
    } else {
      console.log('ok!');
    }
  }, [user.email]);

  useEffect(() => {
    if (user.password.includes('#')) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }, [user.password]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  };
  // const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log('event: ', event);
  // }

  return (
    <div>
      {isSent ? (
        <div>
          <h2>Form values</h2>
          <p>
            Email: {user.email}, {user.password}
          </p>
        </div>
      ) : null}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="E-mail">E-mail</label>
          <input type="email" name="email" onChange={handleChange} value={user.email} />
        </div>
        <div>
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" onChange={handleChange} value={user.password} />
        </div>
        <div>
          <input type="submit" value="Send me" />
        </div>
      </form>
    </div>
  );
};
