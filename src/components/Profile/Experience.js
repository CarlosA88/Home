import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Auth';
import { Redirect } from 'react-router-dom';
import { firestore } from '../../Firebase';

const Experience = () => {
  useEffect(() => {
    var users = 
    firestore.collection("Users");

    users.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
      });
    });
  }, []);
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
      return <Redirect to="/signin" />;
    }
    return (
        <div style={{ textAlign: "center" }}>
        <h1>Experience component</h1>
      </div>
    );
};

export default Experience;