/*
  Warnings:

  - You are about to drop the column `updated` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "updated",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
