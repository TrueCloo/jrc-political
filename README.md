# JRC Political website

One-page site for JRC Political. Built with [Eleventy](https://www.11ty.dev/), hosted on GitHub Pages, edited through [Pages CMS](https://pagescms.org).

## Where things live

| What | File |
| --- | --- |
| All page copy and sections | `src/_data/home.json` |
| Email, phone, form link, footer | `src/_data/settings.json` |
| Page layout (HTML) | `src/index.njk` |
| Colors, fonts, spacing | `src/assets/styles.css` |
| Logo, favicon, uploaded photos | `src/images/` |
| Editor setup for Joanna | `.pages.yml` |
| Auto-publish to GitHub Pages | `.github/workflows/deploy.yml` |

Joanna only ever touches the two JSON files, through Pages CMS. Layout, colors and fonts stay in code.

## Run it locally

```bash
npm install
npm start
```

Then open http://localhost:8080. Edits to any file reload the page.

## Launch checklist

### 1. Put the code on GitHub

Create an **empty public** repo on GitHub named `jrc-political` (no README, no .gitignore), under your GitHub account (Joanna edits through Pages CMS by email, so she doesn't need GitHub). Then, from this folder:

```bash
git init
git add .
git commit -m "Initial JRC Political site"
git branch -M main
git remote add origin https://github.com/OWNER/jrc-political.git
git push -u origin main
```

Replace `OWNER` with the GitHub username that owns the repo.

### 2. Turn on GitHub Pages

Repo → **Settings** → **Pages** → under **Build and deployment**, set **Source** to **GitHub Actions**.

Then go to the **Actions** tab. The "Deploy site" run should finish green in about a minute. The site is now live at `https://OWNER.github.io/jrc-political/`.

### 3. Connect her domain (HostGator)

1. In this folder, create a file `src/CNAME` containing only the domain, e.g.:
   ```
   jrcpolitical.com
   ```
   Then commit and push:
   ```bash
   git add src/CNAME
   git commit -m "Add custom domain"
   git push
   ```
2. GitHub repo → **Settings** → **Pages** → **Custom domain**: enter the same domain and click **Save**.
3. In HostGator's DNS settings for the domain, remove any existing `A` records for `@` and add:

   | Type | Host | Points to |
   | --- | --- | --- |
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | OWNER.github.io |

4. DNS can take from a few minutes to a few hours. Once GitHub shows the domain as verified, tick **Enforce HTTPS** on the same Pages settings screen.

### 4. Give Joanna the editor (no GitHub account needed for her)

1. You sign in at https://app.pagescms.org with **your** GitHub account and install the Pages CMS GitHub app on the `jrc-political` repo when prompted.
2. Open the repo in Pages CMS → **Collaborators** → invite Joanna by email.
3. She clicks the link in her email and lands in the editor. She'll see **Home page** and **Site settings**. Every Save publishes the site automatically in about a minute.

Collaborators can edit copy and photos but can't change `.pages.yml` or invite others; that stays with you.

### 5. Connect the contact form

1. Create a free form at https://formspree.io using Joanna's email address (she'll get one confirmation email to click; after that, messages just arrive in her inbox).
2. Copy the form's endpoint URL (looks like `https://formspree.io/f/abcd1234`).
3. In Pages CMS → **Site settings** → **Form endpoint URL**, paste it and Save.

Until this is set, the form shows "not connected yet" and points visitors to her email.

Spam protection: the form includes a hidden `_gotcha` trap field that Formspree uses to drop bot submissions. In Formspree's form settings, also keep spam filtering on and restrict submissions to her domain.

## Before launch: replace placeholders

Everything in `[brackets]` needs her real info:

- About: opening line, experience sentence, the three quick facts, headshot
- Client quote and name
- Site settings: email and phone

Also have her read the headline, services and approach copy and change anything that doesn't sound like her.

## Adding sections later

In Pages CMS → **Home page** → **Page sections**, she can add, remove, or drag to reorder:

- **About** (with headshot)
- **Cards** (like Services)
- **Numbered steps** (like Approach)
- **Client quote**
- **Text section** (heading + paragraphs)
- **Contact form**

Any section with a **Menu label** appears in the top menu automatically.
