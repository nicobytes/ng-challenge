export interface SearchResponse {
  entity: {
    jsonObjectView: {
      contentlets: News[];
    };
  };
}

export interface GetResponse {
  contentlets: News[];
}

export interface News {
  title: string;
  teaser: string;
  identifier: string;
  image: string;
  urlTitle: string;
  publishDate: string;
  blogContent: {
    type: 'doc';
    content: ContentTypes[];
  };
}

export type ContentTypes =
  | DotImage
  | Heading
  | Paragraph
  | DotContent
  | BulletList;

export type TextAlingTypes = 'center' | 'left';

export interface BulletList {
  type: 'bulletList';
  content: Array<{
    type: 'listItem';
    content: Paragraph[];
  }>;
}

export interface DotImage {
  type: 'dotImage';
  attrs: {
    textAling: TextAlingTypes;
    src: string;
    title: string;
    data: {
      asset: string;
      titleImage: string;
    };
  };
}

export interface DotContent {
  type: 'dotContent';
  attrs: {
    data: {
      imageVersion: string;
      title: string;
    };
  };
}

export interface Heading {
  type: 'heading';
  attrs: {
    textAlign: TextAlingTypes;
    level: 1 | 2 | 3;
  };
  content: Text[];
}

export interface Paragraph {
  type: 'paragraph';
  attrs: {
    textAlign: TextAlingTypes;
  };
  content: Text[];
}

export interface Text {
  type: 'text';
  text: string;
  marks: Array<{
    type: 'underline' | 'bold';
  }>;
  classes?: string[];
}
