# INKQI PRINTLAB website (Decap CMS + Netlify + GitHub)

```
index.html / service.html     pages
css/                          styles
js/content.js                 loads content/*.json
js/home.js, service.js, about.js, common.js, octopus.js
content/*.json                ALL texts and image paths (edited via /admin)
admin/index.html, config.yml  Decap CMS (the editing page at yoursite.com/admin)
img/uploads/                  images uploaded from the CMS
```

## Preview locally
Use VS Code "Live Server" (content is loaded with fetch, so double-clicking index.html will not work).

## Deploy
1. GitHub: create a repository, upload the whole folder (branch name must match `branch:` in admin/config.yml).
2. Netlify: Add new site > Import from Git > pick the repo. Build command: empty. Publish directory: `.` (root).
3. Netlify > Site configuration > Identity (or Integrations): enable Identity,
   set registration to "Invite only", then enable Services > Git Gateway.
4. Identity > Invite users: invite each editor by email. They accept the invite and open yoursite.com/admin.
5. Domain (Namecheap): Netlify > Domain management > Add custom domain, then either
   - Netlify DNS: set the Namecheap nameservers to the ones Netlify shows, or
   - keep Namecheap DNS: add the records Netlify shows (usually www CNAME -> yoursite.netlify.app,
     and the root domain ALIAS/A record).
   HTTPS is issued automatically after DNS is verified.
