CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `Descricao` varchar(255) NOT NULL,
  `valorReal` decimal(10,2) NOT NULL,
  `valorPromocional` decimal(10,2) NOT NULL,
  `figura01` varchar(500) DEFAULT NULL,
  `figura02` varchar(500) DEFAULT NULL,
  `figura03` varchar(500) DEFAULT NULL,
  `figura04` varchar(500) DEFAULT NULL
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8
