import Product from '../product';
import products from '../../mocks/products';
import { Container } from './styles';

const Latest: React.FC = () => {
  return (
    <Container>
      {products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Latest;
