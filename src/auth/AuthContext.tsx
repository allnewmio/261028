import { createContext, useContext, type ReactNode } from 'react';

// 다음 단계에서 Firebase 구글 로그인으로 교체할 껍데기 컨텍스트
export interface AuthUser {
  displayName: string;
}

interface AuthContextValue {
  user: AuthUser | null;
  signIn: () => void;
  signOut: () => void;
}

const value: AuthContextValue = {
  user: null,
  signIn: () => {},
  signOut: () => {},
};

const AuthContext = createContext<AuthContextValue>(value);

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
