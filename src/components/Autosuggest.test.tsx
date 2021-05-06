
import { expect } from 'chai';
import {
  init,
  getInnerHTML,
  getSuggestion,
   clickEscape,
   clickDown,
  clickUp,
focusAndSetInputValue, 
 
} from './helpers';
import Example, {
    onChange,
    getSuggestionValue,
    renderSuggestion
} from './Autosuggest';

// describe('Plain list Autosuggest', () => {
//   beforeEach(() => {
//     const app = TestUtils.renderIntoDocument(React.createElement(Example));
//     const container = TestUtils.findRenderedDOMComponentWithClass(app, 'react-autosuggest__container');
//     const inputValue = TestUtils.findRenderedDOMComponentWithTag(app, 'inputValue');

//     init({ app, container, inputValue });
//   });


  describe('getSuggestionValue', () => {
    beforeEach(() => {
     focusAndSetInputValue('r');
    });

    it('should be called once with the right parameters when Up is pressed', () => {
      clickUp();
      expect(getSuggestionValue).to.have.been.calledOnce;
      expect(getSuggestionValue).to.have.been.calledWithExactly({ name: 'Ruby', year: 1995 });
    });

    it('should be called once with the right parameters when Down is pressed', () => {
      clickDown();
      expect(getSuggestionValue).to.have.been.calledOnce;
      expect(getSuggestionValue).to.have.been.calledWithExactly({ name: 'Ruby', year: 1995 });
    });
  });
 
  describe('renderSuggestion', () => {
    beforeEach(() => {
      focusAndSetInputValue('r');
    });

    it('should be called with the right parameters', () => {
      expect(renderSuggestion).to.have.been.calledWithExactly({ name: 'Ruby', year: 1995 }, { value: 'r', valueBeforeUpDown: null });
      clickDown();
      expect(renderSuggestion).to.have.been.calledWithExactly({ name: 'Ruby', year: 1995 }, { value: 'Ruby', valueBeforeUpDown: 'r' });
    });

    it('should be called once per suggestion', () => {
      expect(renderSuggestion).to.have.been.calledOnce;
    });

    it('return value should be used to render suggestions', () => {
      const firstSuggestion = getSuggestion(0);

      expect(getInnerHTML(firstSuggestion)).to.equal('<strong>R</strong><span>uby</span>');
    });
  });


    it('should not be called when Down is pressed and suggestions are hidden', () => {
      clickEscape();
      clickDown();
      expect(onChange).not.to.have.been.called;
    });


    it('should not be called when Up is pressed and suggestions are hidden', () => {
      clickEscape();
      clickUp();
      expect(onChange).not.to.have.been.called;
    });

 

    it('should not be called when Escape is pressed and suggestions are shown', () => {
      clickEscape();
      expect(onChange).not.to.have.been.called;
    });




