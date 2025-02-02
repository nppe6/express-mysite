-- CreateTable
CREATE TABLE `setting` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `avatar` VARCHAR(191) NOT NULL,
    `site_title` VARCHAR(191) NOT NULL,
    `github` VARCHAR(191) NOT NULL,
    `qq` VARCHAR(191) NOT NULL,
    `qqQrCode` VARCHAR(191) NOT NULL,
    `weixin` VARCHAR(191) NOT NULL,
    `weixin_qr_code` VARCHAR(191) NOT NULL,
    `mail` VARCHAR(191) NOT NULL,
    `icp` VARCHAR(191) NOT NULL,
    `githubName` VARCHAR(191) NOT NULL,
    `favicon` VARCHAR(191) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
