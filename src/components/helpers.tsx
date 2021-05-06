import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
//import SyntheticEvent from 'react/lib/SyntheticEvent';
import TestUtils, { Simulate } from 'react-addons-test-utils';

chai.use(sinonChai);
let data:any = null;

export function init(d:any) {
  data = d;
}

//export const eventInstance = sinon.match.instanceOf(SyntheticEvent);

const reactAttributesRegex = / data-react[-\w]+="[^"]+"/g;

// See: http://stackoverflow.com/q/28979533/247243
function stripReactAttributes(html:any) {
  return html.replace(reactAttributesRegex, '');
}

export function getInnerHTML(element:any) {
  return stripReactAttributes(element.innerHTML);
}

export function expectContainerAttribute(attributeName:any, expectedValue:any) {
  expect(data.container.getAttribute(attributeName)).to.equal(expectedValue);
}

export function expectInputAttribute(attributeName:any, expectedValue:any) {
  expect(data.input.getAttribute(attributeName)).to.equal(expectedValue);
}

export function expectSuggestionsContainerAttribute(attributeName:any, expectedValue:any) {
  expect(getSuggestionsContainer().getAttribute(attributeName)).to.equal(expectedValue);
}

export function expectInputValue(expectedValue:any) {
  expect(data.input.value).to.equal(expectedValue);
}

export function getSuggestionsContainer() {
  return TestUtils.findRenderedDOMComponentWithClass(data.app, 'react-autosuggest__suggestions-container');
}

export function getSuggestions() {
  return TestUtils.scryRenderedDOMComponentsWithClass(data.app, 'react-autosuggest__suggestion');
}

export function getSuggestion(suggestionIndex:any) {
  const suggestions = getSuggestions();

  if (suggestionIndex >= suggestions.length) {
    throw Error(`Cannot find suggestion #${suggestionIndex}`);
    return null;
  }

  return suggestions[suggestionIndex];
};

export function getTitles() {
  return TestUtils.scryRenderedDOMComponentsWithClass(data.app, 'react-autosuggest__section-title');
}

export function getTitle(titleIndex:any) {
  const titles = getTitles();

  if (titleIndex >= titles.length) {
    throw Error(`Cannot find title #${titleIndex}`);
    return null;
  }

  return titles[titleIndex];
};

// See: https://github.com/facebook/react/issues/4692#issuecomment-157803622
/*
export function getSuggestionsBySectionIndex(sectionIndex) {
  const sections = TestUtils.scryRenderedDOMComponentsWithClass(data.app, 'react-autosuggest__section-suggestions-container');

  if (sectionIndex >= sections.length) {
    throw Error(`Cannot find section #${sectionIndex}`);
    return null;
  }

  return TestUtils.scryRenderedDOMComponentsWithClass(sections[sectionIndex], 'react-autosuggest__suggestion');
}
*/

export function expectSuggestions(expectedSuggestions:any) {
  const suggestions = getSuggestions().map((suggestion) => suggestion.textContent);

  expect(suggestions).to.deep.equal(expectedSuggestions);
}

export function expectFocusedSuggestion(suggestion:any) {
  const focusedSuggestions = TestUtils
    .scryRenderedDOMComponentsWithClass(data.app, 'react-autosuggest__suggestion--focused');

  if (suggestion === null) {
    expect(focusedSuggestions).to.have.length(0);
  } else {
    expect(focusedSuggestions).to.have.length(1);
    expect(focusedSuggestions[0].textContent).to.equal(suggestion);
  }
}

// export function mouseEnterSuggestion(suggestionIndex:any) {
//   Simulate.mouseEnter(getSuggestion(suggestionIndex));
// }

// export function mouseLeaveSuggestion(suggestionIndex:any) {
//   Simulate.mouseLeave(getSuggestion(suggestionIndex));
// }

// export function clickSuggestion(suggestionIndex:any) {
//   mouseEnterSuggestion(suggestionIndex);
//   Simulate.click(getSuggestion(suggestionIndex));
// }

export function focusInput() {
  Simulate.focus(data.input);
}

export function blurInput() {
  Simulate.blur(data.input);
}

export function clickEscape() {
  Simulate.keyDown(data.input, { key: 'Escape' });
}

export function clickEnter() {
  Simulate.keyDown(data.input, { key: 'Enter' });
}

export function clickDown(count = 1) {
  for (let i = 0; i < count; i++) {
    Simulate.keyDown(data.input, { key: 'ArrowDown' });
  }
}

export function clickUp(count = 1) {
  for (let i = 0; i < count; i++) {
    Simulate.keyDown(data.input, { key: 'ArrowUp' });
  }
}

export function focusAndSetInputValue(value:any) {
  focusInput();
  data.input.value = value;
  Simulate.change(data.input);
}

export function isInputFocused() {
  return global.document.activeElement === data.input;
}
