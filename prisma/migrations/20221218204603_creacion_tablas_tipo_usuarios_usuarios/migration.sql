/*
  Warnings:

  - You are about to drop the `categoria` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `categoria`;

-- CreateTable
CREATE TABLE `categorias` (
    `categoria_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`categoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos_usuario` (
    `tipo_usuario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tipo_usuario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `usuari_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `telefono` VARCHAR(50) NOT NULL,
    `correo` VARCHAR(50) NOT NULL,
    `constrasena` VARCHAR(50) NOT NULL,
    `tipo_usuario_id` INTEGER NOT NULL,

    PRIMARY KEY (`usuari_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_tipo_usuario_id_fkey` FOREIGN KEY (`tipo_usuario_id`) REFERENCES `tipos_usuario`(`tipo_usuario_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
