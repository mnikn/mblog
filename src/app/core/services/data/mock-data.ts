import { Article } from '../../models/article';
import { Tag } from '../../models/tag';
import { Content } from '../../models/content';

export const TAGS: Tag[] = [{name: 'Feeling'}, {name: 'Life'}];
export const CONTENT1: Content = {mdContent: '# Good', htmlContent: '<h1>Good</h1>'};
export const CONTENT2: Content = {mdContent: '# Fine', htmlContent: '<h1>Fine</h1>'};
export const CONTENT3: Content = {mdContent: '# Well', htmlContent: '<h1>Well</h1>'};
export const CONTENT4: Content = {mdContent: '# Fuck', htmlContent: '<h1>Fuck</h1>'};

export const ARTICLES: Article[] = [
  {title: 'good', status: 1, content: CONTENT1, tags: TAGS, insertDate: new Date(2016, 5, 4)},
  {title: 'nice', status: 1, content: CONTENT2, tags: TAGS, insertDate: new Date(2016, 3, 4)},
  {title: 'well', status: 0, content: CONTENT3, tags: TAGS, insertDate: new Date(2017, 4, 4)},
  {title: 'fuck', status: -1, content: CONTENT4, tags: TAGS, insertDate: new Date(2017, 2, 4)}
];
