import { Component } from 'react'
import { Player } from './Player'
import { Description } from './Description'
import { Buttons } from './Buttons'
import './App.css'
import goblinvid from './goblin.mp4'
import confusedvid from './confused.mp4'

class App extends Component {
  render() {

    // DUMMY DATA //

    let confused = {
      video: confusedvid,
      desc: {
        vidName: ' ConfusedKhmer69',
        vidDesc: 'อ้าวทุกคน อันนี้งูนะมันจะอมใข่ได้ยังไงน่ะ ตัวมันนิดเดียวเองเห็นมะ ผมว่าไม่น่าจะอมได้นะเว้ยนิ อย่าเข้าใกล้นะ เด็กเล็กนะ อันตราย โอ๊ะ ปากมันกว้างขนาดนั้นได้เชียวเหรอน่ะ อมไปได้ยังไงน่ะ ไม่อยากจะเชื่อเลย',
        media: 'ConfusedKhmer69\'s original sound'
      },
      data: {
        isLiked: false,
        likes: 1000,
        comments: 200,
        shares: 100
      }
    }

    let goblin = {
      video: goblinvid,
      desc: {
        vidName: ' JapaneseGoblin420',
        vidDesc: 'Whew, finally finished it! this is actually my first time to ever make a PV like this, if i\'m being honest Never really thought that i\'ve managed to finished this thing. Overall it took me about 3 weeks to make this',
        media: 'Goburin'
      },
      data: {
        isLiked: true,
        likes: 100,
        comments: 20,
        shares: 10
      }
    }

    // DUMMY DATA //

    const videoSelector = confused

    return (
      <div className='playerContainer'>
        <Player video={videoSelector.video} />
        <Description desc={videoSelector.desc} />
        <Buttons data={videoSelector.data} />
      </div>
    )
  }
}

export default App
