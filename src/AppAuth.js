import { app } from "./utils/firebase";

const AppAuth = () => {
  const { GoogleAuthProvider, signInWithPopup, auth } = app;
  const provider = new GoogleAuthProvider();
  function onAuth() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <button type="button" onClick={onAuth}>
        AddGoogle
      </button>
    </div>
  );
};

export default AppAuth;
