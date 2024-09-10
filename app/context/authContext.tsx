import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { useFetcher } from "@remix-run/react";

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

interface FetcherDataType {
  user?: string;
}

interface AuthProviderProps {
  children?: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);
  const fetcher = useFetcher<FetcherDataType>();

  useEffect(() => {
    fetcher.load("/auth/user");
  }, [fetcher]);

  useEffect(() => {
    if (fetcher.data) {
      setUser(fetcher.data.user ?? null);
    }
  }, [fetcher.data]);

  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider };
