# Portfolio

A modern, responsive Angular portfolio website showcasing professional experience, skills, projects, and education. Built with a custom responsive design system using CSS variables and desktop-first approach.

## Features

- **Responsive Design**: Desktop-first approach with comprehensive breakpoints (1920px, 1440px, 1280px, 1024px, 768px, 600px, 480px, 375px, 320px)
- **Custom CSS System**: Uses CSS variables for consistent theming and modular spacing
- **Theme Support**: Multiple theme modes with smooth transitions
- **Interactive Components**: Hover effects and animations throughout the interface
- **Professional Sections**: About, Skills, Experience, Projects, Education, and Contact pages
- **Social Integration**: Direct links to professional profiles (LinkedIn, GitHub, LeetCode)

## Technology Stack

- **Framework**: Angular 16.2.0
- **Styling**: Custom CSS with CSS variables and responsive units (rem, em, %, vw, vh)
- **Icons**: Remixicon
- **UI Components**: Angular Material
- **Design System**: Custom responsive design with Flexbox and Grid layouts

## Design Principles

- **Desktop-First**: Designed for large screens first, then adapted for smaller viewports
- **Responsive Units**: Uses rem, em, %, vw, vh instead of fixed pixels
- **CSS Variables**: Consistent theming with `--primary-color`, `--text-color`, etc.
- **Modular Spacing**: Consistent spacing system (0.5rem, 1rem, etc.)
- **Typography Scale**: Scalable typography based on rem units
- **Accessibility**: Semantic HTML and keyboard navigation support

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── card/           # Card component for consistent styling
│   │   └── nav-bar/        # Navigation bar component
│   ├── pages/              # Main page components
│   │   ├── landing/        # Home page with interactive grid
│   │   ├── about/          # About section
│   │   ├── skills/         # Skills showcase
│   │   ├── experience/     # Work experience timeline
│   │   ├── projects/       # Project portfolio
│   │   ├── education/      # Educational background
│   │   └── contact/        # Contact information
│   └── services/           # Data and theme services
├── assets/
│   ├── fonts/              # Custom font files
│   ├── Img/                # Social media icons and images
│   ├── logos/              # Company and institution logos
│   └── Skills/             # Technology skill icons
```

## Styling Guidelines

- Use CSS variables for colors and spacing
- Follow the modular spacing system
- Implement responsive breakpoints only where necessary
- Use Flexbox or Grid for layouts
- Ensure smooth transitions and hover effects
- Maintain accessibility standards

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
