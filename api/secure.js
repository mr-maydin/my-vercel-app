function checkAuth(req, res) {
    const auth = req.headers.authorization;
    const expected = 'Basic ' + Buffer.from('admin:1234').toString('base64');
    if (auth !== expected) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Korumalı Alan"');
        res.status(401).end('Yetkisiz');
        return false;
    }
    return true;
}

export default function handler(req, res) {
    if (!checkAuth(req, res)) return;

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