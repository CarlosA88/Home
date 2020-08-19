import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth";
import { Redirect } from "react-router-dom";
import { firestore } from "../../Firebase";

const Experience = () => {
  const [state, setState] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore.collection("employees").get();
      const posts = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setState({ posts });
    };
    fetchData();
  }, []);
  // var db = firestore; //db Instance
  // var createUsers = db.collection("tester"); //Create a collection
  //create a document in the collection with properties
  // createUsers.doc("carlos").set({
  //   name: "Carlos ",
  // });
  // var getUsers = createUsers.get().then((querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, doc.name);
  //   });
  // });
  // console.log(getUsers);
  /*if the array brackes are empty means runs once when the app loads and don't runnit again, 
  if we filled means that runs when the data has change*/

  // const LoadData = (data) => {
  //   data.forEach((doc) => {
  //     var document = doc.data();
  //     return (
  //       <>
  //         <ul>
  //           {document.forEach((item) => (
  //             <li key={item.id}>{item.lName}</li>
  //           ))}
  //         </ul>
  //       </>
  //     );
  //   });
  // };
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/signin" />;
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Experience component</h1>
      {/* {state.fName}
      {state.email} */}
      {/* <ul>
        {state.map((item) => (
          <li key={item.id}>{item.lName}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Experience;
