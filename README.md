# Flowfox — AI-Assisted Campaign Brief Generator

### 1. Project overview
Test assignment is a Next.js 15 app that helps create and manage marketing campaign briefs. It stores campaign context (industry, audience, tone, description), then uses OpenAI to generate German-language headlines and brand-safe images. All data is persisted in Postgres via Prisma.

### 2. Setup instructions (local)
- **Prerequisites**: Node 20+, Docker, Docker Compose, an OpenAI API key
- **Clone and install**:
  ```bash
  npm install
  ```
- **Start Postgres via Docker**:
  1. Create a `.env` file (see section 3 for required vars)
  2. Run:
  ```bash
  docker compose up -d
  ```
- **Setup database and Prisma client**:
  - Ensure `DATABASE_URL` is set in `.env`
  - Apply migrations and generate client:
  ```bash
  npx prisma migrate deploy
  npx prisma generate
  ```
- **Run the app**:
  ```bash
  npm run dev
  ```
  Open `http://localhost:3000`

### 3. Environment variables
Create a `.env` in the project root. Required variables:

- **Application**
  - `NEXT_PUBLIC_BASE_URL` — Base URL for the app. For local dev: `http://localhost:3000`
- **Database**
  - `DATABASE_URL` — Prisma connection string to Postgres, e.g.:
    - `postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:POSTGRES_PORT/POSTGRES_DB`
  - `POSTGRES_USER` — Used by Docker Compose to provision DB
  - `POSTGRES_PASSWORD` — Used by Docker Compose to provision DB
  - `POSTGRES_DB` — Used by Docker Compose to provision DB
  - `POSTGRES_PORT` — Exposed port (e.g., `5432`)
- **OpenAI**
  - `OPENAI_API_KEY` — OpenAI API key for text and image generation

### 4. Features implemented
- **Campaigns**
  - Campaigns list view (`/`)
  - Create a new campaign entity (`/campaign`)
  - Campaign details view (`/campaign/[id]`)
- **AI generation**
  - Generate German marketing headlines via OpenAI api (`gpt-4o-mini`)
  - Generate brand-safe images via OpenAI api (`gpt-image-1`)
  - Persist generated results with status tracking: `PENDING`, `COMPLETED`, `FAILED`
- **Creatives**
  - Associate headlines and images into simple “creatives” entries for a campaign

### 5. Deployment URL
Live app: <provide Vercel URL here>

### 6. Technical decisions
- **App Router + RSC**: Server Components used for initial data fetch/render;
- **Prisma with Postgres**: Prisma generated types used across API and UI for consistency.
- **React Query**: Client-side fetching and cache for user actions (generate, refresh lists) without complex global state.

### 7. Known limitations / future improvements
- **Code structure**: components refactoring, moving some logic to hooks, utils, creating separate services for API calls.
- **Auth & multi-user**: No authentication or project scoping.
- **Rate limiting & retries**: OpenAI calls have minimal retry/backoff.
- **Asset storage**: Image URLs are referenced directly from OpenAI responses.
- **Testing**: No unit/e2e tests
- **Observability**: Add request metrics, tracing, and structured logs.

### 8. Time breakdown (estimate)

Around 9 hours

### 9. Cursor & AI usage

1. What rules/patterns were configured in .cursorrules?
   - A project-specific `.cursorrules` file was created with comprehensive guidelines covering:
     - Context-first development approach (read before writing)
     - TypeScript and Prisma type safety requirements
     - Zod validation patterns for API routes
     - React Query usage guidelines
     - Code quality standards (file size limits, error handling)
     - Testing and verification strategies

2. Which AI models were used and why?
   - GPT-5 in Cursor Chat for drafting boilerplate, refactors, and documentation due to strong code reasoning.
   - Claude 4.5 for higher-quality long-form reasoning, structural refactoring guidance.

3. How were Cursor features used?
   - Chat: design discussions, generating draft implementations and docs.
   - Inline suggestions: small refactors, filling types, and prop tweaks in components.
   - Plan/Composer: staging multi-file edits.

4. How did Cursor help or hinder?
   - Helped: provided boilerplate: forms, components, API handlers. Faster iteration on prompts and validation.
   - Hindered: required manual verification for types, API validation, and UI wiring.

5. Estimated AI vs hand-written split
   - ~40% AI-generated (initial drafts, scaffolding, doc outlines)
   - ~60% hand-written (data modeling, API validation, UI wiring, polishing)

6. Verification of AI-generated code
   - Manual local testing of routes and UI flows;
   - Manual refactoring;

7. Testing strategies for code quality
   - Static analysis and formatting with Biome.

8. Tips for using Cursor with this stack
   - Define schemas first (Prisma, Zod), then prompt AI to respect them.
   - Keep AI edits isolated per feature; review diffs before applying.
