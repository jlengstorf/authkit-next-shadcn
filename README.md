# AuthKit, Next.js, Radix UI

Want to set up a SaaS app dashboard _really_ fast with user auth? This is the tutorial you’ve been looking for.

This is an app starter built using Next.js, [AuthKit](https://authkit.com), and [shadcn/ui](https://ui.shadcn.com/). The dashboard used in this example is a copy-paste of the [dashboard example on the shadcn/ui site](https://ui.shadcn.com/examples/dashboard) with the auth and user data added in.

## Local development

This demo adds authentication to a Next.js site using the app directory. The UI is built using [shadcn/ui](https://ui.shadcn.com/).

To get started, clone the app:

```bash
# clone the repo
gh repo clone learnwithjason/workos-authkit -- -b start

# move into the directory
cd workos-authkit/

# install dependencies
npm i
```

Next, get the required environment variables:

```
WORKOS_CLIENT_ID=client_...
WORKOS_API_KEY=sk_...
WORKOS_REDIRECT_URI=http://localhost:3000/callback
JWT_SECRET_KEY=...
```

To get these values:

- Head to [dashboard.workos.com](https://dashboard.workos.com/) and head to the API Keys tab
- Copy the Client ID from the top as `WORKOS_CLIENT_ID`
- Click "+ Create Key" to generate a new API key to use as `WORKOS_API_KEY`
- Leave the `WORKOS_REDIRECT_URI` set to `http://localhost:3000/callback` — this must match one of the callbacks in your [WorkOS dashboard](https://dashboard.workos.com/) Redirects tab
- Set `JWT_SECRET_KEY` to any value — I used https://www.uuidgenerator.net/

Finally, start up local development to see the app.

```bash
npm run dev
```

Open `http://localhost:3000` 