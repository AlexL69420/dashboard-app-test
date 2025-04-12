import React from "react";
import { Responsive, WidthProvider, Layout } from "react-grid-layout";
import { useDashboard } from "../Contexts/DashboardContext";
import { WidgetFactory } from "./WidgetFactory";
import { WidgetPanel } from "./WidgetPanel";
import { LayoutItem, WidgetType } from "../types";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Dashboard: React.FC = () => {
  const {
    layouts,
    isEditing,
    toggleEdit,
    addWidget,
    removeWidget,
    saveLayouts,
  } = useDashboard();

  const onLayoutChange = (newLayouts: Layout[]) => {
    saveLayouts(newLayouts as LayoutItem[]);
  };

  return (
    <div className="min-h-screen min-w-screen p-4 px-16">
      <button
        onClick={toggleEdit}
        className="mb-4 rounded bg-fuchsia-500 px-4 py-2 text-white transition hover:cursor-pointer hover:bg-fuchsia-600 hover:text-amber-400 dark:bg-fuchsia-900 dark:hover:bg-fuchsia-800"
      >
        {isEditing ? "Cancel" : "Edit Dashboard"}
      </button>

      {isEditing && <WidgetPanel onAdd={addWidget} onRemove={removeWidget} />}

      <ResponsiveGridLayout
        className="layout"
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={30}
        layouts={{ lg: layouts }}
        onLayoutChange={onLayoutChange}
        isDraggable={isEditing}
        isResizable={isEditing}
      >
        {layouts.map((item) => (
          <div
            key={item.i}
            className="rounded bg-white shadow dark:bg-fuchsia-600 dark:text-white"
          >
            <WidgetFactory widgetType={item.i.split("-")[0] as WidgetType} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};
