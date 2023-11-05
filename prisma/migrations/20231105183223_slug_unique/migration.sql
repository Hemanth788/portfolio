/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Blogs` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Blogs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "Blogs_slug_key" ON "Blogs"("slug");
