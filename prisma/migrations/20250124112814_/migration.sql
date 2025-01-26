/*
  Warnings:

  - You are about to drop the column `password` on the `admin_user` table. All the data in the column will be lost.
  - Added the required column `login_pwd` to the `admin_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admin_user` DROP COLUMN `password`,
    ADD COLUMN `login_pwd` VARCHAR(191) NOT NULL,
    ALTER COLUMN `login_id` DROP DEFAULT;
