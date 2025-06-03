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
            <h1>Welcome to the Server</h1>
            <p>This is a simple HTML page.</p>
            <p>API endpoint: <a href="/api">/api</a></p>
            <p>Check the console for server logs.</p>
            <script>
                console.log('This is a simple HTML page served by the server.');
            </script>
            <p>Server is running on port 3000.</p>
            <p>Visit the API endpoint at <a href="/api">/api</a>.</p>
            <p>Enjoy your stay!</p>
            <p>For more information, visit the <a href="https://example.com">documentation</a>.</p>
        </body>
        </html>
    `);
}