insert into users (first_name, active, last_name, username, email, password)
values ('admin', true, 'admin', 'admin', 'admin@localhost', 123);
insert into users (first_name, active, last_name, username, email, password)
values ('faculty', true, 'faculty', 'faculty', 'faculty@localhost', 123);
insert into users (first_name, active, last_name, username, email, password)
values ('student', true, 'student', 'student', 'student@localhost', 123);
insert into users (first_name, active, last_name, username, email, password)
values ('john', true, 'doe', 'Michael', 'john@localhost', 123);
insert into users (first_name, active, last_name, username, email, password)
values ('jane', true, 'doe', 'Smith', 'jane@localhost', 123);
insert into users (first_name, active, last_name, username, email, password)
values ('joe', true, 'doe', 'Hennessy', 'joe@localhost', 123);
insert into users (first_name, active, last_name, username, email, password)
values ('jim', true, 'doe', 'james', 'jim@localhost', 123);

insert into address (city, state, street, zip, user_id)
values ('city', 'state', 'country', 12314, 1);
insert into address (city, state, street, zip, user_id)
values ('city', 'state', 'country', 54983, 2);
insert into address (city, state, street, zip, user_id)
values ('city', 'state', 'country', 31948, 3);
insert into address (city, state, street, zip, user_id)
values ('Las Vegas', 'NV', '123 Main st', 89814, 4);
insert into address (city, state, street, zip, user_id)
values ('Reno', 'NV', '576 S Main st', 89814, 5);
insert into address (city, state, street, zip, user_id)
values ('Las Vegas', 'NV', '123 Main st', 89814, 6);

insert into faculty(id)
values (2);
insert into student(id,gpa)
values (4,2.0);


insert into student(id, gpa,major,resume_path)
values (3, 3.5, 'Computer Science', 'resumePath');

insert into student(id, gpa,major,resume_path)
values (5, 2.45,'Math', 'resumePath');
insert into student(id, gpa,major)
values (6, 3.78,'Biology');

insert into feedback(comment, student_id, faculty_id)
values ('bad comment', 3, 2);
insert into feedback(comment, student_id, faculty_id)
values ('good comment', 3, 2);


insert into job_advertisement(description, company_name, job_title, address, salary, closing_date, student_id, tags)
values ('The Front Office Application Development department within HIMCO is responsible for development and maintenance of all business related applications and the related data environments supporting the business. ',
        'Amazon', 'Software Engineering', 'Seattle', 123000,
        '2023-01-01', 3, 'react java python');
insert into job_advertisement(description, company_name, job_title, address, salary, closing_date, student_id, tags)
values ('You will work on multiple projects at a time under general guidance of a Senior Developer. You must be able to work with several different tools and technologies. Your responsibilities will include',
        'Google', 'Java Developer', 'New York', 123000, '2023-01-01', 6, 'java node sql');
insert into job_advertisement(description, company_name, job_title, address, salary, closing_date, student_id, tags)
values ('Because of our commitment, ClarisHealth has grown into an industry leader. The driving force behind this success is our unwavering belief in clear and effective communication. We are searching for an experienced software heights. As an ideal candidate',
        'Microsoft', 'Front End Developer', 'Washington D.C', 123000,
        '2023-01-01', 3, 'angular next react');

insert into job_advertisement(description, company_name, job_title, address, salary, closing_date, student_id, tags)
values ('The Front Office Application Development department within HIMCO is responsible for development and maintenance of all business related applications and the related data environments supporting the business. ',
        'Amazon', 'UI/UX Designer', 'San Jose', 103000,
        '2023-01-01', 5, 'figma tailwind react javascript');
