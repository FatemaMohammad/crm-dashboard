# Development Log

---

## Day 1

### Feature
Project Setup

### Completed

- Created GitHub repository
- Created React project using Vite
- Added TypeScript
- Configured Git
- Installed Tailwind CSS

### Why

The goal was to establish a clean and scalable foundation before implementing any UI components. This reduces future refactoring and keeps the project organized from the beginning.

---

Next Feature

## Feature: Dashboard Layout

### Completed

- Created reusable layout components
- Added Sidebar component
- Added Header component
- Created Dashboard page
- Connected all components in App.tsx

### Why

A component-based layout makes the application easier to maintain and extend. It also allows individual sections to be developed independently.


## Feature: Sidebar

### Goal

Create a reusable sidebar navigation based on configuration data instead of hardcoded JSX.

### Reason

Separating navigation data from UI makes the sidebar easier to maintain and extend in the future.


## Feature: Sidebar Branding

### Completed

- Created reusable SidebarLogo component
- Added company branding section
- Separated branding from sidebar layout

### Why

Separating the logo into its own component improves maintainability and keeps the Sidebar focused on layout.

## Feature: Reusable UI Components

### Completed

- Created reusable Card component
- Created Badge component
- Created Avatar component
- Created ProgressBar component
- Created StatCard component
- Added mock statistics data

### Why

Building reusable UI components improves consistency across the dashboard and reduces duplicated code.

## Feature: Sidebar Branding

### Completed

- Replaced the placeholder "W" logo with a custom Share2 icon
- Updated the sidebar branding to better match the CRM concept

### Why

The Share2 icon better communicates relationships, connectivity and collaboration, which are central concepts in a CRM platform. Using an SVG icon from the same icon library also ensures visual consistency throughout the application.