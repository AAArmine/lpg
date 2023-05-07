import type { NextApiRequest, NextApiResponse } from 'next';

const crawlableRobotsTxt = `User-agent: *\nAllow: /`;
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { host } = req.headers;
  res
    .status(200)
    .send(
      host?.includes('gniw.de') ? crawlableRobotsTxt : uncrawlableRobotsTxt
    );
};

export default handler;
