package miu.edu.waadecemberfinalproject.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Component
@Data
public class JobAdvertisementDto {

    private Integer id;
    private String companyName;
    private String description;
    private String salary;
    private LocalDate closingDate;
    private String jobTitle;
    private String tags;

    private String address;
    private StudentDto student;

    private LocalDateTime lastApplyDate;

}
