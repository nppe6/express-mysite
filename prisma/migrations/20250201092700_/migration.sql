/*
  Warnings:

  - You are about to drop the column `blogId` on the `message` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `message_blogId_fkey`;

-- DropIndex
DROP INDEX `message_blogId_fkey` ON `message`;

-- AlterTable
ALTER TABLE `message` DROP COLUMN `blogId`,
    ADD COLUMN `blog_id` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_blog_id_fkey` FOREIGN KEY (`blog_id`) REFERENCES `blog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
