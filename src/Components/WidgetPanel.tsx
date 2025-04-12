import React from "react";
import { useDashboard } from "../Contexts/DashboardContext";
import { AvailableWidget, WidgetType } from "../types";

const AVAILABLE_WIDGETS: AvailableWidget[] = [
  { id: "chart", name: "Chart Widget", defaultWidth: 4, defaultHeight: 6 },
  { id: "stats", name: "Statistics", defaultWidth: 2, defaultHeight: 4 },
  { id: "table", name: "Data Table", defaultWidth: 6, defaultHeight: 8 },
  // ... all other available widgets
];

interface WidgetPanelProps {
  onAdd: (widgetType: WidgetType) => void;
  onRemove: (widgetType: WidgetType) => void;
}

export const WidgetPanel: React.FC<WidgetPanelProps> = ({
  onAdd,
  onRemove,
}) => {
  const { layouts } = useDashboard();

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 rounded-lg bg-gray-200 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:bg-gray-600">
      {AVAILABLE_WIDGETS.map((widget) => {
        const isAdded = layouts.some((w) => w.i.startsWith(widget.id));

        return (
          <div
            key={widget.id}
            className="rounded-lg border border-gray-300 bg-white p-4 dark:bg-gray-800 dark:text-white"
          >
            <h3 className="mb-2 text-lg font-medium">{widget.name}</h3>
            <button
              onClick={() => (isAdded ? onRemove(widget.id) : onAdd(widget.id))}
              className={`mt-2 rounded px-4 py-2 text-white hover:cursor-pointer ${
                isAdded
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-green-500 hover:bg-green-600"
              } transition`}
            >
              {isAdded ? "Remove" : "Add"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
