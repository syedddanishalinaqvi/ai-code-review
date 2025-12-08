/*
  Warnings:

  - You are about to drop the column `installationId` on the `Repository` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[installationId]` on the table `Installation` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Installation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `installationId` to the `Installation` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Installation` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `userId` to the `Repository` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Installation" DROP CONSTRAINT "Installation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_installationId_fkey";

-- AlterTable
CREATE SEQUENCE installation_id_seq;
ALTER TABLE "Installation" ADD COLUMN     "installationId" INTEGER NOT NULL,
ALTER COLUMN "userId" SET NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('installation_id_seq');
ALTER SEQUENCE installation_id_seq OWNED BY "Installation"."id";

-- AlterTable
CREATE SEQUENCE pullrequest_id_seq;
ALTER TABLE "PullRequest" ALTER COLUMN "id" SET DEFAULT nextval('pullrequest_id_seq');
ALTER SEQUENCE pullrequest_id_seq OWNED BY "PullRequest"."id";

-- AlterTable
CREATE SEQUENCE repository_id_seq;
ALTER TABLE "Repository" DROP COLUMN "installationId",
ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('repository_id_seq');
ALTER SEQUENCE repository_id_seq OWNED BY "Repository"."id";

-- CreateIndex
CREATE UNIQUE INDEX "Installation_installationId_key" ON "Installation"("installationId");

-- CreateIndex
CREATE UNIQUE INDEX "Installation_userId_key" ON "Installation"("userId");

-- AddForeignKey
ALTER TABLE "Installation" ADD CONSTRAINT "Installation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
