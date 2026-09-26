---
sidebar_position: 13
---

# Troubleshooting & FAQ

## I can't see Desk Design

- Compliance may not be approved yet — check `/compliance`.
- Your role may lack access — ask a `tenant_owner` to check Team roles.

## Publish fails validation

- Read the error modal: **errors block**, warnings don't.
- Most common: missing app name, empty screen, tab pointing to a deleted screen.

## Images won't upload / 413 errors

- Keep files under **5 MB**; logos ≤ 512px, backgrounds ≤ 1280px (the builder compresses automatically).
- Prefer JPG for photos, PNG for logos.

## Port 3000 in use (local dev)

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## Still stuck?

Use **Help & Support** in the app (FAQs → contact form → live chat) and include: your shop slug, the page/route, and a screenshot.
