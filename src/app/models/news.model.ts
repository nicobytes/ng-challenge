export interface SearchResponse {
  entity: {
    jsonObjectView: {
      contentlets: News[];
    }
  }
}

export interface GetResponse {
  contentlets: News[];
}

export interface News {
  title: string;
  teaser: string;
  identifier: string;
  image: string;
  blogContent: {
    type: 'doc';
    content: ContentTypes[];
  }
}

export type ContentTypes = DotImage | Heading | Paragraph;

export type TextAlingTypes = 'center' | 'left';

export interface DotImage {
  type: 'dotImage';
  attrs: {
    textAling: TextAlingTypes;
    src: string;
  };
}

export interface Heading {
  type: 'heading';
  attrs: {
    textAlign: TextAlingTypes;
    level: 1 | 2 | 3
  }
  content: Text[];
}

export interface Paragraph {
  type: 'paragraph';
  attrs: {
    textAlign: TextAlingTypes;
  }
  content: Text[];
}

export interface Text {
  type: 'text';
  text: string;
}
