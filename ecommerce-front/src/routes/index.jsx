import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/main_layout/MainLayout";
import { Home } from "../pages/Home";

export const Index = () => {

    return (

        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
        </Routes>

    );

};