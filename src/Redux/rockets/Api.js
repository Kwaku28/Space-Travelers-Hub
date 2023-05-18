/*eslint-disable*/

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const RocketApi = 'https://api.spacexdata.com/v4/rockets';

const FetchApi = createAsyncThunk('get/rockets', async () => {
  const Response = await axios.get(RocketApi);
  const data = Response.data;
  return data.map((Rocket) => ({
    RocketId: Rocket.id,
    RocketName: Rocket.rocket_name,
    description: Rocket.description,
    RocketImages: Rocket.flickr_images[0],
}));  
});

export default FetchApi;
