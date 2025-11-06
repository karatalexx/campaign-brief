-- CreateEnum
CREATE TYPE "GenerationStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED');

-- CreateTable
CREATE TABLE "headlines" (
    "id" SERIAL NOT NULL,
    "campaign_id" INTEGER NOT NULL,
    "text" TEXT,
    "status" "GenerationStatus" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "headlines_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "headlines" ADD CONSTRAINT "headlines_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("id") ON DELETE CASCADE ON UPDATE CASCADE;
