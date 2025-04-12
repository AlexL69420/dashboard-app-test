import React, { createContext, useContext, useState, useEffect } from "react";
import { LayoutItem, WidgetType } from "../types";

interface DashboardContextType {
  layouts: LayoutItem[];
  isEditing: boolean;
  toggleEdit: () => void;
  addWidget: (widgetType: WidgetType) => void;
  removeWidget: (widgetType: WidgetType) => void;
  saveLayouts: (newLayouts: LayoutItem[]) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined,
);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [layouts, setLayouts] = useState<LayoutItem[]>(() => {
    // Load from localStorage or use default
    const saved = localStorage.getItem("dashboard-layouts");
    return saved ? JSON.parse(saved) : DEFAULT_LAYOUTS;
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("dashboard-layouts", JSON.stringify(layouts));
  }, [layouts]);

  const addWidget = (widgetType: WidgetType) => {
    const newId = `${widgetType}-${Date.now()}`;
    const newItem: LayoutItem = {
      i: newId,
      x: 0,
      y: Infinity, // puts it at the bottom
      w: 4,
      h: 6,
    };
    setLayouts([...layouts, newItem]);
  };

  const removeWidget = (widgetType: WidgetType) => {
    setLayouts(layouts.filter((item) => !item.i.startsWith(widgetType)));
  };

  const saveLayouts = (newLayouts: LayoutItem[]) => {
    setLayouts(newLayouts);
  };

  const toggleEdit = () => setIsEditing(!isEditing);

  const value = {
    layouts,
    isEditing,
    toggleEdit,
    addWidget,
    removeWidget,
    saveLayouts,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = (): DashboardContextType => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider");
  }
  return context;
};

const DEFAULT_LAYOUTS: LayoutItem[] = [
  // Initial/default widgets can be defined here
];
