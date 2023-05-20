# Simple openid connect provider
Based on https://github.com/panva/node-oidc-provider.

In fact, the code is basically their example with minor modifications.

# Quick start
```
docker build -t simple-oidc-provider https://github.com/mirkootter/simple-oidc-provider.git#main
docker run --rm -d -p 3000:3000 \
  -e "NODE_ENV=production" \
  -e "ISSUER=https://myapp" \
  -u "node" \
  simple-oidc-provider
```

Using docker-compose:
```yaml
# docker-compose.yml
version: "3"
services:
  simple-oidc-provider:
    build: "https://github.com/mirkootter/simple-oidc-provider.git#main"
    user: "node"
    environment:
      - NODE_ENV=production
      - ISSUER=https://myapp
    ports:
      - "3000:3000"
```
# Configuration
You probably want to replace the files
- `/app/config/custom/clients.js`
- `/app/config/custom/users.js`

Defaults / examples are shown below
```js
// /app/config/custom/clients.js

export default [
  {
    client_id: 'foo',
    client_secret: 'bar',
    grant_types: ['refresh_token', 'authorization_code'],
    redirect_uris: ['http://localhost/cb', 'https://localhost/cb'],
    pkce_required: false,
  },
  {
    client_id: 'foo-local',
    client_secret: 'bar',
    grant_types: ['refresh_token', 'authorization_code'],
    redirect_uris: ['http://localhost/cb', 'https://localhost/cb'],
    pkce_required: true,
  },
];
```

```js
// /app/config/custom/users.js

export default [
  {
    email: "admin@example.com",
    password: "Test1234!",
    email_verified: true,
    family_name: "admin",
    given_name: "admin",
    locale: "en-gb",
    name: "admin",  
  },
];
```