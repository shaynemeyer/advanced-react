import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/CommentList';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New comment', 'Other new comment'] };

    component = renderComponent(CommentList, null, props);
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('show each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('Other new comment');
  });
});