import { twitchCodeSchema } from './validators';
import fetch from 'node-fetch';
import { getClientId, getClientSecret } from './utils';

export const getTokenFromCode = async (code: string) => {
  if (!twitchCodeSchema.validate(code))
    throw new Error('error.validation.code');

  try {
    const request = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: getClientId(),
        client_secret: getClientSecret(),
        code,
        grant_type: 'authorization_code',
        redirect_uri: 'TODO',
      }),
    });
    const response = await request.json();
    return response;
  } catch (_) {
    throw new Error('error.authentication.failed');
  }
};
