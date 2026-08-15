# Contributing to Ovotech

Thank you for your interest in contributing to the Ovotech Healthcare Automation platform! We welcome contributions from NHS developers, partners, and the community to improve operational workflows.

## Development Setup

To get started with local development, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd OVO
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

4. **Verify production build**:
   ```bash
   npm run build
   ```

## Contribution Workflow

We follow a standard Git branching and Pull Request model:

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Make your changes** following our coding standards.
3. **Commit your changes** using conventional commits:
   - `feat: add prescription automation flow`
   - `fix: correct alignment of hero buttons`
   - `style: update branding color variables`
4. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** against the `main` branch.

## Coding Standards

- **React & TypeScript**: Use functional components, explicit type declarations, and proper hooks.
- **Styling**: Utilize global Tailwind variables (`--color-brand-blue`, `--color-brand-navy`) to maintain NHS & Ovotech brand consistency.
- **Accessibility**: Ensure form fields, buttons, and layout elements are keyboard navigable and readable.

We look forward to your contributions!
