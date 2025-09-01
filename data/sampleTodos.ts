import { Todo, TodoStats } from '@/types/todo';

// Mock data for demonstration
export const sampleTodos: Todo[] = [
  {
    id: '1',
    title: 'Website Redesign',
    description: 'Complete redesign of the company website with modern UI/UX',
    completed: false,
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-15'),
    customer: 'TechCorp GmbH',
    priority: 'high',
    dueDate: new Date('2024-12-31'),
    steps: [
      { id: '1-1', title: 'Research & Analysis', completed: true, createdAt: new Date('2024-12-01') },
      { id: '1-2', title: 'Wireframes', completed: true, createdAt: new Date('2024-12-03') },
      { id: '1-3', title: 'Design Mockups', completed: false, createdAt: new Date('2024-12-05') },
      { id: '1-4', title: 'Development', completed: false, createdAt: new Date('2024-12-10') },
      { id: '1-5', title: 'Testing', completed: false, createdAt: new Date('2024-12-20') }
    ]
  },
  {
    id: '2',
    title: 'E-Commerce Integration',
    description: 'Integrate payment system and inventory management',
    completed: true,
    createdAt: new Date('2024-11-15'),
    updatedAt: new Date('2024-12-10'),
    customer: 'ShopMaster AG',
    priority: 'medium',
    dueDate: new Date('2024-12-15'),
    steps: [
      { id: '2-1', title: 'Payment Gateway Setup', completed: true, createdAt: new Date('2024-11-15') },
      { id: '2-2', title: 'Inventory System', completed: true, createdAt: new Date('2024-11-20') },
      { id: '2-3', title: 'Order Management', completed: true, createdAt: new Date('2024-11-25') },
      { id: '2-4', title: 'Testing & Deployment', completed: true, createdAt: new Date('2024-12-05') }
    ]
  },
  {
    id: '3',
    title: 'Mobile App Development',
    description: 'Native mobile app for iOS and Android',
    completed: false,
    createdAt: new Date('2024-12-10'),
    updatedAt: new Date('2024-12-20'),
    customer: 'StartupXYZ',
    priority: 'high',
    dueDate: new Date('2025-02-28'),
    steps: [
      { id: '3-1', title: 'Requirements Gathering', completed: true, createdAt: new Date('2024-12-10') },
      { id: '3-2', title: 'UI/UX Design', completed: false, createdAt: new Date('2024-12-12') },
      { id: '3-3', title: 'iOS Development', completed: false, createdAt: new Date('2024-12-15') },
      { id: '3-4', title: 'Android Development', completed: false, createdAt: new Date('2024-12-15') },
      { id: '3-5', title: 'Backend API', completed: false, createdAt: new Date('2024-12-18') },
      { id: '3-6', title: 'Testing', completed: false, createdAt: new Date('2025-01-15') },
      { id: '3-7', title: 'App Store Deployment', completed: false, createdAt: new Date('2025-02-01') }
    ]
  },
  {
    id: '4',
    title: 'Database Migration',
    description: 'Migrate legacy database to PostgreSQL',
    completed: false,
    createdAt: new Date('2024-12-05'),
    updatedAt: new Date('2024-12-18'),
    customer: 'Enterprise Solutions Ltd',
    priority: 'medium',
    dueDate: new Date('2025-01-15'),
    steps: [
      { id: '4-1', title: 'Data Analysis', completed: true, createdAt: new Date('2024-12-05') },
      { id: '4-2', title: 'Migration Strategy', completed: true, createdAt: new Date('2024-12-08') },
      { id: '4-3', title: 'Schema Design', completed: true, createdAt: new Date('2024-12-12') },
      { id: '4-4', title: 'Data Migration Scripts', completed: false, createdAt: new Date('2024-12-15') },
      { id: '4-5', title: 'Testing', completed: false, createdAt: new Date('2025-01-05') },
      { id: '4-6', title: 'Production Migration', completed: false, createdAt: new Date('2025-01-10') }
    ]
  },
  {
    id: '5',
    title: 'SEO Optimization',
    description: 'Improve search engine rankings',
    completed: false,
    createdAt: new Date('2024-12-08'),
    updatedAt: new Date('2024-12-20'),
    customer: 'Marketing Pro GmbH',
    priority: 'low',
    dueDate: new Date('2025-01-31'),
    steps: [
      { id: '5-1', title: 'SEO Audit', completed: true, createdAt: new Date('2024-12-08') },
      { id: '5-2', title: 'Keyword Research', completed: false, createdAt: new Date('2024-12-10') },
      { id: '5-3', title: 'Content Optimization', completed: false, createdAt: new Date('2024-12-15') },
      { id: '5-4', title: 'Technical SEO', completed: false, createdAt: new Date('2024-12-20') }
    ]
  },
  {
    id: '6',
    title: 'Security Audit',
    description: 'Comprehensive security review and improvements',
    completed: false,
    createdAt: new Date('2024-12-12'),
    updatedAt: new Date('2024-12-22'),
    customer: 'SecureBank AG',
    priority: 'high',
    dueDate: new Date('2025-01-10'),
    steps: [
      { id: '6-1', title: 'Vulnerability Assessment', completed: false, createdAt: new Date('2024-12-12') },
      { id: '6-2', title: 'Penetration Testing', completed: false, createdAt: new Date('2024-12-18') },
      { id: '6-3', title: 'Security Improvements', completed: false, createdAt: new Date('2024-12-25') },
      { id: '6-4', title: 'Documentation', completed: false, createdAt: new Date('2025-01-05') }
    ]
  }
];

export const calculateTodoStats = (todos: Todo[]): TodoStats => {
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  const pendingTodos = totalTodos - completedTodos;
  
  const allSteps = todos.flatMap(todo => todo.steps);
  const totalSteps = allSteps.length;
  const completedSteps = allSteps.filter(step => step.completed).length;

  return {
    totalTodos,
    completedTodos,
    pendingTodos,
    completedSteps,
    totalSteps
  };
};
