/*
  Warnings:

  - You are about to alter the column `article_count` on the `blog_type` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - You are about to alter the column `order` on the `blog_type` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `blog_type` MODIFY `article_count` INTEGER NOT NULL,
    MODIFY `order` INTEGER NOT NULL;
