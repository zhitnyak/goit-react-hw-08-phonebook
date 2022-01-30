import { Switch } from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import "./App.css";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import operations from "./redux/auth/authOperations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getIsFetchingCurrent } from "./redux/auth/authSelectors";

const LoginView = lazy(() => import("./view/LoginView/LoginView"));
const RegisterView = lazy(() => import("./view/RegisterView/RegisterView"));
const HomeView = lazy(() => import("./view/HomeView/HomeView"));
const ContactsView = lazy(() => import("./view/ContactsView/ContactsView"));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <div
              style={{
                textAlign: "center",
                marginTop: "15px",
                display: "flex",
                width: "100vw",
                height: "100vh",
                justifyContent: "center",
              }}
            >
              <Oval
                type="Oval"
                color="#DCB60E"
                height={60}
                width={60}
                style={{ textAlign: "center", marginTop: "15px" }}
              />
            </div>
            // <Audio
            //   style={{ textAlign: "center", marginTop: "15px" }}
            //   type="Audio"
            //   color="#DCB60E"
            //   height={100}
            //   width={100}
            //   timeout={3000}
            // />
          }
        >
          <Switch>
            <PublicRoute exact path="/" restricted>
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}
export default App;
