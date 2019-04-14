import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/Task.stories');
}

configure(loadStories, module);
