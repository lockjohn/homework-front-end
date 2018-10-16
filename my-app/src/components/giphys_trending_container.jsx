import { connect } from 'react-redux';
import GiphysTrending from './giphys_trending';
import { fetchTrendinGiphys } from "../actions/giphy_actions";

const mapStateToProps = state => {
    return { trending: state.trending };
};

const mapDispatchToProps = dispatch => {
    return { fetchTrendingGiphys: (offset,rating) => dispatch(fetchTrendinGiphys(offset,rating)) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GiphysTrending);