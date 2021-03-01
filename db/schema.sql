CREATE IF DATABASE IF NOT EXIST fluxim;
USE fluxim;

CREATE TABLE userinfo (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  accessKey VARCHAR(255),
  isadmin BOOLEAN
)

