-- DropForeignKey
ALTER TABLE `blog` DROP FOREIGN KEY `blog_category_id_fkey`;

-- DropIndex
DROP INDEX `blog_category_id_fkey` ON `blog`;

-- AlterTable
ALTER TABLE `blog` MODIFY `category_id` INTEGER UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
