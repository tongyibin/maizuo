// 登录注册页面
import React, { Component } from 'react'
import { LoginHeaderWarp,AppWarp,WebLoginWarp,WebImgWarp,LogoWarp,LoginFromWarp } from '../../styles/loginStyle'
import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd';
import {connect} from 'react-redux';
import * as Types from './store/actionCreate'
import '@/styles/loginStyle.css'

class login extends Component {
  handleSubmit = (e) =>{
    e.preventDefault(); //阻止刷新 url /?#/
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.handleSignIn(values);
      }
    });

  }

  render() {
      const { getFieldDecorator } = this.props.form;
    return (
      <LoginHeaderWarp style={{'overflow-y': 'hidden'}}>
        <AppWarp>
          <div>
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
                            {pattern: /[0-9]{11}/ ,message:'手机号格式有误' }
                          ],
                        })(
                          <Input  placeholder="手机号" className="input-control" autocomplete="off"/>
                        )
                      }
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
                        })(
                          <Input placeholder="验证码" className="input-control" autocomplete="off"/>
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
}
const LoginUi = Form.create({})(login);

export default connect(null,
  (dispatch,props)=>({
    handleSignIn (values) {
      dispatch(Types.asyncSignIn(values,props))

    }
  })
)(LoginUi)
