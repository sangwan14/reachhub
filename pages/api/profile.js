export default async function handler(req, res) {
    const {symbol} = req.body;

    const response =  await fetch(`https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.API_KEY}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

    const data = await response.json();

    res.status(200).send(data);
}