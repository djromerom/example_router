import { useParams } from 'react-router-dom';
          
function ProductDetail() {
  const { name } = useParams();
  return <p>Detalle del producto: {name}</p>;
}

export default ProductDetail;