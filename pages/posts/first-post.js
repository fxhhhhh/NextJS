import Head from "next/head";
import Link from "next/link";
import Script from 'next/script';
import LayOut from "../../component/layout";

export default function FirstPost() {
    return (
        <LayOut FirstPost>
            <Head>
                <title>FirstPost</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            <h1>TESTTESTTEST</h1>
            <img></img>
        </LayOut>
    );

}