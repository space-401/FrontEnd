const Auth = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  return <div>카카오 로그인 완료</div>;
};

export default Auth;
