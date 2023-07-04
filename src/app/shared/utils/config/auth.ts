import {
  NbAuthJWTToken,
  NbAuthOptions,
  NbPasswordAuthStrategy,
  NbPasswordAuthStrategyOptions,
} from '@nebular/auth';
import {
  NbFirebaseGoogleStrategy,
  NbFirebasePasswordStrategy,
  NbFirebasePasswordStrategyOptions,
} from '@nebular/firebase-auth';

export class AuthConfig {
  create(): NbAuthOptions {
    return {
      strategies: [
        NbFirebasePasswordStrategy.setup(this.createFirabaseStrategies()),
      ],
      forms: this.createForms(),
    } as NbAuthOptions;
  }

  private createPasswordStrategy() {
    return {
      name: 'email',
      token: {
        class: NbAuthJWTToken,
      },
    } as NbPasswordAuthStrategyOptions;
  }

  private createFirabaseStrategies(): NbFirebasePasswordStrategyOptions {
    return {
      name: 'email',
      token: {
        class: NbAuthJWTToken,
      },
      login: {
        redirect: {
          success: 'main',
        },
      },
      register: {
        redirect: {
          success: 'example/firebase/password-showcase',
        },
      },
      logout: {
        redirect: {
          success: '/',
          failure: '/',
        },
      },
      requestPassword: {
        redirect: {
          success: 'auth/login',
        },
      },
      resetPassword: {
        redirect: {
          success: 'auth/login',
        },
      },
    };
  }

  private createForms() {
    return {
      login: {
        redirectDelay: 500,
        strategy: 'email',
        rememberMe: true,
        socialLinks: [],
        showMessages: {
          success: true,
          error: true,
        },
      },
      register: {
        strategy: 'email',
        terms: true,
        socialLinks: [],
      },
      logout: {
        redirectDelay: 500,
        strategy: 'email',
      },
      requestPassword: {
        strategy: 'email',
        socialLinks: [],
      },
      resetPassword: {
        strategy: 'email',
        socialLinks: [],
      },
      validation: {
        password: {
          required: true,
          minLength: 6,
          maxLength: 50,
        },
        email: {
          required: true,
        },
        fullName: {
          required: false,
          minLength: 4,
          maxLength: 50,
        },
      },
    };
  }
}
