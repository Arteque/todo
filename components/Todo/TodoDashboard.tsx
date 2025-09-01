import { Todo, TodoStats } from '@/types/todo';

interface StatsCardProps {
  title: string;
  value: number;
  subtitle?: string;
  color: 'blue' | 'green' | 'yellow' | 'red';
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, subtitle, color, icon }: StatsCardProps) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    yellow: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
  };

  const iconColors = {
    blue: 'text-blue-600 dark:text-blue-400',
    green: 'text-green-600 dark:text-green-400',
    yellow: 'text-yellow-600 dark:text-yellow-400',
    red: 'text-red-600 dark:text-red-400'
  };

  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
          )}
        </div>
        <div className={`${iconColors[color]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

interface TodoDashboardProps {
  todos: Todo[];
  stats: TodoStats;
  onTodoToggle?: (id: string) => void;
  onTodoEdit?: (id: string) => void;
  onTodoDelete?: (id: string) => void;
}

const TodoDashboard = ({ todos, stats, onTodoToggle, onTodoEdit, onTodoDelete }: TodoDashboardProps) => {
  const stepsCompletionRate = stats.totalSteps > 0 ? Math.round((stats.completedSteps / stats.totalSteps) * 100) : 0;
  const todoCompletionRate = stats.totalTodos > 0 ? Math.round((stats.completedTodos / stats.totalTodos) * 100) : 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Todo Dashboard</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Überblick über alle Projekte und Aufgaben
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Gesamt Todos"
          value={stats.totalTodos}
          color="blue"
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatsCard
          title="Abgeschlossen"
          value={stats.completedTodos}
          subtitle={`${todoCompletionRate}% erledigt`}
          color="green"
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          }
        />
        <StatsCard
          title="Ausstehend"
          value={stats.pendingTodos}
          color="yellow"
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          }
        />
        <StatsCard
          title="Schritte erledigt"
          value={stats.completedSteps}
          subtitle={`${stepsCompletionRate}% von ${stats.totalSteps}`}
          color="red"
          icon={
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          }
        />
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Aktuelle Projekte</h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            + Neues Todo
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
            Filter
          </button>
        </div>
      </div>

      {/* Recent Todos Preview */}
      <div className="space-y-4">
        {todos.slice(0, 3).map((todo) => {
          const completedSteps = todo.steps.filter(step => step.completed).length;
          const totalSteps = todo.steps.length;
          const isOverdue = todo.dueDate && new Date() > new Date(todo.dueDate) && !todo.completed;
          const progressPercentage = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

          return (
            <div key={todo.id} className={`bg-white dark:bg-gray-800 p-4 rounded-lg border ${
              isOverdue ? 'border-red-300 dark:border-red-700' : 'border-gray-200 dark:border-gray-700'
            } hover:shadow-md transition-shadow`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <button
                    onClick={() => onTodoToggle?.(todo.id)}
                    className="flex-shrink-0"
                  >
                    {todo.completed ? (
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-400 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      </svg>
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className={`font-semibold ${
                        todo.completed 
                          ? 'text-gray-500 dark:text-gray-400 line-through' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {todo.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        • {todo.customer}
                      </span>
                    </div>
                    
                    {totalSteps > 0 && (
                      <div className="mt-2 flex items-center space-x-3">
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 min-w-0">
                          {completedSteps}/{totalSteps}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {isOverdue && (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
                      Überfällig
                    </span>
                  )}
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    todo.priority === 'high' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400'
                      : todo.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                      : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                  }`}>
                    {todo.priority === 'high' ? 'Hoch' : todo.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                  </span>
                  
                  <button 
                    onClick={() => onTodoEdit?.(todo.id)}
                    className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        
        {todos.length > 3 && (
          <div className="text-center pt-4">
            <button className="px-6 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-colors">
              Alle {todos.length} Todos anzeigen
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoDashboard;
