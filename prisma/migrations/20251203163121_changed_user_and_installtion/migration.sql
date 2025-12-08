/*
  Warnings:

  - You are about to drop the column `userId` on the `Repository` table. All the data in the column will be lost.
  - You are about to drop the column `githubLogin` on the `User` table. All the data in the column will be lost.
  - Added the required column `installationId` to the `Repository` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repoId` to the `Repository` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_userId_fkey";

-- DropIndex
DROP INDEX "User_githubLogin_key";

-- AlterTable
ALTER TABLE "Repository" DROP COLUMN "userId",
ADD COLUMN     "installationId" INTEGER NOT NULL,
ADD COLUMN     "repoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "githubLogin";

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_installationId_fkey" FOREIGN KEY ("installationId") REFERENCES "Installation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
