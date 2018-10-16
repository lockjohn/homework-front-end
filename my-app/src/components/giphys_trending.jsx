import React from 'react';

import GiphysIndex from './giphys_index';

class GiphysTrending extends React.Component {
    constructor() {
        super();
        this.state = { offset: 1, hasMore: true };
        

        // Binds our scroll event handler
        window.onscroll = () => {
            // Checks that the page has scrolled to the bottom
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                this.setState({offset: this.state.offset+25})
                console.log(this.state)
                this.props.fetchTrendingGiphys(this.state.offset);
            }
        };
    }

    componentDidMount() {
        this.props.fetchTrendingGiphys(0);
    }

    render() {
        let giphys  = this.props.trending;
        if (!giphys) return (<div>L O A D i n g . . .</div>);
            
        return (
            <div className="search-wrapper "> 
            <div id="animated_div_trend">
                <h2>Giphy Trendy</h2>
            </div>
                <GiphysIndex giphys={giphys} />
            </div>);
      
    }
}

export default GiphysTrending;