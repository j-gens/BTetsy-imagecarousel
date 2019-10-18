DROP DATABASE IF EXISTS BTetsy;

CREATE DATABASE BTetsy;

USE BTetsy;

CREATE TABLE Products (
  productId int NOT NULL AUTO_INCREMENT,
  productItem varchar(50) NOT NULL,
  PRIMARY KEY (productId)
);

CREATE TABLE Product_Pictures (
  id int NOT NULL AUTO_INCREMENT,
  picture_url varchar(250),
  productId int,
  CONSTRAINT fk_product
  FOREIGN KEY (productId)
    REFERENCES Products(productId),
  PRIMARY KEY (ID)
);
CREATE TABLE Users (
  userId int NOT NULL AUTO_INCREMENT,
  username varchar(50) NOT NULL UNIQUE,
  PRIMARY KEY (userId)
);
CREATE TABLE Wishlist (
  id int NOT NULL AUTO_INCREMENT,
  productId int,
  userId int,
  CONSTRAINT fk_product_wishlist
  FOREIGN KEY (productId)
    REFERENCES Products(productId),
  CONSTRAINT fk_user_wishlist
  FOREIGN KEY (userId)
    REFERENCES Users(userId),
  PRIMARY KEY (ID)
);



INSERT INTO Products (productItem) Values ("Love Yourself Unisex Premium T-Shirt");
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/1_1.jpg", (select productId from Products where productItem = "Love Yourself Unisex Premium T-Shirt") );
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/1_2.jpg", (select productId from Products where productItem = "Love Yourself Unisex Premium T-Shirt") );
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/1_3.jpg", (select productId from Products where productItem = "Love Yourself Unisex Premium T-Shirt") );

INSERT INTO Products (productItem) Values ("BTS BT21 Official Pyjamas Set");
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/2_1.jpg", (select productId from Products where productItem = "BTS BT21 Official Pyjamas Set") );
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/2_2.jpg", (select productId from Products where productItem = "BTS BT21 Official Pyjamas Set") );
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/2_3.jpg", (select productId from Products where productItem = "BTS BT21 Official Pyjamas Set") );

INSERT INTO Products (productItem) Values ("BTS - Bunny Hat Series Enamel Pin");
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/3_1.jpg", (select productId from Products where productItem = "BTS - Bunny Hat Series Enamel Pin") );
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/3_2.jpg", (select productId from Products where productItem = "BTS - Bunny Hat Series Enamel Pin") );
INSERT INTO Product_Pictures (picture_url, productId) VALUES ("https://btetsy.s3.us-east-2.amazonaws.com/3_3.jpg", (select productId from Products where productItem = "BTS - Bunny Hat Series Enamel Pin") );

INSERT INTO Users (username) VALUES ("KIMTAEHYUNG");
INSERT INTO Wishlist (productId, userId) Values ((select productId from Products where productItem = "BTS BT21 Official Pyjamas Set"), (select userId from Users where username = "KIMTAEHYUNG"));