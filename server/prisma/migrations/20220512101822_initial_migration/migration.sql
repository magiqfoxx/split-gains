-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "amount" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Shareholder" ADD COLUMN     "transferId" INTEGER,
ALTER COLUMN "balance" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "Transfer" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "shareholderId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transfer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_movieId_key" ON "Transfer"("movieId");

-- CreateIndex
CREATE UNIQUE INDEX "Transfer_shareholderId_key" ON "Transfer"("shareholderId");

-- AddForeignKey
ALTER TABLE "Shareholder" ADD CONSTRAINT "Shareholder_transferId_fkey" FOREIGN KEY ("transferId") REFERENCES "Transfer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
