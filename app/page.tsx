'use client';

import { useState, useEffect } from 'react';
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import PageSkeleton from "@/components/shared/PageSkeleton";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuliere Ladezeit für Seiteninhalte
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PageSkeleton />;
  }

  return (
    <>
      <Section>
        <Container>
          <div className="text-center space-y-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Willkommen zur Todo App
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Verwalten Sie Ihre Aufgaben effizient und behalten Sie den Überblick über Ihre täglichen Aktivitäten.
            </p>
            <div className="flex justify-center">
              <Image 
                src="/todo.png" 
                alt="Todo App" 
                width={500} 
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
