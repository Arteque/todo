'use client';

import { useState, FormEvent } from 'react';

interface User {
  id?: string;
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

type FormType = 'login' | 'register' | 'edit';

interface LoginProps {
  onLogin?: (email: string, password: string) => void;
  onRegister?: (userData: User) => void;
  onEdit?: (userData: User) => void;
  initialFormType?: FormType;
  editUserData?: Partial<User>;
}

export default function Login({ 
  onLogin, 
  onRegister, 
  onEdit, 
  initialFormType = 'login',
  editUserData 
}: LoginProps) {
  const [formType, setFormType] = useState<FormType>(initialFormType);
  const [formData, setFormData] = useState<User>({
    email: editUserData?.email || '',
    username: editUserData?.username || '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte eine gültige E-Mail-Adresse eingeben';
    }

    // Username validation (nur für Register und Edit)
    if ((formType === 'register' || formType === 'edit') && !formData.username) {
      newErrors.username = 'Benutzername ist erforderlich';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Passwort ist erforderlich';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Passwort muss mindestens 6 Zeichen lang sein';
    }

    // Confirm password validation (nur für Register)
    if (formType === 'register' && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwörter stimmen nicht überein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      switch (formType) {
        case 'login':
          onLogin?.(formData.email, formData.password);
          break;
        case 'register':
          onRegister?.(formData);
          break;
        case 'edit':
          onEdit?.({ ...formData, id: editUserData?.id });
          break;
      }
    } catch (error) {
      setErrors({ general: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Fehler für dieses Feld löschen
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const getTitle = () => {
    switch (formType) {
      case 'login': return 'Anmelden';
      case 'register': return 'Registrieren';
      case 'edit': return 'Profil bearbeiten';
    }
  };

  const getSubmitText = () => {
    switch (formType) {
      case 'login': return 'Anmelden';
      case 'register': return 'Registrieren';
      case 'edit': return 'Speichern';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 dark:text-white">
            {getTitle()}
          </h2>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* E-Mail Feld */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                E-Mail-Adresse
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.email 
                    ? 'border-red-300 text-red-900 placeholder-red-300' 
                    : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                }`}
                placeholder="ihre-email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Benutzername Feld (nur für Register und Edit) */}
            {(formType === 'register' || formType === 'edit') && (
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Benutzername
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.username 
                      ? 'border-red-300 text-red-900 placeholder-red-300' 
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="Ihr Benutzername"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                )}
              </div>
            )}

            {/* Passwort Feld */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {formType === 'edit' ? 'Neues Passwort (optional)' : 'Passwort'}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete={formType === 'edit' ? 'new-password' : 'current-password'}
                required={formType !== 'edit'}
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                  errors.password 
                    ? 'border-red-300 text-red-900 placeholder-red-300' 
                    : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                }`}
                placeholder={formType === 'edit' ? 'Leer lassen, um beizubehalten' : 'Ihr Passwort'}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Passwort bestätigen Feld (nur für Register) */}
            {formType === 'register' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Passwort bestätigen
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                    errors.confirmPassword 
                      ? 'border-red-300 text-red-900 placeholder-red-300' 
                      : 'border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white'
                  }`}
                  placeholder="Passwort bestätigen"
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
            )}
          </div>

          {/* Allgemeine Fehlermeldung */}
          {errors.general && (
            <div className="bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800 rounded-md p-4">
              <p className="text-sm text-red-600 dark:text-red-400">{errors.general}</p>
            </div>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${
                isLoading ? 'cursor-wait' : ''
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Wird verarbeitet...
                </>
              ) : (
                getSubmitText()
              )}
            </button>
          </div>

          {/* Formular-Wechsel Links */}
          {formType !== 'edit' && (
            <div className="text-center space-y-2">
              {formType === 'login' ? (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Noch kein Konto?{' '}
                  <button
                    type="button"
                    onClick={() => setFormType('register')}
                    className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Hier registrieren
                  </button>
                </p>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bereits ein Konto?{' '}
                  <button
                    type="button"
                    onClick={() => setFormType('login')}
                    className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Hier anmelden
                  </button>
                </p>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}