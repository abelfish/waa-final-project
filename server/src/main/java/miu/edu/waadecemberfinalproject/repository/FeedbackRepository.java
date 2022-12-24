package miu.edu.waadecemberfinalproject.repository;

import miu.edu.waadecemberfinalproject.entity.Feedback;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface FeedbackRepository extends CrudRepository<Feedback, Integer> {
    public List<Feedback> findAllByStudentId(Integer id);

    public List<Feedback> findAllByFacultyId(Integer id);

}
