/*
  Warnings:

  - You are about to drop the column `githubName` on the `setting` table. All the data in the column will be lost.
  - Added the required column `github_name` to the `setting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `setting` DROP COLUMN `githubName`,
    ADD COLUMN `github_name` VARCHAR(191) NOT NULL;
