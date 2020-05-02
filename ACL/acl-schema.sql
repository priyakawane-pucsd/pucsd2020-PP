create database if not exists acl;
use acl;
 
#Hence user type is new user(root user) or administrater
CREATE TABLE IF NOT EXISTS userType(
    type_id int,
    user_type varchar(15),
    PRIMARY KEY(user_type)
);

insert into userType values(101,'User');
insert into userType values(102,'Admin');


#here we create a user table for any user type to store information
CREATE TABLE IF NOT EXISTS user(
    user_id int,
    user_name varchar(30),
    password varchar(10),
    user_type varchar(15),
    PRIMARY KEY(user_id),
    FOREIGN KEY (user_type) REFERENCES userType(user_type)
);

insert into user values(1,'piu','piu123','Admin');
insert into user values(2,'sneha','sneha123','User');


#we create a group 
CREATE TABLE IF NOT EXISTS groups(
    group_id int PRIMARY KEY,
    group_name varchar(20),
    password varchar(10)
);

insert into groups values(1001,'cs','cs123');
insert into groups values(1002,'mth','mth123');


#user_group to store information of users related to that group 
CREATE TABLE IF NOT EXISTS user_group(
    user_id int,
    group_id int,
    FOREIGN KEY (user_id) REFERENCES user(user_id),
   	FOREIGN KEY (group_id) REFERENCES groups(group_id)
);

INSERT INTO user_group values(1,1001);
INSERT INTO user_group values(2,1002);


#to use file we give permission to user ie. read or write
CREATE TABLE IF NOT EXISTS permission(
 	permission_id int PRIMARY KEY,
	permission_value varchar(20)
);

insert into permission values(1,'read');
insert into permission values(2,'write');



#Hence directoryTable will create a files/folder. Which will give to user and group for use of permissions
CREATE TABLE IF NOT EXISTS directoryTable(
    file_id int PRIMARY KEY,
    permission_read int NOT NULL,
    permission_write int NOT NULL,
    FOREIGN KEY(permission_read) REFERENCES permission(permission_id),
    FOREIGN KEY(permission_write) REFERENCES permission(permission_id)
);


#user_file_permission give permission to user
CREATE TABLE IF NOT EXISTS user_file_permission(
	user_id int not null,
	file_id int not null,
	permission_read int not null,
	permission_write int not null,
	FOREIGN KEY(user_id) REFERENCES user(user_id),
	FOREIGN KEY(file_id) REFERENCES directoryTable(file_id),
	FOREIGN KEY(permission_read) REFERENCES directoryTable(permission_read),
	FOREIGN KEY(permission_write) REFERENCES directoryTable(permission_write)
);


#group_file_permission will give permission to group 
CREATE TABLE IF NOT EXISTS group_file_permission(
	group_id int not null,
	file_id int not null,
	permission_read int not null,
	permission_write int not null,
	FOREIGN KEY(group_id) REFERENCES groups(group_id),
	FOREIGN KEY(file_id) REFERENCES directoryTable(file_id),
	FOREIGN KEY(permission_read) REFERENCES directoryTable(permission_read),
	FOREIGN KEY(permission_write) REFERENCES directoryTable(permission_write)
);

