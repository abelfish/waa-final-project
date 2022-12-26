package miu.edu.waadecemberfinalproject.service;

import miu.edu.waadecemberfinalproject.dto.FacultyDto;
import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
@Service
@Transactional
public interface FacultyService {
    public FacultyDto save(FacultyDto faculty);

    public FacultyDto findById(Integer id);


    public List<FacultyDto> findAll();

    public List<FacultyDto> findByName(String name);

    public FacultyDto delete(Integer id);

    public FacultyDto update(FacultyDto facultyDto);

    List<FeedbackDto> getFeedbacks(Integer id);
}
