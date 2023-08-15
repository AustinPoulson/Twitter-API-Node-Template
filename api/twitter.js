import { TwitterApi } from 'twitter-api-v2';
import {apiKey, apiSecret, accessToken, accessTokenSecret} from '../secrets.js';

const client = new TwitterApi({
  appKey: apiKey,
  appSecret: apiSecret,
  accessToken: accessToken,
  accessSecret: accessTokenSecret,
});

export default async function tweet(text) {
  try {
    return await await client.v2.tweet({
      text: text
    });
  } catch (error) {
    console.error(error);
    return null;
  }
}