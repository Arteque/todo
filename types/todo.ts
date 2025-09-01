interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
  customer: string;
  steps: TodoStep[];
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
}

interface TodoStep {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TodoStats {
  totalTodos: number;
  completedTodos: number;
  pendingTodos: number;
  completedSteps: number;
  totalSteps: number;
}

export type { Todo, TodoStep, TodoStats };
