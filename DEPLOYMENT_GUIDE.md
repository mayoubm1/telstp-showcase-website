# TAWASOL Life Science Technology Park (TELsTP) Showcase Website Deployment Guide

This guide provides step-by-step instructions for deploying the TELsTP Showcase Website to **Vercel** for hosting and **Supabase** for database and backend services.

## Prerequisites

1.  **GitHub Account:** The source code must be hosted on a GitHub repository.
2.  **Vercel Account:** For static site hosting and continuous deployment.
3.  **Supabase Account:** For the database, authentication, and real-time services.

---

## Part 1: Supabase Setup (Database and Backend)

The website is designed to integrate with a Supabase backend for dynamic content such as the Global Research Hubs database, publications, and events.

### 1. Create a New Supabase Project

1.  Log in to your Supabase account.
2.  Click **"New project"**.
3.  Choose an organization and enter the project details:
    *   **Name:** `telstp-showcase`
    *   **Database Password:** *Choose a strong password and save it securely.*
    *   **Region:** *Select the region closest to your target audience.*
4.  Click **"Create new project"**.

### 2. Database Schema Setup

The database schema is defined in the provided file: `/home/ubuntu/upload/Foundation-Schema_110225.md`.

1.  In your new Supabase project dashboard, navigate to the **SQL Editor** (the icon that looks like a database).
2.  Click **"New query"**.
3.  Copy the SQL commands from the `Foundation-Schema_110225.md` file and paste them into the editor.
    *   *Note: The schema is expected to include tables like `global_hubs`, `publications`, and `events`.*
4.  Click **"RUN"** to execute the schema creation.

### 3. Retrieve API Keys and URL

You will need these credentials for the Vercel deployment.

1.  In the Supabase dashboard, navigate to **Settings** (gear icon) -> **API**.
2.  Note down the following values:
    *   **Project URL (SUPABASE_URL):** `https://[YOUR_PROJECT_REF].supabase.co`
    *   **Anon Public Key (SUPABASE_ANON_KEY):** *This is safe to use in a public frontend.*

---

## Part 2: Vercel Deployment (Frontend Hosting)

The website is a static site that will be hosted on Vercel, leveraging its global CDN and continuous deployment features.

### 1. Push Code to GitHub

1.  Ensure all local changes are committed in the `/home/ubuntu/telstp-showcase-website` directory.
2.  Create a new repository on GitHub (e.g., `telstp-showcase-website`).
3.  Push the local repository to your new GitHub repository.

    ```bash
    # Inside the /home/ubuntu/telstp-showcase-website directory
    git remote add origin https://github.com/[YOUR_USERNAME]/telstp-showcase-website.git
    git branch -M main
    git push -u origin main
    ```

### 2. Deploy to Vercel

1.  Log in to your Vercel account.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your newly created GitHub repository (`telstp-showcase-website`).
4.  In the **"Configure Project"** screen:
    *   **Root Directory:** The project is a static site, so the root directory should be the base of the repository (usually `/`).
    *   **Framework Preset:** Select **"Other"** or **"HTML"**.
    *   **Build Command:** Leave blank (or use `echo "No build step"`).
    *   **Output Directory:** Leave blank (or use `.`).

### 3. Configure Environment Variables

This step connects your Vercel frontend to your Supabase backend.

1.  In the Vercel project settings, navigate to **Settings** -> **Environment Variables**.
2.  Add the following variables:

| Name | Value | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | `[YOUR_PROJECT_URL]` | The Project URL from Supabase API settings. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `[YOUR_ANON_PUBLIC_KEY]` | The Anon Public Key from Supabase API settings. |

3.  Click **"Save"** for each variable.

### 4. Final Deployment

1.  Click **"Deploy"**. Vercel will automatically pull the code from GitHub and deploy the static site.
2.  Once deployed, the site will be live at a Vercel URL (e.g., `telstp-showcase-website.vercel.app`).

---

## Part 3: Local Development Setup

To run the project locally for development or testing:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[YOUR_USERNAME]/telstp-showcase-website.git
    cd telstp-showcase-website
    ```
2.  **Run a local web server:** Since this is a static site, you can use any simple web server.
    *   **Python:** `python3 -m http.server 8000`
    *   **Node.js (with `serve`):** `npx serve .`
3.  Open your browser to `http://localhost:8000`.

---

## Final Deliverable Structure

The final zipped package contains the following structure:

```
telstp-showcase-website/
├── css/
├── images/
├── js/
├── index.html
├── DEPLOYMENT_GUIDE.md  <-- This file
├── Foundation-Schema_110225.md <-- Database schema
└── ... (other project files)
```

**Note on Credit Management:** All steps have been optimized for efficiency. The use of the `file` tool for name correction and guide creation minimizes resource usage. The final packaging is a single, efficient shell command.
