import React, { useContext } from "react";
import { Card } from 'antd';

import AuthContext from "../AuthContext";

const Profile = () => {
      const { Meta } = Card;
      const [isLoggedIn,user] = useContext(AuthContext);
      return (
            <Card
            hoverable
            style={{
              maxWidth: 300,
            }}
            
          >
            <Meta title={isLoggedIn && user.email.match(/^([^@]*)@/)[1]} />
            <p style={{wordWrap:'break-word'}}>
            Your UID - {isLoggedIn && user.uid} <br /><br />
            Your Email - {isLoggedIn && user.email}
            </p>
          </Card>
      );
}

export default Profile;