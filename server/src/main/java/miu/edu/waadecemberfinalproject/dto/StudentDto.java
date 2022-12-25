package miu.edu.waadecemberfinalproject.dto;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class StudentDto extends UserDto {
    private Double gpa;

    private String major;

    private List<FeedbackDto> feedbacks;
    private List<JobAdvertisementDto> jobAdvertisements;


}
