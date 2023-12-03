-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 02, 2023 at 07:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tech_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `original_price` decimal(10,2) NOT NULL CHECK (`original_price` >= 0),
  `sale_price` decimal(10,2) NOT NULL CHECK (`sale_price` >= 0),
  `image_url` varchar(255) NOT NULL,
  `is_available` tinyint(1) NOT NULL,
  `rating` decimal(2,1) NOT NULL,
  `reviews_count` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `category_id` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `title`, `original_price`, `sale_price`, `image_url`, `is_available`, `rating`, `reviews_count`, `created_at`, `category_id`) VALUES
(1, 'Laptop gaming ASUS TUF Gaming A15 FA507NU LP034W', 200.00, 150.00, 'http://localhost:3000/images/image-1701498377511-578624323.jpg', 1, 4.5, 10, '2023-11-24 20:00:00', 1),
(2, 'Laptop gaming Lenovo LOQ 15IRH8 82XV00QQVN', 300.00, 250.00, 'http://localhost:3000/images/image-1701498390830-50633991.jpg', 1, 4.0, 20, '2023-11-23 20:01:01', 2),
(3, 'Laptop gaming Acer Predator Helios 300 PH315 55 76KG', 150.00, 120.00, 'http://localhost:3000/images/image-1701498396369-429280038.jpg', 0, 3.5, 5, '2023-11-22 20:02:02', 2),
(4, 'Laptop gaming MSI GF63 12UC 887VN', 500.00, 450.00, 'http://localhost:3000/images/image-1701498401973-107179341.jpg', 1, 5.0, 15, '2023-11-21 20:03:04', 2),
(5, 'Laptop gaming MSI GF63 12UCX 841VN', 350.00, 300.00, 'http://localhost:3000/images/image-1701498406725-57951149.jpg', 1, 4.2, 8, '2023-11-21 03:39:39', 3),
(6, 'Laptop gaming ASUS TUF A15 FA507NU LP031W', 220.00, 200.00, 'http://localhost:3000/images/image-1701498412324-821716998.jpg', 0, 3.8, 12, '2023-11-20 03:39:39', 3),
(7, 'Laptop gaming MSI Stealth GS77 12UHS 250VN', 400.00, 350.00, 'http://localhost:3000/images/image-1701498419055-982207555.jpg', 1, 4.7, 18, '2023-11-19 03:39:39', 4),
(8, 'Laptop gaming Acer Predator Helios Neo 16 PHN16 71 53M7', 180.00, 160.00, 'http://localhost:3000/images/image-1701498425257-818527576.jpg', 1, 4.3, 7, '2023-11-18 03:39:39', 4),
(9, 'Laptop gaming ASUS ROG Zephyrus G15 GA503RS LN892W', 250.00, 225.00, 'http://localhost:3000/images/image-1701498430479-91066628.jpg', 0, 3.9, 9, '2023-11-17 03:39:39', 5),
(10, 'Laptop gaming ASUS TUF Gaming F15 FX507VV4 LP382W', 320.00, 290.00, 'http://localhost:3000/images/image-1701498436416-715630584.jpg', 1, 4.6, 11, '2023-11-16 03:39:39', 5),
(11, 'Laptop gaming HP Omen 15-ek0019TX', 280.00, 260.00, 'http://localhost:3000/images/image-1701498444827-241968467.jpg', 1, 4.1, 14, '2023-11-15 04:11:11', 1),
(12, 'Laptop gaming Dell G5 15 5500', 230.00, 210.00, 'http://localhost:3000/images/image-1701498449995-543388010.jpg', 0, 3.7, 6, '2023-11-14 05:12:12', 1),
(13, 'Laptop gaming Alienware m15 R3', 550.00, 500.00, 'http://localhost:3000/images/image-1701498454652-274810545.jpg', 1, 4.9, 19, '2023-11-13 06:13:13', 2),
(14, 'Laptop gaming Razer Blade 15', 600.00, 570.00, 'http://localhost:3000/images/image-1701498459511-7087326.jpg', 1, 4.8, 16, '2023-11-12 07:14:14', 2),
(15, 'Laptop gaming Lenovo Legion Y540', 320.00, 300.00, 'http://localhost:3000/images/image-1701498464474-243047771.jpg', 1, 4.4, 13, '2023-11-11 08:15:15', 3),
(16, 'Laptop gaming Acer Nitro 5 AN515-55-58EB', 260.00, 240.00, 'http://localhost:3000/images/image-1701498470513-511939137.jpg', 0, 4.0, 10, '2023-11-10 09:16:16', 3),
(17, 'Laptop gaming MSI GF65 Thin 10UE', 400.00, 380.00, 'http://localhost:3000/images/image-1701498484004-500652706.jpg', 1, 4.6, 17, '2023-11-09 10:17:17', 4),
(18, 'Laptop gaming ASUS ROG Strix G15', 370.00, 350.00, 'http://localhost:3000/images/image-1701498488813-689263996.jpg', 1, 4.3, 8, '2023-11-08 11:18:18', 4),
(19, 'Laptop gaming HP Pavilion Gaming 15-dk1056wm', 250.00, 230.00, 'http://localhost:3000/images/image-1701498494994-440986902.jpg', 0, 3.8, 7, '2023-11-07 12:19:19', 5),
(20, 'Laptop gaming Dell Alienware x17 R2', 580.00, 550.00, 'http://localhost:3000/images/image-1701498502114-988867073.jpg', 1, 4.7, 20, '2023-11-06 13:20:20', 5);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`category_id`, `category_name`, `created_at`) VALUES
(1, 'Laptops', '2023-11-30 14:02:53'),
(2, 'Desktop PCs', '2023-11-22 17:00:53'),
(3, 'Networking Devices', '2023-11-24 17:00:53'),
(4, 'Printers & Scanners', '2023-11-30 17:00:53'),
(5, 'PC Parts', '2023-11-19 17:00:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `fk_category_id` (`category_id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`category_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `product_categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
