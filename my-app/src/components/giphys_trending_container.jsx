import { connect } from 'react-redux';
import GiphysTrending from './giphys_trending';
import { fetchSearchGiphys } from '../actions/giphy_actions';

const mapStateToProps = state => {
    return { giphys: state.search };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchSearchGiphys: searchTerm => dispatch(fetchSearchGiphys(searchTerm))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GiphysSearch);