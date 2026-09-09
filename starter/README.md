# Local Library starter

This folder is the starting point for [Express Tutorial Part 2: Creating a skeleton website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). It contains the routes, views, and server setup needed to begin the tutorial; no database is required yet.

The structure is based on the skeleton originally produced by the Express Application Generator. The starter uses `const`, Express 5, and Pug 3, while retaining the CommonJS modules and file layout used throughout the tutorial.

## Get started

1. Install a supported Node.js LTS release, version 22 or later, which includes npm.
2. Copy this entire `starter` folder, including `.gitignore`, outside the downloaded or cloned repository. Rename the copy to `express-locallibrary-tutorial`.
3. Open a terminal in the copied folder and run:

   ```bash
   npm install
   npm start
   ```

4. Open <http://localhost:3000/>. You should see "Express" and "Welcome to Express". The `/users/` route displays "respond with a resource".

`npm install` creates a `package-lock.json` file. Keep it with your project to record the resolved dependency versions.

To enable server debug messages, use the command for your shell:

```bash
# Linux or macOS
DEBUG=express-locallibrary-tutorial:* npm start
```

```powershell
# Windows PowerShell
$env:DEBUG = "express-locallibrary-tutorial:*"; npm start
```

```batch
:: Windows Command Prompt
SET DEBUG=express-locallibrary-tutorial:* & npm start
```

The server uses port 3000 by default, or the `PORT` environment variable when set. Stop it with Ctrl+C. Follow the tutorial to add automatic server restarts, a database, and the library's routes and views.
