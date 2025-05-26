-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('SHIPPED', 'ORDERED', 'IDLE');

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_shipping_id_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "status" "ProductStatus" NOT NULL DEFAULT 'IDLE',
ALTER COLUMN "shipping_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_shipping_id_fkey" FOREIGN KEY ("shipping_id") REFERENCES "Shipping"("id") ON DELETE SET NULL ON UPDATE CASCADE;
