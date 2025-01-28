/*
  Warnings:

  - You are about to drop the column `blog_type_id` on the `blog` table. All the data in the column will be lost.
  - You are about to drop the `blog_type` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `blog` DROP FOREIGN KEY `blog_blog_type_id_fkey`;

-- DropIndex
DROP INDEX `blog_blog_type_id_fkey` ON `blog`;

-- AlterTable
ALTER TABLE `blog` DROP COLUMN `blog_type_id`,
    ADD COLUMN `category_id` INTEGER UNSIGNED NOT NULL;

-- DropTable
DROP TABLE `blog_type`;

-- CreateTable
CREATE TABLE `category` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `article_count` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
