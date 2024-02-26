
import axios from 'axios'
// Define a function called textToSpeech that takes in a string called inputText as its argument.
const textToSpeech = async (inputText:string) => {

  const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://voicerss-text-to-speech.p.rapidapi.com/',
  params: {
    key: '4f612bc5538148f6aa7cfe2336a224bd',
    src: inputText,
    hl: 'en-us',
    r: '0',
    c: 'mp3',
    f: '8khz_8bit_mono'
  },
  headers: {
    'X-RapidAPI-Key': 'ad74d5f538mshf665ad3ec0126d7p1148e0jsn7c292f083c47',
    'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
  },
  responseType: 'arraybuffer',
};




  // // Set the API key for ElevenLabs API. 
  // // Do not use directly. Use environment variables.
  // const API_KEY = "6f2d6baa68b155f068a8dbb44865f386";
  // // Set the ID of the voice to be used.
  // const VOICE_ID = '21m00Tcm4TlvDq8ikWAM';

  // // Set options for the API request.
  // const options = {
  //   method: 'POST',
  //   url: `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
  //   headers: {
  //     accept: 'audio/mpeg', // Set the expected response type to audio/mpeg.
  //     'content-type': 'application/json', // Set the content type to application/json.
  //     'xi-api-key': `${API_KEY}`, // Set the API key in the headers.
  //   },
  //   data: {
  //     text: inputText, // Pass in the inputText as the text to be converted to speech.
  //   },
  //   responseType: 'arraybuffer', // Set the responseType to arraybuffer to receive binary data as response.
  // };

  // // Send the API request using Axios and wait for the response.
  const speechDetails = await axios.request(options as any);

  // Return the binary audio data received from the API response.
  return speechDetails.data;
  
};

// Export the textToSpeech function as the default export of this module.
export default textToSpeech;
