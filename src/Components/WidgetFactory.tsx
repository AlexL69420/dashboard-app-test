import React from "react";
import { WidgetType } from "../types";

interface WidgetFactoryProps {
  widgetType: WidgetType;
}

const ChartWidget: React.FC = () => (
  <div className="rounded bg-white p-4 shadow hover:text-amber-400 dark:bg-fuchsia-700 dark:text-white">
    Chart Widget Placeholder
  </div>
);
const StatsWidget: React.FC = () => (
  <div className="rounded bg-white p-4 shadow hover:text-amber-400 dark:bg-fuchsia-700 dark:text-white">
    Statistics Widget Placeholder
  </div>
);
const TableWidget: React.FC = () => (
  <div className="rounded bg-white p-4 shadow hover:text-amber-400 dark:bg-fuchsia-700 dark:text-white">
    Table Widget Placeholder
  </div>
);
const CalendarWidget: React.FC = () => (
  <div className="rounded bg-white p-4 shadow hover:text-amber-400 dark:bg-fuchsia-700 dark:text-white">
    Calendar Widget Placeholder
  </div>
);
const ProgressWidget: React.FC = () => (
  <div className="rounded bg-white p-4 shadow hover:text-amber-400 dark:bg-fuchsia-700 dark:text-white">
    Progress Widget Placeholder
  </div>
);

export const WidgetFactory: React.FC<WidgetFactoryProps> = ({ widgetType }) => {
  const widgets: Record<WidgetType, React.ReactNode> = {
    chart: <ChartWidget />,
    stats: <StatsWidget />,
    table: <TableWidget />,
    calendar: <CalendarWidget />,
    progress: <ProgressWidget />,
    // Add all other widget types here
  };

  return <>{widgets[widgetType] || <div>Unknown Widget</div>}</>;
};
