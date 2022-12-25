package miu.edu.waadecemberfinalproject.serivce.impl;


import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import miu.edu.waadecemberfinalproject.dto.StudentDto;
import miu.edu.waadecemberfinalproject.dto.FacultyDto;
import miu.edu.waadecemberfinalproject.entity.Feedback;
import miu.edu.waadecemberfinalproject.entity.Student;
import miu.edu.waadecemberfinalproject.repository.FeedbackRepository;
import miu.edu.waadecemberfinalproject.repository.StudentRepository;
import miu.edu.waadecemberfinalproject.serivce.StudentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class StudentServiceImpl implements StudentService {


    private final ModelMapper modelMapper;

    private final StudentRepository studentRepository;

    private final FeedbackRepository feedbackRepository;

    @Override
    public StudentDto save(StudentDto studentDto) {
        var student = modelMapper.map(studentDto, Student.class);
        student.setActive(true);
        studentRepository.save(student);
        return modelMapper.map(student, StudentDto.class);
    }

    @Override
    public StudentDto findById(Integer id) {
        return modelMapper.map(studentRepository.findById(id).get(), StudentDto.class);
    }

    @Override
    public List<StudentDto> findByName(String name) {
        var students = studentRepository.findAllByFirstName(name);
        List<StudentDto> studentDtos = new ArrayList<>();
        for (Student student : students) {
            studentDtos.add(modelMapper.map(student, StudentDto.class));
        }
        return studentDtos;
    }

    @Override
    public List<StudentDto> findByCity(String city) {
        var students = studentRepository.findAllByAddressCity(city);
        List<StudentDto> studentDtos = new ArrayList<>();
        for (Student student : students) {
            studentDtos.add(modelMapper.map(student, StudentDto.class));
        }
        return studentDtos;
    }

    @Override
    public List<StudentDto> findByState(String state) {
        var students = studentRepository.findAllByAddressState(state);
        List<StudentDto> studentDtos = new ArrayList<>();
        for (Student student : students) {
            studentDtos.add(modelMapper.map(student, StudentDto.class));
        }
        return studentDtos;
    }

    @Override
    public List<StudentDto> findByMajor(String major) {
        var students = studentRepository.findAllByMajor(major);
        List<StudentDto> studentDtos = new ArrayList<>();
        for (Student student : students) {
            studentDtos.add(modelMapper.map(student, StudentDto.class));
        }
        return studentDtos;
    }

    @Override
    public StudentDto delete(Integer id) {
        var student = studentRepository.findById(id).orElse(null);
        if (student != null) {
            student.setActive(false);
            studentRepository.save(student);
            return modelMapper.map(student, StudentDto.class);
        }
        return null;

    }

    @Override
    public List<FeedbackDto> getFeedbacks(Integer id) {
        var feedbacks = feedbackRepository.findAllByStudentId(id);
        List<FeedbackDto> feedbackDtos = new ArrayList<>();
        for (Feedback feedback : feedbacks) {
            var student = modelMapper.map(feedback.getStudent(), StudentDto.class);
            var faculty = modelMapper.map(feedback.getFaculty(), FacultyDto.class);
            var feedbackDto = new FeedbackDto();
            feedbackDto.setStudent(student);
            feedbackDto.setFaculty(faculty);
            feedbackDto.setComment(feedback.getComment());
            feedbackDto.setId(feedback.getId());
            feedbackDtos.add(feedbackDto);
        }
        return feedbackDtos;

    }

    @Override
    public List<StudentDto> findAll() {
        var students = studentRepository.findAll();
        var studentDtos = new ArrayList<StudentDto>();
        for (Student student : students) {
            studentDtos.add(modelMapper.map(student, StudentDto.class));
        }
        return studentDtos;
    }


}
