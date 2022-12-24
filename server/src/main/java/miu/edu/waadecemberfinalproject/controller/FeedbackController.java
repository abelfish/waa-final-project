package miu.edu.waadecemberfinalproject.controller;


import lombok.RequiredArgsConstructor;
import miu.edu.waadecemberfinalproject.dto.FeedbackDto;
import miu.edu.waadecemberfinalproject.serivce.FeedbackService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedbacks")
@CrossOrigin
@RequiredArgsConstructor
public class FeedbackController {

    private final FeedbackService feedbackService;

    @GetMapping
    public List<FeedbackDto> getFeedback() {
        return feedbackService.findAll();
    }

    @GetMapping("/{id}")
    public FeedbackDto getFeedback(@PathVariable Integer id) {
        return feedbackService.findById(id);
    }

    @PostMapping("/add/{facultyId}/{studentId}")
    public ResponseEntity<String> save(@PathVariable Integer facultyId, @PathVariable Integer studentId, @RequestBody FeedbackDto feedback) {
        feedbackService.save(facultyId, studentId, feedback);
        return ResponseEntity.ok().body("Feedback added successfully");
    }

    @PutMapping("/{id}")
    public FeedbackDto update(@PathVariable Integer id, @RequestBody FeedbackDto feedback) {
        return feedbackService.update(id, feedback);
    }

}
