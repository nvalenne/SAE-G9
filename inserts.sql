DROP TABLE if exists ProposeS CASCADE;
DROP TABLE if exists ProposeA CASCADE;
DROP TABLE if exists EmplacementAttraction CASCADE;
DROP TABLE if exists EmplacementStand CASCADE;
DROP TABLE if exists Stand CASCADE;
DROP TABLE if exists Attraction CASCADE;
DROP TABLE if exists Prestataire CASCADE;
DROP TABLE if exists Services CASCADE;
DROP TABLE if exists Compte CASCADE;
DROP TABLE if exists TypeAttraction CASCADE;
DROP TABLE if exists TypeStand CASCADE;

CREATE TABLE TypeStand(
   idTypeStand SERIAL,
   designation VARCHAR(50),
   PRIMARY KEY(idTypeStand)
);

CREATE TABLE TypeAttraction(
   idTypeAttraction SERIAL,
   designation VARCHAR(50),
   PRIMARY KEY(idTypeAttraction)
);

CREATE TABLE Compte(
   id SERIAL,
   identifiant VARCHAR(50),
   mdp VARCHAR(50),
   mail VARCHAR(50),
   role BOOLEAN,
   PRIMARY KEY(id)
);

CREATE TABLE Services(
   idService SERIAL,
   nomService VARCHAR(50),
   PRIMARY KEY(idService)
);

CREATE TABLE Prestataire(
   idPrestataire SERIAL,
   nom VARCHAR(50),
   adresse VARCHAR(50),
   id INT NOT NULL,
   PRIMARY KEY(idPrestataire),
   UNIQUE(id),
   FOREIGN KEY(id) REFERENCES Compte(id)
);

CREATE TABLE Attraction(
   idAttraction SERIAL,
   nom VARCHAR(50),
   prixAdulte DECIMAL(5,2),
   prixEnfant DECIMAL(5,2),
   tailleRequise DECIMAL(3,2),
   recette DECIMAL(6,2),
   nbrClientsTotal INT,
   attente INT,
   idTypeAttraction INT NOT NULL,
   idPrestataire INT NOT NULL,
   PRIMARY KEY(idAttraction),
   FOREIGN KEY(idTypeAttraction) REFERENCES TypeAttraction(idTypeAttraction),
   FOREIGN KEY(idPrestataire) REFERENCES Prestataire(idPrestataire)
);

CREATE TABLE Stand(
   idStand SERIAL,
   nom VARCHAR(50),
   prix DECIMAL(5,2),
   recette DECIMAL(6,2),
   nbrClientsTotal INT,
   attente INT,
   idTypeStand INT NOT NULL,
   idPrestataire INT NOT NULL,
   PRIMARY KEY(idStand),
   FOREIGN KEY(idTypeStand) REFERENCES TypeStand(idTypeStand),
   FOREIGN KEY(idPrestataire) REFERENCES Prestataire(idPrestataire)
);

CREATE TABLE EmplacementStand(
   idEmplacementStand SERIAL,
   prix DECIMAL(6,2),
   taille DECIMAL(6,2),
   idStand INT,
   PRIMARY KEY(idEmplacementStand),
   UNIQUE(idStand),
   FOREIGN KEY(idStand) REFERENCES Stand(idStand)
);

CREATE TABLE EmplacementAttraction(
   idEmplacementAttraction SERIAL,
   prix DECIMAL(6,2),
   taille DECIMAL(6,2),
   idAttraction INT,
   PRIMARY KEY(idEmplacementAttraction),
   UNIQUE(idAttraction),
   FOREIGN KEY(idAttraction) REFERENCES Attraction(idAttraction)
);

CREATE TABLE ProposeA(
   idAttraction INT,
   idService INT,
   PRIMARY KEY(idAttraction, idService),
   FOREIGN KEY(idAttraction) REFERENCES Attraction(idAttraction),
   FOREIGN KEY(idService) REFERENCES Services(idService)
);

CREATE TABLE ProposeS(
   idStand INT,
   idService INT,
   PRIMARY KEY(idStand, idService),
   FOREIGN KEY(idStand) REFERENCES Stand(idStand),
   FOREIGN KEY(idService) REFERENCES Services(idService)
);



INSERT INTO TypeStand (idTypeStand,designation) VALUES
(1,'nourriture'),
(2,'pêche aux canards'),
(3,'tir à la carabine'),
(4,'basket');

INSERT INTO TypeAttraction (idTypeAttraction,designation) VALUES
(1,'grand huit'),
(2,'auto-tamponneuses'),
(3,'rivière canadienne'),
(4,'grande roue'),
(5,'maison hantée'),
(6,'maison des pièges'),
(7,'centrigugeuse'),
(8,'tour infernale'),
(9,'reverse bungee'),
(10,'bulles sur eau');

INSERT INTO Compte (id, identifiant, mdp, mail, role) VALUES
(1,'admin1','1234','admin1@gmail.com',true),
(2,'admin2','abcd','admin2@gmail.com',true),
(3,'prestataire1','1234','prestataire1@gmail.com',false),
(4,'prestataire2','abcd','prestataire2@gmail.com',false),
(5,'prestataire3','1234','prestataire3@gmail.com',false),
(6,'prestataire4','abcd','prestataire4@gmail.com',false);

INSERT INTO Services (idService, nomService) VALUES
(1,'prix à gagner'),
(2,'vente de nourriture'),
(3,'vente de goodies'),
(5,'consigne'),
(6,'cadeau à gagner'),
(7,'accès mobilité réduite');

INSERT INTO Prestataire (idPrestataire, nom, adresse, id) VALUES
(1,'jean martin','1',3),
(2,'philippe bourget','2',4),
(3,'jacques williams','3',5),
(4,'élizabeth jourdon','4',6);

INSERT INTO Attraction (nom, prixAdulte, prixEnfant, tailleRequise, recette, nbrClientsTotal, attente, idTypeAttraction, idPrestataire) VALUES
('dégueulator',10,8,1.3,0,0,0,7,1),
('space mountains',10,8,1.3,0.,0,0,1,1),
('rapide et furieux',10,8,1.3,0,0,0,1,1),
('splash',10,8,1.3,0,0,0,3,1),
('Spaceglider',10,8,1.3,0,0,0,6,4);

INSERT INTO Stand (idStand, nom, prix, recette, nbrClientsTotal, attente, idTypeStand, idPrestataire) VALUES
(1,'canards',10,0,0,0,1,2),
(2,'carabine',10,0,0,0,2,3),
(3,'basket',10,0,0,0,3,4);

INSERT INTO EmplacementAttraction (idEmplacementAttraction, prix, taille) VALUES
(1,10,100),
(2,10,100),
(3,10,100);

INSERT INTO EmplacementStand (idEmplacementStand, prix, taille) VALUES
(1,10,100),
(2,10,100),
(3,10,100);


--select nom FROM Prestataire;
--select nom, adresse from Prestataire;
select idattraction, Attraction.nom, P.idPrestataire from Attraction INNER JOIN Prestataire P on Attraction.idPrestataire = P.idPrestataire
where P.nom = 'élizabeth jourdon';
