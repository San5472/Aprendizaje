# AGENTS.md

## Projects

This is a personal learning repository with multiple standalone projects.

### Root (`/`) - Main TypeScript project
```bash
npm run dev     # tsx watch src/index.ts
npm run build   # tsup
npm run typecheck
```

### `fronted-react/` - React + Vite
```bash
cd fronted-react
npm run dev     # vite
npm run build   # vite build
npm run lint    # eslint .
```

### `backend-ts/` - Legacy TypeScript
```bash
cd backend-ts
npx ts-node index.ts   # or nodemon for watch mode
```

### `webSockets/` - WebSocket project
Dependencies in local `package.json`.

## Running specific projects

Each subdirectory has its own `package.json`. Run from the specific project directory:
```bash
cd <project-dir> && npm run <script>
```

## Notes

- Root uses ESM (`"type": "module"`), others may use CommonJS
- No monorepo tooling - each project is independent
- Root project is the primary work directory for backend tasks