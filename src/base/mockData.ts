import {Article} from './models/article';
import {Tag} from './models/tag';
import {Content} from './models/content';

export const TAGS: Tag[] = [{name: 'Feeling'},{name: 'Life'}];
export const CONTENT: Content = {mdContent: '# Good', htmlContent: '<h1>Good</h1>'};

export const ARTICLES: Article[] = [
  {title: 'good', content: CONTENT, tags: TAGS, insertDate: new Date(2016, 5, 4)},
  {title: 'nice', content: CONTENT, tags: TAGS, insertDate: new Date(2016, 3, 4)},
  {title: 'well', content: CONTENT, tags: TAGS, insertDate: new Date(2017, 4, 4)},
  {title: 'fuck', content: CONTENT, tags: TAGS, insertDate: new Date(2017, 2, 4)}
];
