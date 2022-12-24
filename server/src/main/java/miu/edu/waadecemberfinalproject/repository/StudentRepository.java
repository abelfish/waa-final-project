package miu.edu.waadecemberfinalproject.repository;


import miu.edu.waadecemberfinalproject.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {

    public List<Student> findAllByAddressState(String state);


    public List<Student> findAllByFirstName(String name);

    public List<Student> findAllByAddressCity(String city);


    public List<Student> findAllByMajor(String major);


}
