package miu.edu.waadecemberfinalproject.serivce;

import miu.edu.waadecemberfinalproject.dto.JobAdvertisementDto;
import miu.edu.waadecemberfinalproject.entity.JobAdvertisement;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public interface JobAdvertisementService {

    public List<JobAdvertisementDto> findByCompanyName(String company);
    public List<JobAdvertisementDto> findByAddress(String state);
    public JobAdvertisementDto save(Integer id,JobAdvertisementDto jobAdvertisementdto);


    JobAdvertisementDto update(Integer id, JobAdvertisementDto jobAdvertisementdto);

    JobAdvertisementDto delete(Integer id);

    public List<JobAdvertisementDto> findAll();

    public JobAdvertisementDto findById(Integer id);

    public void apply(Integer id);

    public JobAdvertisementDto findByStudentId(Integer id);


}