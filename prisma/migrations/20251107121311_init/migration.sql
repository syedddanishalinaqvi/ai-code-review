/*
  Warnings:

  - The primary key for the `Installation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `installationId` on the `Installation` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Installation` table. All the data in the column will be lost.
  - You are about to drop the column `ownerLogin` on the `Installation` table. All the data in the column will be lost.
  - You are about to drop the column `repositories` on the `Installation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Installation` table. All the data in the column will be lost.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `aiComments` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `aiSummary` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `installationId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `prNumber` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `prTitle` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the column `repoName` on the `Review` table. All the data in the column will be lost.
  - The `id` column on the `Review` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - Added the required column `accountLogin` to the `Installation` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Installation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `content` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pullId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Installation" DROP CONSTRAINT "Installation_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Review" DROP CONSTRAINT "Review_installationId_fkey";

-- DropIndex
DROP INDEX "public"."Installation_installationId_key";

-- DropIndex
DROP INDEX "public"."User_username_key";

-- AlterTable
ALTER TABLE "public"."Installation" DROP CONSTRAINT "Installation_pkey",
DROP COLUMN "installationId",
DROP COLUMN "ownerId",
DROP COLUMN "ownerLogin",
DROP COLUMN "repositories",
DROP COLUMN "updatedAt",
ADD COLUMN     "accountLogin" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" INTEGER NOT NULL,
ALTER COLUMN "userId" DROP NOT NULL,
ADD CONSTRAINT "Installation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."Review" DROP CONSTRAINT "Review_pkey",
DROP COLUMN "aiComments",
DROP COLUMN "aiSummary",
DROP COLUMN "installationId",
DROP COLUMN "prNumber",
DROP COLUMN "prTitle",
DROP COLUMN "repoName",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "pullId" INTEGER NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "username",
ALTER COLUMN "githubId" SET DATA TYPE TEXT,
ALTER COLUMN "email" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."Repository" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "installationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PullRequest" (
    "id" INTEGER NOT NULL,
    "number" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "authorLogin" TEXT NOT NULL,
    "repositoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PullRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repository_fullName_key" ON "public"."Repository"("fullName");

-- AddForeignKey
ALTER TABLE "public"."Installation" ADD CONSTRAINT "Installation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Repository" ADD CONSTRAINT "Repository_installationId_fkey" FOREIGN KEY ("installationId") REFERENCES "public"."Installation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PullRequest" ADD CONSTRAINT "PullRequest_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "public"."Repository"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Review" ADD CONSTRAINT "Review_pullId_fkey" FOREIGN KEY ("pullId") REFERENCES "public"."PullRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
