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
