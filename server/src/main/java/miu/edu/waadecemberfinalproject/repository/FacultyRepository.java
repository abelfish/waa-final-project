package miu.edu.waadecemberfinalproject.repository;

import miu.edu.waadecemberfinalproject.entity.Faculty;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacultyRepository extends CrudRepository<Faculty, Integer> {

    List<Faculty> findAllByFirstName(String name);


}
