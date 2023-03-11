import { useContext,useState } from "react";
import AuthContext from "../AuthContext";
import {auth} from "../config.js";
import { signOut } from "firebase/auth";
import { useNavigate,Link } from "react-router-dom";
import {Layout, Menu} from "antd";
import { PieChartOutlined, CloudOutlined, CalculatorOutlined, UnorderedListOutlined, LogoutOutlined,ShoppingOutlined } from '@ant-design/icons';
const {Sider} = Layout;
export default function HeaderSection() {
      const [collapsed, setCollapsed] = useState(true);
      const [isLoggedIn, user] = useContext(AuthContext);
      const navigate = useNavigate()
      if(!isLoggedIn) {
          window.location.href= '/login'; 
      }
      const handleLogout = () => {   
            signOut(auth).then(()=>{
                   navigate('/login'); 
                  }).catch((error)=>{
                        console.log(error)
                  });
                
      } 

      function getItem(label, key, icon, children,link) {
            return {
              key,
              icon,
              children,
              label,
              link
            };
          }
      const items = [
            getItem((<Link style={{textDecoration:'none'}} to='/dashboard'>Dashboard</Link>), '1', <PieChartOutlined />,'',),
            getItem((<Link style={{textDecoration:'none'}} to='/weather'>Weather</Link>), '2', <CloudOutlined />),
            getItem((<Link style={{textDecoration:'none'}} to='/calculator'>Calculator</Link>), '3', <CalculatorOutlined />),
            getItem((<Link style={{textDecoration:'none'}} to='/news-feed'>News Feed</Link>), '4', <UnorderedListOutlined />),
            getItem((<Link style={{textDecoration:'none'}} to='/food-feed'>Food Feed</Link>), '5', <ShoppingOutlined />),
            getItem((<Link style={{textDecoration:'none'}} onClick={handleLogout}>Logout</Link>), '6', <LogoutOutlined />),
          
          ];    

       
        return (
            <>
            <Sider  breakpoint="lg" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div
              style={{
                  alignContent:'center',
                  textAlign:'center',
                  color:'white',
                height: 32,
                margin: 16,
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            >{isLoggedIn && user.email.match(/^([^@]*)@/)[1]}</div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"  items={items}/>
          </Sider>
            </>

        );
}