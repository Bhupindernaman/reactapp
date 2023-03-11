import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {auth} from "../config.js";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Button, Checkbox, Form, Input, Alert, Typography } from 'antd';
const { Title} = Typography;
const SignIn = () => {
const navigate = useNavigate();
const [isLoading, setIsLoading] = useState(false); 
const [errorMessage,setErrorMessage] = useState(''); 
const [form,setForm] = useState({email:'',password:''});

const handleInput = (e) => {
setForm({...form, [e.target.id]: e.target.value});

}
const handleSubmit = (e) => { 

e.preventDefault();
if(isLoading) return;
setIsLoading(true);

signInWithEmailAndPassword(auth, form.email, form.password).then((userCredential) => {

setIsLoading(false);

navigate('/dashboard');

})
.catch((error) => {
setErrorMessage(error.message);
setIsLoading(false);
});
};

return (
<>
<div style={{padding:'2rem'}}>

      <Form
            labelCol={{
                  span: 8,
            }}
            wrapperCol={{
                  span: 16,
            }}
            style={{
                  maxWidth: 600,
            }}
            initialValues={{
                  remember: true,
            }}
            
            autoComplete="off"
            >
<Title>Login Account</Title>
{errorMessage !== '' && <Alert message={errorMessage} style={{marginBottom:'25px'}} type="error" />}
<Form.Item
      label="Email"
      name="email"
      onChange={handleInput}
      rules={[
      {
      required: true,
      message: 'Please input your username!',
      },
      ]}
>
      <Input />
</Form.Item>

<Form.Item
      label="Password"
      name="password"
      onChange={handleInput}
      rules={[
      {
      required: true,
      message: 'Please input your password!',
      },
      ]}
>
      <Input.Password />
</Form.Item>

<Form.Item
      name="remember"
      value
      valuePropName="checked"
      wrapperCol={{
      offset: 8,
      span: 16,
      }}
>
      <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item
      wrapperCol={{
      offset: 8,
      span: 16,
      }}
>
      <Button type="primary" disabled={isLoading} htmlType="submit" onClick={handleSubmit}> 
      {isLoading ? 'Please wait...' : 'Sign In' }
      </Button>
</Form.Item>
</Form>
</div>
</>
);
};

export default SignIn;