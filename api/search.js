export default async function handler(req, res) {
  const query = req.query.query;
  if (!query) {
    return res.status(400).json({ error: "검색어가 없습니다." });
  }

  const result = await fetch(
    `https://naveropenapi.apigw.ntruss.com/map-place/v1/search?query=${encodeURIComponent(query)}`,
    {
      headers: {
        'X-NCP-APIGW-API-KEY-ID': process.env.NAVER_CLIENT_ID,
        'X-NCP-APIGW-API-KEY': process.env.NAVER_SECRET_KEY
      }
    }
  );

  const data = await result.json();
  res.status(200).json(data);
}
