-- AlterTable
ALTER TABLE `message` ADD COLUMN `blogId` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `blog`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
