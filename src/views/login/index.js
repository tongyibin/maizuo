// 登录注册页面
import React, { Component } from 'react'
import { LoginHeaderWarp,AppWarp,WebLoginWarp,WebImgWarp,LogoWarp,LoginFromWarp } from '../../styles/loginStyle'
import { Link } from 'react-router-dom'
import { Form, Input, Button,notification ,AutoComplete } from 'antd';
import {connect} from 'react-redux';
import * as Types from './store/actionCreate'
import '@/styles/loginStyle.css'

const openNotification = () => {
  notification.open({
    message: '您收到新的短信',
    description:
      '验证码为 111 111 ,请妥善保管好',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};
class login extends Component {
  //短信倒计时器
  verifiedSubmit = (e) => {
    　　this.setState({ loading: true });
    　　e.preventDefault();　
    　　this.props.form.validateFields((err, values) => {
    　　　　if (!this.state.yztime == 0) {
    　　　　　　this.count();
    　　　　}
    　　});
    }

  handleSubmit = (e) =>{
    e.preventDefault(); //阻止刷新 url /?#/
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleSignIn(values);
      }
    });

  }
  state = {
    　　loading: false,
    　　yztime: 59,
    };
  render() {
      const { getFieldDecorator } = this.props.form;
    return (
      <LoginHeaderWarp >
        <AppWarp>
          <div >
            <WebLoginWarp>
              <LogoWarp>
                <Link to="/">
                 <WebImgWarp src='https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png' />
                 </Link>
              </LogoWarp>
              <LoginFromWarp>
                <AppWarp>
                  <Form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <Form.Item >
                      {
                        getFieldDecorator('tel',{
                          rules:[
                            {required:true,message: '请输入手机号码'},
                            {len:11 ,message:'手机号格式有误' },

                          ],
                        })(<AutoComplete style={{width:'250px',marginRight:'5px'}}>
                          <Input  placeholder="手机号" className="input-control"  />
                          </AutoComplete>
                        )
                      }
                      <Form.Item style={{width: '40px', display: 'inline-block'}}>
                      <Button loading={this.state.loading} onClick={this.verifiedSubmit}>
                      {this.state.loading ? this.state.yztime + '秒' : '发送验证'}
                      </Button>
                      </Form.Item>
                    </Form.Item>
                    </div>
                    <div className="form-group">
                    <Form.Item>
                      {
                        getFieldDecorator('text',{
                          rules:[
                            {required:true,message: '请输入验证码'},
                            {min: 6 ,max: 6, message: '验证码为6位数' }
                          ],
                        })(<AutoComplete>
                          <Input placeholder="验证码" className="input-control" />
                          </AutoComplete>
                        )
                      }
                    </Form.Item>
                    </div>
                    <div className="login-btn">
                    <Form.Item>
                    <Button htmlType="submit" style={{border:'none'}} ghost type="link">
                        登录
                    </Button>
                    </Form.Item>
                    </div>
                  </Form>
                </AppWarp>
              </LoginFromWarp>
            </WebLoginWarp>
          </div>
        </AppWarp>
      </LoginHeaderWarp>
    )
  }
count = () => {
　　let { yztime } = this.state;
　　let siv = setInterval(() => {
　　　　this.setState({ yztime: (yztime--) }, () => {
　　　　　　if (yztime <= -1) {
　　　　　　　　clearInterval(siv);　　//倒计时( setInterval() 函数会每秒执行一次函数用 clearInterval() 来停止执行:
　　　　　　　　this.setState({ loading: false, yztime: 59 });
　　　　　　}
          if(yztime === 56){
            openNotification()
          }
          　　　　});
          　　}, 1000);
          }
}
const LoginUi = Form.create({})(login);

export default connect(null,
  (dispatch,props)=>({
    handleSignIn (values) {
      dispatch(Types.asyncSignIn(values,props))

    }
  })
)(LoginUi)
