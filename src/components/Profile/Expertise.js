import React, { useContext } from 'react';
import { AuthContext } from '../../Auth';
import { Redirect } from 'react-router-dom';

const Expertise = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
      return <Redirect to="/signin" />;
    }
    return (
        <div style={{ textAlign: "center" }}>
      <h1>Expertise component</h1>
    </div>
    );
};

export default Expertise;