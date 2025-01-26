/*
  Warnings:

  - You are about to drop the column `account` on the `admin_user` table. All the data in the column will be lost.
  - Added the required column `name` to the `admin_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `admin_user` DROP COLUMN `account`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
