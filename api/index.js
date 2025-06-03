export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome</title>
        </head>
        <body>
            <h1>Hoşgeldiniz!</h1>
            <p>Bu, basit bir HTML sayfasıdır.</p>
        </body>
        </html>
    `);
}