import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-runallday-2-masculino/26/HZM-3026-026/HZM-3026-026_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tênis de caminhada</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-runallday-2-masculino/26/HZM-3026-026/HZM-3026-026_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tênis de caminhada</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-runallday-2-masculino/26/HZM-3026-026/HZM-3026-026_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tênis de caminhada</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-runallday-2-masculino/26/HZM-3026-026/HZM-3026-026_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tênis de caminhada</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-runallday-2-masculino/26/HZM-3026-026/HZM-3026-026_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tênis de caminhada</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-runallday-2-masculino/26/HZM-3026-026/HZM-3026-026_zoom2.jpg?ims=326x"
          alt="tenis"
        />
        <strong>Tênis de caminhada</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
