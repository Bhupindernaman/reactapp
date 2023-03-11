import React from "react";
import { Breadcrumb, Col, Layout ,Row,theme} from 'antd';
import HeaderSection from './Header';
import Profile from "./Profile";
import ProductStock from "./ProductStock";
import Calculator from "./Calculator";


const { Header, Content } = Layout;

const Dashboard = () => { 
      const {
            token: { colorBgContainer },
          } = theme.useToken();
  return (
      <>
       <Layout
      style={{
        minHeight: '100vh',
      }}
    >
     <HeaderSection />
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                  <Col><Profile /></Col>
                  <Col><ProductStock /></Col>
                  <Col><Calculator /></Col>
            </Row>
            
           
          </div>
        
        </Content>
       
      </Layout>
    </Layout>
      </>

  );
};

export default Dashboard;