create database if NOT EXISTS acl;
use acl;

########################################################################################################

create table IF NOT EXISTS user_role(
    role_type varchar(20) PRIMARY KEY 	#role_type can be Admin,read,read/write
 );

INSERT INTO user_role values('Admin');
INSERT INTO user_role values('read');
INSERT INTO user_role values('read/write');

##########################################################################################################

CREATE TABLE IF NOT EXISTS user(
    user_id int not null AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(30),
    password varchar(10),
    user_type varchar(20),
    FOREIGN KEY(user_type) REFERENCES user_role(role_type)
);

insert into user(user_name,password,user_type) values('Aditya','adi12','Admin');
insert into user(user_name,password,user_type) values('Samarth','sam12','read');
insert into user(user_name,password,user_type) values('ram','ram12','read/write');
insert into user(user_name,password,user_type) values('nikita','niks','Admin');


############################################################################################################

CREATE TABLE IF NOT EXISTS groups(
    group_id int AUTO_INCREMENT NOT NULL,
    group_name varchar(20) NOT NULL,
    group_owner int NOT NULL,
    FOREIGN KEY(group_owner) REFERENCES user(user_id),
    PRIMARY KEY(group_id,group_owner)
);


insert into groups(group_name,group_owner) values('cs',1);
insert into groups(group_name,group_owner) values('cs',2);
insert into groups(group_name,group_owner) values('math',2);

##############################################################################################################


CREATE TABLE IF NOT EXISTS user_group(
    user_id int not null,
    group_id int not null,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
   	FOREIGN KEY (group_id) REFERENCES groups(group_id),
   	PRIMARY KEY(user_id,group_id)
);

INSERT INTO user_group values(1,1);
INSERT INTO user_group values(2,2);
INSERT INTO user_group values(2,3);

#################################################################################################



CREATE TABLE IF NOT EXISTS directoryTable(
    file_id int AUTO_INCREMENT,
    file_name varchar(20),
	parent int,    						#directory inside directory 
    owner int NOT NULL,
    FOREIGN KEY(owner) REFERENCES user(user_id),
    FOREIGN KEY(parent) REFERENCES directoryTable(file_id),
    PRIMARY KEY(file_id,owner)
);


insert into  directoryTable(file_name,parent,owner) values('ParentDire',NULL,1);
insert into  directoryTable(file_name,parent,owner) values('SubDir1',1,2);
insert into  directoryTable(file_name,parent,owner) values('SubDir2',1,3);
insert into  directoryTable(file_name,parent,owner) values('ParentDire',NULL,3);
insert into  directoryTable(file_name,parent,owner) values('SubDir1-1',2,3);


#########################################################################################################

CREATE TABLE IF NOT EXISTS user_file_permission(
	user_id int not null,
	file_id int not null,
	role_type char(20),
	perm_created_at datetime DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(user_id) REFERENCES user(user_id),
	FOREIGN KEY(file_id) REFERENCES directoryTable(file_id),
	FOREIGN KEY(role_type) REFERENCES user_role(role_type),
	PRIMARY KEY(user_id,file_id)
);


insert into user_file_permission(user_id,file_id,role_type) values(1,1,'Admin');
insert into user_file_permission(user_id,file_id,role_type) values(1,4,'read');
insert into user_file_permission(user_id,file_id,role_type) values(2,2,'read');
insert into user_file_permission(user_id,file_id,role_type) values(3,3,'read/write');
insert into user_file_permission(user_id,file_id,role_type) values(3,4,'Admin');

#####################################################################################################

CREATE TABLE IF NOT EXISTS group_file_permission(
	group_id int not null,
	file_id int not null,
	role_type char(20),
	perm_created_at datetime DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(group_id) REFERENCES groups(group_id),
	FOREIGN KEY(file_id) REFERENCES directoryTable(file_id),
	FOREIGN KEY(role_type) REFERENCES user_role(role_type),
	PRIMARY KEY(group_id,file_id)
);

insert into group_file_permission(group_id,file_id,role_type) values(1,1,'Admin');
insert into group_file_permission(group_id,file_id,role_type) values(1,2,'read');
insert into group_file_permission(group_id,file_id,role_type) values(2,1,'read');
insert into group_file_permission(group_id,file_id,role_type) values(3,2,'read');

###############################################################################################
