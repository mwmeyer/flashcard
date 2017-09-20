import React, {
  Component,
} from 'react';

import { connect } from 'react-redux';

import { nextCard, revealAnswer } from './actions';

import FlashCard from './components/flashcard';

export class App extends Component {

  render() {
    return (
      <div>
        <FlashCard {...this.props}></FlashCard>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  card: state.card,
});

const mapDispatchToProps = {
  nextCard,
  revealAnswer,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
