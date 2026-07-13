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

## Feature: Sidebar Navigation

### Completed

- Built SidebarSection and SidebarItem components driven by navigation config data
- Grouped navigation into Main, CRM and System sections
- Added active-item state handling

### Why

Config-driven navigation keeps the sidebar declarative, so adding or reordering sections/items doesn't require touching layout markup.

## Feature: Dashboard Content Sections

### Completed

- Added StatCard grid for KPIs (Active Customers, Open Deals, etc.)
- Added ProjectProgress section with progress bars per project
- Added TaskList section
- Added CustomerOverview ("Top Customers") section
- Added ActivityFeed ("Recent Activity") section
- Composed all sections into the Dashboard page in a responsive grid

### Why

Splitting the dashboard into small, self-contained sections backed by mock data files keeps each part easy to reason about and swap for real API data later.

## Feature: Layout Fixes

### Completed

- Made Top Customers and Recent Activity cards match in width and height (equal grid columns, `h-full` on both cards) instead of Recent Activity trailing off shorter/narrower
- Fixed the app shell so the sidebar and header stay fixed in place while only the dashboard content scrolls (`h-screen overflow-hidden` on the app root, `min-h-0` on the content column so `overflow-y-auto` on `<main>` actually takes effect)
- Aligned the sidebar logo block height with the header height (`py-6` -> `py-4`) so their bottom borders line up instead of stepping

### Why

The dashboard content was taller than the viewport, and without `min-h-0` the flex column never shrank, so the whole page scrolled instead of just the content area - this made the fixed-height sidebar scroll out of view. The padding mismatch between the sidebar logo and header was a smaller version of the same kind of bug: two elements meant to align weren't sized consistently.