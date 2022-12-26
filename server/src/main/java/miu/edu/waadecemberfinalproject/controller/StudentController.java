package miu.edu.waadecemberfinalproject.controller;


import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import miu.edu.waadecemberfinalproject.dto.StudentDto;
import miu.edu.waadecemberfinalproject.service.StudentService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import java.util.List;

@RestController
@RequestMapping("/students")
@CrossOrigin
@RequiredArgsConstructor

public class StudentController {

    private final StudentService studentService;

    @RolesAllowed({"faculty", "admin"})
    @GetMapping
    public List<StudentDto> findAll() {
        return studentService.findAll();
    }

    //    @RolesAllowed("admin")
    @GetMapping("/{id}")
    public StudentDto findById(@PathVariable Integer id) {

        try {
            return studentService.findById(id);
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

    }

    @PostMapping("/signup")
    public StudentDto save(@RequestBody StudentDto student) {
        return studentService.save(student);
    }

    @PutMapping("/{id}")
    public StudentDto update(@PathVariable Integer id, @RequestBody StudentDto student) {
        return studentService.save(student);
    }

    @RolesAllowed({"faculty", "admin"})
    @DeleteMapping("/{id}")
    public StudentDto delete(@PathVariable Integer id) {
        return studentService.delete(id);
    }


    @RolesAllowed({"faculty", "admin"})
    @GetMapping("{id}/feedbacks")
    public List<FeedbackDto> getFeedback(@PathVariable Integer id) {
        return studentService.getFeedbacks(id);
    }
}
