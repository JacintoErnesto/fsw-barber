-- AlterTable
ALTER TABLE "BarbershopService" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Bookig" ALTER COLUMN "updated" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "updated" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "updatedAt" DROP NOT NULL;
