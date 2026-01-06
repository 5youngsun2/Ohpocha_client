import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload/index.js";
import ProductPage from "./product/index.js";
import LoginPage from "./login/index.js";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  const history = useHistory();

  return (
    <div>
      <div id="Header">
        <div id="header-area">
          <Link to="/">
            <img
              id="header_logo"
              src="/images/icons/header_logo.png"
              alt="메인화면 로고"
            />
          </Link>
          <h1>오포차</h1>
          <div id="login_menu">
            <Link id="login_link" to="/login">
              로그인/마이페이지
            </Link>
            <Button
              size="large"
              onClick={function () {
                history.push("/upload");
              }}
              icon={<DownloadOutlined />}
            >
              상품 업로드
            </Button>
          </div>
        </div>
      </div>
      <div id="Body">
        <div id="banner">
          <h1>#오포차 #꽐라제작소 #주인이제일꽐라</h1>
          {/* 술 관련 명언은 로테이션으로 돌게 하기 */}
          <h4>술을 마시는건 시간 낭비, 마시지 않는건 인생 낭비</h4>
        </div>
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPageComponent />
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPage />
          </Route>
          <Route exact={true} path={"/product/:id"}>
            <ProductPage />
          </Route>
          <Route exact={true} path={"/login"}>
            <LoginPage />
          </Route>
        </Switch>
      </div>
      <div id="Footer"></div>
    </div>
  );
}

export default App;
