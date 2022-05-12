import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getMovies().map((movie) => {
      return db.movie.create({
        data: movie,
      });
    })
  );
  await Promise.all(
    getShareholders().map((shareholder) => {
      return db.shareholder.create({
        data: shareholder,
      });
    })
  );
}

function getMovies() {
  return [
    {
      title: "Franklin",
      amount: 0,
    },
    {
      title: "Franklin 2",
      amount: 0,
    },
    {
      title: "Franklin 3",
      amount: 0,
    },
    {
      title: "Franklin 4",
      amount: 0,
    },
  ];
}
function getShareholders() {
  return [
    {
      firstName: "Frank",
      lastName: "Snail",
      address: "2136 Mulberry Lane, West Palm Beach, FL",
      IBAN: "DE56500105179165785364",
      movie: {
        create: { title: "Franklin Returns", amount: 100 },
      },
      balance: 50,
    },
    {
      firstName: "Jane",
      lastName: "Goodall",
      address: "1741 Frum Street, Nashville, TN",
      IBAN: "DE77500105177617323643",
      movie: {
        create: { title: "Franklin Returns 2", amount: 150 },
      },
      balance: 500,
    },
  ];
}

seed();
