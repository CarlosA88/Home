import React, { useContext } from 'react';
import { AuthContext } from '../../Auth';
import { Redirect } from 'react-router-dom';

const Skill = () => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
      return <Redirect to="/signin" />;
    }
    return (
        <div style={{ textAlign: "center" }}>
        <h1>Skills component</h1>
      </div>
    );
};

export default Skill;