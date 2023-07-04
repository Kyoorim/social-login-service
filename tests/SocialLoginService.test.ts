import SocialLoginService from '../src/services/SocialLoginService';

const loginForm = {
  providerId: 'be35f10d-1214-46af-af06-916429eaf77d',
  provider: 'kakao',
  scopes: ['email', 'name'],
  user: { id: 'be35f10d-1214-46af-af06-916429eaf77d', email: 'test@example.com' },
  email: 'test@example.com',
};

describe('SocialLoginService', () => {
  it('should login through kakao', async () => {
    const service = new SocialLoginService({ provider: 'kakao' });
    const response = await service.login();
    expect(response).toStrictEqual(loginForm);
  });
  it('should login through naver', async () => {
    const service = new SocialLoginService({ provider: 'naver' });
    const response = await service.login();
    const loginFormNaver = { ...loginForm, provider: 'naver' };
    expect(response).toStrictEqual(loginFormNaver);
  });
});
