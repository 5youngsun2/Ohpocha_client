import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  console.log("최초 정보", products);
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

  if (products.length === 0) {
    return <h3>상품 정보를 수신하고 있습니다.</h3>;
  }

  return (
    <div>
      <h1>메뉴</h1>
      <div id="product-list">
        {products.map(function (product, index) {
          return (
            <div className="product-card">
              <Link className="product-link" to={`/product/${product.id}`}>
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
