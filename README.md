# 🤖 AI Code Reviews

An **AI-powered GitHub App** that automatically reviews pull requests and repositories using Large Language Models (LLMs), helping developers write cleaner, more maintainable code.

---

## 🚀 Features

- ✅ GitHub App integration (install on selected repositories)
- ✅ Secure authentication using **NextAuth (GitHub OAuth)**
- ✅ Automatic repository syncing on app installation
- ✅ Webhook handling for:
  - App installation & deletion
  - Repository add/remove events
- ✅ Persistent storage using **Prisma + PostgreSQL**
- ✅ Modern UI built with **Next.js App Router**
- ✅ Scalable backend architecture
- 🚧 *(Planned)* AI-based pull request review using LLMs

---

## 🏗 Tech Stack

### Frontend
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- NextAuth.js

### Backend
- Next.js API Routes
- Prisma ORM
- PostgreSQL
- GitHub Webhooks
- GitHub App Authentication

### AI (Upcoming)
- OpenAI / LLM-based code analysis
- Pull Request summarization & suggestions

---

## 🔐 Authentication Flow

1. User signs in using **GitHub OAuth**
2. GitHub user data is stored in the database
3. User installs the GitHub App on selected repositories
4. Installation webhook stores:
   - Installation ID
   - Linked repositories
   - User ↔ Installation relation

---

## 🔁 Webhook Handling

This app listens to the following GitHub webhook events:

| Event | Purpose |
|------|--------|
| `installation.created` | Store installation & repositories |
| `installation.deleted` | Remove installation & related repos |
| `installation_repositories.added` | Add repositories |
| `installation_repositories.removed` | Remove repositories |
| `push` | *(Planned)* Trigger AI review |
| `pull_request` | *(Planned)* AI PR review |


