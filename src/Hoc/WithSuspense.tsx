import React, {ComponentType} from "react";
import Preloader from "../components/common/Preloader/Preloader";

export function withSuspense<WCP>(WrappedComponent: ComponentType<WCP>) {

    return (props: WCP) => {
        return <React.Suspense fallback={<div><Preloader/></div>}>
            <WrappedComponent {...props}/>
            </React.Suspense>
    }
    }

