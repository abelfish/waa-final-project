package miu.edu.waadecemberfinalproject.serivce.impl;

import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.FacultyDto;
import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import miu.edu.waadecemberfinalproject.dto.StudentDto;
import miu.edu.waadecemberfinalproject.entity.Faculty;
import miu.edu.waadecemberfinalproject.entity.Feedback;
import miu.edu.waadecemberfinalproject.repository.FacultyRepository;
import miu.edu.waadecemberfinalproject.repository.FeedbackRepository;
import miu.edu.waadecemberfinalproject.serivce.FacultyService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import miu.edu.waadecemberfinalproject.entity.Address;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class FacultyServiceImpl implements FacultyService {

    private final ModelMapper modelMapper;
    private final FacultyRepository facultyRepo;

    private final FeedbackRepository feedbackRepository;


    @Override
    public FacultyDto findById(Integer id) {
        Optional<Faculty> res = facultyRepo.findById(id);
        FacultyDto fact = null;
        if (res.isPresent()) {
            fact = modelMapper.map(res.get(), FacultyDto.class);
        } else {
            throw new RuntimeException("Id Not Found");
        }
        return fact;
    }

    @Override
    public List<FacultyDto> findAll() {
        var res = facultyRepo.findAll();
        var faculties = new ArrayList<FacultyDto>();
        for (Faculty f : res) {
            faculties.add(modelMapper.map(f, FacultyDto.class));
        }
        return faculties;
    }

    @Override
    public FacultyDto save(FacultyDto faculty) {
        var fac = modelMapper.map(faculty, Faculty.class);
        fac = facultyRepo.save(fac);
        return modelMapper.map(fac, FacultyDto.class);
    }


    @Override
    public List<FacultyDto> findByName(String name) {
        var res = facultyRepo.findAllByFirstName(name);
        var faculties = new ArrayList<FacultyDto>();
        for (Faculty f : res) {
            faculties.add(modelMapper.map(f, FacultyDto.class));
        }
        return faculties;


    }

    @Override
    public FacultyDto delete(Integer id) {
        var fac = facultyRepo.findById(id);
        if (fac.isPresent()) {
            var faculty = fac.get();
            faculty.setActive(false);
            facultyRepo.save(faculty);
            return modelMapper.map(faculty, FacultyDto.class);

        } else {
            throw new RuntimeException("Id Not Found");
        }
    }

    @Override
    public FacultyDto update(FacultyDto facultyDto) {
        var fac = facultyRepo.findById(facultyDto.getId());
        if (fac.isPresent()) {
            var faculty = fac.get();
            faculty.setFirstName(facultyDto.getFirstName());
            faculty.setLastName(facultyDto.getLastName());
            faculty.setAddress(modelMapper.map(facultyDto.getAddress(), Address.class));
            faculty.setActive(facultyDto.isActive());
            faculty.setEmail(facultyDto.getEmail());
            faculty.setUsername(facultyDto.getUsername());
            faculty.setPassword(facultyDto.getPassword());
            facultyRepo.save(faculty);
            return modelMapper.map(faculty, FacultyDto.class);

        } else {
            throw new RuntimeException("Id Not Found");
        }
    }

    @Override
    public List<FeedbackDto> getFeedbacks(Integer id) {
        var feedbacks = feedbackRepository.findAllByFacultyId(id);
        var feedbackDtos = new ArrayList<FeedbackDto>();
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

}
