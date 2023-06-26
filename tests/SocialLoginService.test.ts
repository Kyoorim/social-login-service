import SocialLoginService from '../src/services/SocialLoginService';

describe('SocialLoginService', () => {
  it('should login through kakao', async () => {
    const service = new SocialLoginService({ provider: 'kakao' });
    const response = await service.login();
    expect(response).toBe({
      provider_id: 'be35f10d-1214-46af-af06-916429eaf77d',
      profile: {
        scopes: ['email', 'name'],
        user: { id: 'be35f10d-1214-46af-af06-916429eaf77d', email: 'test@example.com' },
      },
    });
  });
  it('should login through naver', async () => {
    const service = new SocialLoginService({ provider: 'naver' });
    const response = await service.login();
    expect(response).toBe({
      provider: {
        id: 'be35f10d-1214-46af-af06-916429eaf77d',
      },
      profile: {
        scopes: ['email', 'name'],
        user_name: 'test',
        email: 'test@example.com',
      },
    });
  });
});
