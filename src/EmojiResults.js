import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard'; // TRICK: 利用Clipboard module處理複製貼上

import EmojiResultRow from './EmojiResultRow';
import './EmojiResults.css';

class EmojiResults extends PureComponent {
  // 只会在装载完成之后调用一次，在 render 之后调用，从这里开始可以通过 https://hulufei.gitbooks.io/react-tutorial/content/component-lifecycle.html
  componentDidMount() {
    // TRICK: 這邊在使用CLipboad.js https://clipboardjs.com/
    // TRICK: 下面這樣寫，會監聽所有.copy-to-clipboard的class的元件，然後點了該元件就會更新this.clipborad變數
    this.clipboard = new Clipboard('.copy-to-clipboard');
  }

  // 只会在装载之前调用一次，在 render 之前调用，你可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render
  componentWillUnmount() {
    this.clipboard.destroy(); //??? 為什麼需要destory?
  }

  render() {
    return (
      <div className="component-emoji-results">
        {this.props.emojiData.map((emojiData) =>
              <EmojiResultRow
                key={emojiData.title}
                symbol={emojiData.symbol}
                title={emojiData.title}
              />
          )}
      </div>
    );
  }
}
EmojiResults.propTypes = {
  emojiData: PropTypes.array,
};
export default EmojiResults;
