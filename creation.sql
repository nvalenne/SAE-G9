CREATE TABLE TypeStand(
   idTypeStand INT,
   designation VARCHAR(50),
   PRIMARY KEY(idTypeStand)
);

CREATE TABLE TypeAttraction(
   idTypeAttraction INT,
   designation VARCHAR(50),
   PRIMARY KEY(idTypeAttraction)
);

CREATE TABLE Compte(
   id INT,
   identifiant VARCHAR(50),
   mdp VARCHAR(50),
   mail VARCHAR(50),
   role LOGICAL,
   PRIMARY KEY(id)
);

CREATE TABLE Services(
   idService INT,
   nomService VARCHAR(50),
   PRIMARY KEY(idService)
);

CREATE TABLE Prestataire(
   idPrestataire INT,
   nom VARCHAR(50),
   adresse VARCHAR(50),
   id INT NOT NULL,
   PRIMARY KEY(idPrestataire),
   UNIQUE(id),
   FOREIGN KEY(id) REFERENCES Compte(id)
);

CREATE TABLE Attraction(
   idAttraction INT,
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
   idStand INT,
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
   idEmplacementStand INT,
   prix DECIMAL(6,2),
   taille DECIMAL(6,2),
   idStand INT,
   PRIMARY KEY(idEmplacementStand),
   UNIQUE(idStand),
   FOREIGN KEY(idStand) REFERENCES Stand(idStand)
);

CREATE TABLE EmplacementAttraction(
   idEmplacementAttraction INT,
   prix DECIMAL(6,2),
   taille DECIMAL(6,2),
   idAttraction INT,
   PRIMARY KEY(idEmplacementAttraction),
   UNIQUE(idAttraction),
   FOREIGN KEY(idAttraction) REFERENCES Attraction(idAttraction)
);

CREATE TABLE Propose(
   idAttraction INT,
   idService INT,
   PRIMARY KEY(idAttraction, idService),
   FOREIGN KEY(idAttraction) REFERENCES Attraction(idAttraction),
   FOREIGN KEY(idService) REFERENCES Services(idService)
);
