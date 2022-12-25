package miu.edu.waadecemberfinalproject.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
//import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobAdvertisement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String companyName;

    private String description;
    private String salary;

    private LocalDate closingDate;

    private String jobTitle;

    private String tags;

    @ManyToOne(cascade = CascadeType.ALL)
    private Student student;


    private String address;


    private LocalDateTime lastApplyDate;



}
