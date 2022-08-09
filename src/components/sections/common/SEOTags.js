import React from 'react'
import { Helmet } from "react-helmet";

export default function SEOTags(props) {
    return (
        <div>
            <Helmet>
                <title>
                    {
                        props.meta?.meta_title || "Resorts Demo"
                    }
                </title>
                <meta name="description" content={props.meta?.meta_description} />

            </Helmet>
        </div>
    )
}
