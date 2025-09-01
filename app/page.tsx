'use client';

import { useState, useEffect } from 'react';
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import PageSkeleton from "@/components/shared/PageSkeleton";
import TodoDashboard from "@/components/Todo/TodoDashboard";
import { sampleTodos, calculateTodoStats } from "@/data/sampleTodos";
import { Todo } from "@/types/todo";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    // Simuliere Ladezeit für Daten
    const timer = setTimeout(() => {
      setTodos(sampleTodos);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleTodoToggle = (id: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTodoEdit = (id: string) => {
    console.log('Edit todo:', id);
    // Hier würde die Bearbeitungslogik implementiert
  };

  const handleTodoDelete = (id: string) => {
    console.log('Delete todo:', id);
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  if (isLoading) {
    return <PageSkeleton />;
  }

  const stats = calculateTodoStats(todos);

  return (
    <>
      <Section>
        <Container>
          <TodoDashboard 
            todos={todos}
            stats={stats}
            onTodoToggle={handleTodoToggle}
            onTodoEdit={handleTodoEdit}
            onTodoDelete={handleTodoDelete}
          />
        </Container>
      </Section>
    </>
  );
}
