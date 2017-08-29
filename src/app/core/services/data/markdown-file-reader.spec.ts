import { Article } from 'app/core/models/article';
import { MarkdownFileReader } from './markdown-file-reader';
import { Tag } from '../../models/tag';
import { remote } from 'electron';

describe('MarkdownFileReader without the TestBed', () => {
  let service: MarkdownFileReader;
  beforeEach(() => {
    service = new MarkdownFileReader();
  });

  let fs = remote.require('fs');
  let content = 'title: Test\ndate: 2017-08-15 08:00:00\ntags: [play,fun]';
  fs.writeFileSync('./test.md', content);

  let article = new Article();
  article.title = 'Test';
  article.insertDate = new Date('2017-08-15 08:00:00');
  article.tags.push(new Tag('play'));
  article.tags.push(new Tag('fun'));
  it('#getArticleFromFile should return article', () => {
    expect(service.getArticleFromFile('./test.md')).toEqual(article);
  });

  fs.unlinkSync('./test.md');

});
