import { Metadata, MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/accessories/params", "/devices/params", "/pieces/params", "/accounting", "/users", "/orders", "/schedules", "/checkout/nodeposit"]
            }
        ],
         
    }
}