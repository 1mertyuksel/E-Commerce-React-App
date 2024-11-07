import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateCart, setDrawer } from './redux/slices/cartSlice';
import { useEffect } from 'react';
import './App.css';



function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateCart());
  }, []);

  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />



        <Drawer className="drawer" sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor="right" open={drawer}>
          {products && products.map((product) => {
            return (
              <div>
              <div className="fl-row" style={{ padding: '30px'}}>
                <img style={{ marginRight: '50px' }} src={product.image} alt={product.title} width={50} height={50} />
                <p style={{ width: '320px', marginRight: '5px' }}>{product.title} ({product.count})</p>
                <p style={{ fontWeight: 'bold', marginRight: '5px', width:'60px' }}>{product.price}$</p>
                <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(185,76,76', border: 'none', color: '#fff', width: '50px' }}>Sil</button>
              </div>
              </div>
            );
          })}

          <div style={{ padding: '20px', fontWeight: 'bold' }}>
            <p>Toplam Tutar: {totalAmount}$</p>
          </div>
          
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
