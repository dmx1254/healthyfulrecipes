export type NavUrls<T> = {
  id: string;
  title: string;
  linkUrl: string;
  subcategory: T[];
};

export type SubCatUrl = { name: string; subCatUrl: string; subCatId: string };

export type Params = {
  [key: string]: string | string[] | undefined;
};
