package miu.edu.waadecemberfinalproject.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Student extends User {
    private String major;
    private Double gpa;
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    private List<Feedback> feedbacks;

    @OneToMany( cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<JobAdvertisement> jobAdvertisements;
}


