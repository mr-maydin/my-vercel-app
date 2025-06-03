export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome</title>
        </head>
        <body>
            <h2>Welcome to my Page</h2>
            <h1>MURAT AYDIN</h1>
        </body>
        </html>
    `);
}