# Nodemailer Mail API Setup (regacats.in)

This server replaces the PHP form handlers and serves equivalent endpoints:

- `/api/commonLead.php`
- `/api/contactForm.php`
- `/api/footerContact.php`
- `/api/sendDetailedMail.php`
- `/api/sendDeviceMail.php`
- `/api/sendFssaiMail.php`
- `/api/sendMail.php`

## 1) Configure environment

Copy `.env.example` to `.env` in the `server` folder and set real values:

```bash
cp server/.env.example server/.env
```

Required keys:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `MAIL_FROM`
- `MAIL_TO_PRIMARY`

## 2) Run locally

```bash
npm run dev:api
npm run dev
```

Vite proxies `/api` to `http://localhost:8787` in development.

## 3) Deploy on regacats.in

1. Run this mail API as a Node process (PM2 or hosting process manager).
2. Reverse proxy `https://regacats.in/api/*` to `http://127.0.0.1:8787/api/*`.
3. Keep frontend API calls as `/api/...` (already configured in source).

## 4) Smoke test

- `GET /api/health` should return `{ "ok": true, "service": "mail-api" }`.
- Submit one FSSAI form and one Drug/IAA form and verify recipients receive the lead email.
