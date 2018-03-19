import Document, { Head, Main, NextScript } from 'next/document'

import globalStyleSheet from '../styles/global.scss'

export default class MyDocument extends Document {
    
    render () {
        
        return (
            <html>
                <Head>
                    <title>Untitled</title>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <meta charSet='utf-8' />
                    <style dangerouslySetInnerHTML={{__html: globalStyleSheet}} />
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link href="/static/style/semantic/dist/semantic.min.css" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        )
    }
}