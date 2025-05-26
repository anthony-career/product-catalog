/*
  Warnings:

  - You are about to drop the column `product_url` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "product_url",
ADD COLUMN     "image" TEXT,
ADD COLUMN     "images" TEXT[];
