import { connect } from 'react-redux';
import GiphysTrending from './giphys_trending';
import { fetchTrendinGiphys } from "../actions/giphy_actions";

const mapStateToProps = state => {
    console.log(state.trending)
    return { trending: state.trending };
};

const mapDispatchToProps = dispatch => {
    return { fetchTrendingGiphys: offset => dispatch(fetchTrendinGiphys(offset)) };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GiphysTrending);