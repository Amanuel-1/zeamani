import Loglib from "@loglib/tracker/react";
export default function App({ Component, pageProps }: any) {
     return (
        <>
            <Component {...pageProps} />
            <Loglib
                config={{
                    id: "amanapps",
                }}
            />
        </>
    );
}
