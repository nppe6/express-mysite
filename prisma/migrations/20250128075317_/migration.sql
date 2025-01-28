-- CreateTable
CREATE TABLE `blog` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `toc` TEXT NOT NULL,
    `html_content` TEXT NOT NULL,
    `thumb` VARCHAR(191) NOT NULL,
    `scan_number` INTEGER NOT NULL,
    `comment_number` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,
    `blogTypeId` INTEGER UNSIGNED NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `blog` ADD CONSTRAINT `blog_blogTypeId_fkey` FOREIGN KEY (`blogTypeId`) REFERENCES `blog_type`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
