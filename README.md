# Advanced Issue Management Dashboard

## Running Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Folder Structure

```
├── src/
│   ├── app/           # Next.js app directory (pages and layouts)
│   ├── components/    # Reusable UI components
│   ├── constants/     # Application constants
│   ├── data/         # Data models
│   ├── lib/          # Utility libraries
│   ├── store/        # State management
│   ├── types/        # TypeScript types
│   └── utils/        # Helper functions
├── public/           # Static assets
└── [config files]    # Configuration files
```

### Key Technologies
- **Framework**: Next.js 15.3.2
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Component Library**: Shadcn UI
- **Table Management**: TanStack Table
- **State Management**: Jotai
- **Type Safety**: TypeScript

## Features and Optimizations

### Core Features
- Modern table implementation with TanStack Table
- Responsive design with Tailwind CSS
- Type-safe development with TypeScript
- Component-based architecture using Shadcn UI
- Virtual scrolling support for large datasets
- Theme support with next-themes

### Optimizations
- Turbopack for faster development builds
- Virtual scrolling for efficient rendering of large datasets
- Debounced search functionality
- Optimized bundle size with proper code splitting
- Type-safe development environment

### Additional Features
- Dark/Light theme support
- Responsive design
- Search and filtering capabilities
- Sortable columns
- Customizable UI components
- Accessibility features through Radix UI primitives

## Development Notes
- The project uses ESLint for code quality
- TypeScript for type safety
- Tailwind CSS for styling
- Follows Next.js 13+ app directory structure
- Implements modern React patterns and best practices
