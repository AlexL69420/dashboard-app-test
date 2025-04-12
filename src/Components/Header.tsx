import { DarkThemeToggle } from "flowbite-react";

export function Header() {
  return (
    <main className="flex h-20 w-full flex-row items-center justify-between gap-4 rounded-xl bg-fuchsia-100 px-8 dark:bg-fuchsia-950">
      <span className="self-center font-mono text-2xl font-semibold whitespace-nowrap text-fuchsia-700 hover:text-amber-400 dark:text-fuchsia-300">
        LIQN
      </span>

      <DarkThemeToggle className="flex size-12 items-center justify-around rounded-full border-2 border-fuchsia-700 text-fuchsia-700 hover:cursor-pointer hover:bg-fuchsia-400 hover:text-amber-400 dark:border-slate-200 dark:text-slate-200 dark:hover:bg-fuchsia-700" />
    </main>
  );
}
