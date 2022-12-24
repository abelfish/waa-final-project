package miu.edu.waadecemberfinalproject.controller;


import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.FacultyDto;
import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import miu.edu.waadecemberfinalproject.serivce.FacultyService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/faculties")
@RequiredArgsConstructor
public class FacultyController {

    final FacultyService facultyService;


    @GetMapping
    public List<FacultyDto> findAll() {
        return facultyService.findAll();
    }

    @GetMapping("/{id}")
    public FacultyDto findById(@PathVariable Integer id) {
        return facultyService.findById(id);
    }

    @PostMapping
    public FacultyDto save(@RequestBody FacultyDto faculty) {
        return facultyService.save(faculty);
    }

    @PutMapping("/{id}")
    public FacultyDto update(@PathVariable Integer id, @RequestBody FacultyDto faculty) {
        return facultyService.update(faculty);
    }

    @DeleteMapping("/{id}")
    public FacultyDto delete(@PathVariable Integer id) {
        return facultyService.delete(id);
    }


    @GetMapping("{id}/feedbacks")
    public List<FeedbackDto> getFeedback(@PathVariable Integer id) {
        return facultyService.getFeedbacks(id);
    }


}
