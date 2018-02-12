/**
 * TRICK: 盡可能使用PureComponent做效能優化 
 * https://juejin.im/entry/5934c9bc570c35005b556e1a
 * 当组件更新时，如果组件的 props 和 state 都没发生改变，render 方法就不会触发，
 * 省去 Virtual DOM 的生成和比对过程，达到提升性能的目的。
 * 具体就是 React 自动帮我们做了一层浅比较：
 */

import React, { PureComponent } from 'react' 
import Header from './Header'
import SearchInput from './SearchInput'
import EmojiResults from './EmojiResults'
import filterEmoji from './filterEmoji'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // TRICK: 利用一個function來動態設定state中的預設值。這個func在每次setState時候都會被使用。
      filteredEmoji: filterEmoji('', 20), 
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20), // 把打的字傳進去filterEmoji，然後setState
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <SearchInput
          textChange={this.handleSearchChange}
        />
        {/* TRICK: 把陣列塞到State中，Component就會很好處理*/}
        <EmojiResults
          emojiData={this.state.filteredEmoji} 
        />
      </div>
    )
  }
}
export default App
