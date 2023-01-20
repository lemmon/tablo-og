export default function (req, res) {
  res.json({
    hello: 'World',
    version: process.version,
    environment: process.env.NODE_ENV,
  })
}
