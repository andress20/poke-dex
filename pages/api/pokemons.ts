import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

const allPokemonData = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default allPokemonData;
