-- DropForeignKey
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_installationId_fkey";

-- AddForeignKey
ALTER TABLE "Repository" ADD CONSTRAINT "Repository_installationId_fkey" FOREIGN KEY ("installationId") REFERENCES "Installation"("installationId") ON DELETE CASCADE ON UPDATE CASCADE;
