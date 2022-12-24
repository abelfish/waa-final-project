package miu.edu.waadecemberfinalproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Table(name = "users")
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Integer id;

    private String firstName;
    private String lastName;
    private String email;

    @JsonIgnore
    private String password;

    private String username;
    @JsonIgnore
    private boolean active;


    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
    private Address address;
}
