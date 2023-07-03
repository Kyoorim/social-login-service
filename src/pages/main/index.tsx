// import React from 'react';
// import SocialLoginService, { SocialLoginProviders } from '@/services/SocialLoginService';
// import KakaoLogin from '@/services/KakaoLogin';
// import NaverLogin from '@/services/NaverLogin';

// const Main = () => {
//   const [count, setCount] = React.useState(0);
//   const [env, setEnv] = React.useState(process.env.NODE_ENV);
//   const onClick = async (provider: SocialLoginProviders) => {
//     // const service = new SocialLoginService({ provider });
//     if (provider === 'kakao') {
//       const result = new KakaoLogin().login();

//     } else if (provider === 'naver') {
//       const result = new NaverLogin().login();
//     }
//     // const resp = await service.login();

//     setCount(count + 1);
//     alert(resp);
//   };

//   return (
//     <>
//       <h1>Hello Vite + React!</h1>
//       <button onClick={() => onClick('kakao')}>카카오 로그인</button>
//       <button onClick={() => onClick('naver')}>네이버 로그인</button>
//       <p className="env">{env}</p>
//       <p>count is: {count}</p>
//     </>
//   );
// };

// export default Main;

import SocialLoginService, { SocialLoginProviders } from '@/services/SocialLoginService';

const Main = () => {
  const onClick = async (provider: SocialLoginProviders) => {
    const service = new SocialLoginService({ provider });
    const resp = await service.login();

    alert(resp);
  };

  return (
    <>
      <button onClick={() => onClick('kakao')}>카카오 로그인</button>
      <button onClick={() => onClick('naver')}>네이버 로그인</button>
    </>
  );
};

export default Main;
