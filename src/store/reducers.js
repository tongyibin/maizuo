// 引入拆分出去的仓库
import movieRedux from "../views/movie/store/reducer"
import LoginRouter from '../views/login/store/reducers';

export const movie = movieRedux

export const Login = LoginRouter;
