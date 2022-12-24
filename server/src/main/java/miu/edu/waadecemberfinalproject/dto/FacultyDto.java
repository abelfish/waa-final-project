package miu.edu.waadecemberfinalproject.dto;

import lombok.Data;
import miu.edu.waadecemberfinalproject.entity.Feedback;
import org.springframework.stereotype.Component;

import java.util.List;

@Data
@Component
public class FacultyDto extends UserDto {
    private List<Feedback> feedbacks;
}
