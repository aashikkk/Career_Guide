# Career Guide

example `env` file for BACKEND

```bash
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PORT=3306
DB_PASSWORD=1234
DB_NAME=career_guidance
JWT_SECRET=xxxxh
SESSION_SECRET=xxxxx
STRIPE_SECRET_KEY=xxx
```

example `env` file for FRONTEND

```bash
VITE_STRIPE_PUBLISHABLE_KEY = xxxxxxxx
```

Can access in the frontend code like this

```bash
import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
```
