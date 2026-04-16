# Node + React Unified Setup (Hostinger-ready)

This server now does all of the following from one Node app:

- Serves mail APIs (`/api/...`)
- Serves built React frontend from `server/public`
- Redirects backend-entry URLs (`/server`, `/backend`, `/api`) back to home

## 1) One common env for frontend + backend

Create `frontend/.env` from `frontend/.env.example`:

```bash
cp .env.example .env
```

Important vars:

- `APP_HOME_URL`
- `MAIL_API_PORT`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`
- `MAIL_TO_PRIMARY`

## 2) Local development

Frontend dev server:

```bash
npm run dev
```

Mail/API server:

```bash
npm run dev:api
```

## 3) Production build + start

Build React into Node server folder:

```bash
npm run build
```

This generates static files in `server/public`.

Start Node server:

```bash
npm run start
```

## 4) Hostinger deployment flow

1. Upload/deploy the `frontend` project as your Node app.
2. Ensure `.env` exists at the root of this `frontend` folder.
3. Run build command: `npm run build`.
4. Run start command: `npm run start`.
5. Point domain to this Node app process/port.

## 5) Smoke test

- `GET /api/health` returns `{ "ok": true, "service": "mail-api" }`
- `GET /api/redirect-home` redirects to `APP_HOME_URL`
- Visiting `/server` or `/backend` redirects to your homepage
