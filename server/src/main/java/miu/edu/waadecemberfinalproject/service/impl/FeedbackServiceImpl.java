package miu.edu.waadecemberfinalproject.service.impl;

import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import miu.edu.waadecemberfinalproject.entity.Faculty;
import miu.edu.waadecemberfinalproject.entity.Feedback;
import miu.edu.waadecemberfinalproject.entity.Student;
import miu.edu.waadecemberfinalproject.repository.FacultyRepository;
import miu.edu.waadecemberfinalproject.repository.FeedbackRepository;
import miu.edu.waadecemberfinalproject.repository.StudentRepository;
import miu.edu.waadecemberfinalproject.service.FeedbackService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
@Transactional
public class FeedbackServiceImpl implements FeedbackService {

    private final FeedbackRepository feedbackRepository;
    private final ModelMapper modelMapper;
    private final StudentRepository studentRepository;
    private final FacultyRepository facultyRepository;

    @Override
    public List<FeedbackDto> findAll() {
        var feedbacks = feedbackRepository.findAll();
        var feedbackDtos = new ArrayList<FeedbackDto>();
        for (Feedback feedbackDto : feedbacks) {
            feedbackDtos.add(modelMapper.map(feedbackDto, FeedbackDto.class));
        }
        return feedbackDtos;
    }

    @Override
    public void save(Integer FacultyId, Integer StudentId, FeedbackDto feedbackDto) {
        var student = studentRepository.findById(StudentId).get();
        var faculty = facultyRepository.findById(FacultyId).get();
        var feedback = modelMapper.map(feedbackDto, Feedback.class);
        var newFeedback = feedbackRepository.save(feedback);
        newFeedback.setFaculty(faculty);
        newFeedback.setStudent(student);

        faculty.getFeedbacks().add(newFeedback);
        student.getFeedbacks().add(newFeedback);
        feedback.setStudent(student);
        feedback.setFaculty(faculty);
        facultyRepository.save(faculty);
        studentRepository.save(student);
        feedbackRepository.save(feedback);
//        ?return modelMapper.map(feedback, FeedbackDto.class);
    }


    @Override
    public FeedbackDto update(Integer id, FeedbackDto feedbackDto) {
        var feedback = feedbackRepository.findById(id).get();
        feedback.setComment(feedbackDto.getComment());
        feedback.setFaculty(modelMapper.map(feedbackDto.getFaculty(), Faculty.class));
        feedback.setStudent(modelMapper.map(feedbackDto.getStudent(), Student.class));
        return modelMapper.map(feedbackRepository.save(feedback), FeedbackDto.class);
    }

    @Override
    public FeedbackDto delete(Integer id) {
        var feedback = feedbackRepository.findById(id).get();
        feedbackRepository.delete(feedback);
        return modelMapper.map(feedback, FeedbackDto.class);
    }

    @Override
    public FeedbackDto findById(Integer id) {
        return modelMapper.map(feedbackRepository.findById(id).get(), FeedbackDto.class);
    }

}
