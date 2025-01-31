import { UserProvider } from "./context/user";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import SiteLayout from "./layouts/site";
import { useUser } from "./hooks/useUser";
import React, { Suspense, useEffect } from "react";
import DashboardLayout from "./layouts/dashboard";
import DashobardHeader from "./components/Dashboard/Header";
import PageLoadingIndicator from "./components/PageLoadingIndicator";

const HomePage = React.lazy(() => import("./pages/home"));
const LoginPage = React.lazy(() => import("./pages/login"));
const TransactionsPage = React.lazy(
  () => import("./pages/dashboard/transactions")
);
const NotFoundPage = React.lazy(() => import("./pages/not-found"));

const App = () => {
  return (
    <UserProvider>
      <Suspense fallback={<PageLoadingIndicator />}>
        <Routes>
          <Route path="/" element={<SiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<h1>About</h1>} />
          </Route>

          <Route
            path="/login"
            element={
              <AuthWrapper>
                <LoginPage />
              </AuthWrapper>
            }
          />

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <DashboardLayout />
              </RequireAuth>
            }>
            <Route
              index
              element={
                <DashobardHeader
                  heading="Dashboard"
                  description="Your private Dashboard"
                />
              }
            />
            <Route path="transactions" element={<TransactionsPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </UserProvider>
  );
};

export default App;

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let context = useUser();
  let location = useLocation();

  if (!context?.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const AuthWrapper = ({ children }: { children: JSX.Element }) => {
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  if (user) {
    return <Navigate to={from} state={{ from: location }} replace />;
  }

  return children;
};
