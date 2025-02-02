-- DropForeignKey
ALTER TABLE `blog` DROP FOREIGN KEY `blog_category_id_fkey`;

-- DropIndex
DROP INDEX `blog_category_id_fkey` ON `blog`;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
