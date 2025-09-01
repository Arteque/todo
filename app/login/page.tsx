'use client';

import { useState, useEffect } from 'react';
import Login from '@/components/Login/Login';
import LoginSkeleton from '@/components/shared/LoginSkeleton';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuliere Ladezeit (in echter App würde hier Auth-Status geprüft)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (email: string, password: string) => {
    console.log('Login:', { email, password });
    // Hier würde die Login-Logik implementiert
  };

  const handleRegister = (userData: any) => {
    console.log('Register:', userData);
    // Hier würde die Registrierungs-Logik implementiert
  };

  if (isLoading) {
    return <LoginSkeleton />;
  }

  return (
    <Login 
      onLogin={handleLogin}
      onRegister={handleRegister}
    />
  );
}