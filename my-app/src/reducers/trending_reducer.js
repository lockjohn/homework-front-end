import { RECEIVE_TRENDING_GIPHYS } from '../actions/giphy_actions';

const trendingReducer = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_TRENDING_GIPHYS:
            return action.giphys;
        default:
            return state;
    }
};

export default trendingReducer;
