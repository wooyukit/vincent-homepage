# Dashboard Page Design

## Overview

Add a new "Dashboard" page at `/dashboard` showing GitHub and crates.io metrics with live data. The page follows the existing single-page scrollable pattern with distinct sections for each data source, plus a placeholder for future product event tracking.

## Data Sources

### GitHub (unauthenticated, client-side fetch)
- **User profile**: `GET https://api.github.com/users/wooyukit` — repos count, followers, following
- **Repositories**: `GET https://api.github.com/users/wooyukit/repos?per_page=100&sort=updated` — stars, languages, descriptions
- Rate limit: 60 requests/hour per IP (sufficient for portfolio traffic)

### Crates.io (unauthenticated, client-side fetch)
- **User profile**: `GET https://crates.io/api/v1/users/wooyukit` — user ID
- **User crates**: `GET https://crates.io/api/v1/crates?user_id={id}&per_page=100` — crate names, downloads, versions
- No documented rate limit; CORS enabled

## Page Structure

```
/dashboard
├── Article layout (title: "Dashboard")
├── Container maxW="container.md"
│
├── Section 1: GitHub Activity
│   ├── 4 stat cards: Public Repos, Total Stars, Followers, Following
│   ├── Language breakdown chart (recharts PieChart or BarChart)
│   └── Top repos list (sorted by stars, top 5-8)
│
├── Section 2: Crates.io
│   ├── 2-3 stat cards: Published Crates, Total Downloads
│   └── Per-crate download bar chart (recharts BarChart)
│
└── Section 3: Product Events (placeholder)
    └── "Coming soon" with subtle styling
```

## Navigation

Add "Dashboard" as 4th nav item in navbar (desktop links + mobile hamburger menu) with a chart icon.

## Technical Decisions

- **Client-side fetch**: `useEffect` on mount with parallel API calls
- **Loading states**: Chakra `Skeleton` components during fetch
- **Error handling**: Error message with retry button on API failure
- **Charts**: recharts library (new dependency, ~40KB gzipped)
- **Styling**: Consistent with existing pages — `useColorModeValue`, dashed borders, teal accents, Section fade-in animations
- **Dark/light mode**: Chart colors adapt to color mode

## New Dependency

- `recharts` — responsive, composable charting library for React

## Future Extension

The "Product Events" section is a placeholder. It will later show event tracking metrics (page views, interactions, etc.) once a tracking solution is integrated.
