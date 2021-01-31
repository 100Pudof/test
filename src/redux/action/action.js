import axios from 'axios';

export const plusFavorite = (payload) => ({
    type: 'ADD_FAV',
    payload,
})

export const setItems = (payload) => ( {
   type: 'SET_ITEMS',
   payload, 
})

export const exit = () => ( {
  type: 'IS_AUTH_FALSE', 
})

export const getItems = () => (dispatch) =>  {
    const options = {
      method: 'GET',
      url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/SFO-sky/ORD-sky/anytime',
      params: { inboundpartialdate: 'anytime' },
      headers: {
        'x-rapidapi-key': 'b2aa6ce884msh101485cbcaf935bp1ab161jsn8e6840166d71',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      dispatch(setItems(response.data));
    }).catch(function (error) {
      console.error(error);
    });
}