-- CreateTable
CREATE TABLE `admin_user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `login_id` VARCHAR(191) NOT NULL DEFAULT '',
    `account` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
