import * as APIUtil from '../util/api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIPHYS = 'REQUEST_SEARCH_GIPHYS';
export const RECEIVE_TRENDING_GIPHYS = 'RECEIVE_TRENDING_GIPHYS';

export const fetchSearchGiphys = searchTerm => dispatch => {
	return APIUtil.fetchSearchGiphys(searchTerm)
		.then(giphys => dispatch(receiveSearchGiphys(giphys.data)))
};

export const fetchTrendinGiphys = offset => dispatch => {
	return APIUtil.fetchTrendingGiphys(offset)
		.then(giphys => dispatch(receiveTrendingGiphys(giphys.data)))
};

export const receiveSearchGiphys = giphys => {
	return {
		type: RECEIVE_SEARCH_GIPHYS,
		giphys
	}
};

export const receiveTrendingGiphys = giphys => {
	return {
		type: RECEIVE_TRENDING_GIPHYS,
		giphys
	}
}
