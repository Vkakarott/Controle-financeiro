-- AlterTable
ALTER TABLE "User" ADD COLUMN "fixedIncome" TEXT;
ALTER TABLE "User" ADD COLUMN "profession" TEXT;

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "value" REAL NOT NULL,
    "label" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
