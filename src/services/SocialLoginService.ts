import KakaoLogin from './KakaoLogin';
import NaverLogin from './NaverLogin';

export type SocialLoginProviders = 'kakao' | 'naver';

interface User {
  id: number | string;
  email?: string;
}

export enum LoginErrors {
  // naver, kakao 이외의 다른 provider가 넘어왔을 경우 발생하는 에러
  LoginProviderError,
}

export interface SocialLoginResponse {
  providerId: string;
  provider: string;
  user?: User;
  scopes?: string[];
  email?: string | null;
}
class SocialLoginService {
  private readonly provider: SocialLoginProviders;

  constructor({ provider }: { provider: SocialLoginProviders }) {
    this.provider = provider;
  }
  async login(): Promise<LoginErrors | SocialLoginResponse> {
    switch (this.provider) {
      case 'kakao':
        try {
          const loginProvider = new KakaoLogin();
          const response = await loginProvider.login();
          const result: SocialLoginResponse = {
            providerId: response.provider_id,
            provider: 'kakao',
            email: response.profile.user.email,
            scopes: response.profile.scopes,
            user: { id: response.profile.user.id, email: response.profile.user.email },
          };
          return result;
        } catch (error) {
          return LoginErrors.LoginProviderError;
        }

      case 'naver':
        try {
          const loginProvider = new NaverLogin();
          const response = await loginProvider.login();
          const result: SocialLoginResponse = {
            providerId: response.provider.id,
            provider: 'naver',
            email: response.profile.email,
            scopes: response.profile.scopes,
            user: { id: response.provider.id, email: response.profile.email },
          };
          return result;
        } catch (error) {
          return LoginErrors.LoginProviderError;
        }

      default:
        return LoginErrors.LoginProviderError;
    }
  }
}

export default SocialLoginService;
