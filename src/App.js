import React, {useContext} from 'react';
import ProdContext  from './context/products.context'
import Header from './components/Header.jsx';
import Main from './components/Main';
import Sidebar from './components/Sidebar.jsx';
import { Switch, Route } from 'react-router-dom';
import { product_context } from './context/products.context';
import './App.css';

function App() {
  const pcd = useContext(product_context);

  return (
    <ProdContext>
      <div className="container-fluid text-center">
        <Header />
        <div className="row d-flex justify-content-between">
          <Sidebar className="col-md-3 col-sm-12 border mt-3 pl-3 pt-2 " />
          <Main className="col-md-9 col-sm-12  mt-3 d-flex flex-row flex-wrap" />
        </div>

      </div>
    </ProdContext>
  );
}

export default App;
