import { FormEvent, useState, useRef, useEffect } from 'react';

type User = {
  email: string;
  password: string;
};

const defaultUser: User = {
  email: 'patryk@wp.pl',
  password: 'xzbjhsdbjdsf',
};

export const LoginForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const emailFieldRef = useRef<HTMLInputElement>(null);
  const passwordFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailFieldRef.current) {
      emailFieldRef.current.focus();
    }
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailFieldRef.current && passwordFieldRef.current) {
      const emailInput = emailFieldRef.current;

      emailInput.style.border = '1px';
      if (emailInput.value.includes('@')) {
        emailInput.style.border = '1px solid black';
        setIsValid(true);
      } else {
        emailInput.style.border = '1px solid red';
        setIsValid(false);
      }

      // console.log({
      //   email: emailInput.value,
      //   password: passwordFieldRef.current.value
      // });
    }
    setIsSent(true);
  };

  const handleBlur = () => {
    if (emailFieldRef.current) {
      emailFieldRef.current.style.border = '1px solid blue';
    }
  };

  const handleFocus = () => {
    if (emailFieldRef.current) {
      emailFieldRef.current.style.border = '1px solid green';
    }
  };

  return (
    <div>
      {isSent ? (
        <div>
          <h2>Form values</h2>
          {!isValid && <p>Email is invalid</p>}
        </div>
      ) : null}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            ref={emailFieldRef}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="text"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordFieldRef} type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Send me" />
        </div>
      </form>
    </div>
  );
};
