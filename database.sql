CREATE TABLE `admin` (
  `email` varchar(100) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

INSERT INTO `admin` (`email`, `password`, `id`) VALUES
('admin', 'admin', 1);

ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;