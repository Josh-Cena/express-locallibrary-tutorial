# Local Library starter

This folder is the starting point for [Express Tutorial Part 2: Creating a skeleton website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website). It contains the routes, views, and server setup needed to begin the tutorial; no database is required yet.

The structure is based on the skeleton originally produced by the Express Application Generator. The starter uses ES modules, Express 5, Pug 3, and Node.js built-ins for file paths and automatic server restarts. `app.js` configures the application; `server.js` starts the HTTP server. No generator or compilation step is needed.

## Get started

1. Install a supported Node.js LTS release, version 24 or later, which includes npm.
2. Copy this entire `starter` folder, including `.gitignore`, outside the downloaded or cloned repository. Rename the copy to `express-locallibrary-tutorial`.
3. Open a terminal in the copied folder and run:

   ```bash
   npm install
   npm start
   ```

4. Open <http://localhost:3000/>. You should see "Express" and "Welcome to Express". The `/users/` route displays "respond with a resource".

The included `package-lock.json` records the resolved dependency versions. Use `npm ci` to install those exact versions.

For development, run `npm run devstart`. Node's watch mode restarts the server when an imported JavaScript file changes. Reload your browser after editing a view or stylesheet.

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

The server uses port 3000 by default, or the numeric `PORT` environment variable when set. Port 0 lets the operating system choose an available port; enable debug messages to see the assigned port. Stop the server with Ctrl+C. Follow the tutorial to add a database and the library's routes and views.
