CREATE TABLE `Bus_Accounts` (
  `ClientID` varchar(7) NOT NULL,
  `NID` int(8) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Lastname`  varchar(50) NOT NULL,
  `Job` varchar(50) NOT NULL,
  `Date_operation` DATETIME NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



CREATE TABLE `Bus_Tx` (
  `ClientID` varchar(7) NOT NULL,
  `txID` int(8) NOT NULL,
  `NID` int(8) NOT NULL,
  `Libelle`  varchar(50) NOT NULL,
  `Date_operation` DATETIME NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;