import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-2 bg-white px-4 dark:bg-gray-900">
      <Header />

      <Dashboard />
    </main>
  );
}
