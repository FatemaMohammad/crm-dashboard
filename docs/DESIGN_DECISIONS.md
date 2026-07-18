# Design Decisions

## Goal

The dashboard should give a quick overview of the most important CRM information: customers, projects, tasks, and recent activity, at a glance.

## Technology

- React
- TypeScript
- Tailwind CSS
- Vite

I picked this stack because it's what I'm most comfortable building in, and it fits the size of this project. TypeScript catches type mistakes early (wrong prop, typo in a status value, etc.), and Tailwind let me style everything with utility classes instead of writing and naming a separate CSS file per component.

## UI Principles

- Clean layout
- Consistent spacing
- Reusable components
- Responsive design
- Accessible interface

## Dashboard Priority

The dashboard is laid out in this order, top to bottom:

1. KPI overview (customers, leads, deals, revenue)
2. Project progress and my tasks, side by side
3. Top customers and recent activity, side by side

The idea was to put the numbers people scan first (KPIs) at the very top, then the two "what's happening" sections below it.

## Layout Structure

On a normal desktop screen, the sidebar stays fixed on the left and only the dashboard content scrolls. On smaller screens (tablet and mobile), the sidebar is hidden by default and opens as a slide-in menu from a hamburger button in the header, closing again when you tap outside it or pick a menu item. I added this because a fixed 288px-wide sidebar just doesn't work on a phone-sized screen — there isn't room for it next to any real content.

## Logo & Branding

### Decision

The original placeholder logo (a plain letter "W") was replaced with the **Share2** icon from Lucide React.

### Why

I was already using Lucide icons everywhere else in the app (sidebar nav, stat cards, activity feed), so using one of them for the logo instead of a plain letter kept things visually consistent, and looked less like a placeholder. Share2 is roughly about connections/sharing, which loosely fits a CRM, but the main reason was consistency with the rest of the icon set rather than a deep branding decision.

### Design Principles

- Clean and minimal
- Easy to recognize
- Scalable as an SVG icon
- Consistent with the rest of the Lucide icon set

---

## Talking points for the meeting

- I chose React + TypeScript + Tailwind mainly because it's the stack I know best, and TypeScript helps me catch small mistakes (like a typo'd status value) before they become bugs.
- The dashboard order (KPIs first, then Project Progress/Tasks, then Customers/Activity) was a deliberate choice — numbers first, then details.
- The sidebar is fixed on desktop but becomes a slide-in mobile menu below a certain screen width, since a permanent 288px sidebar doesn't work on a phone.
- I swapped the placeholder "W" logo for a Lucide icon mainly for visual consistency, since the rest of the app already uses that icon set.
- If I had more time, I'd like to make the search bar and notification bell actually functional instead of just visual.
