export interface Product {
  id: number;
  title: string;
  images: Array<ImageObject>;
  productVariants: Array<ProductVariantObject>;
}

export interface ProductVariantObject {
  price: number;
}

export interface ImageObject {
  url: string;
}
