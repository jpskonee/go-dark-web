import * as types from '../types';

const initialState = {
  fullExperience: null,
  loading: true,
  playerSource: {
    type: "audio",
    sources: [
      {
        src: "/audio.mp3",
        type: "audio/mp3",
      },
    ],
  },
  playerOptions: {
      controls: ["play", "mute"],
      loop: { active: true },
      autopause: true,
      autoplay: true
    }
,
  error: null,
 
};

const settingsReducer = (state = initialState, action) => {
  if(!action.payload?.fullExperience && !action.payload?.loading) {
    state.playerOptions = {
      controls: ["play", "mute"],
      loop: { active: true }
    };
  }else{
    state.playerOptions =   {
      controls: ["play", "mute"],
      loop: { active: true },
      autopause: true,
      autoplay: true
    }
  }

  switch (action.type) {

    case types.SET_SETTINGS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
  
export { settingsReducer as default };
