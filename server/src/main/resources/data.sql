insert into users (id, first_name, active, last_name, username, email, password)
values (1, 'admin', true, 'admin', 'admin', 'admin@localhost', 123);
insert into users (id, first_name, active, last_name, username, email, password)
values (2, 'faculty', true, 'faculty', 'faculty', 'faculty@localhost', 123);
insert into users (id, first_name, active, last_name, username, email, password)
values (3, 'student', true, 'student', 'student', 'student@localhost', 123);

insert into address (id, city, state, street, zip, user_id)
values (1, 'city', 'state', 'country', 123, 1);
insert into address (id, city, state, street, zip, user_id)
values (2, 'city', 'state', 'country', 123, 2);
insert into address (id, city, state, street, zip, user_id)
values (3, 'city', 'state', 'country', 123, 3);

insert into faculty(id)
values (2);


insert into student(id, gpa)
values (3, 3.5);

insert into feedback(id, comment, student_id, faculty_id)
values (1, 'bad comment', 3, 2);
insert into feedback(id, comment, student_id, faculty_id)
values (2, 'good comment', 3, 2);


insert into job_advertisement(id, description, company_name, job_title, address, salary, closing_date, student_id, tags)
values (1, 'description', 'Amazon', 'Software Engineering', 'Seattle', 123000,
        '2023-01-01', 3, 'react java python');
insert into job_advertisement(id, description, company_name, job_title, address, salary, closing_date, student_id, tags)
values (2, 'description', 'Google', 'Java Developer', 'New York', 123000, '2023-01-01', 3, 'java node sql');
insert into job_advertisement(id, description, company_name, job_title, address, salary, closing_date, student_id, tags)
values (3, 'description', 'Microsoft', 'Front End Developer', 'Washington D.C', 123000,
        '2023-01-01', 3, 'angular next react');
