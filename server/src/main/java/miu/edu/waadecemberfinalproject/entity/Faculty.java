package miu.edu.waadecemberfinalproject.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Faculty extends User {

    @OneToMany(mappedBy = "student")
    private List<Feedback> feedbacks;


}
