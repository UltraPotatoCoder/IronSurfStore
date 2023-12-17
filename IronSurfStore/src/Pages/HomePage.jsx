function HomePage() {
  return (
    <div>
      <div className='banner'>
        <img src='/src/assets/img/banner.jpg' alt='Banner' />
        <div className='banner-text'>ACCEPT NOTHING LESS</div>
      </div>

      <div className='new-products'>
        <h1>NEW PRODUCTS</h1>

        <div className='image-gallery'>
          <div className='image-container'>
            <img src='/src/assets/img/IMG_6900.jpeg' alt='' />
            <p>Descrição do Produto 1</p>
          </div>
          <div className='image-container'>
            <img src='/src/assets/img/IMG_6901.jpeg' alt='' />
            <p>Descrição do Produto 2</p>
          </div>
          <div className='image-container'>
            <img src='/src/assets/img/IMG_6902.jpeg' alt='' />
            <p>Descrição do Produto 3</p>
          </div>
          <div className='image-container'>
            <img src='/src/assets/img/IMG_6913.jpeg' alt='' />
            <p>Descrição do Produto 3</p>
          </div>
          <hr />
          <div className='best-sellers'>
            <h1>BEST SELLERS</h1>

            <div className='image-gallery'>
              <div className='image-container'>
                <img src='/src/assets/img/IMG_6900.jpeg' alt='' />
                <p>Descrição Best Seller 1</p>
              </div>
              <div className='image-container'>
                <img src='/src/assets/img/IMG_6901.jpeg' alt='' />
                <p>Descrição Best Seller 2</p>
              </div>
              <div className='image-container'>
                <img src='/src/assets/img/IMG_6902.jpeg' alt='' />
                <p>Descrição Best Seller 2</p>
              </div>
              <div className='image-container'>
                <img src='/src/assets/img/IMG_6913.jpeg' alt='' />
                <p>Descrição Best Seller 2</p>
              </div>
              <hr />
              <div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
