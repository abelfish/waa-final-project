package miu.edu.waadecemberfinalproject.serivce;

import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import miu.edu.waadecemberfinalproject.dto.StudentDto;
import miu.edu.waadecemberfinalproject.entity.Feedback;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public interface StudentService {
    public List<StudentDto> findAll();

    public StudentDto save(StudentDto student);

    public StudentDto findById(Integer id);

    public List<StudentDto> findByName(String name);

    public List<StudentDto> findByCity(String city);

    public List<StudentDto> findByState(String state);

    public List<StudentDto> findByMajor(String major);

    public StudentDto delete(Integer id);

    List<FeedbackDto> getFeedbacks(Integer id);
}
