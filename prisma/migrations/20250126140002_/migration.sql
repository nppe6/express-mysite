/*
  Warnings:

  - A unique constraint covering the columns `[login_id]` on the table `admin_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `banner` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `mid_img` VARCHAR(191) NOT NULL,
    `big_img` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `admin_user_login_id_key` ON `admin_user`(`login_id`);
