interface Props {
    items: ProductDetail;
}

interface ProductDetail {
    id: number;
    name: string;
    image: string;
    hscode: string;
    varian: Array<string>;
    min_order: string;
    detail_image: any;
    detail: any;
}