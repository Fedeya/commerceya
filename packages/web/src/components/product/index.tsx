import Link from 'next/link';
import { IProduct } from '../../mocks/products';
import { Container, Image, TitleLink, Tag, Price, Discount } from './styles';

type ProductProps = {
  product: IProduct;
};

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Container>
      <Image src={`/assets/img/${product.images[0]}`} alt={product.title} />
      <Tag>New</Tag>
      <Link href="/products/[id]" as={`/products/${product.title}`}>
        <TitleLink>{product.title}</TitleLink>
      </Link>
      <div>
        <Price>
          ${product.price - (product.price * product.discount) / 100}
        </Price>
        <Discount>${product.price}</Discount>
      </div>
    </Container>
  );
};

export default Product;
