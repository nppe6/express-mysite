/*
  Warnings:

  - You are about to drop the column `qqQrCode` on the `setting` table. All the data in the column will be lost.
  - Added the required column `qq_qr_code` to the `setting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `setting` DROP COLUMN `qqQrCode`,
    ADD COLUMN `qq_qr_code` VARCHAR(191) NOT NULL;
