import React from 'react';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import RemoteComponent from '@composiv/liveui-react';

const Home = props => (
  <RemoteComponent name="home" {...props} />
);
const Cart = props => (
  <RemoteComponent name="cart" {...props} />
);
const Payment = props => (
  <RemoteComponent name="payment" {...props} />
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Payment} />
          <Route component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
