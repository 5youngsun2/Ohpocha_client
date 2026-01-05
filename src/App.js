import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";

function App() {
  return (
    <div>
      <div id="Header">
        <div id="header-area">
          <Link to="/">
            <img id="header_logo" src="/images/icons/header_logo.png" />
          </Link>
          <h1>오포차</h1>
          <div id="login_menu">로그인/마이페이지</div>
        </div>
      </div>
      <div id="Body">
        <div id="banner">
          <h1>#오포차 #꽐라제작소 #주인이제일꽐라</h1>
          <h4>술을 마시는건 시간 낭비, 마시지 않는건 인생 낭비</h4>
        </div>
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPageComponent />;
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPage />
          </Route>
          <Route exact={true} path={"/product/:id"}>
            <ProductPage />
          </Route>
        </Switch>
      </div>
      <div id="Footer"></div>
    </div>
  );
}

export default App;
