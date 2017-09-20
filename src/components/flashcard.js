import React from 'react';

class FlashCard extends React.Component {
  render() {
    return (
      <div className="stage">
        { this.props.card.list[this.props.card.currIndex].revealed === true ?
          <div>
            <div className="flashcard flipped">
              <div className="back">
                <p>Answer: {this.props.card.list[this.props.card.currIndex].answer}</p>
              </div>
            </div>
            { this.props.card.currIndex+1 !== this.props.card.list.length ?
              <button onClick={() => this.props.nextCard()}>Next Card</button> : <p>Done</p>
            }
          </div>
          :
          <div>
            <div className="flashcard">
              <div className="front">
                <p>Question: {this.props.card.list[this.props.card.currIndex].question}</p>
              </div>
            </div>
            <button onClick={() => this.props.revealAnswer(this.props.card.currIndex)}>Reveal Answer</button>
          </div>
        }
      </div>
    );
  }
}

export default FlashCard;
