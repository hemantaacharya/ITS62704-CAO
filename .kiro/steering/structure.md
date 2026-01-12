# Project Structure & Organization

## Directory Layout

```
├── app/                          # Next.js App Router pages
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home page (main dashboard)
│   └── week/[weekNumber]/       # Dynamic week routes
│       ├── page.tsx             # Individual week content
│       └── _components/         # Week-specific components
├── src/
│   ├── components/              # Reusable React components
│   │   ├── features/            # Business logic components
│   │   ├── layout/              # Layout-specific components
│   │   └── ui/                  # Base UI components (shadcn/ui style)
│   ├── data/                    # Static data and type definitions
│   └── lib/                     # Utility functions and helpers
├── public/                      # Static assets
└── .kiro/steering/              # AI assistant guidance files
```

## Architectural Patterns

### Component Organization
- **UI Components** (`src/components/ui/`): Base components using CVA for variants
- **Feature Components** (`src/components/features/`): Business logic components
- **Page Components** (`app/`): Next.js pages using App Router

### Data Management
- **Static Data** (`src/data/weeks.ts`): Course content with TypeScript types
- **Client State**: React useState for UI state
- **Persistence**: Local storage via `src/lib/storage.ts`

### Styling Conventions
- **Tailwind Classes**: Utility-first approach with custom design tokens
- **Dark Theme**: Default dark mode with zinc color palette
- **Component Variants**: CVA for systematic component variations
- **Responsive Design**: Mobile-first breakpoints

### File Naming
- **Components**: PascalCase (e.g., `WeekCard.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `utils.ts`)
- **Types**: Exported from data files or dedicated `.types.ts` files

### Import Conventions
- **Absolute Imports**: Use `@/src/` prefix for src directory
- **Relative Imports**: For same-directory or parent-child relationships
- **UI Components**: Import from `../ui/` in feature components

### Visualization Integration
- **Illustration Components**: Separate components in `src/components/features/WeekIllustrations.tsx`
- **Interactive Elements**: Click handlers and state management using React hooks
- **CSS Animations**: Smooth transitions and hover effects using Tailwind CSS
- **Performance**: Lightweight CSS-based animations, no heavy 3D libraries