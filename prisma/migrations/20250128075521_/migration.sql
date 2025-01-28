/*
  Warnings:

  - You are about to drop the column `blogTypeId` on the `blog` table. All the data in the column will be lost.
  - Added the required column `blog_type_id` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `blog` DROP FOREIGN KEY `blog_blogTypeId_fkey`;

-- DropIndex
DROP INDEX `blog_blogTypeId_fkey` ON `blog`;

-- AlterTable
ALTER TABLE `blog` DROP COLUMN `blogTypeId`,
    ADD COLUMN `blog_type_id` INTEGER UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_blog_type_id_fkey` FOREIGN KEY (`blog_type_id`) REFERENCES `blog_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
