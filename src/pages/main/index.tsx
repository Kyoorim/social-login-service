import React from 'react';
import SocialLoginService, { SocialLoginProviders } from '@/services/SocialLoginService';

const Main = () => {
  const [count, setCount] = React.useState(0);
  const [env, setEnv] = React.useState(process.env.NODE_ENV);
  const onClick = async (provider: SocialLoginProviders) => {
    const service = new SocialLoginService({ provider });
    const resp = await service.login();

    setCount(count + 1);
    alert(resp);
  };

  return (
    <>
      <h1>Hello Vite + React!</h1>
      <button onClick={() => onClick('kakao')}>카카오 로그인</button>
      <button onClick={() => onClick('naver')}>네이버 로그인</button>
      <p className="env">{env}</p>
      <p>count is: {count}</p>
    </>
  );
};

export default Main;
