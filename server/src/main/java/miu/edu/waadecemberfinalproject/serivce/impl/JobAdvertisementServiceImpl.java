package miu.edu.waadecemberfinalproject.serivce.impl;

import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.JobAdvertisementDto;
import miu.edu.waadecemberfinalproject.entity.JobAdvertisement;
import miu.edu.waadecemberfinalproject.entity.Student;
import miu.edu.waadecemberfinalproject.repository.JobAdvertisementRepo;
import miu.edu.waadecemberfinalproject.repository.StudentRepository;
import miu.edu.waadecemberfinalproject.serivce.JobAdvertisementService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class JobAdvertisementServiceImpl implements JobAdvertisementService {

    private final JobAdvertisementRepo jobAdvertisementRepo;


    private final ModelMapper modelMapper;
    private final StudentRepository studentRepository;

    @Override
    public List<JobAdvertisementDto> findByCompanyName(String company) {
        var JobAdvertisements = jobAdvertisementRepo.findByCompanyName(company);
        var jobAdvertisementDtos = new ArrayList<JobAdvertisementDto>();
        for (JobAdvertisement jobAdvertisement : JobAdvertisements) {
            jobAdvertisementDtos.add(modelMapper.map(jobAdvertisement, JobAdvertisementDto.class));
        }
        return jobAdvertisementDtos;

    }

    @Override
    public List<JobAdvertisementDto> findByAddress(String state) {
        var JobAdvertisements = jobAdvertisementRepo.findByAddress(state);
        var jobAdvertisementDtos = new ArrayList<JobAdvertisementDto>();
        for (JobAdvertisement jobAdvertisement : JobAdvertisements) {
            jobAdvertisementDtos.add(modelMapper.map(jobAdvertisement, JobAdvertisementDto.class));
        }
        return jobAdvertisementDtos;
    }


    @Override
    public JobAdvertisementDto save(Integer id, JobAdvertisementDto jobAdvertisementdto) {
        var student = studentRepository.findById(id).get();
        var jobAdvertisement = modelMapper.map(jobAdvertisementdto, JobAdvertisement.class);
        jobAdvertisement.setStudent(student);
        studentRepository.save(student);
        jobAdvertisementRepo.save(jobAdvertisement);
        return modelMapper.map(jobAdvertisement, JobAdvertisementDto.class);
    }

    @Override
    public JobAdvertisementDto update(Integer id, JobAdvertisementDto jobAdvertisementdto) {
        var advertise = jobAdvertisementRepo.findById(id).get();
        advertise.setCompanyName(jobAdvertisementdto.getCompanyName());
        advertise.setAddress(jobAdvertisementdto.getAddress());
        advertise.setTags(jobAdvertisementdto.getTags());
        advertise.setDescription(jobAdvertisementdto.getDescription());
        advertise.setJobTitle(jobAdvertisementdto.getJobTitle());
        advertise.setSalary(jobAdvertisementdto.getSalary());
        advertise.setClosingDate(jobAdvertisementdto.getClosingDate());
        advertise.setLastApplyDate(jobAdvertisementdto.getLastApplyDate());
        advertise.setStudent(modelMapper.map(jobAdvertisementdto.getStudent(), Student.class));
        jobAdvertisementRepo.save(advertise);


        return jobAdvertisementdto;
    }

    @Override
    public JobAdvertisementDto delete(Integer id) {
        var advertise = jobAdvertisementRepo.findById(id).get();
        jobAdvertisementRepo.delete(advertise);

        return modelMapper.map(advertise, JobAdvertisementDto.class);
    }


    @Override
    public List<JobAdvertisementDto> findAll() {
        var JobAdvertisements = jobAdvertisementRepo.findAll();
        var JobAdvertisementDtos = new ArrayList<JobAdvertisementDto>();
        for (Object jobAdvertisement : JobAdvertisements) {
            JobAdvertisementDtos.add(modelMapper.map(jobAdvertisement, JobAdvertisementDto.class));
        }
        return JobAdvertisementDtos;
    }

    @Override
    public JobAdvertisementDto findById(Integer id) {
        return modelMapper.map(jobAdvertisementRepo.findById(id).get(), JobAdvertisementDto.class);
    }

    @Override
    public void apply(Integer id) {
        var advertise = jobAdvertisementRepo.findById(id).get();
        advertise.setLastApplyDate(LocalDateTime.now());
        jobAdvertisementRepo.save(advertise);
    }

    @Override
    public JobAdvertisementDto findByStudentId(Integer id) {
        return modelMapper.map(jobAdvertisementRepo.findByStudentId(id), JobAdvertisementDto.class);
    }

//


}
