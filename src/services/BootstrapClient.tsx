'use client'

import { useEffect } from "react";

function BootstrapClient() {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    // You need to return JSX content, even if it's an empty fragment
    return null; // or <></> for a fragment
}

export default BootstrapClient;