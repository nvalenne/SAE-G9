DROP TABLE IF EXISTS MENU;
DROP TABLE IF EXISTS PROPOSES;
DROP TABLE IF EXISTS PROPOSEA;
DROP TABLE IF EXISTS PLACEMENTS;
DROP TABLE IF EXISTS PLACEMENTA;
DROP TABLE IF EXISTS STAND;
DROP TABLE IF EXISTS ATTRACTION;
DROP TABLE IF EXISTS PRODUIT;
DROP TABLE IF EXISTS SERVICE;
DROP TABLE IF EXISTS COMPTE;
DROP TABLE IF EXISTS TYPEATTRACTION;
DROP TABLE IF EXISTS TYPESTAND;
DROP TABLE IF EXISTS EMPLACEMENT;

CREATE TABLE EMPLACEMENT(
   idEmplacement SERIAL,
   prix DECIMAL(6,2),
   taille DECIMAL(6,2),
   PRIMARY KEY(idEmplacement)
);

CREATE TABLE TYPESTAND(
   idTypeStand SERIAL,
   designation VARCHAR(50),
   PRIMARY KEY(idTypeStand)
);

CREATE TABLE TYPEATTRACTION(
   idTypeAttraction SERIAL,
   designation VARCHAR(50),
   PRIMARY KEY(idTypeAttraction)
);

CREATE TABLE COMPTE(
   idCompte INT NOT NULL AUTO_INCREMENT,
   identifiant VARCHAR(50),
   mdp VARCHAR(50),
   mail VARCHAR(50),
   nom VARCHAR(50),
   role VARCHAR(50),
   prenom VARCHAR(50),
   PRIMARY KEY(idCompte)
);

CREATE TABLE SERVICE(
   idService INT NOT NULL AUTO_INCREMENT,
   nomService VARCHAR(50),
   PRIMARY KEY(idService)
);

CREATE TABLE PRODUIT(
   idProduit INT NOT NULL AUTO_INCREMENT,
   nomProduit VARCHAR(50),
   PRIMARY KEY(idProduit)
);

CREATE TABLE ATTRACTION(
   idAttraction INT NOT NULL AUTO_INCREMENT,
   nom VARCHAR(50),
   prixAdulte DECIMAL(5,2),
   prixEnfant DECIMAL(5,2),
   tailleRequise DECIMAL(3,2),
   recette DECIMAL(6,2),
   nbrClientsTotal INT,
   attente INT,
   idTypeAttraction INT NOT NULL,
   idCompte INT NOT NULL,
   FOREIGN KEY(idTypeAttraction) REFERENCES TYPEATTRACTION(idTypeAttraction),
   FOREIGN KEY(idCompte) REFERENCES COMPTE(idCompte),
   PRIMARY KEY(idAttraction)
);

CREATE TABLE STAND(
   idStand INT NOT NULL AUTO_INCREMENT,
   nom VARCHAR(50),
   prix DECIMAL(5,2),
   recette DECIMAL(6,2),
   nbrClientsTotal INT,
   attente INT,
   idTypeStand INT NOT NULL,
   idCompte INT NOT NULL,
   FOREIGN KEY(idTypeStand) REFERENCES TYPESTAND(idTypeStand),
   FOREIGN KEY(idCompte) REFERENCES COMPTE(idCompte),
   PRIMARY KEY(idStand)
);

CREATE TABLE PLACEMENTA(
   idPlacementA INT NOT NULL AUTO_INCREMENT,
   idAttraction INT NOT NULL,
   idEmplacement INT NOT NULL,
   FOREIGN KEY(idAttraction) REFERENCES ATTRACTION(idAttraction),
   FOREIGN KEY(idEmplacement) REFERENCES EMPLACEMENT(idEmplacement),
   PRIMARY KEY(idPlacementA)
);

CREATE TABLE PLACEMENTS(
   idPlacementS INT NOT NULL AUTO_INCREMENT,
   idStand INT NOT NULL,
   idEmplacement INT NOT NULL,
   FOREIGN KEY(idStand) REFERENCES STAND(idStand),
   FOREIGN KEY(idEmplacement) REFERENCES EMPLACEMENT(idEmplacement),
   PRIMARY KEY(idPlacementS)
);

CREATE TABLE PROPOSEA(
   idAttraction INT,
   idService INT,
   FOREIGN KEY(idAttraction) REFERENCES ATTRACTION(idAttraction),
   FOREIGN KEY(idService) REFERENCES SERVICE(idService),
   PRIMARY KEY(idAttraction, idService)
);

CREATE TABLE PROPOSES(
   idStand INT,
   idService INT,
   FOREIGN KEY(idStand) REFERENCES STAND(idStand),
   FOREIGN KEY(idService) REFERENCES SERVICE(idService),
   PRIMARY KEY(idStand, idService)
);

CREATE TABLE MENU(
   idStand INT,
   idProduit INT,
   FOREIGN KEY(idStand) REFERENCES STAND(idStand),
   FOREIGN KEY(idProduit) REFERENCES PRODUIT(idProduit),
   PRIMARY KEY(idStand, idProduit)
);

INSERT INTO EMPLACEMENT (prix, taille) VALUES
(10,100),
(10,100),
(10,100);

INSERT INTO TYPESTAND (designation) VALUES
('pêche aux canards'),
('manger');

INSERT INTO TYPEATTRACTION (designation) VALUES
('grand huit'),
('auto-tamponneuses'),
('rivière canadienne'),
('grande roue'),
('maison hantée'),
('maison des pièges'),
('centrigugeuse'),
('tour infernale'),
('reverse bungee'),
('bulles sur eau');

INSERT INTO Compte (identifiant, mdp, mail, nom, role, prenom) VALUES
('admin1','1234','admin1@gmail.com','Jean','admin','Michel'),
('admin2','abcd','admin2@gmail.com','Philippe','admin','Martin'),
('prestataire1','1234','prestataire1@gmail.com','Jacques','prestataire','Max'),
('prestataire2','abcd','prestataire2@gmail.com','Elizabeth','prestataire','Carl'),
('prestataire3','1234','prestataire3@gmail.com','Ryan','prestataire','Poupou'),
('prestataire4','abcd','prestataire4@gmail.com','Steven','prestataire','I');

INSERT INTO SERVICE (nomService) VALUES
('prix à gagner'),
('vente de nourriture'),
('vente de goodies'),
('consigne'),
('cadeaux à gagner'),
('accès mobilité réduite');

INSERT INTO PRODUIT (nomProduit) VALUES
('churros'),
('barbe a papa');

INSERT INTO ATTRACTION (nom, prixAdulte, prixEnfant, tailleRequise, recette, nbrClientsTotal, attente, idTypeAttraction, idCompte) VALUES
('dégueulator',10,8,1.3,0,0,0,7,3),
('space mountains',10,8,1.3,0.,0,0,1,3),
('rapide et furieux',10,8,1.3,0,0,0,1,4),
('splash',10,8,1.3,0,0,0,3,5),
('Spaceglider',10,8,1.3,0,0,0,6,6);

INSERT INTO STAND (nom, prix, recette, nbrClientsTotal, attente, idTypeStand, idCompte) VALUES
('canards',10,0,0,0,1,3),
('carabine',10,0,0,0,1,3),
('basket',10,0,0,0,1,4),
('I',0,0,0,0,2,4);

INSERT INTO MENU(idStand,idProduit) VALUES
(4,1),
(4,2);


/*

INSERT INTO PLACEMENTA(

);

INSERT INTO PLACEMENTS(

);

INSERT INTO PROPOSEA(

);

INSERT INTO PROPOSES(

);
