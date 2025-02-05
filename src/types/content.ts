export interface ContentItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'TV Shows' | 'Movies' | 'Originals';
  rating?: string;
  year?: number;
}

export interface ContentCategory {
  name: 'TV Shows' | 'Movies' | 'Originals';
  items: ContentItem[];
}
