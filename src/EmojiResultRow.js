import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './EmojiResultRow.css';

class EmojiResultsRow extends PureComponent {
  render() {
    // TRICK: 下面這兩行輸出是為了要輸出那張emoji的圖片...
    const codePointHex = this.props.symbol.codePointAt(0).toString(16); 
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
    return (
      <div 
        className="component-emoji-result-row copy-to-clipboard"
        data-clipboard-text={this.props.symbol} // 讓Clipboard認得要copy什麼
      >
        <img
          alt={this.props.title}
          src={src}
        />
        <span
          className="title"
        >
          {this.props.title}
        </span>
        <span className="info">
          Click to copy emoji
        </span>
      </div>
    );
  }
}
EmojiResultsRow.propTypes = {
  title: PropTypes.string,
  symbol: PropTypes.string,
};
export default EmojiResultsRow;
