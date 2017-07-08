import {Article} from './models/Article';
import {Tag} from './models/Tag';
import {Content} from './models/Content';

export const TAGS: Tag[] = [{name: 'Feeling'},{name: 'Life'}];
export const CONTENT: Content = {mdContent: '# Good', htmlContent: '<h1>Good</h1>'};

export const ARTICLES: Article[] = [
  {id: 1, title: 'good', content: CONTENT, tags: TAGS, insertDate: new Date(2016, 5, 4)},
  {id: 2, title: 'good', content: CONTENT, tags: TAGS, insertDate: new Date(2016, 3, 4)},
  {id: 3, title: 'good', content: CONTENT, tags: TAGS, insertDate: new Date(2017, 4, 4)},
  {id: 4, title: 'good', content: CONTENT, tags: TAGS, insertDate: new Date(2017, 2, 4)}
];
