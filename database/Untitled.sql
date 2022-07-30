CREATE TABLE `users_test_jose_luis_jimenez_vazquez` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `segundo_nombre` varchar(255) NOT NULL,
  `apellido_paterno` varchar(255) NOT NULL,
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255) NULL,
  `profile_image` varchar(255),
  `phone` varchar(16) UNIQUE NOT NULL,
  `created_at` timestamp DEFAULT (now()),
  `updated_at` timestamp DEFAULT (now())
);
