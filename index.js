import tweet from './api/twitter.js'

async function sumbitTweet(text) {
  try {
    return await tweet(text)
  } catch (error) {
    console.log(error)
    return null;
  }
}

const testText = 'Connectivity weaves the threads of our world, transforming distance into mere whispers and strangers into kindred spirits.';

const result = await sumbitTweet(testText);

if (result !== null) {
  console.log(result);
} else {
  console.error('No result');
}