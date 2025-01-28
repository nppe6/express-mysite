/*
  Warnings:

  - Added the required column `update_at` to the `blog_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blog_type` ADD COLUMN `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `update_at` DATETIME(3) NOT NULL;
