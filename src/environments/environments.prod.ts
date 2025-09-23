export const environment = {
  production: true,
  spotifyClientId: process.env['SPOTIFY_CLIENT_ID'] ? process.env['SPOTIFY_CLIENT_ID'] : 'defaultClientId',
  spotifyClientSecret: process.env['SPOTIFY_CLIENT_SECRET'] ? process.env['SPOTIFY_CLIENT_SECRET'] : 'defaultClientSecret'
};
