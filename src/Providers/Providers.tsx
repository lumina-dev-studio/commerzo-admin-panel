"use client";

import {Provider} from "react-redux";
import {store} from "@/Redux/store";
import {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import React from "react";

const Providers = ({children}: { children: React.ReactNode }) => {
    return <Provider store={store}>
        <SkeletonTheme baseColor="#cbd5e1" highlightColor="#444">
            {children}
        </SkeletonTheme>
    </Provider>;
};

export default Providers;
