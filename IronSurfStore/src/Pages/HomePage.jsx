function HomePage() {
  return (
    <div>
      <div className='banner'>
        <img src='/src/assets/img/banner-2.jpg' alt='Banner' />
        <div className='banner-text'>ACCEPT NOTHING LESS</div>

        <div className='social-links'>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
        </div>
      </div>

      <div className='new-products'>
        <h1>NEW PRODUCTS</h1>
        <div className='image-gallery'>
          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6900.jpeg'
                alt='Descrição do Produto 1'
              />
              <p>Descrição do Produto 1</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>

          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6901.jpeg'
                alt='Descrição do Produto 2'
              />
              <p>Descrição do Produto 2</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>

          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6902.jpeg'
                alt='Descrição do Produto 3'
              />
              <p>Descrição do Produto 3</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>

          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6913.jpeg'
                alt='Descrição do Produto 4'
              />
              <p>Descrição do Produto 4</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <hr className='hr-div' />

      <div className='best-sellers'>
        <h1>BEST SELLERS</h1>
        <div className='image-gallery'>
          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6900.jpeg'
                alt='Descrição Best Seller 1'
              />
              <p>Descrição Best Seller 1</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>

          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6901.jpeg'
                alt='Descrição Best Seller 2'
              />
              <p>Descrição Best Seller 2</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>

          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6902.jpeg'
                alt='Descrição Best Seller 3'
              />
              <p>Descrição Best Seller 3</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>

          <div className='product-item'>
            <div className='image-container'>
              <img
                src='/src/assets/img/IMG_6913.jpeg'
                alt='Descrição Best Seller 4'
              />
              <p>Descrição Best Seller 4</p>
            </div>
            <div className='product-price'>50.00€</div>
            <button type='button' className='product-button'>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <hr className='hr-div' />

      <footer className='footer'>
        <p>© 2023 Iron Surf Store - Todos os direitos reservados</p>
        <p>
          <a href='/contato'>Contato</a>
        </p>
        <p>
          <a href='/sobre'>Sobre Nós</a>
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
