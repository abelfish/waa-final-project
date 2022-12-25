package miu.edu.waadecemberfinalproject.controller;

import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.JobAdvertisementDto;
import miu.edu.waadecemberfinalproject.serivce.JobAdvertisementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/jobAdverts")
@RequiredArgsConstructor
public class JobAdvertisementController {


    private final JobAdvertisementService jobAdvertisementService;

    @GetMapping()
    public List<JobAdvertisementDto> findAll() {
        return jobAdvertisementService.findAll();

    }

    @GetMapping("/{id}")
    public JobAdvertisementDto findById(@PathVariable Integer id) {
        return jobAdvertisementService.findById(id);
    }

    @GetMapping("/name/{name}")
    public List<JobAdvertisementDto> findByCompany(@PathVariable String name) {
        return jobAdvertisementService.findByCompanyName(name);
    }


    @GetMapping("/address/{address}")
    public List<JobAdvertisementDto> findByAddressState(@PathVariable String address) {
        return jobAdvertisementService.findByAddress(address);
    }


    @PostMapping("/add/{id}")
    public JobAdvertisementDto addJob(@PathVariable Integer id, @RequestBody JobAdvertisementDto jobAdvertisement) {
        return jobAdvertisementService.save(id,jobAdvertisement);
    }

    @PutMapping("/update/{id}")
    public JobAdvertisementDto update(@PathVariable Integer id, @RequestBody JobAdvertisementDto jobAdvertisement) {
        return jobAdvertisementService.update(id, jobAdvertisement);
    }

    @PutMapping("/apply/{id}")
    public void apply(@PathVariable Integer id) {
        jobAdvertisementService.apply(id);
    }

    @RolesAllowed({"student"})
    @GetMapping("/student/{id}")
    public JobAdvertisementDto findByStudentId(@PathVariable Integer id) {
        return jobAdvertisementService.findByStudentId(id);
    }


}



