import "./index.css";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div id="login_area">
      <div id="login_box">
        <h1>오포차 입장</h1>
        <form>
          <input id="idbox" type="text" />
          <br />
          <input id="passwordbox" type="password" />
          <br />
          <h4>회원가입/아이디 찾기/비밀번호 찾기</h4>
          <div id="login_action">
            <input id="submit" type="submit" value="로그인" />
            <Link to="/">
              <input id="cancel" type="button" value="취소" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
