import React from "react";
import "./index.css";
import axios from "axios";

function MainPage() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(function () {
    axios
      .get(
        "https://9d1c9e49-0c47-46aa-9d8d-6c6e73fb73f1.mock.pstmn.io/products"
      )
      .then(function (result) {
        console.log("통신 결과 : ", result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <div id="Header">
        <div id="header-area">
          <img src="images/icons/header_logo.png" />
          <h1>오포차</h1>
          <div id="login_menu">로그인/마이페이지</div>
        </div>
      </div>
      <div id="Body">
        <div id="banner">
          <h1>#오포차 #꽐라제작소 #주인이제일꽐라</h1>
          <h4>술을 마시는건 시간 낭비, 마시지 않는건 인생 낭비</h4>
        </div>

        <h1>메뉴</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div className="product-image-frame">
                  <img
                    className="product-image"
                    src={product.imageUrl}
                    alt={product.name}
                  />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      //   이 부분도 경로 받아올 수 있게 해야함
                      src="./images/icons/cooker.png"
                      alt="요리사"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="Footer"></div>
    </div>
  );
}

export default MainPage;
