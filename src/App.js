import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestrictedPage } from "./components/Page/RestrictedPage";

const HomeScreen = lazy(() => import("./components/HomeScreen"));
const Login = lazy(() => import("./components/Page/Login"));
const Register = lazy(() => import("./components/Page/Register"));
const Profil = lazy(() => import("./components/Page/Profil/index"));
const DaftarMitra = lazy(() => import("./components/Page/DaftarMitra"));

const Dashboard = lazy(() => import("./components/DashboardPage/index"));
const Aqiqah = lazy(() => import("./components/Page/Aqiqah/index"));
const Qurban = lazy(() => import("./components/Page/Qurban/index"));
const SusuKambing = lazy(() => import("./components/Page/Susu/index"));
const DagingKambing = lazy(() => import("./components/Page/Daging/index"));

const DashboardUser = lazy(() => import("./components/DashboardUser/index"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={false}>
              <HomeScreen />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={false}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={false}>
              <Register />
            </Suspense>
          }
        />

        <Route
          path="/peternak"
          element={
            <Suspense fallback={false}>
              <DashboardUser />
            </Suspense>
          }
        />

        <Route
          path="/profil"
          element={
            <Suspense fallback={false}>
              <Profil />
            </Suspense>
          }
        />

        <Route
          path="/mitra"
          element={
            <Suspense fallback={false}>
              <DaftarMitra />
            </Suspense>
          }
        />
        <Route element={<RestrictedPage />}>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={false}>
                <Dashboard />
              </Suspense>
            }
          />
        </Route>

        <Route
          path="/aqiqah"
          element={
            <Suspense fallback={false}>
              <Aqiqah />
            </Suspense>
          }
        />
        <Route
          path="/qurban"
          element={
            <Suspense fallback={false}>
              <Qurban />
            </Suspense>
          }
        />
        <Route
          path="/susu"
          element={
            <Suspense fallback={false}>
              <SusuKambing />
            </Suspense>
          }
        />
        <Route
          path="/daging"
          element={
            <Suspense fallback={false}>
              <DagingKambing />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
