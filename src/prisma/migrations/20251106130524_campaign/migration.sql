-- CreateEnum
CREATE TYPE "Tone" AS ENUM ('PROFESSIONAL', 'CASUAL', 'EXCITING', 'TRUSTWORTHY');

-- CreateTable
CREATE TABLE "campaigns" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "target_audience" TEXT NOT NULL,
    "tone" "Tone" NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("id")
);
