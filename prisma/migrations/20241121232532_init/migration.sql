-- CreateTable
CREATE TABLE "Brand" (
    "id" STRING NOT NULL,
    "name" STRING,
    "devices" INT4 NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" STRING NOT NULL,
    "brand_id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "img" STRING NOT NULL,
    "description" STRING NOT NULL,
    "active" BOOL NOT NULL DEFAULT true,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "email" STRING NOT NULL,
    "phone" STRING NOT NULL,
    "username" STRING NOT NULL,
    "password" STRING NOT NULL,
    "role" STRING NOT NULL DEFAULT 'client',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Piece" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "category" STRING NOT NULL,
    "phoneIds" STRING[],
    "price" FLOAT8 NOT NULL,
    "stock" INT4 NOT NULL DEFAULT 0,

    CONSTRAINT "Piece_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" STRING NOT NULL,
    "sku" INT4,
    "userId" STRING,
    "name" STRING NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "phone" STRING,
    "phoneId" STRING NOT NULL,
    "phoneName" STRING NOT NULL DEFAULT 'undefined',
    "piecesId" STRING,
    "address" STRING NOT NULL,
    "city" STRING NOT NULL,
    "zipCode" STRING NOT NULL,
    "status" STRING NOT NULL,
    "total" FLOAT8 NOT NULL,
    "subtotal" FLOAT8 NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Data" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "text" STRING,
    "num" INT4,
    "decimal" FLOAT8,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Brand_id_key" ON "Brand"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Device_id_key" ON "Device"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Piece_id_key" ON "Piece"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_date_key" ON "Order"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Data_id_key" ON "Data"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Data_name_key" ON "Data"("name");
