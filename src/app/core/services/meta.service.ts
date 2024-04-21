import { Injectable, inject } from '@angular/core';
import { Meta, MetaDefinition, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

export interface PageMetadata {
  title: string;
  image: string;
  description: string;
}

const defaultMetadata: PageMetadata = {
  title: 'dotCMS Newa',
  image: '',
  description: 'News Website',
};

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  titleService = inject(Title);
  metaTagService = inject(Meta);
  router = inject(Router);

  public updateMetadata(metadata: Partial<PageMetadata>): void {
    const pageMetadata: PageMetadata = { ...defaultMetadata, ...metadata };
    const metatags: MetaDefinition[] =
      this.generateMetaDefinitions(pageMetadata);

    const tags = [
      ...metatags,
      { property: 'og:url', content: `${environment.HOST}${this.router.url}` },
    ];

    tags.forEach(tag => {
      this.metaTagService.updateTag(tag);
    });

    this.titleService.setTitle(pageMetadata.title);
  }

  private generateMetaDefinitions(metadata: PageMetadata): MetaDefinition[] {
    return [
      { name: 'title', content: metadata.title },
      { property: 'og:title', content: metadata.title },

      { name: 'description', content: metadata.description },
      { property: 'og:description', content: metadata.description },

      {
        property: 'og:image',
        content: `${environment.CDN_IMAGES}${metadata.image}/100w`,
      },
    ];
  }
}
