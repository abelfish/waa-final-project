package miu.edu.waadecemberfinalproject.serivce;

import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FeedbackService {

    public List<FeedbackDto> findAll();

    public void save(Integer facultyId,Integer studentId,FeedbackDto feedbackDto);

    public FeedbackDto update(Integer id, FeedbackDto feedbackDto);

    public FeedbackDto delete(Integer id);

    public FeedbackDto findById(Integer id);

}
