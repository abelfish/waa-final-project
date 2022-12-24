package miu.edu.waadecemberfinalproject.repository;

import miu.edu.waadecemberfinalproject.entity.JobAdvertisement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobAdvertisementRepo extends CrudRepository<JobAdvertisement, Integer> {
    public List<JobAdvertisement> findByCompanyName(String company);

    public List<JobAdvertisement> findByAddress(String city);

    public List<JobAdvertisement> findByStudentId(Integer id);


}
