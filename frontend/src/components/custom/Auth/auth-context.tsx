"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  dateOfBirth?: string;
  bio?: string;
  avatarUrl?: string;
  role: "USER" | "ADMIN" | "HOST";
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse stored user:", error);
        sessionStorage.removeItem("user"); // Clear bad data
      }
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const mockData: User = {
        id: "123",
        firstName: "Viko",
        lastName: "Piko",
        email: email,
        avatarUrl: "",
        role: "HOST",
      };
      setUser(mockData);
      sessionStorage.setItem("user", JSON.stringify(mockData));
    } catch (error) {
      throw new Error("Sign in failed...");
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    setIsLoading(true);
    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data
      const mockUser: User = {
        id: "1",
        firstName: "Viko",
        lastName: "Piko",
        email: email,
        avatarUrl: "/placeholder.svg?height=32&width=32",
        role: "USER",
      };

      setUser(mockUser);
    } catch (error) {
      throw new Error("Sign up failed");
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider!");
  }
  return context;
}
