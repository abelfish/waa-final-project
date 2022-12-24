package miu.edu.waadecemberfinalproject.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import miu.edu.waadecemberfinalproject.entity.Faculty;
import miu.edu.waadecemberfinalproject.entity.Student;
import org.springframework.stereotype.Component;

import javax.persistence.*;

@Component
@Getter
@Setter

public class FeedbackDto {
    private Integer id;

    private String comment;
    @JsonIgnore
    private StudentDto student;

//    @JsonIgnore
    private FacultyDto faculty;
}
